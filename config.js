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

    const constraintIds = {
        motorConstraintId : "5daa2d6551cb0b0c4c22fcee",
        mituConstraintId : "5daa2d2251cb0b0c4c22fced",
        carConstraintId : "5daa2daa51cb0b0c4c22fcef",
    }

    const cities = {
        İstanbul : "55999ad00000010001000000",
        İzmir : "5dcf11d00000010002000000",
        Ankara : "5dd84c500000010003000000",
        Bursa : "5de186d00000010004000000",
        Kocaeli : "5df3fbd00000010005000000",
    }
    
    const stopCount = 20;
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
    constraintIds,
    cities

};