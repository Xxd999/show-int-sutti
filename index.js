const { getRandomCat } = require('sutti-random-cat');
const { getRandomInt } = require('sutti-int');

function showInt() {
    const a = getRandomCat();
    console.log(a)
    a = getRandomInt(23,15);

}

module.exports = showInt;
