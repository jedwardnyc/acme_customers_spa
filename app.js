const custList = document.getElementById('customerList');
const email = document.getElementById('email')

fetch('/api/customers')
  .then(result=> result.json())
  .then((data)=>{
    data.forEach((customer)=>{
      createCustomer(customer)
    });
  });

createCustomer = (customer)=>{
  const li = document.createElement('li');
  const form = document.createElement('form');
  custList.append(form)
  li.append(customer.email);
  form.setAttribute('method', 'POST')
  form.setAttribute('action', `/api/customers/${customer.id}?_method=DELETE`)
  li.addEventListener('click', function(e){
    form.submit()
    li.remove();
  })
  form.append(li);
}