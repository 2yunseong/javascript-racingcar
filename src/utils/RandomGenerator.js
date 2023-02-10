import constants from './constants';
const RandomGenerator = {
  pickRandomNumber() {
    return Math.floor(Math.random() * constants.RANDOM_RANGE);
  },
};

export default RandomGenerator;
