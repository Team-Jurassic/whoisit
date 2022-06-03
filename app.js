import { CopyBtn } from "./src/components/index.js";

export default function App({ $target }) {
  console.log("App", $target);

  const copyBtn = new CopyBtn({ $target });
}
