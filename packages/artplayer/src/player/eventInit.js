import config from '../config';
import { sleep, addClass, setStyle, isMobile } from '../utils';

export default function eventInit(art) {
    const {
        option,
        events: { proxy },
        template: { $player, $video, $poster },
        i18n,
        notice,
    } = art;

    let reconnectTime = 0;
    const maxReconnectTime = 5;

    proxy($video, 'click', () => {
        art.toggle();
    });

    proxy($video, 'dblclick', () => {
        art.fullscreen = !art.fullscreen;
    });

    for (let index = 0; index < config.events.length; index++) {
        proxy($video, config.events[index], (event) => {
            art.emit(`video:${event.type}`, event);
        });
    }

    // art.on('video:abort', () => {

    // });

    art.on('video:canplay', () => {
        reconnectTime = 0;
        art.loading.show = false;
    });

    art.once('video:canplay', () => {
        art.loading.show = false;
        art.controls.show = true;
        art.mask.show = true;
        art.isReady = true;
        art.emit('ready');
    });

    // art.on('video:canplaythrough', () => {

    // });

    // art.on('video:durationchange', () => {

    // });

    // art.on('video:emptied', () => {

    // });

    art.on('video:ended', () => {
        if (option.loop) {
            art.seek = 0;
            art.play();
            art.controls.show = false;
            art.mask.show = false;
        } else {
            art.controls.show = true;
            art.mask.show = true;
        }
    });

    art.on('video:error', () => {
        if (reconnectTime < maxReconnectTime) {
            sleep(1000).then(() => {
                reconnectTime += 1;
                art.url = option.url;
                notice.show = `${i18n.get('Reconnect')}: ${reconnectTime}`;
                art.emit('error', reconnectTime);
            });
        } else {
            art.loading.show = false;
            art.controls.show = false;
            addClass($player, 'art-error');
            sleep(1000).then(() => {
                notice.show = i18n.get('Video Load Failed');
                art.destroy(false);
            });
        }
    });

    // art.on('video:loadeddata', () => {

    // });

    art.once('video:loadedmetadata', () => {
        art.autoSize = option.autoSize;
        if (isMobile) {
            art.loading.show = false;
            art.controls.show = true;
            art.mask.show = true;
        }
    });

    art.on('video:loadstart', () => {
        art.loading.show = true;
    });

    art.on('video:pause', () => {
        art.controls.show = true;
        art.mask.show = true;
    });

    art.on('video:play', () => {
        art.mask.show = false;
        setStyle($poster, 'display', 'none');
    });

    art.on('video:playing', () => {
        art.mask.show = false;
    });

    // art.on('video:progress', () => {

    // });

    // art.on('video:ratechange', () => {

    // });

    art.on('video:seeked', () => {
        art.loading.show = false;
    });

    art.on('video:seeking', () => {
        art.loading.show = true;
    });

    // art.on('video:stalled', () => {

    // });

    // art.on('video:suspend', () => {

    // });

    art.on('video:timeupdate', () => {
        art.mask.show = false;
    });

    // art.on('video:volumechange', () => {

    // });

    art.on('video:waiting', () => {
        art.loading.show = true;
    });
}
