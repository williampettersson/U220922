console.log('Hello there');

var customers = [];

var person = {
    Name: '',
    Number: '',
    Address: '',
    Email: ''
};

function submit() {
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;

    person = {Name: name, Number: number, Address: address, Email: email};
    customers.push(person);

    console.log(customers);
    
    var emptyList = document.getElementById('customerList');
    emptyList.innerHTML = '';

    customers.forEach (person => {
        const list = document.createElement('li');
        list.innerHTML = (`${person.Name} ${person.Number} ${person.Email}`);
        customerList.appendChild(list);
    });    
    
}