const nome = [ 
  "André Luiz", "Arthur", "Breno", "Carlos Eduardo", "Cauã", "Davi", "Davi", 
  "Eduardo", "Emerson", "Erick", "Eris", "Ezequiel", "Felipe", "Francisco", 
  "Gabrielly", "Guilherme", "Gustavo Alexandre", "Gustavo Augusto", "Heloa", 
  "Isabelle", "Ivaneide", "Jayme", "Jorge", "João Pedro", "João Vitor", "Kaio", 
  "Luis Otávio", "Layson", "Lorenzzo", "Lucas", "Lucas Matheus", "Luis Gustavo", 
  "Luiz", "Magsdene", "Marco Antônio", "Mateus", "Nickson", "Octavio", "Otávio", 
  "Patrick", "Pedro Junio", "Rafael", "Victor Hugo", "Victor Hugo", "Vinícius", "Willky" 
];
//exercicio
console.log(1)
const escalaManha = ["heloa","Erick","Vinicios","davi","luiz"]
console.log(escalaManha[0], escalaManha[4],escalaManha.length)


//exercicio 2
console.log(2)
const equipeEstoque = ["Ezequiel", "Pedro Junio"];
equipeEstoque.push("Nickson");
const saiu = equipeEstoque.pop();
console.log(`${saiu} saiu e a equipe volta a ser ${equipeEstoque}`)


//exercicio 3
console.log(3)
const filaCafe = ["Lucas", "Mateus", "Otávio"];
filaCafe.unshift("Isabelle");
const atendida = filaCafe.shift();
console.log(`${atendida} foi atendida e a fila fica ${filaCafe}`)


//exercicio4
console.log(4)
const confirmados = [
  "Gustavo Alexandre", "João Vitor", "Heloa", "Victor Hugo",
  "Breno", "Octavio", "Kaio", "Lorenzzo"
];

const Heloa = confirmados.includes("Heloa");
const Pedro = confirmados.includes("Pedro Junio");
console.log(`Heloa → ${Heloa}`); 
console.log(`Pedro Junio → ${Pedro}`);  
if (!Pedro) {
  confirmados.push("Pedro Junio");
}
console.log(confirmados); 


//exercicio 5
console.log(5)
 const novatos = ["patrick", "magsdene", "willky"];

const crachas = novatos.map(nome =>
  `CRACHÁ • ${nome.toUpperCase()}`
);

console.log(crachas);


//exercicio6
console.log(6)
const valoresAtuais = [400,450,500,380];
const valoresReajustados = valoresAtuais.map(valor => valor + 50)
console.log(`${valoresReajustados} e ${valoresAtuais} continua o mesmo`)


//exercicio 7
console.log(7)
const apresentacoes = ["Isabelle", "Francisco", "Guilherme"];

const ordem = apresentacoes.map((nome, indice) =>
  `${indice + 1}º - ${nome}`
);

console.log(ordem);


//exercicio 8
console.log(8)
const mensagens = nome.map(nome => `Bom dia, ${nome}!`);
console.log(mensagens);


//exercicio9
console.log(9)
const bolosPorDia = [32, 18, 25, 40, 12, 27];

const resultado = bolosPorDia.filter(bolos => bolos >= 25);

console.log(resultado);


//exercicio10
console.log(10)
const nomesComG = nome.filter(nome => nome.startsWith("G"));

console.log(nomesComG);


//exercicio11
console.log(11)
const horasExtras = [6, 2, 8, 0, 5, 7, 3, 9, 4, 10, 1, 6, 0, 12, 5, 2];

const registros = horasExtras.filter(horas => horas >= 5 && horas <= 10);

console.log(registros);


//exercicio12
console.log(12)
const nomesCompostos = nome.filter(nome => nome.includes(" "));

console.log(nomesCompostos);
console.log(nomesCompostos.length);


//exercicio 13
console.log(13)
const cracha1 = nome.find(nome => nome.startsWith("Nic"));
console.log(`${cracha1} o cracha é o de nickson`)

const cracha2 = nome.find(nome => nome.startsWith("Zé"));

if (cracha2 === undefined) {
  console.log("Crachá  zé não pertence a ninguém da equipe");
} else {
  console.log(cracha2);
}


//exercicio 14
let octavio = nome.find((nome) => nome == 'Octavio')
let otavio = nome.find((nome) => nome == 'Otavio')
console.log(`Octavio -> ${octavio}`)
console.log(`Otavio -> ${otavio}`)
let Octavio = nome.findIndex((nome) => nome == 'Octavio')
let Otavio = nome.findIndex((nome) => nome == 'Otávio')
console.log(`Posições: Octavio -> ${Octavio}, Otávio -> ${Otavio}`)
console.log("Para discutir: A busca deve ser exata porque se não for, o computador não vai encontrar o valor desejado")
let bonus = nome.filter((nome) => nome.includes('Otávio'))
console.log(`Bônus: ${bonus}, aparece dois nomes porque o computador procura nome que incluem "Otávio"`)
//exercicio 15
console.log(15)
const equipeAcougue = ["Otávio", "Gustavo Augusto", "Pedro Junio"];
const usandoLuva = [true, true, false];

console.log(usandoLuva.every(luva => luva === true));
console.log(usandoLuva.some(luva => luva === false));

const posicao = usandoLuva.findIndex(luva => luva === false);

console.log(posicao);
console.log(equipeAcougue[posicao]);


//exercicios16
console.log(16)
const filaAlmoco = ["Davi", "Erick", "Vinícius", "Heloa", "Nickson"];

const posicaoVinicius = filaAlmoco.findIndex(nome => nome === "Vinícius");
console.log(`Vinícius é o ${posicaoVinicius + 1}º da fila`);

const posicaoBreno = filaAlmoco.findIndex(nome => nome === "Breno");
console.log(`vinicios indice ${posicaoVinicius} breno${posicaoBreno} por que ele não está na fila`)


//exercicio17
console.log(17)
const vaquinha = [10, 15, 20, 5, 10];

const arrecadado = vaquinha.reduce((total, valor) => total + valor, 0);
const falta = 80 - arrecadado;
console.log(`arrecadado ${arrecadado} faltam ${falta}`)


//exercicio18
console.log(18)
const cadastrosHeloa = [14, 9, 21, 17, 11];

const maior = cadastrosHeloa.reduce((a, b) => a > b ? a : b);
const dia = cadastrosHeloa.indexOf(maior);
console.log(`${maior} na posição ${dia} quarta-feira`)


//exercicio19
console.log(19)
const plantoes = [
  "Emerson", "Jorge", "Emerson", "Eris",
  "Jorge", "Emerson", "Rafael"
];
const emerson = plantoes.reduce(
  (total, nome) => nome === "Emerson" ? total + 1 : total,
  0
);
const jorge = plantoes.reduce(
  (total, nome) => nome === "Jorge" ? total + 1 : total,
  0
);
 console.log(`emerson ${emerson} jorge ${jorge} `)
 // Exercício 20
console.log(20)

let horasExtra = horasExtras.filter((hora) => hora != 0)
let aumento = horasExtra.map((hora) => hora * 25)
let total = aumento.reduce((soma, valor) => soma + valor, 0)
console.log(`${horasExtra.length} registros; O array de valores tem ${aumento}; E total de ${total} Reais`)

// Exercício 21
console.log( 21)

const vendasVinicius = [120, 45, 0, 300, 80, 0, 15, 210];
let vendasValidas = vendasVinicius.filter((vendas) => vendas != 0)
let vendasCanceladas = vendasVinicius.filter((vendas) => vendas == 0)
let vendasVal = vendasValidas.map((vendasValidas) => `R$${vendasValidas}`)
let vendaAcima = vendasValidas.find((vendas) => vendas > 100)
let vendasAcima = vendasValidas.some((vendas) => vendas > 250)
let vendaTotal = vendasValidas.reduce((soma, valor) => soma + valor, 0)
let maiorVenda = Math.max(...vendasValidas)
console.log(`Vendas Válidas -> ${vendasValidas}`)
console.log(`Canceladas -> ${vendasCanceladas.length}`)
console.log(`Textos -> ${vendasVal}`)
console.log(`Primeira acima de 100 -> ${vendaAcima}`)
console.log(`Alguma acima de 250 -> ${vendasAcima}`)
console.log(`Total -> ${vendaTotal}; Maior venda -> ${maiorVenda}`)
console.log(`Vinícius fez ${vendasValidas.length} vendas, total de R$${vendaTotal}`)