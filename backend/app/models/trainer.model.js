module.exports = (sequelize, Sequelize) => {
    const Trainer = sequelize.define("trainer", {
      trainerFirstName: {
        type: Sequelize.STRING
      },
      trainerLastName: {
        type: Sequelize.STRING
      },
      trainerEmail: {
        type: Sequelize.STRING
      },
      trainerPhone: {
        type: Sequelize.STRING
      },
      trainerAddress: {
        type: Sequelize.STRING
      }
    });
    return Trainer;
  };