var index = 0;
originalDOM = document.body.innerHTML;
let coordinates = "";
let wall = ["0"];

function change(e) {
  console.log(e);
}
function resetF() {
  for (let div of document.querySelectorAll("div")) {
    div.style.backgroundColor = "white";
  }
  x = prompt("Enter X size");
  y = prompt("Enter Y size");
  document.body.innerHTML = originalDOM;
}

function create_grid(x, y) {
  body = document.querySelector("body");
  lastDiv = document.querySelector("div");
  for (i = 0; i <= y; i++) {
    body.appendChild(lastDiv);
    for (j = 0; j <= x; j++) {
        coordinates = i.toString() + "," + j.toString();

        

      var newDiv = document.createElement("div");
      newDiv.classList.add("gridInline");
      newDiv.index = index;

      // Create walls
      if(wall.includes(coordinates) || i===0 || j===0 || i===19 || j===19){
        newDiv.style.backgroundColor = "black";
        
}else{newDiv.addEventListener("mouseover", function (e) {
    e.target.style.background = "blue";
  });}       
      
      lastDiv.appendChild(newDiv);
      index++;
      
    }
    lastDiv = document.createElement("div");
    lastDiv.classList.add("gridBlock");
  }
  reset = document.querySelector(".newGridbtn");
  reset.addEventListener("click", resetF);
}

create_grid(19, 19);

