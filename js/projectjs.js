var firstImage = document.getElementById("changeMe");

var dol = firstImage.getAttribute("src");

document.getElementById("changeMe").onclick = swapImage;

function swapImage(){
  var newImg = document.getElementById("changeMe");
  var newImgSrc = newImg.getAttribute("src");

  if (newImgSrc == "images/Dolphin_128x128.png") {
    var ele = "images/Elephant_128x128.png";
    newImg.setAttribute( "src", ele);
  }

  else if (newImgSrc == "images/Elephant_128x128.png") {
      var pand = "images/Panda_128x128.png";
      newImg.setAttribute( "src", pand);
  }

  else if (newImgSrc == "images/Panda_128x128.png") {
    var turt = "images/Turtle_128x128.png"
    newImg.setAttribute( "src", turt);
  }

  else {
    dol = "images/Dolphin_128x128.png";
    newImg.setAttribute( "src", dol);
  }
}
