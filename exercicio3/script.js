const operacao1 = (5 > 20) && (5 < 2);
console.log(operacao1);
// False, porque 5 não é maior que 20 e tambem não é menor que 2, temos false e false, que devolve false.

const operacao2 = (5 === 5) || (5 === "5");
console.log(operacao2);
// True, porque a primeira afirmativa já é verdadeira, mesmo que a segunda seja falsa. tendo pelo menos um verdadeiro  o nosso retorno é true.

const operacao3 = (!20 > 50);
console.log(operacao3);
// False, porque a própria negação estando ligada ao 20 ja indica que é falso.

const operacao4 = !(20 > 50);
console.log(operacao4);
//True, porque a negação de algo falso é verdadeiro.