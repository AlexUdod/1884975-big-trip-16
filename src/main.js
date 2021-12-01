import {createSiteMenuTemplate} from './view/travel-menu-view';
import {createSiteFiltersTemplate} from './view/travel-filters-view';
import {createSiteSortTemplate} from './view/travel-sort-view';
import {renderTemplate, renderPosition} from './render';

const siteHeader = document.querySelector('.page-header');
const siteMenuContainer = siteHeader.querySelector('.trip-controls__navigation');
const siteFiltersContainer = siteHeader.querySelector('.trip-controls__filters');

const siteMain = document.querySelector('.page-main');
const siteSortContainer = siteMain.querySelector('.trip-events');


renderTemplate(siteMenuContainer, createSiteMenuTemplate(), renderPosition.BEFOREEND);

renderTemplate(siteFiltersContainer, createSiteFiltersTemplate(), renderPosition.BEFOREEND);

renderTemplate(siteSortContainer, createSiteSortTemplate(), renderPosition.BEFOREEND);
