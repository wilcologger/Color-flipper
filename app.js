// Button ID
const btn = document.getElementById("btn");
// Array of colors values
const colors = ["red", "green", "rgba(133,122,200)", "#f15025"];
// Get color class
const color = document.querySelector(".color");

// Click function
btn.addEventListener("click", () => {
  // console.log("Click!");

  // Get random number between 0 - 3
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
