const head = document.getElementById("head");

console.log(head);

head.style.color = "red";
head.style.border = "4px solid green";

head.addEventListener("click", () => {
  console.log("h1 tag clicked!");
  head.style.backgroundColor = "green";
});

const btn = document.getElementById("btn");
let x = 0;
btn.addEventListener("click", () => {
  const inner = document.getElementById("inner");
  x = x + 10;
  if (x <= 100) {
    inner.style.width = x + "%";
  }
});