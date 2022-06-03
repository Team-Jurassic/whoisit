export function CopyBtn({ $target, onClick }) {
  const $btn = document.createElement("button");
  $btn.innerText = "Copy";
  $btn.classList.add("copy-btn");
  $target.appendChild($btn);

  console.log(htmlToImage);
  $btn.addEventListener("click", (e) => {
    onClick();
  });
}
