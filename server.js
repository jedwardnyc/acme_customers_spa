const express = require('express');
const app = express();
const db = require('./db');
const path = require('path');
const { Customer}  = db.models

app.use('/', express.static(path.join(__dirname)));
app.use('/vendor', express.static('node_modules'))

app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded());


app.get('/', (req,res,next)=>{
  res.sendFile('index.html');
});

app.get('/api/customers', (req,res,next)=>{
  Customer.findAll()
    .then((customers)=> res.send(customers))
    .catch(next)
});

app.post('/api/customers', (req,res,next)=>{
  Customer.create(req.body)
    .then((customer)=> res.json(customer))
    .catch(next)
})

app.delete('/api/customers/:id', (req,res,next)=>{
  Customer.findById(req.params.id)
    .then((customer)=> customer.destroy())
    .catch(next) 
});

const port = process.env.PORT || 3000 
app.listen(port, ()=> console.log(`listening closely on port ${port}`));

db.sync()
  .then(()=> db.seed());
  