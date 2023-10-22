const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const ting = new Audio("ting.mp3");
  //get random number btw 0-3
  const randomNumber = getRandomNumber();
  //set the background of the element to a random color from array
  document.body.style.backgroundColor = colors[randomNumber];
  // To change the text of span with color classname
  color.textContent = colors[randomNumber];
  ting.play();
});

function getRandomNumber() {
  //get rounded random integer from the length of our array.
  return Math.floor(Math.random() * colors.length);
}
