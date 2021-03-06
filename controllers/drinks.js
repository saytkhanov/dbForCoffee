const Drink = require("../models/Drink");

const controllers = {
  getAllDrinks: async (req, res) => {
    //позволяет выводить только те документы, которые мы указали, 1 либо true используется, чтобы вывести именно их
    // id автоматически выводится
    const getAllDrinks = await Drink.find({}, { name: 1, cost: 1 });
    res.json(getAllDrinks);
  },
  getDrinksById: async (req, res) => {
    const getDrinksById = await Drink.findById(req.params.id);
    res.json(getDrinksById);
  },
  postDrinks: async (req, res) => {
    const postDrinks = await new Drink({
      name: req.body.name,
      cost: req.body.cost,
      inStock: req.params.inStock,
      hasItCaffeine: req.body.hasItCaffeine,
      volume: req.body.volume,
      description: req.body.description,
    });
    await postDrinks.save();
    res.json(postDrinks);
  },
  deleteDrink: async (req, res) => {
    const deleteTodo = await Drink.findByIdAndDelete(req.params.id);
    res.json(deleteTodo);
  },
  patchDrink: async (req, res) => {
    const id = req.params.id;
    const { name, cost, inStock, hasItCaffeine, volume, description } =
      req.body;
    const options = { new: true };
    const patchDrink = await Drink.findByIdAndUpdate(
      id,
      { name, cost, inStock, hasItCaffeine, volume, description },
      options
    );
    await patchDrink.save();
    res.json(patchDrink);
  },
  getInStockDrink: async (req, res) => {
    //позволяет выводить только те напитки, которые есть в наличии inStock, где значение true
    const getInStockDrink = await Drink.find({inStock: true});
    res.json(getInStockDrink);
  },
};

module.exports = controllers;
