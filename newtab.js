var dayId = `${(new Date()).getMonth() + 1}_${(new Date()).getDate()}_${(new Date()).getFullYear()}`;
console.log(dayId);

document.body.style.backgroundImage = `url(https://picsum.photos/seed/${dayId}/1920/1080)`;