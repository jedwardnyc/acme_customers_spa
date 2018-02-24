const  Sequelize  = require('sequelize');
const conn = require('./conn')

const Customer = conn.define('customer', {
  email: {
    allowNull: false,
    type: Sequelize.STRING,
    validate:{
      isEmail: true,
      notEmpty: true
    }
  }
});

module.exports = Customer