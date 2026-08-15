// Shared retrieval-practice widget. Reveals a .quiz-answer sibling on click,
// without grading freeform input — used for "generate your own answer, then compare" drills.
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".quiz-reveal-btn");
  if (!btn) return;
  const quiz = btn.closest(".quiz");
  const answer = quiz && quiz.querySelector(".quiz-answer");
  if (!answer) return;
  answer.classList.toggle("revealed");
  btn.textContent = answer.classList.contains("revealed") ? "Hide" : "Compare with a useful pattern";
});
