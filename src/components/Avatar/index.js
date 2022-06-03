import { makeElement } from "../../utils/makeElement.js";

export function Avatar({ $target, initialState }) {
  // img element 만들기
  const $avatar = makeElement("img", "avatar");
  $target.appendChild($avatar);
  this.state = initialState; // ''

  // Avatar 컴포넌트의 의 상태값
  this.setState = function (nextState) {
    this.state = nextState; // 새로운 src 값 https://robohash.org/yangsangwoo
    this.render();
  };

  // Avatar 컴포넌트의 View
  this.render = function () {
    $avatar.src = this.state; // '' => https://robohash.org/yangsangwoo
  };
}
