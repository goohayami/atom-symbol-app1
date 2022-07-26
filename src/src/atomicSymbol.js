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
  nameContainer.innerHTML = `${atomicSymbol.name[i]}`;
}

// 入力されたテキストを取得
for (let i = 0; i < 2; i++) {
  const inputBtn = document.getElementById("btn" + [i]);
  const nameContainer = document.getElementById("name" + [i]);

  inputBtn.addEventListener("click", () => {
    const inputText = document.getElementById("input" + [i]).value;

    console.log(inputText);
    console.log(atomicSymbol.name[i]);

    if (inputText === atomicSymbol.name[i]) {
      alert("おめでとう");
      nameContainer.classList.add("symbol-appear");
    } else {
      alert("もういちど");
    }
  });
}
