//your code here!

let list = document.getElementById("infi-list");
let items = ["List Item 11", "List Item 12"];

function addItems() {
  for (let i = 0; i < items.length; i++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(items[i]));
    list.appendChild(li);
  }
}

addItems();

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 100
  ) {
    addItems();
  }
});
