/*jshint esversion: 6 */
function loadHtml(selector, path) {
    fetch(path)
        .then(response => response.text())
        .then(text => document.querySelector(selector).innerHTML = text);
}
