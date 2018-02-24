fetch('/api/customers')
  .then(result=> result.json())
  .then((data)=>{
    const custList = document.getElementById('customerList');
    data.forEach((customer)=>{
      const li = document.createElement('li');
      const form = document.createElement('form');
      custList.append(form)
      li.append(customer.email);
      form.setAttribute('method', 'POST')
      form.setAttribute('action', `/api/customers/${customer.id}?_method=DELETE`)
      li.addEventListener('click', function(e){
        console.log(customer)
        form.submit()
        li.remove();
      })
      form.append(li);
    });
  });

