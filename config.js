    const marketOrderDevShard = {
        connectionString : 'mongodb+srv://getirDev:l1QFxHM3IshLfFdn@getir-dev-rzfsd.mongodb.net/getir-dev?retryWrites=true&w=majority',
        databaseName: 'getir-dev',
        sourceCollection: 'polygons',
    };

    const warehouseDevShard = {
        connectionString : 'mongodb+srv://warehouseService:ARuGuFHmsuIj942Q@warehouse-dev-rzfsd.mongodb.net/admin?replicaSet=warehouse-dev-shard-0&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1',
        databaseName: 'warehouses',
        sourceCollection: 'polygons',
    };

    const testDb = {
        connectionString : 'mongodb+srv://test:Testtest00@cluster0-oqyf8.mongodb.net/test?retryWrites=true&w=majority',
        databaseName: 'getir-dev',
        sourceCollection: 'vehicle',
    };

    const excelFilePath = './public/vehicle.xlsx';

    const motorConstraintId = "5daa2d6551cb0b0c4c22fcee";
    const mituConstraintId = "5daa2d2251cb0b0c4c22fced";
    const carConstraintId = "5daa2daa51cb0b0c4c22fcef";
    
    const stopCount = 15;
    const VEHICLE_STATUSES  = {
        AVAILABLE: 1000,
        IN_USE: 2000,
        IN_TRANSFER: 2100,
        IN_SERVICE: 2200,
        INACTIVE: 3000,
      };
    

  module.exports = {
    excelFilePath,
    marketOrderDevShard,
    warehouseDevShard,
    testDb,
    stopCount,
    VEHICLE_STATUSES,
    motorConstraintId,
    mituConstraintId,
    carConstraintId,
};