// Shared retrieval-practice widget. Reveals a .quiz-answer sibling on click,
// without changing button label length/wording — keep answers hidden until asked for.
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".quiz-reveal-btn");
  if (!btn) return;
  const quiz = btn.closest(".quiz");
  const answer = quiz && quiz.querySelector(".quiz-answer");
  if (!answer) return;
  answer.classList.toggle("revealed");
  btn.textContent = answer.classList.contains("revealed") ? "Hide answer" : "Show answer";
});

// Multiple-choice quiz widget: click a .quiz-choice, get instant right/wrong
// feedback via data-correct="true" on the correct button. One answer per quiz.
document.querySelectorAll(".quiz-choices").forEach(function (choices) {
  const quiz = choices.closest(".quiz");
  const feedback = quiz && quiz.querySelector(".quiz-feedback");
  const buttons = choices.querySelectorAll(".quiz-choice");
  let answered = false;
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (answered) return;
      answered = true;
      const correct = btn.getAttribute("data-correct") === "true";
      buttons.forEach(function (b) {
        if (b.getAttribute("data-correct") === "true") b.classList.add("correct");
        else if (b === btn) b.classList.add("incorrect");
      });
      if (feedback) {
        feedback.textContent = correct
          ? "Correct."
          : "Not quite — the correct answer is highlighted above.";
        feedback.classList.add("show", correct ? "correct" : "incorrect");
      }
    });
  });
});

// Scenario widget: reveals a .scenario-analysis sibling on click, after the
// user has written their own reasoning in the textarea. No wording change.
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".scenario-reveal-btn");
  if (!btn) return;
  const scenario = btn.closest(".scenario");
  const analysis = scenario && scenario.querySelector(".scenario-analysis");
  if (!analysis) return;
  analysis.classList.toggle("revealed");
  btn.textContent = analysis.classList.contains("revealed")
    ? "Hide my analysis"
    : "Reveal my analysis";
});
