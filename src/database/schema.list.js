const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength : 20
  },
  entryDate: {
    type: Date,
    default: Date.now(),
  },
  notes: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true,
  },
  display:{
    type: Boolean,
    default : true
  }
});

const listModel = new mongoose.model("listModel", listSchema);

module.exports = listModel;
