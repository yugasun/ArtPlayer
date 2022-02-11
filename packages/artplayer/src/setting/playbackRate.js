export default function playbackRate(art) {
    const { i18n, icons } = art;

    return {
        width: 150,
        html: i18n.get('Play Speed'),
        icon: icons.playbackRate,
        selector: [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0].map((item) => {
            return {
                html: item === 1.0 ? i18n.get('Normal') : item,
                current: item === 1.0,
                onSelect() {
                    art.playbackRate = item;
                },
            };
        }),
    };
}
