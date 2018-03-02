const  Sequelize  = require('sequelize');
const conn = require('./conn')

const Customer = conn.define('customer', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate:{
      isEmail: true,
      notEmpty: true
    }
  },
  name: Sequelize.STRING
});

module.exports = Customer