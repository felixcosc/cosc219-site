/*
  COSC 219 — Lab 6 · main.js
  The only file that touches the page. Modules only work over http://,
  so open index.html with Live Server.
*/

// import TRAIL_DATA from ./data.js and TrailRegistry from ./registry.js
import TRAIL_DATA from "./data.js";
import { TrailRegistry } from "./registry.js";

const registry = TrailRegistry.fromData(TRAIL_DATA);
registry.find("Bear Creek").close();

const listItems = registry.describeAll().map(description => {
  const li = document.createElement("li");
  li.textContent = description;
  return li;
});
const list = document.getElementById("trails");
for (const item of items) {
  list.appendChild(item);
}

const summary = document.getElementById("summary");
summary.textContent = `${registry.size} trails, ${registry.openTrails.length} open, ${registry.totalDistance} km total. Steepest: ${registry.steepest.name}.`;
/* Build a registry from the data, close Bear Creek, then:

     · put one <li> per trail into #trails, using describeAll()
     · write a line into #summary in this exact shape:

       6 trails, 5 open, 46.7 km total. Steepest: Pincushion Peak.
*/
