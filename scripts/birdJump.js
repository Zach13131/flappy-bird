import { variables, updateVariables, JUMP_HEIGHT } from "./variables.js";

import { pipeMoving } from "./pipeMoving.js";
import { checkCrash } from "./checkCrash.js";
import { pipesContainer } from "./DOMelements.js";

import { updateBird } from "./updateBird.js";

import { bird, text } from "./DOMelements.js";

export const jumpFunc = () => {
  if (!variables.count) {
    pipeMoving();
    checkCrash();
    text.style.display = "none";
  }
  if (!variables.isGameStarted) {
    pipesContainer.classList.add("pipe-animation");
    updateBird();
    console.log(variables.isGameStarted);
    updateVariables("isGameStarted", true);
    console.log(variables.isGameStarted);
  }

  bird.style.top = `${variables.fromTop - JUMP_HEIGHT}px`;
  const newVal = variables.fromTop - 300;
  updateVariables("fromTop", newVal);

  updateVariables("count", variables.count + 1);

  console.log("UPDATED");
};
