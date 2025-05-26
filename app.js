function bulbFunctionality(bulbBtn) {
  var imgHandler = document.getElementById("imgHandler");
  if (bulbBtn.innerHTML.trim() === "Bulb On") {
    imgHandler.height = "250";
    imgHandler.src = "./images/bulb on.jpg";
    bulbBtn.innerHTML = "Bulb Off";
  } else {
    imgHandler.src = "./images/bulb off.png";
    bulbBtn.innerHTML = "Bulb On";
  }
}
