var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PersonaSchema = new Schema(
  {
    Username: {type: String, required: true, maxLength: 20},
    Password: {type: String, required: true, maxLength: 15}
  }
);