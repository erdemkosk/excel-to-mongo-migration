const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema;

const Volumes = new Schema({
  _id: false,
  weight: { type: Number },
  volume: { type: Number },
  longestEdge: { type: Number },
  dimension: {
    width: { type: Number },
    height: { type: Number },
    depth: { type: Number },
  },
});

const Constraints = new Schema({
  _id: false,
  // selection related constraints
  selectionPriority: { type: Number },
  // route related constraints
  polygonType: { type: Number },
  distance: { type: Number },
  duration: { type: Number },
  // capacity related constraints
  volumes: { type: [Volumes] },
  weight: { type: Number },
  volume: { type: Number },
  longestEdge: { type: Number },
  // product related constraints
  prohibitedProducts: { type: [ObjectId], ref: 'ParentProduct' },
  // batch related constraints
  batch: { type: Boolean },
  batchTaskLimit: { type: Number },
  batchCostPerDistance: { type: Number },
  batchCostPerDuration: { type: Number },
  // queue related constraints
  queue: { type: Boolean },
  queueMultiplier: { type: Number },
});

module.exports = Constraints;
