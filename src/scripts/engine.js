const emojis = [
  "☠",
  "☠",
  "👻",
  "👻",
  "👽",
  "👽",
  "👾",
  "👾",
  "🤖",
  "🤖",
  "🧐",
  "🧐",
  "🤓",
  "🤓",
  "💩",
  "💩",
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item"; // CORRIGIDO: Removido o ponto e vírgula
  box.innerHTML = shuffleEmojis[i]; // CORRIGIDO: Nome da variável "shuffleEmojis"
  document.querySelector(".game").appendChild(box);
}
