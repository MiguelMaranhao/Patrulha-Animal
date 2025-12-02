const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); 
const petController = require('../controllers/petController');

router.get('/', auth, petController.getPets);

router.post('/', auth, petController.addPet);

router.put('/:petId/location', auth, petController.updateLocation);

router.delete('/:id', auth, petController.deletePet);

router.put('/:id', auth, petController.updatePet);

module.exports = router;