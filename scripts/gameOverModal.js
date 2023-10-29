import { gameOverModal, body, bird } from "./DOMelements.js";
import { jumpFunc } from "./birdJump.js";
import { updateVariables, variables } from "./variables.js";

import { resetGame } from "./resetGame.js";

export const openGameOverModal = (score, highestScore) => {
  gameOverModal.style.display = "block";
  const scoreEl = gameOverModal.querySelector(".info-block__score-block span");
  const highestScoreEl = gameOverModal.querySelector(
    ".info-block__highest-score-block span"
  );
  scoreEl.textContent = score;
  highestScoreEl.textContent = highestScore;
};

const restartBtnHandler = () => {
  body.addEventListener("keypress", jumpFunc);
  // body.addEventListener("click", jumpFunc);
  updateVariables("fromTop", 325);
  bird.style.top = `${variables.fromTop}px`;
  resetGame();
  gameOverModal.style.display = "none";
};

gameOverModal.addEventListener("click", restartBtnHandler);
