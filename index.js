for(var i=0;i<document.querySelectorAll(".drum").length;i++)  //To Assign event Listener to Every Element
{

  document.querySelectorAll("button")[i].addEventListener("click",function ()
  {
    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);

    addAnimation(buttonInnerHtml);

  });

}


document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  addAnimation(event.key);

});



function makeSound(key){

  switch(key)
  {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "k":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "l":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    default:
    console.log("click right place");
  }

}


function addAnimation(addToThisClass)
{
  var element = document.querySelector("." + addToThisClass); //jo class click kiya usko select karke element mei dal diya

  element.classList.add("pressed");//agar w click kiya toh w ke class list mei aur ek "pressed" kaeke class add kar de

  setTimeout(function (){

    element.classList.remove("pressed");//jo list mei class w hai woh list mei se pressed class nikal de

  },100);
}
