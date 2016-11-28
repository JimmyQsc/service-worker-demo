export function checkStatus(response) {
    if (response.status >= 200 && response.status< 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

export function toJson(response) {
    return response.json();
}

export function qs(selector, scope) {
    return (scope || document).querySelector(selector);
}

export function $on(target, type, callback, capture) {
    target.addEventListener(type, callback, !!capture);
}