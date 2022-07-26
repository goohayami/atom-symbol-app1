"use strict";
const atomicSymbol = {
  symbol: [
    "H",
    "He",
    "C",
    "N",
    "O",
    "F",
    "Ne",
    "Na",
    "Mg",
    "Al",
    "S",
    "p",
    "Cl",
    "Ar",
    "K",
    "Ca",
    "Au",
    "Ag",
    "Cu",
    "Zn",
    "Pb",
    "Ba",
    "Ni",
    "Fe",
    "Sn",
    "Pt",
    "Hg",
    "CO2",
    "H2O",
    "SO2",
    "NO2",
    "CO",
    "H2",
    "N2",
    "O2",
  ],
  name: [
    "水素",
    "ヘリウム",
    "炭素",
    "窒素",
    "酸素",
    "フッ素",
    "ネオン",
    "ナトリウム",
    "マグネシウム",
    "アルミニウム",
    "硫黄",
    "リン",
    "塩素",
    "アルゴン",
    "カリウム",
    "カルシウム",
    "金",
    "銀",
    "銅",
    "亜鉛",
    "鉛",
    "バリウム",
    "ニッケル",
    "鉄",
    "スズ",
    "白金",
    "水銀",
    "二酸化炭素",
    "水",
    "二酸化硫黄",
    "二酸化窒素",
    "一酸化炭素",
    "水素",
    "窒素",
    "酸素",
  ],
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
for (let i = 0; i < atomicSymbol.symbol.length; i++) {
  const inputBtn = document.getElementById("btn" + [i]);
  const nameContainer = document.getElementById("name" + [i]);

  inputBtn.addEventListener("click", () => {
    const inputText = document.getElementById("input" + [i]).value;

    console.log(inputText);
    console.log(atomicSymbol.name[i]);

    if (inputText === atomicSymbol.name[i]) {
      nameContainer.classList.add("symbol-appear");
    } else {
      document.getElementById("input" + [i]).value = "";
    }
  });
}
