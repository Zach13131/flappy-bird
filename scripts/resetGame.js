import { updateVariables, PIPES_START_FROM } from "./variables.js";

import { resetPipesArray } from "./pipeGenerator.js";
import { pipesContainer, pipesBlock, score } from "./DOMelements.js";
import { updatePipesBlockWidth } from "./pipeMoving.js";
import { updateCurrentDistance } from "./pipeGenerator.js";

export const resetGame = () => {
  updateVariables("isGameStarted", false);
  pipesContainer.style.left = "0px";
  updateVariables("fromTop", 325);
  updateVariables("count", 0);
  updatePipesBlockWidth(1000);
  pipesBlock.innerHTML = "";
  updateCurrentDistance(PIPES_START_FROM);
  resetPipesArray();
  score.textContent = 0;
  updateVariables("curScore", 0);
  // clearInterval(updateBirdTimer);
};
