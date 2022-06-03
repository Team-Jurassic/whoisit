export function CopyBtn({ $target }) {
  const $btn = document.createElement("button");
  $btn.innerText = "Copy";
  $btn.classList.add("copy-btn");
  $target.appendChild($btn);
}
