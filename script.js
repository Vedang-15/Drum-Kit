for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    makesound(this.innerHTML);

    addAnimation(this.innerHTML);

  });

}


document.addEventListener("keydown",function(event){       //here event refers to action that triggered keydown(i.e pressing of key on keyboars and event.key gives us the key that was pressed)
  makesound(event.key);

  addAnimation(event.key);

});


function makesound(value){
  switch (value) {
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
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

  }

}


function addAnimation(current_key) {
  var current_class= "."+ current_key;

  document.querySelector(current_class).classList.add("pressed");

  setTimeout(function(){
    document.querySelector(current_class).classList.remove("pressed");

  }, 100);
}
