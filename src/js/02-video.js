import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


const throttled = throttle(function (data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data))
}, 1000)

player.on('timeupdate', throttled);

const currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));

player.setCurrentTime(currentTime.seconds);

