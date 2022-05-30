const prompt = require ("prompt-sync")(); 
console.clear()

const h1 = prompt("A sede do Supremo Tribunal Federal, localizada na Praça dos Três Poderes, em Brasília, acaba de sofrer um ataque terrorista, levando a óbito todos os atuais ministros.");
console.clear()

const h2 = prompt("Você, por ser conhecido nacionalmente como um dos principais críticos do Poder Judiciáro, sobretudo o STF, é considerado um dos principais suspeito do ataque.");
console.clear()

const h3 = prompt("A Polícia Federal lhe fará um interrogatório, no qual você deverá responder com 's' para sim e 'n' para não, afim provar sua inocência.");
console.log()
console.log()
console.log()
let p1 = prompt('Você odeia o STF? ');
console.log()
console.log()
let p2 = prompt('Você acredita que o STF é um dos principais culpados por toda corrupção e mazelas do país? ');
console.log()
console.log()
let p3 = prompt('Você sabe manusear explosivos? ');
console.log()
console.log()
let p4 = prompt('Você participou da Invasão do Capitólio? ');
console.log()
console.log()
let p5 = prompt('Você está feliz com o ocorrido? ');
console.log()
console.log()

if (p1 == "s") {var r1 = 1 
}else if (p1 == "n" ||" ") {r1 = 0};

if (p2 == "s") {var r2 = 1
}else if (p2 == "n" || " ") {var r2 = 0};

if (p3 == "s") {var r3 = 1 
}else if (p3 == "n" || " ") {var r3 = 0};

if (p4 == "s") {var r4 = 1 
}else if (p4 == "n" || " ") {var r4 = 0};

if (p5 == "s") {var r5 = 1 
}else if  (p5 == "n" || " ") {var r5 = 0}

let resultado = r1 + r2 + r3 + r4 + r5 

console.log(`Com ${resultado} respostas positivas referente a sua jornada:`)

if (resultado >= 4) {console.log ("Você é culpado!")};

if (resultado == 3) {console.log ("Você continua sendo um dos principais suspeitos, com grandes chances de ser culpado .")}; 

if (resultado <= 2) {console.log ("Você é inocente e não tem nada haver com o ocorrido.")};

