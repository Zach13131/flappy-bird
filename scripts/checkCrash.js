import { pipesArray } from "./pipeGenerator.js";
import {
  pipesContainer,
  bird,
  pipesBlock,
  gameBlock,
  score,
  body,
} from "./DOMelements.js";

import { stopTheGame } from "./stopGame.js";

import { variables, updateVariables } from "./variables.js";

console.log("file: checkCrash.js:15 ~ highScore:", variables.highScore);

console.log("file: checkCrash.js:15 ~ curScore:", variables.curScore);

export const checkCrash = () => {
  const timerA = setInterval(() => {
    for (let pipe of pipesArray) {
      const containerLeft = pipesContainer.offsetLeft;

      const pipeFromInsideLeft = +pipe.pipeLeft + +containerLeft;

      const pipeFromBirdLeft =
        pipeFromInsideLeft - bird.offsetLeft - bird.offsetWidth;

      const birdHeightFromBottom =
        gameBlock.offsetHeight - (bird.offsetTop + bird.offsetHeight);

      if (
        pipeFromBirdLeft <= 0 &&
        (bird.offsetTop <= pipe.topPipeBotoom ||
          birdHeightFromBottom <= pipe.bottomPipeTop)
      ) {
        stopTheGame(bird.offsetTop);
        clearInterval(timerA);
      }
      //change speed after N'th pipe (work with glitch)
      // if (variables.curScore > 2) {
      //   body.style.setProperty("--background-speed", "-2590000%");
      // }

      if (bird.offsetLeft >= pipeFromInsideLeft + pipe.pipeWidth) {
        pipesArray.shift();

        const newScore = variables.curScore + 1;
        updateVariables("curScore", newScore);
        const highScoreEl = document.querySelector(".high-score");

        score.textContent = variables.curScore;

        if (variables.curScore > variables.highScore) {
          updateVariables("highScore", variables.curScore);
        }

        highScoreEl.textContent = variables.highScore;
        if (pipeFromInsideLeft <= 0) {
          setTimeout(() => {
            pipesBlock.firstElementChild.remove();
          }, 2000);
        }
      }
    }
  }, 50);
};
