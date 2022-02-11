---
title: Common properties
sidebar_position: 3
slug: /propertie
---

## play

-   Type: `Function`

Play video

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
    muted: true,
});

art.on('ready', () => {
    art.play();
});
```

## pause

-   Type: `Function`

Pause video

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
    muted: true,
});

art.on('ready', () => {
    art.play();

    setTimeout(() => {
        art.pause();
    }, 3000);
});
```

## toggle

-   Type: `Function`

Switch Video playback and pause

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
    muted: true,
});

art.on('ready', () => {
    art.toggle();

    setTimeout(() => {
        art.toggle();
    }, 3000);
});
```

## seek

-   Type: `Setter`
-   Parameter: `Number`

Video time jump, unit seconds

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    art.seek = 5;
});
```

## forward

-   Type: `Setter`
-   Parameter: `Number`

Video time forward, unit seconds

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    art.forward = 5;
});
```

## backward

-   Type: `Setter`
-   Parameter: `Number`

Video time backward, unit seconds

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    art.seek = 5;

    setTimeout(() => {
        art.backward = 2;
    }, 3000);
});
```

## volume

-   Type: `Setter/Getter`
-   Parameter: `Number`

Set and get video volume, range: `[0, 1]`

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    console.info(art.volume);
    art.volume = 0.5;
    console.info(art.volume);
});
```

## url

-   Type: `Setter/Getter`
-   Parameter: `String`

Set and get video url

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    console.info(art.url);
    art.url = '/assets/sample/video.mp4?t=0';
    console.info(art.url);
});
```

## switchUrl

-   Type: `Function`
-   Parameter: `String`

Set video url, set, like the `url`, but will perform some optimization operations

The function supports two parameters, the first one for the new video url, the second is new video name

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    art.seek = 10;
    setTimeout(() => {
        art.switchUrl('/assets/sample/video.mp4?t=0', 'New video name');
    }, 3000);
});
```

## switchQuality

-   Type: `Function`
-   Parameter: `String`

Set the video quality address, like the `switchUrl`, but will bring the previous play progress

The function supports two parameters, the first one for the new video url, the second is new video name

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    art.seek = 10;
    setTimeout(() => {
        art.switchQuality('/assets/sample/video.mp4?t=0', 'New video name');
    }, 3000);
});
```

## muted

-   Type: `Setter/Getter`
-   Parameter: `Boolean`

Setting up and getting the video mute

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    console.info(art.muted);
    art.muted = true;
    console.info(art.muted);
});
```

## currentTime

-   Type: `Setter/Getter`
-   Parameter: `Number`

Set and get the video current time, set time like the `seek`, but it does not trigger additional events

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    console.info(art.currentTime);
    art.currentTime = 5;
    console.info(art.currentTime);
});
```

## duration

-   Type: `Getter`

Get video duration

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    console.info(art.duration);
});
```

:::tip Tip

Some videos are there is no duration, such as the live video or video is not decoded, the duration will be `0`

:::

## screenshot

-   Type: `Function`

Download the current video frame screenshot

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    art.seek = 10;
    art.once('video:canplay', () => {
        art.screenshot();
    })
});
```

## getDataURL

-   Type: `Function`

Get the `base64` url of the current video frame, return to a `Promise`

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    art.seek = 10;
    art.getDataURL().then((url) => console.info(url));
});
```

## getBlobUrl

-   Type: `Function`

Get the `blob` url of the current video frame, return to a `Promise`

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    art.seek = 10;
    art.getBlobUrl().then((url) => console.info(url));
});
```

## fullscreen

-   Type: `Setter/Getter`
-   Parameter: `Boolean`

Set and get a player window full screen

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
    fullscreen: true,
});

art.on('ready', () => {
    art.fullscreen = true;

    setTimeout(() => {
        art.fullscreen = false;
    }, 3000);
});
```

:::tip Tip

Due to the browser security mechanism, the page must be exchanged before the window full screen, such as the user click on the page)

:::

## fullscreenWeb

-   Type: `Setter/Getter`
-   Parameter: `Boolean`

Setting up and get a player web page full screen

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
    fullscreenWeb: true,
});

art.on('ready', () => {
    art.fullscreenWeb = true;

    setTimeout(() => {
        art.fullscreenWeb = false;
    }, 3000);
});
```

## pip

-   Type: `Setter/Getter`
-   Parameter: `Boolean`

Set and get player PIP Mode

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
    fullscreenWeb: true,
});

art.on('ready', () => {
    art.pip = true;

    setTimeout(() => {
        art.pip = false;
    }, 3000);
});
```

:::tip Tip

Due to the browser security mechanism, the page must be exchanged first before the `PIP` (such as user clicking over the page)

:::

## poster

-   Type: `Setter/Getter`
-   Parameter: `String`

Setting up and get a video poster, only the poster effect can only be seen before the video is played

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
    poster: '/assets/sample/poster.jpg',
});

art.on('ready', () => {
    console.info(art.poster);
    art.poster = '/assets/sample/poster.jpg?t=0';
    console.info(art.poster);
});
```

## mini

-   Type: `Setter/Getter`
-   Parameter: `Boolean`

Set and get player mini mode

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    art.mini = true;
});
```

## playing

-   Type: `Getter`
-   Parameter: `Boolean`

Get the video is playing

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
    muted: true,
});

art.on('ready', () => {
    console.info(art.playing);
    art.play();
    console.info(art.playing);
});
```

## autoSize

-   Type: `Setter/Getter`
-   Parameter: `Boolean`

Set whether the video is adaptive, set to `true`, it will only execute once

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    console.info(art.autoSize);
    art.autoSize = true;
    console.info(art.autoSize);
});
```

## rect

-   Type: `Getter`

Get the size and coordinate information of the player

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    console.info(JSON.stringify(art.rect));
});
```

:::tip Tip

Size and coordinate information is obtained by `getBoundingClientRect`

:::

## flip

-   Type: `Setter/Getter`
-   Parameter: `String`

Set and get player flip, support `normal`, `horizontal`, `vertical`

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    console.info(art.flip);
    art.flip = 'horizontal';
    console.info(art.flip);
});
```

## rotate

-   Type: `Setter/Getter`
-   Parameter: `Number`

Set and get player rotation, support `-270`, `-180`, `-90`, `0`, `90`, `180`, `270`

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
    autoSize: true,
});

art.on('ready', () => {
    console.info(art.rotate);
    art.rotate = 90;
    console.info(art.rotate);
});
```

## playbackRate

-   Type: `Setter/Getter`
-   Parameter: `Number`

Set and get player playback speed, support `0.5`, `0.75`, `1.0`, `1.25`, `1.5`, `1.75`, `2.0`

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    console.info(art.playbackRate);
    art.playbackRate = 2;
    console.info(art.playbackRate);
});
```

## aspectRatio

-   Type: `Setter/Getter`
-   Parameter: `String`

Set and get the player long aspect, support `default`, `4:3`, `16:9`

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    console.info(art.aspectRatio);
    art.aspectRatio = '16:9';
    console.info(art.aspectRatio);
});
```

## loop

-   Type: `Setter/Getter`
-   Parameter: `Array`

Setting and getting the interval to play in seconds, unit seconds

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    console.info(art.loop);
    art.loop = [5, 10];
    console.info(art.loop);
});
```

:::tip Tip

Delete interval loop play, only need to set up `loop` is `[]`

:::

## autoHeight

-   Type: `Setter/Getter`
-   Default: `Boolean`

When the container has only width, you want the container height adapt to the player aspect ratio.

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    console.info(art.autoHeight);
    art.autoHeight = true;
    console.info(art.autoHeight);
});
```

## attr

-   Type: `Function`
-   Parameter: `String`

Dynamically get and set the properties of the video element

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    console.info(art.attr('playsInline'));
    art.attr('playsInline', true);
    console.info(art.attr('playsInline'));
});
```

## title

-   Type: `Setter/Getter`
-   Parameter: `String`

Dynamic get and set player title

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    console.info(art.title);
    art.title = 'New Title';
    console.info(art.title);
});
```

## theme

-   Type: `Setter/Getter`
-   Parameter: `String`

Dynamic get and set player theme color

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    console.info(art.theme);
    art.theme = '#000';
    console.info(art.theme);
});
```

## destroy

-   Type: `Function`
-   Parameter: `Boolean`

Destroy the player

<div className="run-code">▶ Run Code</div>

```js
var art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/sample/video.mp4',
});

art.on('ready', () => {
    art.destroy();
});
```
