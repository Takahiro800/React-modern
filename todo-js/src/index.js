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

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });

  // divタグの子要素に各要素を設定
  listItem.appendChild(listTitle);
  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);

  // 未完了リストん追加
  document.getElementById("incomplete-lists").appendChild(listItem);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
