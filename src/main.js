import {createSiteMenuTemplate} from './view/travel-menu-view';
import {createSiteFiltersTemplate} from './view/travel-filters-view';
import {createSiteSortTemplate} from './view/travel-sort-view';
import {createSiteListTemplate} from './view/travel-list-points-view';
import {createSiteFormTemplate} from './view/travel-form-view';
import {createSiteFormEditorTemplate} from './view/travel-form-editor-view';
import {createSiteDestinationPointTemplate} from './view/trave-destination-point-view';
import {renderTemplate, renderPosition} from './render';

const siteHeader = document.querySelector('.page-header');
const siteMenuContainer = siteHeader.querySelector('.trip-controls__navigation');
const siteFiltersContainer = siteHeader.querySelector('.trip-controls__filters');

const siteMain = document.querySelector('.page-main');
const siteSortContainer = siteMain.querySelector('.trip-events');


renderTemplate(siteMenuContainer, createSiteMenuTemplate(), renderPosition.BEFOREEND);

renderTemplate(siteFiltersContainer, createSiteFiltersTemplate(), renderPosition.BEFOREEND);

renderTemplate(siteSortContainer, createSiteSortTemplate(), renderPosition.BEFOREEND);

renderTemplate(siteSortContainer, createSiteListTemplate(), renderPosition.BEFOREEND);

const siteListPoints = siteSortContainer.querySelector('.trip-events__list');

renderTemplate(siteListPoints, createSiteFormTemplate(), renderPosition.BEFOREEND);

renderTemplate(siteListPoints, createSiteFormEditorTemplate(), renderPosition.AFTERBEGIN);

const destinationPointsAmount = 3;

for (let i = 0; i < destinationPointsAmount; i++) {
  renderTemplate(siteListPoints, createSiteDestinationPointTemplate(), renderPosition.BEFOREEND);
}


