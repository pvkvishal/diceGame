// var number=Math.random();
// number=((number*6)+1);
// number=Math.floor(number);
// console.log(number);
var num1 = Math.floor(Math.random() * 6) + 1;
var diceBlue = "./img/blue" + num1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", diceBlue);

var num2 = Math.floor(Math.random() * 6) + 1;
var diceRed = "./img/red" + num2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", diceRed);

if (num1 > num2) {
  document.querySelector("h1").innerHTML = "🏁 Player 1 💙 win";
  document.querySelector("body").setAttribute("class", "blue");
} else if (num1 < num2) {
  document.querySelector("h1").innerHTML = "🏁 Player 2 ❤️ win";
  document.querySelector("body").setAttribute("class", "red");
} else {
  document.querySelector("h1").innerHTML = "You both have a tie 💞";
  document.querySelector("body").setAttribute("class", "bluered");
}
