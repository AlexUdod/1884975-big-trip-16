import {createElement} from "../render";

const createSiteEmptyList = () => (
  `<div class="page-body__container">
    <section class="trip-events">
      <h2 class="visually-hidden">Trip events</h2>
          <p class="trip-events__msg">Click New Event to create your first point</p>
    </section>
  </div>`
);

export default class SiteEmptyList {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createSiteEmptyList();
  }

  removeElement() {
    this.#element = null;
  }
}
