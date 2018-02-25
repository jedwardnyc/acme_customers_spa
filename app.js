const custList = document.getElementById('customerList');
const email = document.getElementById('email')
const name = document.getElementById('name')
const createBtn = document.getElementById('createButton');
const errorMsg = document.getElementById('message')

fetch('/api/customers')
  .then(result=> result.json())
  .then((customers)=>{
    customers.forEach( customer => createCustomer(customer));
  });

createBtn.addEventListener('click', (e) => {
  fetch('/api/customers', {
    headers: {'Content-Type': 'application/json'},
    method: 'post',
    body: JSON.stringify({email: email.value, name: name.value})
  })
  .then( result => result.json())
  .then( customer => createCustomer(customer))
  email.value = name.value = '';
})

//adds enterkey functionality for submission
document.getElementById('input-field').addEventListener('keyup', (e)=>{
  e.preventDefault()
  if(e.keyCode === 13) {
    createBtn.click()
  }
})

deleteCust = (customer) =>{
  fetch(`/api/customers/${customer.id}`, {
    headers: {'Content-Type': 'application/json'},
    method: 'delete',
  })
  .catch(err => errorMsg.innerText(err))
}

createCustomer = (customer)=>{
  console.log(customer)
  const newCust = document.createElement('li');
  newCust.setAttribute('class', 'list-group-item')
  newCust.innerHTML = `<strong>Name: </strong>${customer.name} <br/> <strong>Email: </strong> ${customer.email}`;
  newCust.addEventListener('click', function(e){
    deleteCust(customer)
    newCust.remove();
  })
  custList.append(newCust)
}
