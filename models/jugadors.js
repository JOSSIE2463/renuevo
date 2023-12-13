'use strict'

let mongoose = require ('mongoose')
let Schema = mongoose.Schema;

let jugadorsSchema = Schema ({
name:String,
birthdate: String,
place_of_birth: String,
height: Number

})
module.exports =mongoose.model ('jugadors',jugadorsSchema, 'jugadors');