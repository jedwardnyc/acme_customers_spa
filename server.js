const express = require('express');
const app = express();
const db = require('./db');
const path = require('path');
const { Customer}  = db.models

app.use('/', express.static(path.join(__dirname)));
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended:false }));
app.use(require('method-override')('_method'))


app.get('/', (req,res,next)=>{
  res.sendFile('index.html');
});

app.get('/api/customers', (req,res,next)=>{
  Customer.findAll()
    .then((customers)=> res.json(customers));
});

app.post('/api/customers', (req,res,next)=>{
  Customer.create(req.body)
    .then((customer)=> res.json(customer))
  res.redirect('/')
})

app.delete('/api/customers/:id', (req,res,next)=>{
  Customer.findById(req.params.id)
    .then((customer)=> customer.destroy())
  res.redirect('/');
});

const port = process.env.PORT || 3000 
app.listen(port, ()=> console.log(`listening closely on port ${port}`));

db.sync()
  .then(()=> db.seed());
  