let request = require("request");
let cheerio = require("cheerio");
console.log("before");
request("https://www.google.co.in/", cb);
//response is superset-> body
function cb(error, response, html) {
    // console.log(response);
    // console.log(html);
    let cheerioSelector = cheerio.load(html);
    let element = cheerioSelector("#SIvCob");
    // console.log(element.html());
    console.log(element.text());
}
// console.log("After");