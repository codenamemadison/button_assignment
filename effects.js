console.log("theMessage is here! (the javascript is here)")

let theBody = document.querySelector("body");
let thePara = document.querySelector("p");
// console.log(thePara)

const firstButton = document.getElementById("firstButton");
const secondButton = document.getElementById("secondButton");
const thirdButton = document.getElementById("thirdButton");
const fourthButton = document.getElementById("fourthButton");
const fifthButton = document.getElementById("fifthButton");
const sixthButton = document.getElementById("sixthButton");
const seventhButton = document.getElementById("seventhButton");
const eighthButton = document.getElementById("eighthButton");
const ninthButton = document.getElementById("ninthButton");
const tenthButton = document.getElementById("tenthButton");

firstButton.addEventListener('click', increment);
secondButton.addEventListener('click', increment);
thirdButton.addEventListener('click', increment);
fourthButton.addEventListener('click', increment);
fifthButton.addEventListener('click', increment);
sixthButton.addEventListener('click', increment);
seventhButton.addEventListener('click', increment);
eighthButton.addEventListener('click', increment);
ninthButton.addEventListener('click', increment);
tenthButton.addEventListener('click', increment);

let incrementor = 1;
function increment(){
    console.log("You clicked the button!");
    if (incrementor == 1) {
      firstButton.style.display = "none";
      secondButton.style.display = "block";

    } else if (incrementor == 2) {
      secondButton.style.display = "none";
      thirdButton.style.display = "block";

    } else if (incrementor == 3) {
      thirdButton.style.display = "none";
      fourthButton.style.display = "block";

    } else if (incrementor == 4) {
      fourthButton.style.display = "none";
      fifthButton.style.display = "block";

    } else if (incrementor == 5) {
      fifthButton.style.display = "none";
      sixthButton.style.display = "block";

    } else if (incrementor == 6) {
      sixthButton.style.display = "none";
      seventhButton.style.display = "block";

    } else if (incrementor == 7) {
      seventhButton.style.display = "none";
      eighthButton.style.display = "block";

    } else if (incrementor == 8) {
      eighthButton.style.display = "none";
      ninthButton.style.display = "block";

    } else if (incrementor == 9) {
      ninthButton.style.display = "none";
      tenthButton.style.display = "block";

    } else if (incrementor == 10) {
      tenthButton.style.display = "none";
      thePara.textContent = "Congrats! You have clicked all ten buttons!"

    }
    incrementor++;

}
