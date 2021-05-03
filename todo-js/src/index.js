const onClickAdd = () => {
  // テキストボックスの値を取得して、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li生成
  const listItem = document.createElement("li");
  // listItem.className = ""

  // 子要素作成
  const listTitle = document.createElement("div");
  listTitle.className = "list__title";
  listTitle.innerText = inputText;

  // divタグの子要素に各要素を設定
  listItem.appendChild(listTitle);

  // 未完了リストん追加
  document.getElementById("incomplete-lists").appendChild(listItem);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
