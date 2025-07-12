var randomNumber1=Math.floor(Math.random()*6)+1;
function one(randomNumber1)
{
if(randomNumber1===1)
{
    document.querySelector(".img1").src="./images/dice1.png";
}
else if(randomNumber1===2)
{
    document.querySelector(".img1").src="./images/dice2.png";
}
else if(randomNumber1===3)
{
    document.querySelector(".img1").src="./images/dice3.png";
}
else if(randomNumber1===4)
{
    document.querySelector(".img1").src="./images/dice4.png";
}
else if(randomNumber1===5)
{
    document.querySelector(".img1").src="./images/dice5.png";
}
else if(randomNumber1===6)
{
    document.querySelector(".img1").src="./images/dice6.png";
}
}
var randomNumber2=Math.floor(Math.random()*6)+1;
function two(randomNumber2)
{
if(randomNumber2===1)
{
    document.querySelector(".img2").src="./images/dice1.png";
}
else if(randomNumber2===2)
{
    document.querySelector(".img2").src="./images/dice2.png";
}
else if(randomNumber2===3)
{
    document.querySelector(".img2").src="./images/dice3.png";
}
else if(randomNumber2===4)
{
    document.querySelector(".img2").src="./images/dice4.png";
}
else if(randomNumber2===5)
{
    document.querySelector(".img2").src="./images/dice5.png";
}
else if(randomNumber2===6)
{
    document.querySelector(".img2").src="./images/dice6.png";
}
}
one(randomNumber1);
two(randomNumber2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="Player1 wins!";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").textContent="Player2 wins!";
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").textContent="Draw!";
}

