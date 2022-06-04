export function GeneratorBtn({ $target, onClick }) {
  const $btn = document.createElement("button");
  $btn.innerText = "generate";
  $btn.classList.add("copy-btn");
  $target.appendChild($btn);

  $btn.addEventListener("click", (e) => {
    console.log("generatorBtn");
    if (e.target.tagName !== "BUTTON") {
      return;
    }
    onClick();
  });
}
