const mongoose = require("mongoose")

const mongoDB = 'mongodb://localhost/examen'

mongoose.connect(mongoDB,{
    useNewUrlParser: true , 
    useUnifiedTopology: true})

const db = mongoose.connection
db.on('Error', console.error.bind(console,'MongoDB connection error'))

db.once('open', () =>{
    console.log("Conectado a la base de datos")
})