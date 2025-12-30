const posts = JSON.parse(localStorage.getItem("posts")) || [];

function render() {
  const search = document.getElementById("search").value.toLowerCase();
  const box = document.getElementById("posts");
  box.innerHTML = "";

  posts
    .filter(p => p.game.toLowerCase().includes(search))
    .forEach(p => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>🎮 ${p.game}</h3>
        <p>👤 ${p.owner}</p>
        <p>🏆 ${p.rank || "—"}</p>
        <a href="profile.html?id=${p.id}">Открыть</a>
      `;
      box.appendChild(div);
    });
}

render();
