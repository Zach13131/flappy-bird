import { variables } from "./variables.js";
import { pipesContainer } from "./DOMelements.js";
import { generatePipe } from "./pipeGenerator.js";

export let pipesBlockWidth = 1000;

export const updatePipesBlockWidth = (newVal) => {
  pipesBlockWidth = newVal;
};

export let pipeMovingTimer;
export const pipeMoving = () => {
  pipeMovingTimer = setInterval(() => {
    if (!variables.isGameStarted) {
      pipesContainer.classList.remove("pipe-animation");

      clearInterval(pipeMovingTimer);
    }
    pipesContainer.style.width = pipesBlockWidth + "px";
    pipesBlockWidth += 500;
    generatePipe();
  }, 1000);
};
