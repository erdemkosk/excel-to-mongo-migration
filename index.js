
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const readXlsxFile = require('read-excel-file/node');

const VehicleModel = require('./models/vehicle');
const Vehicle = require('./vehicle');
const config = require("./config");

const excelVehicles = [];
let warehousesDbConnection;

console.log('Excel path =>' + config.excelFilePath);

const connectToDbs =  async () => {
  try {
    warehousesDbConnection = await MongoClient.connect(config.warehouseDevShard.connectionString);
    console.log("Mongo Client connected! ")

    mongoose.connect(config.testDb.connectionString);
    console.log("Mongoose connected! ")

    } catch (error) {
        console.log(error)
    }
}

const getWarehouseIdFromWarehouseName = async ({warehouseName}) => {
  var dbo = warehousesDbConnection.db("warehouse");

  try {
   const result =  await dbo.collection("warehouses").findOne({name: warehouseName});
   return result._id.toString();
  } 
  catch (error) {
    throw error;
  }
  
}


const readValuesFromExcelFile = async () => {
  let rows = await readXlsxFile('./public/vehicle.xlsx');

  //Depo yazısı alınmasın diye
  rows = rows.slice(1, config.stopCount + 1 || rows.length);

  for(let vehicle of rows){
    const warehouseName = vehicle[1];
    const warehouseId = await getWarehouseIdFromWarehouseName({warehouseName});
   

    excelVehicles.push(new Vehicle(vehicle[0], warehouseId, vehicle[2], vehicle[3], Date.parse(vehicle[4]), Date.parse(vehicle[5]), vehicle[6], vehicle[7], vehicle[8],
      vehicle[9], vehicle[10], vehicle[11], vehicle[12], vehicle[13], vehicle[14], vehicle[15], Date.parse(vehicle[16]), vehicle[17], vehicle[18],
      vehicle[19], vehicle[20], vehicle[21], vehicle[22]));
  }
}

const addVehicle = async (plate, constraintId, warehouse, city, licence, tags,) => {
  
  return (
    VehicleModel.add({status: config.VEHICLE_STATUSES.AVAILABLE,
      plate,
      constraint: constraintId,
      warehouse,
      city,
      licence,
      tags
    })
  )}

const generateRealDataWithUsingExcelValues = async () => {
 
  let constraintId;

  for(let vehicle of excelVehicles){
    if (vehicle.marka.includes("Honda") || vehicle.marka.includes("Hero")) {
      //Motorsiklet
      constraintId = config.motorConstraintId;
    
    }
    else if (vehicle.marka.includes("Mitu")) {
      //Mitu
      constraintId = config.mituConstraintId;
    }
    else{
      //Araba
      constraintId = config.carConstraintId;
    }

    await addVehicle(vehicle.plaka, constraintId, vehicle.depo, "5af452b47c7e950bb7bf87ff" ,
  {
    licenceOwner: vehicle.ruhsatSahibi,
    licenceImage: vehicle.gorselLink,
    licenceSerial: vehicle.belgeSeri,
    licenceNumber: vehicle.belgeNo,
    firstRegistrationDate: vehicle.ilktescil,
    registrationDate: vehicle.tescil,
    type: vehicle.tipi,
    tradeName: vehicle.ticariAdı,
    brand: vehicle.marka,
    modelYear: vehicle.modelYılı,
    class: vehicle.aracSınıfı,
    kind: vehicle.cinsi,
    color: vehicle.rengi,
    engineNumber: vehicle.motorNo,
    identityNumber: vehicle.sasiNo,
    inspectionValidityDate: vehicle.muayne,
  } 
  );
  console.log(vehicle.plaka + " Eklendi..");
  };
}

const run = async () => {
  await connectToDbs();
  await readValuesFromExcelFile();
  generateRealDataWithUsingExcelValues();

  excelVehicles.forEach(element => {
    //console.table(element);
  });
  
}

run();
