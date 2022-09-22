console.log('Hello there');

var array = [];

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
    
    const info = document.createElement('p');
    info.innerHTML = name + ' ' + number + ' ' + address + ' ' + email;
    
    main.appendChild(info);
    
}