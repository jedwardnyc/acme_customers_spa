/* use strict */

const conn = require('./conn');
const Customer = require('./Customer');

const sync = ()=>{
  return conn.sync({ force:true });
};

const seed = ()=>{
  return Promise.all([
    Customer.create({name: 'Jacob', email:'jacob@hotmail.com'}),
    Customer.create({name: 'John', email:'john@sbcglobal.net'}),
    Customer.create({name: 'Test', email:'test@aol.com'})
  ])
}

module.exports = {
  models:{
    Customer
  },
  seed,
  sync
};