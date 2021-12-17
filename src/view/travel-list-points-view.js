import {createElement} from "../render";

const createSiteListTemplate = () => (
  `<ul class="trip-events__list">
    </ul>`
);

export default class SiteList {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createSiteListTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
