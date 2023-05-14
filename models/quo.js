const {Schema, model} = require("../db/connection") // import Schema & model

// User Schema
const TodoSchema = new Schema({
  formID: String,
  username: String,
    name: {
      type: {
        first: {
          type:String,
          required: true,
        },
        last: String,
      },
      
    },
    problemDescription: {
      type: String,
      required: true,
    },
    address: {
      type: {
        addr_line1: String,
        addr_line2: String,
        city: String,
        state: String,
        postal: String, 
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
 
        status: String,
      },
    },
  });
   

// User model
const Todo = model("Todo", TodoSchema)

module.exports = Todo