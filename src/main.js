import SiteMenu from './view/travel-menu-view';
import SiteFilters from './view/travel-filters-view';
import SiteSort from './view/travel-sort-view';
import SiteList from './view/travel-list-points-view';
import SiteForm from './view/travel-form-view';
import SiteFormEditor from './view/travel-form-editor-view';
import SiteDestinationPoint from './view/trave-destination-point-view';
import {render, RenderPosition} from './render';
import {generateTask} from './mock/test-data';


const siteHeader = document.querySelector('.page-header');
const siteMenuContainer = siteHeader.querySelector('.trip-controls__navigation');
const siteFiltersContainer = siteHeader.querySelector('.trip-controls__filters');

const siteMain = document.querySelector('.page-main');
const siteSortContainer = siteMain.querySelector('.trip-events');

const listComponent = new SiteList();

const renderTask = (taskListElement, task) => {
  const taskComponent = new SiteDestinationPoint(task);
  const taskEditComponent = new SiteFormEditor();

  const replaceCardToForm = () => {
    taskListElement.replaceChild(taskEditComponent.element, taskComponent.element);
  };

  const replaceFormToCard = () => {
    taskListElement.replaceChild(taskComponent.element, taskEditComponent.element);
  };

  taskComponent.element.querySelector('.event__rollup-btn').addEventListener('click', function () {
    replaceCardToForm();
  });

  taskEditComponent.element.querySelector('form').addEventListener('submit', function (evt) {
    evt.preventDefault();
    replaceFormToCard();
  });

  render(listComponent.element, taskComponent.element, RenderPosition.BEFOREEND);
};

render(siteMenuContainer, new SiteMenu().element, RenderPosition.BEFOREEND);

render(siteFiltersContainer, new SiteFilters().element, RenderPosition.BEFOREEND);

render(siteSortContainer, new SiteSort().element, RenderPosition.BEFOREEND);

render(siteSortContainer, listComponent.element, RenderPosition.BEFOREEND);
render(listComponent.element, new SiteForm().element, RenderPosition.BEFOREEND);

const destinationPointsAmount = 10;

for (let i = 0; i < destinationPointsAmount; i++) {
  const tasks = Array.from({length: destinationPointsAmount}, generateTask);
  renderTask(listComponent.element, tasks[i]);
}


