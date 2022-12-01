/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

function listas() {
  let laLista = [];
  for (let x = 0; x < pronoun.length; x++) {
    for (let y = 0; y < adj.length; y++) {
      for (let z = 0; y < noun.length; z++) {
        laLista.push(pronoun[x] + adj[y] + noun[z] + ".com");
      }
    }
  }
  document.getElementById("lista").innerHTML = laLista.join("<br>");
}
window.onload = function() {
  listas();
};
