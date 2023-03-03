"use strict";

const pronombre = ["the", "our"];
const adjetivo = ["great", "big"];
const sustantivo = ["jogger", "racoon"];
const dominio = [".com", ".es"];

const myDomains = [];
const generateDomainName = () => {
  pronombre.forEach(pro => {
    adjetivo.forEach(adj => {
      sustantivo.forEach(sus => {
        dominio.forEach(dom => {
          let myDomainName = `${pro}${adj}${sus}${dom}`;
          myDomains.push(myDomainName);
        });
      });
    });
  });
};

generateDomainName();

const mostar = document
  .querySelector(".btn-dark")
  .addEventListener("click", () => {
    console.log(myDomains);
    document.querySelector(".card-text").textContent = myDomains;
  });

const quitar = document
  .querySelector(".btn-danger")
  .addEventListener("click", () => {
    console.log(myDomains);
    document.querySelector(".card-text").textContent = `dominios: 🗒️`;
  });
