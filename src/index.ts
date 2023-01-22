// import axios from "axios";
// async function getUserFromGithub(user: string) {
//   try {
//     let userr = await axios.get(`https://api.github.com/users/${user}`);
//     console.log(userr);
//   } catch (error: any) {
//     console.log("Erro:" + error);
//   }
// }
// getUserFromGithub("djunior97");
// getUserFromGithub("djunioriqdivqv97");

// async function getRepositories(repo: string) {
//   try {
//     let repository = await axios.get(`https://api.github.com/repos/${repo}`);
//     console.log(repository);
//   } catch (error: any) {
//     console.log("Error:" + error);
//   }
// }

// getRepositories("marcelo-growdev/scrapbook-es6");
// getRepositories("marcelo-growdev/qdbqqbqwn");

// import express from "express";

// const app = express();
// app.use(express.json());

// app.get("/calculadora", (req, res) => {
//   let operacao = req.query.operacao;
//   let valorA = Number(req.query.valorA);
//   let valorB = Number(req.query.valorB);

//   if (operacao === "somar") {
//     let soma = valorA + valorB;
//     return res.send({ resultado: soma });
//   }
//   if (operacao === "subtrair") {
//     let subtracao = valorA - valorB;
//     return res.send({ resultado: subtracao });
//   }
//   if (operacao === "multiplicar") {
//     let produto = valorA * valorB;
//     return res.send({ resultado: produto });
//   }
//   if (operacao === "dividir") {
//     let divisao = (valorA / valorB).toFixed(2);
//     return res.send({ resultado: divisao });
//   }
// });

// app.listen(3333, () => {
//   console.log("API está rodando...");
// });
import express from "express";

const app = express();
app.use(express.json());
// let contador = 0;
// app.get("/contador", (req, res) => {
//   contador++;

//   if (contador === 10) {
//     contador = 0;
//     return res.send({ message: "Chegou a dez" });
//   } else {
//     res.send({ contador });
//   }
// });
// app.get("/numeral", (req, res) => {
//   let numeral = Number(req.query.numeral);
//   let operacao = req.query.operacao;

//   if (operacao === "anterior") {
//     numeral--;
//     return res.send({ numeral });
//   }

//   if (operacao === "proximo") {
//     numeral++;
//     return res.send({ numeral });
//   }
// });

// app.listen(3333, () => {
//   console.log("API está rodando...");
// });
// app.get("/inverter-string", (req, res) => {
//   let valor = req.query.valor?.toString();
//   valor!.split("").reverse().join("");
//   return res.send({ valor });
// });
// app.listen(3333, () => {
//   console.log("API está rodando...");
// });
// let arr: any = [];
// function vowels() {
//   let arrVowels = ["a", "e", "i", "o", "u"];
//   return arrVowels;
// }
// app.get("/remover-vogais", (req, res) => {
//   let valor = req.query.valor?.toString();
//   let arrCaracteres = valor!.split("");
//   let indexOf = arrCaracteres.findIndex(vowels);
//   arrCaracteres.splice(indexOf, 1);
//   arr.push(arrCaracteres);
//   return res.send({
//     valor: `${valor}`,
//     array: `${arr}`,
//   });
// });
// app.listen(3333, () => {
//   console.log("API está rodando...");
// });
