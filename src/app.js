import {
  CopyBtn,
  GeneratorBtn,
  Avatar,
  NickNameComponent,
} from "./components/index.js";
import { getFetch } from "./utils/getFetch.js";
import { makeElement } from "./utils/makeElement.js";

export default function App({ $target }) {
  this.$avatarBox = makeElement("div", { className: "avatar-box" });
  $target.appendChild(this.$avatarBox);

  this.state = {
    src: "",
    nickName: "",
  };

  this.setState = function (nextState) {
    console.log("app", nextState);
    this.state = nextState;
    avatar.setState(this.state.src);
    nickNameComponent.setState(this.state.nickName);
  };

  new CopyBtn({
    $target,
    onClick: () => {},
  });

  new GeneratorBtn({
    $target,
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
    $target,
    initialState: this.state.src,
  });

  const nickNameComponent = new NickNameComponent({
    $target,
    initialState: this.state.nickName,
  });
}
