export function CopyBtn({ $target, onClick }) {
  const $btn = document.createElement("button");
  $btn.innerText = "Copy";
  $btn.classList.add("copy-btn");
  $target.appendChild($btn);

  $btn.addEventListener("click", (e) => {
    console.log("copyBtn");
    onClick();
  });
}
