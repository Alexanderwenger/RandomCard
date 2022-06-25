/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pintas = ["♠", "♣", "♥", "♦"];
let numero = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let pintaAleatoria = Math.floor(Math.random() * 4);
let numeroAleatoria = Math.floor(Math.random() * 12);

if (pintaAleatoria === 2 || pintaAleatoria === 3) {
  document.querySelector("h5.card-title1").style = "color: red";
  document.querySelector("h5.card-title3").style = "color: red";
}

document.querySelector("h5.card-title1").innerHTML = pintas[pintaAleatoria];
document.querySelector("h1.card-title2").innerHTML = numero[numeroAleatoria];
document.querySelector("h5.card-title3").innerHTML = pintas[pintaAleatoria];
