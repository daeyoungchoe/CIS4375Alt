const db = require("../models");
const Trainer = db.trainer;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
 // Validate request
 if (!req.body.trainerFirstName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Tutorial
  const trainer = {
    trainerFirstName: req.body.trainerFirstName,
    trainerLastName: req.body.trainerLastName,
    trainerEmail: req.body.trainerEmail,
    trainerPhone: req.body.trainerPhone,
    trainerAddress: req.body.trainerAddress
  };
  // Save Tutorial in the database
  Trainer.create(trainer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Trainer."
      });
    });
};
// Retrieve all Trainer from the database.
exports.findAll = (req, res) => {
    const trainerFirstName = req.query.trainerFirstName;
    var condition = trainerFirstName ? { trainerFirstName: { [Op.like]: `%${trainerFirstName}%` } } : null;
    Trainer.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Trainers."
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;
    Trainer.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Trainer was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Trainer with id=${id}. Maybe Trainer was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Trainer with id=" + id
        });
      });
  };

  