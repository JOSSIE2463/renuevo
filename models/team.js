'use strict'

let mongoose = require ('mongoose')
let Schema = mongoose.Schema;

let TeamSchema = Schema ({
name:String,


})
module.exports =mongoose.model ('Team',TeamSchema, 'Team');