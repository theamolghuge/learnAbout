/*
  Reusable local-scratch journal component.

  Markup contract:
  <div class="journal" data-key="trigger-gap">
    <textarea placeholder="..."></textarea>
    <button>Save entry</button>
    <div class="journal-log"></div>
  </div>

  Entries save to localStorage under "journal:<data-key>", scoped to this
  browser and this exact file — nothing is synced anywhere. Treat it as a
  scratch pad for jotting in the moment, not permanent storage: bring what
  you write here back into conversation with your teacher, who will fold
  real insights into learning-records/.
*/
(function () {
  function storageKey(el) {
    return "journal:" + el.getAttribute("data-key");
  }

  function load(el) {
    try {
      return JSON.parse(localStorage.getItem(storageKey(el)) || "[]");
    } catch (e) {
      return [];
    }
  }

  function save(el, entries) {
    localStorage.setItem(storageKey(el), JSON.stringify(entries));
  }

  function render(el) {
    var log = el.querySelector(".journal-log");
    var entries = load(el);
    log.innerHTML = "";
    if (!entries.length) return;
    entries.slice().reverse().forEach(function (entry) {
      var div = document.createElement("div");
      div.className = "journal-entry";
      var time = document.createElement("time");
      time.textContent = new Date(entry.ts).toLocaleString();
      var text = document.createElement("div");
      text.textContent = entry.text;
      div.appendChild(time);
      div.appendChild(text);
      log.appendChild(div);
    });
  }

  function initJournal(el) {
    var textarea = el.querySelector("textarea");
    var button = el.querySelector("button");
    render(el);
    button.addEventListener("click", function () {
      var text = textarea.value.trim();
      if (!text) return;
      var entries = load(el);
      entries.push({ ts: new Date().getTime(), text: text });
      save(el, entries);
      textarea.value = "";
      render(el);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".journal").forEach(initJournal);
  });
})();
