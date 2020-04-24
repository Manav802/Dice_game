function randomNo()
{
    var imgNo=Math.floor(Math.random()*6)+1;
    return imgNo;
}
function changingImage(No,which)
{
   document.querySelector(".Dice"+which).setAttribute("src","images/dice"+No+".png");
}
function changingH1text(No1,No2)
{
    if(No1>No2)
    {
        document.querySelector("h1").textContent="⛳Player 1 wins!!";
    }
    else if(No1<No2)
    {
        document.querySelector("h1").textContent="Player 2 wins!!⛳";
         
    }
    else
    {
        document.querySelector("h1").textContent="Its ⛳ draw"; 
    }
}

document.querySelector(".BUTTON_CZP").onclick=function click()
{
    //actualtrigger
    var no1,no2;
    no1=randomNo();
    no2=randomNo();
    changingImage(no1,1);
    changingImage(no2,2);
    changingH1text(no1,no2);
    document.querySelector(".refreshtext").textContent="Click on the button to play again, Refresh the page to reset 😁";
}