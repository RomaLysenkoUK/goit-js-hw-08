import Player from '@vimeo/player';
const player = new Player(document.querySelector('iframe'));
function getCurrentTime() {
  player.on('timeupdate', function () {
    const { seconds } = arguments[0];
    const videoLength = localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(seconds)
    );
    console.log(videoLength);
  });
}
getCurrentTime(player);
