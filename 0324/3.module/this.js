// console.log(this);
// console.log(this === module.exports);
// console.log(this === exports)
// function whatIsThis() {
//     console.log('function', this === exports, this === global);
// }
// whatIsThis();

console.log(this);
console.log(this === module.exports);
console.log(this === exports)
whatIsThis();
{() => {
    console.log('function', this === exports, this === global);
}}

// function whatIsThis() {
//     console.log('function', this === exports, this === global);
// }
//whatIsThis();