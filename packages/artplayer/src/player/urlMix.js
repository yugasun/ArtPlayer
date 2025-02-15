import { getExt, def, sleep } from '../utils';

export default function urlMix(art) {
    const {
        option,
        template: { $video },
    } = art;

    def(art, 'url', {
        get() {
            return $video.currentSrc;
        },
        set(url) {
            const typeName = option.type || getExt(url);
            const typeCallback = option.customType[typeName];
            if (typeName && typeCallback) {
                sleep().then(() => {
                    art.loading.show = true;
                    typeCallback.call(art, $video, url, art);
                });
            } else {
                if (art.url && art.url !== url) {
                    art.once('video:canplay', () => {
                        if (art.isReady) {
                            art.emit('restart');
                        }
                    });
                }

                $video.src = url;
                art.option.url = url;
                art.emit('url', url);
            }
        },
    });
}
