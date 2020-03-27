
    const excelFilePath = './public/vehicle.xlsx';
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
        connectionString : 'mongodb+srv://test:Testtest00@cluster0-oxs3x.mongodb.net/vehicle?retryWrites=true&w=majority',
        databaseName: 'getir-dev',
        sourceCollection: 'vehicle',
    };
    const stopCount = 10;
    

  module.exports = {
    excelFilePath,
    marketOrderDevShard,
    warehouseDevShard,
    testDb,
    stopCount
};