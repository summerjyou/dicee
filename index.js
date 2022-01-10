var p1Number=Math.floor((Math.random()*6)+1);
var p2Number=Math.floor((Math.random()*6)+1);

document.querySelector(".img1").setAttribute("src","images/dice"+p1Number+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+p2Number+".png");


if (p1Number>p2Number) {
  document.querySelector("h1").textContent ="🚩 Player 1 Wins";
}

if (p2Number>p1Number) {
  document.querySelector("h1").textContent ="Player 2 Wins 🚩";
}

if (p2Number===p1Number) {
  document.querySelector("h1").textContent ="Draw!";
}
