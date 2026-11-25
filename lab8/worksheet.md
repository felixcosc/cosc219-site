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


**Lecture** — To review.


---

## Fault 2 

**Symptom** — On first analysis, the rating filter seems to work normally, but upon further investigation it is using loose equality conversion


**How I found it** — Since I moved to analyzing the ratings part next, I looked in the matches() function and found this.


**Cause** — Loose equality can type convert, which we do not want here.


**Fix** — Changed both loose equality converters to strict.


**Lecture** To review.


---

## Fault 3

**Symptom**


**How I found it**


**Cause**


**Fix**


**Lecture**


---

## Fault 4

**Symptom**


**How I found it**


**Cause**


**Fix**


**Lecture**


---

## Fault 5

**Symptom**


**How I found it**


**Cause**


**Fix**


**Lecture**


---

## Fault 6

**Symptom**


**How I found it**


**Cause**


**Fix**


**Lecture**


---

## Fault 7

**Symptom**


**How I found it**


**Cause**


**Fix**


**Lecture**


---

## Fault 8

**Symptom**


**How I found it**


**Cause**


**Fix**


**Lecture**


---

## One more thing

**Which fault took you longest, and why?**


**Which one would you never have found without the checker?**

