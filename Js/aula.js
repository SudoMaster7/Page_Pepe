const nome = "leo";
const idade= 20;
const peso = 84;
const altura = 2.07;
let imc;
let anoNascimento;
imc = peso / (altura*altura)
anoNascimento = 2023 - idade

console.log(`${nome} tem ${idade} anos, pesa ${peso}Kg tem ${altura} de altura e seu IMC é de ${imc}`);
//templates strings
console.log(`${nome} nasceu em ${anoNascimento}.`)

