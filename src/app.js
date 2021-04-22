/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let numero = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let pinta = ["♦", "♥", "♠", "♣"];

  let numIndx = Math.floor(Math.random() * numero.length);
  let pintaIndex = Math.floor(Math.random() * pinta.length);

  document.querySelectorAll("#simboloTop").append(numero[numIndx]);
  document.querySelectorAll("#simboloBot").append(numero[numIndx]);
  document.querySelectorAll("#num").append(pinta[pintaIndex]);
  console.log(numerorandom + pintarandom);
};
