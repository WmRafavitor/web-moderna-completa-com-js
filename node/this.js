// O "this" por si só ele aponta para "module.exports" ou apenas para "exports"
//mas dentro de uma função "this" aponta para global, veja exemplos abaixo

console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis() {
    console.log('Dentro de uma função...');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);
}

logThis();