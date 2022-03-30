module.exports = app => {
    const trainer = require("../controllers/trainer.controller.js");
    var router = require("express").Router();
    // Create a new Trainer
    router.post("/", trainer.create);
    // Retrieve all Trainers
    router.get("/", trainer.findAll);
    // Update a Trainers with id
    router.put("/:trainerID", trainer.update);

    app.use('/api/trainer', router);
  };