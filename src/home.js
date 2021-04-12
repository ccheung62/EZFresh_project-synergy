import {username, loggedin} from './login.js'
console.log(username, loggedin)

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json))

