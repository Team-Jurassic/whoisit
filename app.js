import { CopyBtn } from "./src/components/index.js";
import { getFetch } from "./src/components/index.js";
import { GeneratorBtn } from "./src/components/index.js";

const url = `https://random-data-api.com/api/name/random_name`;

export default function App({ $target }) {
  console.log("App", $target);

  const copyBtn = new CopyBtn({ $target });
  const generatorBtn = new GeneratorBtn({ $target });

  // getFetch(url);

  // console.log(getFetch(url));
}
