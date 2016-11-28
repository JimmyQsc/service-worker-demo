export default class Template {
    feedsList(feeds) {
        return feeds.reduce((a, item) => {
            return a + `
            <li>
                <h3 class="title">${item.title}</h3>
                <div class="img-container"><img src="${item.urlToImage}" alt="news image" /></div>
                <p class="info"><span class="author">${item.author}</span><span class="publishedAt">${item.publishedAt}</span></p>
                <p class="description">${item.description}</p>
            </li>
            `;
        }, '');
    }
}