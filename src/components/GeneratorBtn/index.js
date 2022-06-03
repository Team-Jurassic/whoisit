

export function GeneratorBtn({ $target }) {
    const $btn = document.createElement("button");
    $btn.innerText = "generate";
    $btn.classList.add("generator-btn");
    $target.appendChild($btn);
}
  
