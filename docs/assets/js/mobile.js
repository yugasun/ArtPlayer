var vConsole = new VConsole();

var art = new Artplayer({
    container: '.artplayer-app',
    url: 'https://artplayer.org/assets/sample/video.mp4',
    title: 'One More Time One More Chance',
    poster: '/assets/sample/poster.jpg',
    autoSize: true,
    loop: true,
    mutex: true,
    theme: '#ff0057',
    fullscreen: true,
    fullscreenWeb: true,
    miniProgressBar: true,
    moreVideoAttr: {
        playsInline: true,
        'webkit-playsinline': true,
        'x5-video-player-type': 'h5',
        'x5-video-player-fullscreen': false,
        'x5-video-orientation': 'portraint',
    },
    subtitle: {
        url: '/assets/sample/subtitle.srt',
        style: {
            color: '#fff',
            fontSize: '14px',
        },
    },
    layers: [
        {
            html: `<img style="width: 50px" src="/assets/sample/layer.png">`,
            click: function () {
                console.info('You clicked on the custom layer');
            },
            style: {
                position: 'absolute',
                top: '10px',
                right: '10px',
                opacity: '.9',
            },
        },
    ],
    icons: {
        indicator: '<img width="16" heigth="16" src="/assets/img/indicator.svg">',
        loading: '<img src="/assets/img/ploading.gif">',
        state: '<img width="150" heigth="150" src="/assets/img/state.svg">',
    },
    plugins: [
        artplayerPluginDanmuku({
            danmuku: '/assets/sample/danmuku.xml',
            speed: 5,
            maxlength: 100,
            margin: [10, 70],
            opacity: 1,
            fontSize: 14,
            synchronousPlayback: false,
        }),
    ],
    whitelist: ['*'],
});

Artplayer.config.events.forEach(function (item) {
    art.on('video:' + item, function (event) {
        console.log('video: ' + event.type);
    });
});

if (Artplayer.utils.isWechat) {
    document.querySelector('.tip').textContent = '微信环境需手动触发播放';
}
