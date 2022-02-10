import { errorHandle, has, def } from '../utils';
import localVideo from './localVideo';
import localSubtitle from './localSubtitle';
import miniProgressBar from './miniProgressBar';

export default class Plugins {
    constructor(art) {
        this.art = art;
        this.id = 0;

        const { option } = art;

        if (!option.isLive && option.miniProgressBar) {
            this.add(miniProgressBar);
        }

        if (option.localVideo) {
            this.add(localVideo);
        }

        if (option.localSubtitle) {
            this.add(localSubtitle);
        }

        for (let index = 0; index < option.plugins.length; index++) {
            this.add(option.plugins[index]);
        }
    }

    add(plugin) {
        this.id += 1;
        const result = plugin.call(this, this.art);
        const pluginName = (result && result.name) || plugin.name || `plugin${this.id}`;
        errorHandle(!has(this, pluginName), `Cannot add a plugin that already has the same name: ${pluginName}`);
        def(this, pluginName, {
            value: result,
        });
        return this;
    }
}
