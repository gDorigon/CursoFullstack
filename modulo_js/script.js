// Criando uma data
var data = new Date();
console.log(data)

// Pegando Apenas as horas
console.log(data.getHours());

// Pegando Minutos
console.log(data.getMinutes());

// Pegando Segundos
console.log(data.getSeconds());

// Pegando milisegundos
console.log(data.getMilliseconds());

console.log("===========================")

// Criando uma Data
var datanova= new Date("Janeiro 5, 2025");
console.log(datanova)

// Converter data em milisegundos
console.log(Date.parse(datanova));

// Crinando data com os milisegundos
console.log(new Date(1736046000000));

// get = pegar
// Pegando somente o dia da data
console.log(`Pegando somente o dia da data: ${datanova.getDate()}`);

// Pegando somente dia do mês, janeiro = 0 fevereiro = 1 o Js começa contando do 0.
console.log(`Pegando o mês: ${datanova.getMonth()}`);

// Dia da semana
console.log(`Pegando o dia da semana: ${datanova.getDay()}`); // Comça no Domingo = 0

// Pegando o Ano inteiro
console.log(`Pegando o ano: ${datanova.getFullYear()}`);

// Formatando a data

// Exercicio = 05/01/2025
console.log(`Formatando data: ${datanova.getDate() + "/" + (datanova.getMonth() + 1) + "/" + datanova.getFullYear()}`);

// Somar numero na data
// Usamos o set para setar um valor
console.log("Somar numero data: " + datanova.setDate(datanova.getDate() + 5))
console.log(datanova);

console.log("Somar numero a Hora: " + datanova.setHours(datanova.getHours() + 5))
console.log(datanova);

// get : pagar valor
// set : setar valor

// Tranformando dia semanal em segunda, terça, quarta, quinta, sexta, sabado, dommingo
var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]
console.log(`Tranformando dia 05 em Domingo: ${dias[datanova.getDay()]}`);