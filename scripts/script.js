import { body } from "./DOMelements.js";
import { jumpFunc } from "./birdJump.js";

// body.addEventListener("click", jumpFunc);
body.addEventListener("keypress", jumpFunc);
