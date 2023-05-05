const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
  <div class="key">
      ${event.key}
      <small>Event.Key</small>
    </div>

    <div class="key">
      ${event.keyCode}
      <small>Event.Number</small>
    </div>

    <div class="key">
      ${event.code}
      <small>Event.Code</small>
    </div>
  `;
});
