
const mongoose = require('mongoose');
const readXlsxFile = require('read-excel-file/node');

const VehicleModel = require('./models/vehicle');
const Vehicle = require('./vehicle');
const config = require("./config");

const excelVehicles = [];
const addedPlates = [];
const failedPlates = [];

console.log('\x1b[36m%s\x1b[0m', 'Excel path =>' + config.EXCELFILEPATH);

const connectToDbs =  async () => {
  try {

    mongoose.connect(config.DBS.testDb);
    console.log('\x1b[36m%s\x1b[0m', 'Mongoose connected!');

    } catch (error) {
        console.log(error)
    }
}

const getWarehouseIdFromWarehouseName = async ({warehouseName}) => {
 
  const result = config.MERGED_WAREHOUSE_AND_STORES.find(o => o.name === warehouseName); 
  return result._id.toString();
}

const getFranchiseIdFromFranchiseName = async ({franchiseName}) => {

  console.log(franchiseName);
 
  if(franchiseName){
    const result = config.MERGED_FRANCHISE.find(o => o.name === franchiseName); 
    return result._id.toString();
  }
}


const readValuesFromExcelFile = async () => {
  let rows = await readXlsxFile(config.EXCELFILEPATH , { sheet: 'Filo Araçları' });

  //Depo yazısı alınmasın diye
  rows = rows.slice(1, config.stopCount + 1 || rows.length);

  for(let vehicle of rows){

    if(!vehicle[1] ){
      failedPlates.push(vehicle[0]);
      continue;
    }

    const warehouseName = vehicle[1];
    const warehouseId = await getWarehouseIdFromWarehouseName({warehouseName});

    const franchiseName = vehicle[2];
    let franchiseId;
    if(franchiseName){
      franchiseId = await getFranchiseIdFromFranchiseName({franchiseName});
    }

    excelVehicles.push(new Vehicle(vehicle[0], warehouseId, franchiseName ? franchiseId : undefined, vehicle[3], Date.parse(vehicle[4]), Date.parse(vehicle[5]), vehicle[6], vehicle[7], vehicle[8],
      vehicle[9], vehicle[10], vehicle[11], vehicle[12], vehicle[13], vehicle[14], vehicle[15], Date.parse(vehicle[16]), vehicle[17], vehicle[18],
      vehicle[19], vehicle[20], vehicle[21], vehicle[22]));
  }
}

const addVehicle = async (plate, constraintId, franchise, warehouse, city, licence, tags,) => {

  try {
    VehicleModel.add({status: config.VEHICLE_STATUSES.AVAILABLE,
      plate,
      constraint: constraintId,
      franchise : franchise ? franchise : undefined,
      warehouse,
      city,
      licence,
      tags
    })
  } catch (error) {
    
  }

    
  }

const generateRealDataWithUsingExcelValues = async () => {
 
  let constraintId;
  let cityId;

  for(let vehicle of excelVehicles){
    let tags= [];

    if(!vehicle || !vehicle.plaka || !vehicle.depo || !vehicle.marka || !vehicle.sehir ){
      failedPlates.push(vehicle.plaka);
      continue;
    }

    if (vehicle.marka.includes("Honda") || vehicle.marka.includes("Hero")) {
      //Motorsiklet
      constraintId = config.CONSTRAINT_IDS.motorConstraintId;
    
    }
    else if (vehicle.marka.includes("Mitu")) {
      //Mitu
      constraintId = config.CONSTRAINT_IDS.mituConstraintId;
    }
    else{
      //Araba
      constraintId = config.CONSTRAINT_IDS.carConstraintId;
    }

    !vehicle.dincer40.includes('-') ? tags.push(vehicle.dincer40) : undefined;
    !vehicle.dincer100.includes('-') ? tags.push(vehicle.dincer100) : undefined;
    !vehicle.dincerMoto.includes('-') ? tags.push(vehicle.dincerMoto) : undefined;

    cityId = config.CITIES[vehicle.sehir];

    await addVehicle(vehicle.plaka, constraintId, vehicle.bayi ,vehicle.depo, cityId ,{
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
    inspectionValidityDate: isNaN(vehicle.muayne) ? undefined : vehicle.muayne ,
  },
  tags
  );
  //console.log(vehicle.plaka + " Eklendi..");
  addedPlates.push(vehicle.plaka);
  };
}

const generateReportForMigration =  () => {
 
  console.log('\x1b[36m%s\x1b[0m', '-------------------------------------------------');
  console.log('Total readed excel count : ' + (excelVehicles.length + 1));
  console.log('Total successful writed vehicle count : ' + addedPlates.length);
  console.log('Total unsuccessful writed vehicle count : ' + failedPlates.length);
  console.log('\x1b[36m%s\x1b[0m', '-------------------------------------------------');
  console.log('Unsuccesful plates : ' + (excelVehicles.length + 1));
  failedPlates.forEach(plate => {
    console.log(' plate : ' + plate);
  });
  console.log('\x1b[36m%s\x1b[0m', '-------------------------------------------------');
}

const run = async () => {
  await connectToDbs();
  await readValuesFromExcelFile();
  await generateRealDataWithUsingExcelValues();
  generateReportForMigration();
}

run();
