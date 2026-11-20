/*
  COSC 219 — Lab 7 · app.js
  The only file that touches the page. Open index.html with Live Server.
*/

// import from ./storage.js, ./render.js and ./trails.js

import { renderTrails, summaryText } from "./render.js";
import {
   isValidTrail,
   makeTrail,
   addTrail,
   removeTrail,
   toggleTrail,
   findAction
} from "./trails.js";
import {
   saveTrails,
   loadTrails,
   clearTrails
} from "./storage.js";
/* Load the saved trails into a `let` — the array is replaced, not edited,
   every time something changes. */
let trails = loadTrails();

const list = document.getElementById("trail-list");
const summary = document.getElementById("summary");
const error = document.getElementById("error");
const form = document.getElementById("add-form");
const nameInput = document.getElementById("trail-name");
const kmInput = document.getElementById("trail-km");
/* update() — redraw the list, rewrite the summary, and save.
   Call it whenever the data changes, and once at the very bottom of this
   file so the page is not blank on load. */
function update(){
   renderTrails(trails, list);
   summary.textContent = summaryText(trails);
   saveTrails(trails);
}

/* The add form.

   A submit reloads the page by default, throwing away everything in
   memory. Stop that first, then validate, then add.

   When the input is invalid: put a message in #error, focus the name
   field, and return without changing anything.
   When it is valid: clear #error, add the trail, reset the form. */
form.addEventListener("submit", event => {
   event.preventDefault();
   const name = nameInput.value;
   const km = kmInput.value;

   if (!isValidTrail(name, km)) {
      error.textContent = "Please enter a valid trail name and distance.";
      nameInput.focus();
      return;
   }
   error.textContent = "";
   const trail = makeTrail(name, km);
   trails = addTrail(trails, trail);
   form.reset();
   update();
});

list.addEventListener("click", event => {
   error.textContent = "";
   const result = findAction(event.target);
   if(!result) {
      return;
   }
   const { action, id } = result;
   if (action === "toggle"){
      trails = toggleTrail(trails, id);
   } else if (action === "delete") {
      trails = removeTrail(trails, id);
   }
   update();
});
const clearButton = document.getElementById("clear-all");
clearButton.addEventListener("click", () => {
   trails = [];
   clearTrails();
   update();
});

update();
