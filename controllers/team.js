let Team = require('../models/team')

const controller = {
  getTeam: function (req, res) {
    Team.find({}).exec()
      .then(teamList => {
        if (!teamList) return res.status(404).send({message: "No data found"})
        return res.status(200).json(teamList)
      })
      .catch(err => res.status(500).send({message: `Error: ${err}` }))
    
  }
}
    module.exports = controller