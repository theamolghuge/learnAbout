/*
  Reusable multiple-choice quiz component.

  Markup contract:
  <div class="quiz" data-answer="response">
    <p class="quiz-q">Question text...</p>
    <div class="quiz-options">
      <button data-choice="trigger">Trigger</button>
      <button data-choice="reaction">Reaction</button>
      <button data-choice="response">Response</button>
    </div>
    <p class="quiz-feedback" hidden>Explanation shown after any answer is picked.</p>
  </div>

  Keep option labels equal length (word count and, where possible, character
  count) so formatting never leaks the answer — see NOTES.md.
*/
(function () {
  function initQuiz(quiz) {
    var answer = quiz.getAttribute("data-answer");
    var buttons = quiz.querySelectorAll(".quiz-options button");
    var feedback = quiz.querySelector(".quiz-feedback");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var choice = btn.getAttribute("data-choice");
        buttons.forEach(function (b) { b.disabled = true; });
        if (choice === answer) {
          btn.classList.add("correct");
        } else {
          btn.classList.add("incorrect");
          buttons.forEach(function (b) {
            if (b.getAttribute("data-choice") === answer) b.classList.add("correct");
          });
        }
        if (feedback) feedback.hidden = false;
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".quiz").forEach(initQuiz);
  });
})();
