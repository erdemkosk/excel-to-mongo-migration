const mongoose = require('mongoose');
const config = require('../config');

const Constraints = require('./common/constraints');
const Licence = require('./common/licence');

const { Schema } = mongoose;
const { ObjectId } = mongoose;

const Vehicle = new Schema({
  status: { type: Number, enum: Object.values(config.VEHICLE_STATUSES) },
  plate: { type: String , unique:true},
  constraint: { type: ObjectId, ref: 'VehicleConstraint' },
  dominantConstraints: { type: Constraints },
  warehouse: { type: ObjectId, ref: 'Warehouse' },
  courier: { type: ObjectId, ref: 'Courier' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  franchise: { type: ObjectId, ref: 'Franchise' },
  city: { type: ObjectId, ref: 'City' },
  licence: { type: Licence },
  tags: [{ type: String }],
});

var VehicleModel = mongoose.model('Vehicle', Vehicle);

function add(data) {
  var vehicle = new VehicleModel(data);
  vehicle.save(function (err) {
      if (err) throw err;
      // saved!
  })
}
module.exports = {
  add,
}
