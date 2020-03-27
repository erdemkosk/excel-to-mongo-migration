
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const readXlsxFile = require('read-excel-file/node');

const Vehicle = require('./vehicle');
const config = require("./config");

const vehicles = [];
let warehousesDbConnection, vehicleDbConnection;

console.log('Excel path =>' + config.excelFilePath);

const connectToDbs =  async () => {
  try {
   
    warehousesDbConnection = await MongoClient.connect(config.warehouseDevShard.connectionString);
    
    console.log("Db's Connected!")

    } catch (error) {
        console.log(error)
    }
}

const getWarehouseIdFromWarehouseName = async ({warehouseName}) => {
  console.log(warehouseName);
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
   

    vehicles.push(new Vehicle(vehicle[0], warehouseId, vehicle[2], vehicle[3], Date.parse(vehicle[4]), Date.parse(vehicle[5]), vehicle[6], vehicle[7], vehicle[8],
      vehicle[9], vehicle[10], vehicle[11], vehicle[12], vehicle[13], vehicle[14], vehicle[15], Date.parse(vehicle[16]), vehicle[17], vehicle[18],
      vehicle[19], vehicle[20], vehicle[21], vehicle[22]));
  }
}
const run = async () => {
  await connectToDbs();
  await readValuesFromExcelFile();

  vehicles.forEach(element => {
    console.table(element);
  });
  
}

run();
