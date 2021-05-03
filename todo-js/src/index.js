const onClickAdd = () => {
  // テキストボックスの値を取得して、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了のリストから指定の要素を削除
const delteteFromIncompleteList = (target) => {
  document.getElementById("incomplete-lists").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // li生成
  const listItem = document.createElement("li");
  // listItem.className = ""

  // 子要素作成
  const listTitle = document.createElement("div");
  listTitle.className = "list__title";
  listTitle.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了リストから削除
    delteteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容てテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // li以下を取得
    addTarget.textContent = null;

    //
    const listTitle = document.createElement("div");
    listTitle.className = "list__title";
    listTitle.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-lists").removeChild(deleteTarget);

      // テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(listTitle);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    // 完了リストに追加
    document.getElementById("complete-lists").appendChild(addTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    delteteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  listItem.appendChild(listTitle);
  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);

  // 未完了リストの追加
  document.getElementById("incomplete-lists").appendChild(listItem);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
