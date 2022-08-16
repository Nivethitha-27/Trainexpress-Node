const route = require("express").Router();
const train = require("../Models/trainschema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")



//Admin//train post

route.post("/", async (req, res) => {
    try {
      const traindata = new train({
        trainnumber: req.body.trainnumber,
        trainname: req.body.trainname,
        from: req.body.from,
        to: req.body.to,
        arrivaltime: req.body.arrivaltime,
        depaturetime: req.body.depaturetime,
        price: req.body.price,
        routes: req.body.routes,
      
  
      });
      let data = await traindata.save();
      res.json(data);
  
    } catch (err) {
      res.status(500).send("error");
    }
  
  })

  
  //get train details

route.get("/find", async (req, res) => {
    try {
      const data = await train.find();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send("error");
    }
  });

  // get train details by id

route.get("/find/:id", async (req, res) => {

    try {
      const post = await train.findById(req.params.id);
      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //update train
  
  route.put("/:id", async (req, res) => {
  
    try {
      const update = await train.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
      res.status(200).json(update);
  
    } catch (error) {
      res.status(500).json(error);
  
    }
  });
  
  
  // delete train
  
  route.delete("/:id", async (req, res) => {
    try {
      await train.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted");
  
    } catch (error) {
      res.status(500).json(error);
  
    }
  
  })

module.exports = route;