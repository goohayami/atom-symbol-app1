"use strict";
const atomicSymbol = {
  symbol: ["H", "He"],
  name: ["水素", "ヘリウム"],
};

for (let i = 0; i < atomicSymbol.symbol.length; i++) {
  const symbolContainer = document.getElementById("symbol" + [i]);
  symbolContainer.innerHTML = `${atomicSymbol.symbol[i]}`;
}

for (let i = 0; i < atomicSymbol.name.length; i++) {
  const nameContainer = document.getElementById("name" + [i]);
  console.log("name" + [i]);
  nameContainer.innerHTML = `${atomicSymbol.name[i]}`;
}
