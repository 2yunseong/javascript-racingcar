const Console = require('./utils/Console');
const { EMPTY_LINE, RESULT_TITLE, IS_WINNERS } = require('./utils/constants');

const OutputView = {
  printEmptyLine() {
    Console.print(EMPTY_LINE);
  },

  printResult() {
    Console.print(EMPTY_LINE);
    Console.print(RESULT_TITLE);
  },

  printWinners(winners) {
    Console.print(`${winners.join(', ')}${IS_WINNERS}`);
  },

  printError(error) {
    Console.print(error.message);
  },

  printCar(name, pos) {
    let result = `${name} : `;
    result += new Array(pos).fill('-').join('');
    Console.print(result);
  },
};

module.exports = OutputView;
