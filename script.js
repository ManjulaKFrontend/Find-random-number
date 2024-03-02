//input
var guessnumber = document.getElementById("guessnumber")
var result=document.getElementById("result")
var randomNumber = Math.floor(Math.random()*10)+1
var score = document.getElementById("score")
var total=10

function check(){

var enterednumber = guessnumber.value

if(randomNumber==enterednumber)
{
console.log("Right")
result.textContent="Right"
alert("YOU WON........")
}

else{
    total=total-1
    score.textContent="score:"+total
   console.log("wrong")
   result.textContent="wrong"
    

}

}







