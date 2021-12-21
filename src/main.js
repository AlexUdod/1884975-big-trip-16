import SiteMenu from './view/travel-menu-view';
import SiteFilters from './view/travel-filters-view';
import SiteSort from './view/travel-sort-view';
import SiteList from './view/travel-list-points-view';
import SiteForm from './view/travel-form-view';
import SiteFormEditor from './view/travel-form-editor-view';
import SiteDestinationPoint from './view/trave-destination-point-view';
import SiteEmptyList from './view/travel-list-empty-view';
import {render, RenderPosition} from './render';
import {generateTask} from './mock/test-data';


const siteHeader = document.querySelector('.page-header');
const siteMenuContainer = siteHeader.querySelector('.trip-controls__navigation');
const siteFiltersContainer = siteHeader.querySelector('.trip-controls__filters');

const siteMain = document.querySelector('.page-main');
const siteSortContainer = siteMain.querySelector('.trip-events');

const listComponent = new SiteList();
const destinationPointsAmount = 0;

render(siteMenuContainer, new SiteMenu().element, RenderPosition.BEFOREEND);

render(siteFiltersContainer, new SiteFilters().element, RenderPosition.BEFOREEND);

if (destinationPointsAmount < 1) {
  const emptyPage = new SiteEmptyList();
  const addNewPoint = new SiteForm();

  const replaceEmptyToPoint = () => {
    siteMain.replaceChild(emptyPage.element, addNewPoint.element);
  };

  document.querySelector('.trip-main__event-add-btn').addEventListener('click', function (evt) {
    replaceEmptyToPoint();
  });

  render(siteMain, emptyPage.element, RenderPosition.BEFOREEND);
} else {

  render(siteSortContainer, new SiteSort().element, RenderPosition.BEFOREEND);

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

    taskEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', function (evt) {
      replaceFormToCard();
    });

    document.onkeydown = function (evt) {
      evt = evt || window.event;
      if (evt.keyCode === 27) {
        replaceFormToCard();
      }
    };

    render(listComponent.element, taskComponent.element, RenderPosition.BEFOREEND);
  };

  render(siteSortContainer, listComponent.element, RenderPosition.BEFOREEND);
  render(listComponent.element, new SiteForm().element, RenderPosition.BEFOREEND);

  for (let i = 0; i < destinationPointsAmount; i++) {
    const tasks = Array.from({length: destinationPointsAmount}, generateTask);
    renderTask(listComponent.element, tasks[i]);
  }
}


