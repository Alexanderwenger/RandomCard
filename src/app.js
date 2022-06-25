/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
/* 
window.onload = function() {
  let pintas = ["♠", "♣", "♥", "♦"];
  let pintaAleatoria = Math.floor(Math.random() * 4);

  let numeroCarta = Math.floor(Math.random() * 12);

  const a = document.getElementById(titulo1);
  console.log(a);
};

function myFunction() {
  alert("probando");
}
let pintas = ["♠", "♣", "♥", "♦"];
let pintaAleatoria = Math.floor(Math.random() * 4);

let numeroCarta = Math.floor(Math.random() * 12);
 */

let pintas = ["♠", "♣", "♥", "♦"];
let numero = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let pintaAleatoria = Math.floor(Math.random() * 4);
let numeroAleatoria = Math.floor(Math.random() * 12);
//let p = document.querySelector("#card-title");

document.querySelector("h5.card-title1").innerHTML = pintas[pintaAleatoria];
document.querySelector("h1.card-title2").innerHTML = numero[numeroAleatoria];
document.querySelector("h5.card-title3").innerHTML = pintas[pintaAleatoria];
//h5[0].innerHTML = pintas[pintaAleatoria];
//p[1].innerHTML = numero[numeroAleatoria];
//p[2].innerHTML = pintas[pintaAleatoria];
