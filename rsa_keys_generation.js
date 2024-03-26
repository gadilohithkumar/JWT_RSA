const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 2048});

const public_key=key.exportKey('public')

const private_key=key.exportKey('private')

console.log(private_key)
console.log(public_key)