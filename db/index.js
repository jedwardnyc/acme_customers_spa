const conn = require('./conn');
const Customer = require('./Customer');

const sync = ()=>{
  return conn.sync();
};

const seed = ()=>{
  return Promise.all([
    Customer.create({email:'jacob@hotmail.com'}),
    Customer.create({email:'john@hotmail.com'}),
    Customer.create({email:'test@hotmail.com'})
  ])
}

module.exports = {
  models:{
    Customer
  },
  seed,
  sync
};