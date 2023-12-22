/* courtesy Chris Ferdinandi
 * https://gomakethings.com
 * based on my suggestion
 * @param {string} selector - The ID of the DOM element to load into
 * (works with any selector)
 * @param {string} path - The path of the HTML file to load
*/

function loadHtml(selector, path) {
    fetch(path).then(function (response) {
        return response.text();
    }).then(function (text) {
        document.querySelector(selector).innerHTML = text;
    });
}
