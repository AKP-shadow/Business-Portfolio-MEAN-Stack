const {Schema, model} = require("../db/connection") // import Schema & model

// User Schema
const ServiceSchema =  new Schema({
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      
    },
    image: {
      type: String,
      required: true,
    },
  });

// User model
const Service = model("Service", ServiceSchema)

module.exports = Service