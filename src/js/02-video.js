import Player from '@vimeo/player';
import throttle from 'lodash.throttle'


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// console.dir(iframe);

const onPlay = function(data) {
    const currentTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

if( !localStorage.getItem("videoplayer-current-time")){
} else{
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
}




