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
    
    var emptyList = document.getElementById('customerList');
    emptyList.innerHTML = '';

    customers.forEach (person => {
        const list = document.createElement('li');
        list.innerHTML = (`${person.Name} ${person.Number} <a href = mailto: ${person.Email}>${person.Email}</a>`);
        customerList.appendChild(list);
    });    
    
    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
    document.getElementById('address').value = '';
    document.getElementById('email').value = '';
}

function hideshow(){
    customerList.hidden = !customerList.hidden;
}

function search(){
    var customerID = document.getElementById('search').value;
    var outputID = document.getElementById('result');

    findEmail = (person => {
        return person.Email === customerID;
    });

    outputID.innerHTML = (`${customers.find(findEmail).Name} 
    ${customers.find(findEmail).Number} ${customers.find(findEmail).Address} ${customers.find(findEmail).Email}`);
}