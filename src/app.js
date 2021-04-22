/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let numero = [
    "As",
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
  let pintarandom = pinta[pintaIndex];

  document.querySelector("#simboloTop").append(pinta[pintaIndex]);
  document.querySelector("#simboloBot").append(pinta[pintaIndex]);
  document.querySelector("#num").append(numero[numIndx]);

  if (pintarandom == "♥" || pintarandom == "♦") {
    document.querySelector("#simboloTop").classList.add("text-danger");
    document.querySelector("#simboloBot").classList.add("text-danger");
  } else {
    document.querySelector("#simboloTop").classList.remove("text-danger");
    document.querySelector("#simboloBot").classList.remove("text-danger");
  }
};
