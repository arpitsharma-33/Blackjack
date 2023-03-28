let firstcard = getrandomcard();
let secondcard = getrandomcard();
let cards = [firstcard, secondcard];
let sum = firstcard + secondcard;
let hasblackjack = false;
let isAlive = false;
let messaage = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector(".cards-el");

let player = {
  name: "POKER ",
  chips: 120,
  func: function () {
    console.log("hello");
  },
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " : $" + player.chips; //+ player.func()

function getrandomcard() {
  let randomnum = Math.floor(Math.random() * 13) + 1;
  if (randomnum === 1) {
    return 11;
  } else if (randomnum == 11 || randomnum == 12 || randomnum == 13) {
    return 10;
  } else {
    return randomnum;
  }
}

//console.log(messageEl)
function startgame() {
  isAlive = true;

  rendergame();
}
function rendergame() {
  sumEl.textContent = "SUM : " + sum;
  cardsEl.textContent = "CARDS : ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum < 21) {
    messaage = "Do you want to draw a new card ?? ";
  } else if (sum === 21) {
    messaage = "Wohooo!! you've got a blackjack ";
    hasblackjack = true;
  } else if (sum > 21) {
    messaage = "You're out of the game ";
    isAlive = false;
  }
  messageEl.textContent = messaage;
}
function newcard() {
  if (isAlive === true && hasblackjack === false) {
    let card = getrandomcard();
    sum += card;
    cards.push(card);
    rendergame();
  }
}
