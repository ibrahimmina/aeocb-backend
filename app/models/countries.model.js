// src/todo.js

const mongoose = require("mongoose");

// Create a mongoose schema, make title and createdAt be the properties and make them required

const countriesSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  status: {type: Number, required: true}
});

const countries = mongoose.model("countries", countriesSchema);

module.exports = countries;