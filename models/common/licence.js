const mongoose = require('mongoose');

const { Schema } = mongoose;

const Licence = new Schema({
  _id: false,
  licenceOwner: { type: String },
  licenceImage: { type: String },
  licenceSerial: { type: String },
  licenceNumber: { type: Number },
  firstRegistrationDate: { type: Date },
  registrationDate: { type: Date },
  type: { type: String },
  tradeName: { type: String },
  brand: { type: String },
  modelYear: { type: Number },
  class: { type: String },
  kind: { type: String },
  color: { type: String },
  engineNumber: { type: String },
  identityNumber: { type: String },
  inspectionValidityDate: { type: Date },
});

module.exports = Licence;
