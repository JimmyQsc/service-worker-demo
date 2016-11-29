import {strToEls} from './utils.js';

export default class Template {
    feedsList(feeds) {
        let HTMLString = feeds.reduce((a, item) => {
            return a + `
            <a href="${item.url}" target="blank">
                <li>
                    <h3 class="title">${item.title}</h3>
                    <div class="img-container"><img src="${item.urlToImage}" alt="news image" /></div>
                    <p class="info"><span class="author">${item.author}</span><span class="publishedAt">${item.publishedAt}</span></p>
                    <p class="description">${item.description}</p>
                </li>
            </a>
            `;
        }, '');

        return strToEls(HTMLString);
    }
}