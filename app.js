import { CopyBtn, GeneratorBtn, Avatar } from "./src/components/index.js";
import * as htmlToImage from "./node_modules/html-to-image/dist/html-to-image.js";
import {
  toPng,
  toJpeg,
  toBlob,
  toPixelData,
  toSvg,
} from "./node_modules/html-to-image/dist/html-to-image.js";

export default function App({ $target }) {
  this.state = {
    src: "",
    nickName: "",
  };

  this.setState = function (nextState) {
    this.state = nextState;
    avatar.setState(this.state.src);
  };

  const copyBtn = new CopyBtn({
    $target,
    onClick: () => {
      htmlToImage
        .toPng($target)
        .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    },
  });

  const generatorBtn = new GeneratorBtn({
    $target,
    onClick: async (name = "yangsangwoo") => {
      try {
        const res = await fetch(`https://robohash.org/${name}`);
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
