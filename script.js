"use strict";

document.querySelector(".calculate").addEventListener("click", function () {
  // 購入価格
  const buyAmount = Number(document.querySelector(".buyAmount").value);
  // 売却価格
  const sellAmount = Number(document.querySelector(".sellAmount").value);
  // 入力必須メソッド
  function removeHidden(className) {
    document.querySelector(className).classList.remove("hidden");
    document.querySelector(className).textContent = "入力必須";
  }

  // 入力必須

  // 購入価格も売却価格も未入力
  if (buyAmount === 0 && sellAmount === 0) {
    removeHidden(".required-buyAmount");
    removeHidden(".required-sellAmount");

    // 購入価格のみ未入力
  } else if (buyAmount === 0) {
    removeHidden(".required-buyAmount");

    // 売却価格のみ未入力
  } else if (sellAmount === 0) {
    removeHidden(".required-sellAmount");
  } else {
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
  }
});

document.querySelector(".clear").addEventListener("click", function () {
  // 購入価格
  const buyAmount = Number(document.querySelector(".buyAmount").value);
  // 売却価格
  const sellAmount = Number(document.querySelector(".sellAmount").value);
  // class付与メソッド
  function addClass(className) {
    document.querySelector(className).classList.add("hidden");
  }
  // 結果を非表示
  addClass(".result");
  // 購入価格と売却価格をリセット
  document.querySelector(".buyAmount").value = "";
  document.querySelector(".sellAmount").value = "";
});
