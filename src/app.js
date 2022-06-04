import {
  CopyBtn,
  GeneratorBtn,
  Avatar,
  NickNameComponent,
} from "./components/index.js";
import { getFetch } from "./utils/getFetch.js";
import { makeElement } from "./utils/makeElement.js";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

export default function App({ $target }) {
  this.$container = makeElement("div", "container");
  $target.appendChild(this.$container);

  this.header = makeElement("header", "header", "Who is it?");
  this.$container.appendChild(this.header);

  this.$avatarContainer = makeElement("div", "avatar-container");
  this.$container.appendChild(this.$avatarContainer);

  this.$btnContainer = makeElement("div", "btn-container");
  this.$container.appendChild(this.$btnContainer);

  this.state = {
    src: "https://robohash.org/random nick name",
    nickName: "random nick name",
  };

  this.setState = function (nextState) {
    this.state = nextState;
    avatar.setState(this.state.src);
    nickNameComponent.setState(this.state.nickName);
  };

  new CopyBtn({
    $target: this.$btnContainer,
    onClick: async () => {
      try {
        if (this.state.src === "" || this.state.nickName === "") {
          return alert("Please enter your name and click generate");
        }

        const dataUrl = await htmlToImage.toPng(this.$avatarContainer);
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

  new GeneratorBtn({
    $target: this.$btnContainer,
    onClick: async () => {
      try {
        const nameData = await getFetch(
          `https://random-data-api.com/api/name/random_name`
        );
        const nickName = nameData.name;
        console.log(nickName);
        const res = await fetch(`https://robohash.org/${nickName}`);

        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const src = res.url;
        this.setState({ ...this.state, src, nickName });
      } catch (err) {
        console.log(err);
      }
    },
  });

  const avatar = new Avatar({
    $target: this.$avatarContainer,
    initialState: this.state.src,
  });

  const nickNameComponent = new NickNameComponent({
    $target: this.$avatarContainer,
    initialState: this.state.nickName,
  });
}
