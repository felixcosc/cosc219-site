# Lab 8 — Debugging worksheet

Fill one block in for each fault you find. **The reasoning is what is marked**,
not the fix — a one-line correction with no explanation earns very little.

Copy the block as many times as you need.

---

## Fault 1

**Symptom** — Clicking apply made the page reload, not submitting anything properly and resetting the search.

**How I found it** — Hit apply after typing in a trail name and observing the page reload and no search finished.


**Cause** — The default behavior of the form was not prevented


**Fix** — Added event.preventDefault() before apply().


**Lecture** — JavaScript


---

## Fault 2 

**Symptom** — On first analysis, the rating filter seems to work normally, but upon further investigation it is using loose equality conversion


**How I found it** — Since I moved to analyzing the ratings part next, I looked in the matches() function and found this.


**Cause** — Loose equality can type convert, which we do not want here.


**Fix** — Changed both loose equality converters to strict.


**Lecture** JavaScript


---

## Fault 3

**Symptom** — Observed trails not sorting from shortest length to longest, which is a priority as opposed to alphabetical by default.


**How I found it** — Moved down to looking at my base results next and noticed there was zero sorting.


**Cause** — sort() without a proper comparison sorts elements as strings.


**Fix** Adjusted to using [trails...].sort((a, b) => a.km - b.km) to sort in ascending order without modifying the original array.


**Lecture** JavaScript


---

## Fault 4

**Symptom** — The trail names could be interpreted as HTML due to innerHTML implementation.


**How I found it** — Going through the functions I noticed that as an issue due to the use of innerHTML with the data.


**Cause** — Potential XSS vulnerability.


**Fix** — Created spans with document.createElement() and textContent for the names and km.


**Lecture** — JavaScript


---

## Fault 5

**Symptom** — Improper HTML heading tags.


**How I found it** — The block used h1 and h3 but no h2.


**Cause** — Makes the code structure more confusing.


**Fix** Changed h3 to h2.


**Lecture** HTML


---

## Fault 6

**Symptom** — No matching label for tag to connect to the search.


**How I found it** — Compared the search input with the rating one to see if they matched.


**Cause** — The search input was missing a label marker.


**Fix** — Added a label marker to associate with the input ID.


**Lecture** — HTML


---

## Fault 7

**Symptom** — No border-box within css stylesheet.


**How I found it** — Noticed in the #search block, the code was manually setting sizing without border-box, which would have given improper sizing.


**Cause** — Will make sizing improper from intent.


**Fix** — Added a * block for box-sizing: border-box;


**Lecture** — CSS


---

## Fault 8

**Symptom** — Keyboard focus was invisible.

 
**How I found it** — Checker, as well as my understanding of how focus works.


**Cause** — outline: none; makes it so there is zero outline when you keyboard focus.


**Fix** — Added 2px solid black to give it visible focus.


**Lecture** — CSS


---

## One more thing

**Which fault took you longest, and why?**
Fault 4 for sure, remembering how to go about fixing the innerHTML properly.

**Which one would you never have found without the checker?**
I would never have found Fault 4 or 7 without the checker.
