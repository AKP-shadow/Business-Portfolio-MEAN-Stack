const {Schema, model} = require("../db/connection") // import Schema & model

// User Schema
const TodoSchema = new Schema({
    fullName: {
      type: {
        firstName: String,
        lastName: String,
      },
      required: true,
    },
    problemDescription: {
      type: String,
      required: true,
    },
    address: {
      type: {
        streetAddress: String,
        streetAddressLine2: String,
        city: String,
        stateProvince: String,
        postalZipcode: String,
      },
    },
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    quotationStatus: {
      type: String,
    },
    time: {
      type: Date,
      default: Date.now,
    },
    quotation: {
      type: {
        time: Date,
        name: String,
      },
    },
  });
  

// User model
const Todo = model("Todo", TodoSchema)

module.exports = Todo