let display = "";
function assignUser() {
  let player_1 = document.getElementById("player-1").value;
  let player_2 = document.getElementById("player-2").value;
  display = player_1;
  let element = document.getElementById("container");
  element.style.display = "none";
  let game_ele = document.getElementById("game_display");
  game_ele.style.display = "block";
  let player_name = document.getElementById("message");
  player_name.innerText = `${display} you'r up!`;
}

let cells = document.querySelectorAll(".cell");
let turn = "X";

let win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    let player_1 = document.getElementById("player-1").value;
    let player_2 = document.getElementById("player-2").value;
    let player_name = document.getElementById("message");
    display = display == player_1 ? player_2 : player_1;
    player_name.innerText = `${display} you'r up!`;
    if (cell.innerText !== "") return;

    cell.innerText = turn;

    let winner = false;

    win.forEach((pattern) => {
      let [a, b, c] = pattern;

      if (
        cells[a].innerText === turn &&
        cells[b].innerText == turn &&
        cells[c].innerText == turn
      ) {
        winner = true;
      }
    });
    if (winner) {
      display = turn === "X" ? player_1 : player_2;
      console.log(display + " wins!");
      let player_name = document.getElementById("message");
      player_name.innerText = `${display} , congratulations you won!`;
      return;
    }
    turn = turn === "X" ? "O" : "X";
  });
});

// for (let i = 0; i < cells.length; i++) {
//   cells[i].addEventListener("click", () => {
//     if (cells[i].innerText !== "") {
//       return;
//     }
//     cells[i] = turn;
//     let winner = false;
//     for (let j = 0; j < win.length; j++) {
//       let [a, b, c] = win[j];
//       if (
//         cells[a].innerText === turn &&
//         cells[b].innerText === turn &&
//         cells[c].innerText === turn
//       ) {
//         winner = true;
//       }
//     }
//     if (winner) {
//       console.log(turn + " wins!");
//       return;
//     }
//     turn = turn === "X" ? "O" : "X";
//   });
// }

// let player_1 = "";
// let player_2 = "";
// let currentPlayer = "";
// function findCurrentPlayer(params) {
//   player_1 = document.getElementById("player-1").value;
//   player_2 = document.getElementById("player-2").value;
//   currentPlayer = player_1;
//   if (params == 1) {
//     currentPlayer = player_1;
//   } else if (params == 2) {
//     currentPlayer = player_2;
//   }
// }
// let temp = "";

// function onDivClick(id) {
//   let pl_1 = document.getElementById("player-1").value;
//   let pl_2 = document.getElementById("player-2").value;
// //   temp=pl_2;
//   let currentPlayer = temp;
//   temp=currentPlayer;
// //   currentPlayer=temp;

//   if (currentPlayer==pl_1 && currentPlayer=="") {
//     let currentDiv = document.getElementById(id);
//     currentDiv.innerText = "X";
//     temp = pl_2; //
//     // return;
//   } else if (currentPlayer == pl_2) {
//     let currentDiv2 = document.getElementById(id);
//     currentDiv2.innerText = "O";
//     temp = pl_1;
//     // return;
//   } else if(currentPlayer==temp){
//     let currentDiv3 = document.getElementById(id);
//     currentDiv3.innerText = "X";
//     temp = pl_2;
//   }
// }
