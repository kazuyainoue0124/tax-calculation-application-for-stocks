"use strict";

const buyAmount = document.querySelector(".buyAmount").value;
const sellAmount = document.querySelector(".sellAmount").value;
const tax = document.querySelector(".tax").value;
const result = document.querySelector(".result");
const profitAfterTax = document.querySelector(".profitAfterTax").value;

document.querySelector(".calculate").addEventListener("click", function () {
  result.classList.remove("hidden");
});
