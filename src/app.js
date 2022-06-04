import { CopyBtn, GeneratorBtn, Avatar } from "./components/index.js";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

export default function App({ $target }) {
  this.state = {
    src: "",
    nickName: "yangsangwoo",
  };

  this.setState = function (nextState) {
    this.state = nextState;
    avatar.setState(this.state.src);
  };

  const copyBtn = new CopyBtn({
    $target,
    onClick: async () => {
      try {
        if (this.state.src === "" || this.state.nickName === "") {
          return alert("Please enter your name and click generate");
        }

        const dataUrl = await htmlToImage.toPng($target);
        const t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = dataUrl;
        t.select();
        document.execCommand("copy");
        document.body.removeChild(t);
        alert(`Avatar of ${this.state.nickName} is copied to your clipboard`);
      } catch (e) {
        console.error("oops, something went wrong!", e);
      }
    },
  });

  const generatorBtn = new GeneratorBtn({
    $target,
    onClick: async () => {
      try {
        const res = await fetch(`https://robohash.org/${this.state.nickName}`);
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = res.url;
        this.setState({ ...this.state, src: data });
      } catch (err) {
        console.log(err);
      }
    },
  });

  const avatar = new Avatar({
    $target,
    initialState: this.state.src,
  });
}
