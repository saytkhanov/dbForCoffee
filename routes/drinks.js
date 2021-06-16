const { Router } = require('express');
const router = Router()
const { getAllDrinks, postDrinks, deleteDrink, patchDrink, getInStockDrink, getDrinksById} = require('../controllers/drinks');


router.get('/drinks', getAllDrinks)
router.post('/drinks', postDrinks);
router.get('/drinks/:id',getDrinksById );
router.delete('/drinks/:id', deleteDrink);
router.patch('/drinks/:id', patchDrink)
router.get('/drinks/in-stock', getInStockDrink)

module.exports = router