function gameOver()
{
    d3.select("table").remove();
    d3.select("table").remove();
    d3.select("table").remove();
    d3.select("body").append("h3").text("Game Over");
    d3.select("body").append("h5").text("Refresh to try again");
}
d3.select("#flail")
    .on("click",function() 
{
    d3.select("#output").text("You flail about in the darkness, you eventually get tired and pass out.");
    gameOver();
})

d3.select("#pocket")
    .on("click",function() 
{
    d3.select("#output").text("In your pockets you find a flashlight and a flask full of weird liquid.");
    d3.select("#table1").remove();
    d3.select("#table2").style("visibility","visible");
})

d3.select("#flask")
    .on("click",function() 
{
    d3.select("#output").text("You drink the liquid. It tastes sickly sweet. As the moments pass, you feel dizzy. You abrubtly fall to the floor, dead.");
    gameOver();
})

d3.select("#flashlight")
    .on("click",function() 
{
    d3.select("#output").text("You flick the switch on the flashlight. In front of you are two doors, one made of wood and the other steel.");
    d3.select("#table2").remove();
    d3.select("#table3").style("visibility","visible");
})

d3.select("#steel")
    .on("click",function() 
{
    d3.select("#output").text("You open the steel door. Behind it there nothing but fire. What happens next is obvious.");
    gameOver();
})

d3.select("#wood")
    .on("click",function() 
{
    d3.select("#output").text("You open the wooden door, behind it is a beautiful field of flowers. You are free!");
    d3.select("#table3").remove();
    d3.select("body").append("h3").text("Congratulations! You win!");
})