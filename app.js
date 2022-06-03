import { CopyBtn, GeneratorBtn, Avatar } from "./src/components/index.js";

export default function App({ $target }) {
  this.state = {
    src: "",
    nickName: "",
  };

  this.setState = function (nextState) {
    this.state = nextState;
    avatar.setState(this.state.src);
  };

  const copyBtn = new CopyBtn({ $target });

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
