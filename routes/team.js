const { Router } = require('express')
const TeamController = require('../controllers/team')

const router = Router()

router.get('/', TeamController.getTeam)

module.exports = router