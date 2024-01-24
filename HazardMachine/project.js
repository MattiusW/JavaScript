// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again

//Import user input
const prompt = require('prompt-sync')()

const ROWS = 3
const COLS = 3

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8
}

const SYMBOLS_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2
}

const deposit = () => {
  while (true) {
    const depositAmount = prompt('Enter a deposit amount: ')
    const numberDepositAmount = parseFloat(depositAmount)

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log('Ivalid deposit amount, try again.')
    } else {
      return numberDepositAmount
    }
  }
}

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt('Enter the number of lines to bet on (1-3): ')
    const numberOfLines = parseFloat(lines)

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log('Ivalid number of lines, try again.')
    } else {
      return numberOfLines
    }
  }
}

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt('Enter the bet per line: ')
    const numberBet = parseFloat(bet)

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines)) {
      console.log('Ivalid bet, try again.')
    } else {
      return numberBet
    }
  }
}

const spin = () => {
  const symbols = []
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    console.log(symbol, count);
  }
}

spin();
let balance = deposit()
const numberOfLines = getNumberOfLines()
const bet = getBet(balance, numberOfLines)
