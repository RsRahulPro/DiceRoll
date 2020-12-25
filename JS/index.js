var p2="PLAYER 2";
var p1="PLAYER 1";
document.getElementById("p1btn").addEventListener("click",function() {p1 = prompt("PLAYER 1 ENTER YOUR NAME: ");
document.getElementById("p1cell").innerHTML='<a class="namebtn">'+p1.toUpperCase()+'</a>'})
document.getElementById("p2btn").addEventListener("click",function() {p2 = prompt("PLAYER 2 ENTER YOUR NAME: ");
document.getElementById("p2cell").innerHTML='<a class="namebtn">'+p2.toUpperCase()+'</a>'})
/*function nameTake(obj){
  if(obj===document.querySelector("#p1btn"))
  {
    p1 = prompt("PLAYER 1 ENTER YOUR NAME: ");
    document.getElementById("p1cell").innerHTML=p1.toUpperCase();
  }
  else if(obj===document.querySelector("#p2btn")){
    p2= prompt("PLAYER 2 ENTER YOUR NAME: ");
    document.getElementById("p2cell").innerHTML=p2.toUpperCase();
  }
}*/

var num1;
var num2;
document.getElementById("rollbtn").addEventListener("click",function(){

    num1=Math.floor(((Math.random())*6+1));
    num2=Math.floor(((Math.random())*6+1));

    if(num1===1){
      document.getElementById("p1pic").src="img/die_1.png";
    }
    else if (num1===2) {

      document.getElementById("p1pic").src="img/die_2.png";
    }
    else if (num1===3) {
      document.getElementById("p1pic").src="img/die_3.png";
    }
    else if (num1===4) {
      document.getElementById("p1pic").src="img/die_4.png";
    }
    else if (num1===5) {
      document.getElementById("p1pic").src="img/die_5.png";
    }
    else if (num1===6) {
      document.getElementById("p1pic").src="img/die_6.png";
    }


    if(num2===1){
      document.getElementById("p2pic").src="img/die_1.png";
    }
    else if (num2===2) {

      document.getElementById("p2pic").src="img/die_2.png";
    }
    else if (num2===3) {
      document.getElementById("p2pic").src="img/die_3.png";
    }
    else if (num2===4) {
      document.getElementById("p2pic").src="img/die_4.png";
    }
    else if (num2===5) {
      document.getElementById("p2pic").src="img/die_5.png";
    }
    else if (num2===6) {
      document.getElementById("p2pic").src="img/die_6.png";
    }

    if(num1>num2){
      document.getElementById("winner").innerHTML=p1.toUpperCase() + " IS THE WINNER! ✨";
    }
    else if (num1<num2) {

      document.getElementById("winner").innerHTML=p2.toUpperCase() + " IS THE WINNER! ✨";

    }
    else{
      document.getElementById("winner").innerHTML="IT'S A TIE 🥂";
    }


})
