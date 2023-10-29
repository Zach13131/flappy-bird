import { elStyles } from "./DOMelements.js";

export const PIPE_WIDTH = 80;
export const PIPES_START_FROM = 1000;
export const PIPES_SPEED = 100;

export const MIN_PIPE_HEIGHT = 50;
export const MAX_PIPE_HEIGHT = 250;

export const MIN_HOLE_DISTANCE = 180;
export const MAX_HOLE_DISTANCE = 250;

export const MIN_DISTANCE_BETWEEN_PIPES = 250;
export const MAX_DISTANCE_BETWEEN_PIPES = 350;

export const JUMP_HEIGHT = 300;
export const GRAVITY = 17;

export const variables = {
  curScore: 0,
  highScore: 0,
  count: 0,
  isGameStarted: false,
  fromTop: parseInt(elStyles.top),
};

export const updateVariables = (variable, newVal) => {
  variables[variable] = newVal;
};

// export const updateCurScore = (newScore) => {
//   curScore = newScore;
// };

// export const updateHighScore = (newScore) => {
//   highScore = newScore;
// };

// export let count = 0;
// export const updateCount = (newVal) => {
//   count = newVal;
// };

// export let isGameStarted = false;
// export const updateGameStarted = (newVal) => {
//   isGameStarted = newVal;
// };

// export let fromTop = parseInt(elStyles.top);
// export const updateFromTop = (newVal) => {
//   fromTop = newVal;
// };
