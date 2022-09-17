var dayId = `${(new Date()).getMonth() + 1}_${(new Date()).getDate()}_${(new Date()).getFullYear()}`;
var rng = new Math.seedrandom(dayId);

var photoId = Math.floor(rng() * 1084);

document.body.style.backgroundImage = `url(https://picsum.photos/id/${photoId}/1920/1080)`;

fetch(`https://picsum.photos/id/${photoId}/info`).then(function(res) {
    res.json().then(function(realRes) {
        console.log(realRes)
        document.querySelector("#photoInfo").innerHTML = 
`Author: ${realRes.author}<br />
URL: <a href="${realRes.url}">${realRes.url}</a>`;
    });
});