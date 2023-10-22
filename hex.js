const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let randomHex = "#";
  const ting = new Audio("ting.mp3");

  for (i = 0; i < 6; i++) {
    //to get the random no from an array.
    let rndNo = Math.floor(Math.random() * hex.length);
    randomHex += hex[rndNo];
  }
  console.log(randomHex);
  document.body.style.backgroundColor = randomHex;
  color.textContent = randomHex;
  ting.play();
});
