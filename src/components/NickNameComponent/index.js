export function NickNameComponent({ $target, initialState }) {
  this.state = initialState;

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render = function () {
    const markup = this.makeMarkup();
    $target.querySelector(".nick-name")?.remove();
    $target.insertAdjacentHTML("beforeend", markup);
  };

  this.makeMarkup = function () {
    return `
        <div class="nick-name">
        <h1>${this.state}</h1>
        </div>
    `;
  };
  this.render();
}
