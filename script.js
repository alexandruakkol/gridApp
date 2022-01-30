var index = 0;
var game_is_over = false;
originalDOM = document.body.innerHTML;
let coordinates = "";
var audio = new Audio("s.mp3");
let wall = [
  "0,1",
  "1,1",
  "1,2",
  "1,3",
  "1,4",
  "1,5",
  "2,5",
  "3,5",
  "3,4",
  "3,3",
  "4,3",
  "5,3",
  "6,3",
  "0,0",
  "0,2",
  "1,0",
  "2,0",
  "2,1",
  "2,2",
  "6,2",
  "6,1",
  "7,1",
  "8,1",
  "9,1",
  "9,2",
  "9,3",
  "10,3",
  "10,4",
  "10,5",
  "10,6",
  "10,7",
  "11,7",
  "12,7",
  "13,7",
  "13,6",
  "13,5",
  "14,5",
  "15,5",
  "16,5",
  "16,6",
  "16,7",
  "16,8",
  "16,9",
  "15,9",
  "14,9",
  "13,9",
  "12,9",
  "11,9",
  "10,9",
  "9,9",
  "8,9",
  "7,9",
  "6,9",
  "5,9",
  "4,9",
  "3,9",
  "2,9",
  "1,9",
  "1,10",
  "1,11",
  "2,11",
  "3,11",
  "3,12",
  "3,13",
  "3,14",
  "4,14",
  "5,14",
  "5,13",
  "6,12",
  "5,12",
  "7,12",
  "8,12",
  "8,13",
  "8,14",
  "8,15",
  "8,16",
  "9,16",
  "10,16",
  "10,15",
  "10,14",
  "11,14",
  "12,14",
  "13,14",
  "13,15",
  "14,15",
  "14,16",
  "15,17",
];
function game_over() {
  if (game_is_over === false) {
    audio.play();
    titleObj = document.querySelector(".animate__rollIn");
    titleObj.textContent = "GAME OVER";
    titleObj.style = "font-size:100px;"
    titleObj.classList.remove("animate__rollIn");
    titleObj.classList.add("jello-horizontal");
    divNodeList = document.querySelectorAll("div");

    for (let node of divNodeList) {
        node.remove();
      //node.style.backgroundColor = "black";
    }
    game_is_over = true;
  }
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

      // Create path
      if (wall.includes(coordinates)) {
        newDiv.addEventListener("mouseover", function (e) {
          e.target.style.background = "blue";
        });
      } else {
        if (coordinates === "15,18") {
          newDiv.style.backgroundColor = "orange";
          newDiv.addEventListener("mouseover", game_over);
        } else {
          newDiv.style.backgroundColor = "black";
          newDiv.addEventListener("mouseover", game_over);
        }
      }

      lastDiv.appendChild(newDiv);
      index++;
    }
    lastDiv = document.createElement("div");
    lastDiv.classList.add("gridBlock");
  }
  //reset = document.querySelector(".playBtn");
  //reset.addEventListener("click", resetF);
}

playBtn = document.querySelector(".playBtn");
playBtn.addEventListener("click", () => {
  document.querySelector("body").removeChild(document.querySelector("button"));
  document.querySelector(".wave").style = "display:none;";document.querySelector(".animate__rollIn").style = "font-size:50px;"
  create_grid(19, 19);
});
