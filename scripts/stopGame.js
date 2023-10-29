import { pipesContainer, bird, restartBtn, body } from "./DOMelements.js";
import { updateBirdTimer } from "./updateBird.js";
import { pipeMovingTimer } from "./pipeMoving.js";
import { openGameOverModal } from "./gameOverModal.js";
import { gameOverModal, text } from "./DOMelements.js";

import { variables } from "./variables.js";
import { jumpFunc } from "./birdJump.js";

export const stopTheGame = (birdFromTop) => {
  bird.style.top = birdFromTop + "px";
  text.style.display = "block";

  const pipesContainerOffsetLeft = pipesContainer.offsetLeft;
  pipesContainer.classList.remove("pipe-animation");
  pipesContainer.style.left = pipesContainerOffsetLeft + "px";
  clearInterval(pipeMovingTimer);
  clearInterval(updateBirdTimer);
  openGameOverModal(variables.curScore, variables.highScore);
  gameOverModal.style.display = "block";
  setTimeout(() => {
    gameOverModal.classList.add("open-animation");
  }, 0);
  body.removeEventListener("keypress", jumpFunc);
  restartBtn.focus();
};
