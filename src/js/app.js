import '../scss/style.scss';
import HTMLHeader from '../html/header.html';
import HTMLFeedsContainer from '../html/feeds.html';
import {qs} from './utils.js';
import IndexController from './indexController.js';
import {strToEls} from './utils.js';

qs('body').appendChild(strToEls(HTMLHeader));
qs('body').appendChild(strToEls(HTMLFeedsContainer));


new IndexController();
