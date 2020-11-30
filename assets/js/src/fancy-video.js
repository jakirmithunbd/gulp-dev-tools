const fancyvideo = document.getElementById('fancy-video');
if (fancyvideo) {
  var ready_first = true;
    var first = true;

    fancyvideo.addEventListener('canplaythrough', (event) => {
        if (ready_first){
            ready_first=false;
            fancyvideo.play();
        console.log('I think I can play through the entire video without ever having to stop to buffer.');
        }
    });

    document.addEventListener('fullscreenchange', (event) => {
    if (document.fullscreenElement) {
        console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
    } else {
        console.log('Leaving full-screen mode.');
        fancyvideo.pause();
    }
    });


    function playfullscreen(){
        if (first){
            first=false;
            fancyvideo.currentTime =0;
            fancyvideo.muted = false;
        }
            fancyvideo.play();
            if (fancyvideo.requestFullscreen) {
                fancyvideo.requestFullscreen();
        } else if (fancyvideo.webkitRequestFullscreen) { /* Safari */
            fancyvideo.webkitRequestFullscreen();
        } else if (fancyvideo.msRequestFullscreen) { /* IE11 */
            fancyvideo.msRequestFullscreen();
        }
    }
}