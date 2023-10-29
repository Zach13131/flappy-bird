import { stopTheGame } from "./stopGame.js";
import { variables, updateVariables, GRAVITY } from "./variables.js";
import { bird } from "./DOMelements.js";

export let updateBirdTimer;

export const updateBird = () => {
  updateBirdTimer = setInterval(() => {
    if (variables.fromTop >= 800) {
      stopTheGame();
      clearInterval(updateBirdTimer);
      bird.style.top = `${650}px`;
      return;
    }
    bird.style.top = `${variables.fromTop + GRAVITY}px`;
    updateVariables("fromTop", variables.fromTop + GRAVITY);
  }, 50);
};
