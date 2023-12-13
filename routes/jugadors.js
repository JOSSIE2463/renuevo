const { Router } = require('express')
const jugadorsController = require('../controllers/jugadors')

const router = Router()

router.get('/', jugadorsController.getJugadors)
router.get('/detail/:id?', jugadorsController.getJugadorOne)


module.exports = router