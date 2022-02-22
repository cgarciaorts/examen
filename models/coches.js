var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CochesSchema = new Schema(
  {
    marca: {type: String, required: true, maxLength: 100},
    modelo: {type: String, required: true, maxLength: 100},
    potencia: {type: Number,required: true},
    url: {type: String, required: true, maxlength:300},
  }
);