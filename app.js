'use strict'

const express = require('express')
const team_routes = require('./routes/team')
const jugador_routes = require('./routes/jugadors')

const app = express()


app.set('port', process.env.PORT || 4000)


app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api/team', team_routes)
app.use('/api/jugaors', jugador_routes)

module.exports = app