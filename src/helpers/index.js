export function generateMap(length) {
  if (length) {
    let arr = [];

    for (let i = 0; i < length * length; i++) {
      arr.push({
        clickable: false,
        owner: undefined
      });
    }

    return arr;
  }
}

export function getRandomCell(arr, maxNumber) {
  return arr[Math.floor(Math.random() * maxNumber)];
}

export function determineWinner(arr) {
  let playerWins = 0;
  let computerWins = 0;
  let fieldsHalf = arr.length / 2;

  arr.forEach(item => {
    if (item.owner === "player") playerWins += 1;
    if (item.owner === "computer") computerWins += 1;
  });

  if (playerWins > fieldsHalf) return "Player";
  if (computerWins > fieldsHalf) return "Computer";

  return null;
}
