let jugadors = require('../models/jugadors')

const controller = {
    getJugadors: function (req, res) {
    jugadors.find({}).exec()
      .then(jugadorsList => {
        if (!jugadorsList) return res.status(404).send({message: "No data found"})
        return res.status(200).json(jugadorsList)
      })
      .catch(err => res.status(500).send({message: `Error: ${err}` }))
    
  },

  //Get detail
  getJugadorOne : function (req, res){
    let judadorsId = req.params.id
if(judadorsId == null) return res.status(404).send({message: "No found"})

    jugadors.findById(judadorsId).exec()
    .then(dato =>{
        if(!dato) return res.status(400).send({message: "Jugador no identificado"}
        )
        return res.status(200).json(dato)
        })
    .catch(err => res.status(500).send ({message: `Error General ${err}`}))
  }
}
    module.exports = controller