import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const CURRENT_TIME_KEY = "videoplayer-current-time";

const throttled = throttle(function (data) {
    localStorage.setItem(CURRENT_TIME_KEY, data.seconds)
}, 1000)

player.on('timeupdate', throttled);

const currentTime = localStorage.getItem(CURRENT_TIME_KEY) || 0;

player.setCurrentTime(currentTime);

