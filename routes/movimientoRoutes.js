const express = require('express');
const router = express.Router();
const movimientoController = require('../controllers/movimientoController');

router.get('/', movimientoController.getMovimientos);
router.get('/:id', movimientoController.getMovimiento);
router.post('/', movimientoController.createMovimiento);
router.put('/:id', movimientoController.updateMovimiento);
router.delete('/:id', movimientoController.deleteMovimiento);

module.exports = router;
