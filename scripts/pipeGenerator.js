import { getRandomNum } from "./random.js";
import {
  PIPES_START_FROM,
  PIPE_WIDTH,
  MIN_PIPE_HEIGHT,
  MAX_PIPE_HEIGHT,
  MIN_HOLE_DISTANCE,
  MAX_HOLE_DISTANCE,
  MIN_DISTANCE_BETWEEN_PIPES,
  MAX_DISTANCE_BETWEEN_PIPES,
} from "./variables.js";
import { pipesBlock } from "./DOMelements.js";

export let currentDistance = PIPES_START_FROM;
export const updateCurrentDistance = (newVal) => {
  currentDistance = newVal;
};

export let pipesArray = [];
export const resetPipesArray = () => {
  pipesArray = [];
};

export const generatePipe = () => {
  const topPipeHeight = getRandomNum(MIN_PIPE_HEIGHT, MAX_PIPE_HEIGHT);

  let distanceBetweenPipes = getRandomNum(MIN_HOLE_DISTANCE, MAX_HOLE_DISTANCE);

  const bottomPipeHeight = 700 - distanceBetweenPipes - topPipeHeight;

  // if (curScore > 2) {
  //   // minHeight = 180;
  //   // maxHeight = 230;

  //   minPipeHeight = 100;
  //   maxPipeHeight = 300;
  //   // distanceBetweenPipes = 100;
  // } else {
  //   // minHeight = 250;
  //   // maxHeight = 350;

  //   MIN_HOLE_DISTANCE = 50;
  //   MAX_HOLE_DISTANCE = 250;
  // }
  const distance = getRandomNum(
    MIN_DISTANCE_BETWEEN_PIPES,
    MAX_DISTANCE_BETWEEN_PIPES
  );

  const pipeTemp = document.querySelector(".pipe-template");
  const pipeBlockFrag = document.importNode(pipeTemp.content, true);
  const pipeBlock = pipeBlockFrag.querySelector(".pipe-block");
  const topPipe = pipeBlock.querySelector(".top-pipe");
  const bottomPipe = pipeBlock.querySelector(".bottom-pipe");

  topPipe.style.height = topPipeHeight + "px";
  bottomPipe.style.height = bottomPipeHeight + "px";

  currentDistance += distance;
  pipeBlock.style.left = `${currentDistance}px`;
  pipesBlock.append(pipeBlock);

  const pipeObj = {
    pipeLeft: currentDistance,
    topPipeBotoom: topPipeHeight,
    bottomPipeTop: bottomPipeHeight,
    pipeWidth: PIPE_WIDTH,
  };

  pipesArray.push(pipeObj);
};
