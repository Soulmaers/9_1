import GameSavingLoader from './GameSavingLoader';

export default GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  throw new Error(error);
});
