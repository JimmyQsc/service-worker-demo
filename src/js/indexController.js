import {checkStatus} from './utils.js';
import {toJson} from './utils.js';
import {qs} from './utils.js';
import Template from './template.js';

export default class IndexController {
    constructor() {
        this.container = qs('.feeds-list', qs('.feeds'));
        this.template = new Template();
        this.feedsUrl = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=a9f426d48c7b4c6192affe4ce2c18b2c';
        this._getFeeds();
    }

    _getFeeds() {
        let self = this;
        fetch(this.feedsUrl)
            .then(checkStatus)
            .then(toJson)
            .then((data) => self._renderFeeds(data))
            .catch((error) => console.log(error));
    }

    _renderFeeds(data) {
        var feeds = data.articles;
        this.container.innerHTML = this.template.feedsList(feeds);
    }
}