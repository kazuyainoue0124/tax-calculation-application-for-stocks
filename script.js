"use strict";

document.querySelector(".calculate").addEventListener("click", function () {
  // 購入価格
  const buyAmount = Number(document.querySelector(".buyAmount").value);
  // 売却価格
  const sellAmount = Number(document.querySelector(".sellAmount").value);
  // 入力必須メソッド
  // const removeHidden = (className)=>{
  //   document.querySelector(className).classList.remove('hidden');
  //   document.querySelector(className).textContent = '入力必須';
  // };

  // 入力必須
  if (buyAmount === 0 && sellAmount === 0) {
    document.querySelector(".required-buyAmount").classList.remove("hidden");
    document.querySelector(".required-buyAmount").textContent = "入力必須";
    document.querySelector(".required-sellAmount").classList.remove("hidden");
    document.querySelector(".required-sellAmount").textContent = "入力必須";
  } else if (buyAmount === 0) {
    document.querySelector(".required-buyAmount").classList.remove("hidden");
    document.querySelector(".required-buyAmount").textContent = "入力必須";
  } else if (sellAmount === 0) {
    document.querySelector(".required-sellAmount").classList.remove("hidden");
    document.querySelector(".required-sellAmount").textContent = "入力必須";
  }
  // 利益　＝　売却価格　ー　購入価格
  let profit = sellAmount - buyAmount;

  // 税金
  let tax;
  //　利益がある場合
  if (profit > 0) {
    // 20.315%の税金を徴収
    tax = profit * 0.20315;

    // 利益がない場合
  } else {
    // 税金はかからない
    tax = 0;
  }
  // 税引き後利益　＝　利益　ー　税金
  const profitAfterTax = profit - tax;
  // クラスhiddenを取って結果を表示
  const result = document.querySelector(".result");
  result.classList.remove("hidden");
  console.log(
    sellAmount,
    buyAmount,
    profit,
    tax.toLocaleString(),
    profitAfterTax.toLocaleString()
  );
  // 税金をカンマ入りで表示
  document.querySelector(".tax").value = tax.toLocaleString();
  // 税引き後利益をカンマ入りで表示
  document.querySelector(".profitAfterTax").value =
    profitAfterTax.toLocaleString();
});
