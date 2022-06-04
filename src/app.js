import { CopyBtn, GeneratorBtn, Avatar, getFetch } from "./components/index.js";

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
    onClick: () => {},
  });
  

  const generatorBtn = new GeneratorBtn({
    $target,
    onClick: async (name = "nickName") => {
      try {
        const res = await fetch(`https://robohash.org/${name}`);
        // const nameRes = await fetch(`https://random-data-api.com/api/name/random_name`);
        // const nameData = await nameRes.json();
        // console.log(nameData.name);
        getFetch(`https://random-data-api.com/api/name/random_name`);
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = res.url;
        // const nickName = nameData.name;
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
