(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Artplayer = factory());
})(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".art-video-player{zoom:1;-webkit-tap-highlight-color:rgba(0,0,0,0);-ms-high-contrast-adjust:none;background-color:#000;color:#eee;direction:ltr;display:flex;font-family:Roboto,Arial,Helvetica,sans-serif;font-size:14px;height:100%;line-height:1.3;margin:0 auto;outline:0;position:relative;text-align:left;touch-action:manipulation;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;z-index:20}.art-video-player *{box-sizing:border-box;margin:0;padding:0}.art-video-player ::-webkit-scrollbar{height:5px;width:5px}.art-video-player ::-webkit-scrollbar-thumb{background-color:#666}.art-video-player ::-webkit-scrollbar-thumb:hover{background-color:#ccc}.art-video-player .art-icon{align-items:center;display:inline-flex;justify-content:center;line-height:1.5}.art-video-player .art-icon svg{fill:#fff}.art-video-player img{max-width:100%;vertical-align:top}@supports ((-webkit-backdrop-filter:initial) or (backdrop-filter:initial)){.art-video-player .art-backdrop-filter{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);background-color:rgba(0,0,0,.7)!important}}.art-video-player .art-video{background-color:#000;cursor:pointer;z-index:10}.art-video-player .art-poster,.art-video-player .art-video{bottom:0;height:100%;left:0;position:absolute;right:0;top:0;width:100%}.art-video-player .art-poster{background-position:50%;background-repeat:no-repeat;background-size:cover;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:11}.art-video-player .art-subtitle{bottom:10px;color:#fff;display:none;font-size:20px;padding:0 20px;pointer-events:none;position:absolute;text-align:center;text-shadow:.5px .5px .5px rgba(0,0,0,.5);width:100%;z-index:20}.art-video-player .art-subtitle p{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;line-height:1.2;margin:5px 0 0;word-break:break-all}.art-video-player .art-bilingual p:nth-child(n+2){transform:scale(.6);transform-origin:center top}.art-video-player.art-subtitle-show .art-subtitle{display:block}.art-video-player.art-control-show .art-subtitle{bottom:50px}.art-video-player .art-danmuku{z-index:30}.art-video-player .art-danmuku,.art-video-player .art-layers{bottom:0;height:100%;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;width:100%}.art-video-player .art-layers{display:none;z-index:40}.art-video-player .art-layers .art-layer{pointer-events:auto}.art-video-player.art-layer-show .art-layers{display:block}.art-video-player .art-mask{align-items:center;bottom:0;display:none;height:100%;justify-content:center;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;width:100%;z-index:50}.art-video-player .art-mask .art-state{align-items:center;bottom:65px;display:flex;height:60px;justify-content:center;opacity:.6;position:absolute;right:30px;width:60px}.art-video-player.art-mask-show .art-mask{display:flex}.art-video-player .art-loading{align-items:center;bottom:0;display:none;height:100%;justify-content:center;left:0;pointer-events:none;position:absolute;right:0;top:0;width:100%;z-index:70}.art-video-player.art-loading-show .art-loading{display:flex}.art-video-player .art-bottom{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;bottom:0;display:flex;flex-direction:column;height:100px;justify-content:space-between;left:0;opacity:0;padding:50px 10px 0;pointer-events:none;position:absolute;right:0;transition:all .2s ease-in-out;visibility:hidden;z-index:60}.art-video-player .art-bottom .art-progress{pointer-events:auto;position:relative;z-index:0}.art-video-player .art-bottom .art-progress .art-control-progress{align-items:center;cursor:pointer;display:flex;flex-direction:row;height:4px;position:relative}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner{align-items:center;background:hsla(0,0%,100%,.2);display:flex;height:50%;position:relative;width:100%}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-loaded{background:hsla(0,0%,100%,.4);bottom:0;height:100%;left:0;position:absolute;right:0;top:0;width:0;z-index:10}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-played{bottom:0;height:100%;left:0;position:absolute;right:0;top:0;width:0;z-index:20}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight{bottom:0;height:100%;left:0;pointer-events:none;position:absolute;right:0;top:0;z-index:30}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight span{background:#fff;display:inline-block;height:100%;left:0;pointer-events:auto;position:absolute;top:0;width:7px}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator{align-items:center;border-radius:50%;justify-content:center;position:absolute;transform:scale(.1);transition:transform .1s ease-in-out;visibility:hidden;z-index:40}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator .art-icon{height:100%;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-tip{background:rgba(0,0,0,.7);border-radius:3px;color:#fff;display:none;font-size:12px;font-weight:700;height:20px;left:0;line-height:20px;padding:0 5px;position:absolute;text-align:center;top:-25px;white-space:nowrap;z-index:50}.art-video-player .art-bottom .art-progress .art-control-thumbnails{background-color:rgba(0,0,0,.7);bottom:8px;display:none;left:0;pointer-events:none;position:absolute}.art-video-player .art-bottom .art-progress .art-control-loop{bottom:0;display:none;height:100%;left:0;pointer-events:none;position:absolute;right:0;top:0;width:100%}.art-video-player .art-bottom .art-progress .art-control-loop .art-loop-point{background:hsla(0,0%,100%,.75);height:8px;left:0;position:absolute;top:-2px;width:2px}.art-video-player .art-bottom .art-controls{align-items:center;display:flex;height:45px;justify-content:space-between;pointer-events:auto;position:relative;z-index:1}.art-video-player .art-bottom .art-controls .art-controls-left,.art-video-player .art-bottom .art-controls .art-controls-right{display:flex}.art-video-player .art-bottom .art-controls .art-control{align-items:center;cursor:pointer;display:flex;font-size:12px;line-height:1;min-height:36px;min-width:36px;opacity:.9;text-align:center;white-space:nowrap}.art-video-player .art-bottom .art-controls .art-control .art-icon{align-items:center;display:flex;float:left;height:36px;justify-content:center;width:36px}.art-video-player .art-bottom .art-controls .art-control:hover{opacity:1}.art-video-player .art-bottom .art-controls .art-control-onlyText{padding:0 10px}.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel{float:left;height:100%;overflow:hidden;position:relative;transition:margin .2s cubic-bezier(.4,0,1,1),width .2s cubic-bezier(.4,0,1,1);width:0}.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle{background:#fff;border-radius:12px;height:12px;left:0;margin-top:-6px;position:absolute;top:50%;width:12px}.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle:before{background:#fff;left:-54px}.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle:after{background:hsla(0,0%,100%,.2);left:6px}.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle:after,.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle:before{content:\"\";display:block;height:3px;margin-top:-2px;position:absolute;top:50%;width:60px}.art-video-player .art-bottom .art-controls .art-control-volume:hover .art-volume-panel{width:60px}.art-video-player .art-bottom .art-controls .art-control-quality{position:relative;z-index:30}.art-video-player .art-bottom .art-controls .art-control-quality .art-qualitys{background:rgba(0,0,0,.8);border-radius:3px;bottom:35px;color:#fff;display:none;padding:5px 0;position:absolute;text-align:center;width:100px}.art-video-player .art-bottom .art-controls .art-control-quality .art-qualitys .art-quality-item{height:30px;line-height:30px;overflow:hidden;text-overflow:ellipsis;text-shadow:0 0 2px rgba(0,0,0,.5);white-space:nowrap}.art-video-player .art-bottom .art-controls .art-control-quality .art-qualitys .art-quality-item:hover{background-color:hsla(0,0%,100%,.1)}.art-video-player .art-bottom .art-controls .art-control-quality:hover .art-qualitys{display:block}.art-video-player .art-bottom:hover .art-progress .art-control-progress .art-control-progress-inner{height:100%}.art-video-player .art-bottom:hover .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator{transform:scale(1);visibility:visible}.art-video-player.art-control-show .art-bottom,.art-video-player.art-hover .art-bottom{opacity:1;visibility:visible}.art-video-player.art-destroy .art-progress-indicator,.art-video-player.art-destroy .art-progress-tip,.art-video-player.art-error .art-progress-indicator,.art-video-player.art-error .art-progress-tip{display:none!important}.art-video-player.art-mobile .art-progress-indicator{transform:scale(1)!important;visibility:visible!important}.art-video-player .art-notice{display:none;font-size:14px;left:0;padding:10px;pointer-events:none;position:absolute;top:0;width:100%;z-index:80}.art-video-player .art-notice .art-notice-inner{background-color:rgba(0,0,0,.6);border-radius:3px;color:#fff;display:inline-block;padding:5px 10px}.art-video-player.art-notice-show .art-notice{display:flex}.art-video-player .art-contextmenus{background-color:rgba(0,0,0,.9);border-radius:3px;display:none;flex-direction:column;left:10px;min-width:200px;padding:5px 0;position:absolute;top:10px;z-index:120}.art-video-player .art-contextmenus .art-contextmenu{border-bottom:1px solid hsla(0,0%,100%,.1);color:#fff;cursor:pointer;display:block;font-size:12px;overflow:hidden;padding:10px 15px;text-overflow:ellipsis;text-shadow:0 0 2px rgba(0,0,0,.5);white-space:nowrap}.art-video-player .art-contextmenus .art-contextmenu a{color:#fff;text-decoration:none}.art-video-player .art-contextmenus .art-contextmenu span{display:inline-block;padding:0 7px}.art-video-player .art-contextmenus .art-contextmenu span.art-current,.art-video-player .art-contextmenus .art-contextmenu span:hover{color:#00c9ff}.art-video-player .art-contextmenus .art-contextmenu:hover{background-color:hsla(0,0%,100%,.1)}.art-video-player .art-contextmenus .art-contextmenu:last-child{border-bottom:none}.art-video-player.art-contextmenu-show .art-contextmenus{display:flex}.art-video-player .art-settings{align-items:center;display:flex;height:100%;justify-content:center;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%;z-index:90}.art-video-player .art-settings .art-setting-inner{background-color:rgba(0,0,0,.9);bottom:0;font-size:12px;height:100%;overflow:auto;position:absolute;right:-300px;top:0;transition:all .2s ease-in-out;width:300px}.art-video-player .art-settings .art-setting-inner .art-setting-body{height:100%;overflow-y:auto;width:100%}.art-video-player .art-settings .art-setting-inner .art-setting-body .art-setting{border-bottom:1px solid hsla(0,0%,100%,.1);padding:10px 15px}.art-video-player .art-settings .art-setting-inner .art-setting-body .art-setting .art-setting-header{margin-bottom:5px}.art-video-player .art-settings .art-setting-radio{display:flex}.art-video-player .art-settings .art-setting-radio .art-radio-item{flex:1;padding:0 2px}.art-video-player .art-settings .art-setting-radio .art-radio-item button{background-color:hsla(0,0%,100%,.2);border:none;border-radius:2px;color:#fff;height:22px;outline:none;width:100%}.art-video-player .art-settings .art-setting-radio .art-radio-item.current button,.art-video-player .art-settings .art-setting-radio .art-radio-item button:active{background-color:#00a1d6}.art-video-player .art-settings .art-setting-range input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:hsla(0,0%,100%,.5);height:3px;outline:none;width:100%}.art-video-player .art-settings .art-setting-checkbox{align-items:center;display:flex}.art-video-player .art-settings .art-setting-checkbox input{height:14px;margin-right:5px;width:14px}.art-video-player .art-settings .art-setting-upload{display:flex}.art-video-player .art-settings .art-setting-upload .art-upload-btn{background-color:hsla(0,0%,100%,.2);border:none;border-radius:2px;color:#fff;height:22px;line-height:22px;outline:none;text-align:center;width:80px}.art-video-player .art-settings .art-setting-upload .art-upload-value{flex:1;height:22px;line-height:22px;overflow:hidden;padding-left:10px;text-overflow:ellipsis;white-space:nowrap}.art-video-player.art-setting-show .art-settings{opacity:1;pointer-events:auto;visibility:visible}.art-video-player.art-setting-show .art-settings .art-setting-inner{right:0}.art-video-player .art-info{-webkit-font-smoothing:antialiased;background-color:rgba(0,0,0,.9);color:#fff;display:none;flex-direction:column;font-family:Noto Sans CJK SC DemiLight,Roboto,Segoe UI,Tahoma,Arial,Helvetica,sans-serif;font-size:12px;left:10px;padding:10px;position:absolute;top:10px;width:350px;z-index:100}.art-video-player .art-info .art-info-item{display:flex;margin-bottom:5px}.art-video-player .art-info .art-info-item .art-info-title{text-align:right;width:100px}.art-video-player .art-info .art-info-item .art-info-content{flex:1;overflow:hidden;padding-left:5px;text-overflow:ellipsis;white-space:nowrap}.art-video-player .art-info .art-info-item:last-child{margin-bottom:0}.art-video-player .art-info .art-info-close{cursor:pointer;position:absolute;right:5px;top:5px}.art-video-player.art-info-show .art-info{display:flex}.art-video-player.art-hide-cursor *{cursor:none!important}.art-video-player[data-aspect-ratio] video{box-sizing:content-box;-o-object-fit:fill;object-fit:fill}.art-video-player.art-fullscreen-web{bottom:0;height:100%!important;left:0;position:fixed;right:0;top:0;width:100%!important;z-index:9999}.art-fullscreen-rotate{background-color:#000;bottom:0;height:100%;left:0;position:fixed;right:0;top:0;width:100%;z-index:9999}.art-video-player .art-mini-header{align-items:center;background-color:rgba(0,0,0,.5);color:#fff;display:none;height:35px;justify-content:space-between;left:0;line-height:35px;opacity:0;position:absolute;right:0;top:0;transition:all .2s ease-in-out;visibility:hidden;z-index:110}.art-video-player .art-mini-header .art-mini-title{cursor:move;flex:1;overflow:hidden;padding:0 10px;text-overflow:ellipsis;white-space:nowrap}.art-video-player .art-mini-header .art-mini-close{cursor:pointer;font-size:22px;text-align:center;width:35px}.art-video-player.art-is-dragging{opacity:.7}.art-video-player.art-mini{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 3px 6px 0 rgba(0,0,0,.2);height:225px;position:fixed;width:400px;z-index:9999}.art-video-player.art-mini .art-mini-header{display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.art-video-player.art-mini.art-hover .art-mini-header{opacity:1;visibility:visible}.art-video-player.art-mini .art-mask .art-state{position:static}.art-video-player.art-mini .art-bottom,.art-video-player.art-mini .art-contextmenu,.art-video-player.art-mini .art-danmu,.art-video-player.art-mini .art-info,.art-video-player.art-mini .art-layers,.art-video-player.art-mini .art-notice,.art-video-player.art-mini .art-setting,.art-video-player.art-mini .art-subtitle{display:none!important}.art-auto-size{align-items:center;display:flex;justify-content:center}.art-video-player[data-flip=horizontal] .art-video{transform:scaleX(-1)}.art-video-player[data-flip=vertical] .art-video{transform:scaleY(-1)}.art-video-player .art-layers .art-layer-log{background-color:rgba(0,0,0,.5);border-radius:3px;bottom:10px;color:#fff;display:none;font-size:13px;left:10px;padding:5px;pointer-events:none;position:absolute;text-shadow:0 0 2px rgba(0,0,0,.5);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:120px}.art-video-player .art-layers .art-layer-log p{margin-bottom:0;word-break:break-all}.art-video-player .art-control-selector{position:relative}.art-video-player .art-control-selector .art-selector-list{background-color:rgba(0,0,0,.8);border-radius:3px;bottom:35px;color:#fff;display:none;max-height:200px;max-width:200px;min-width:100px;overflow:auto;padding:5px 0;position:absolute;text-align:center}.art-video-player .art-control-selector .art-selector-list .art-selector-item{height:30px;line-height:30px;overflow:hidden;padding:0 5px;text-overflow:ellipsis;text-shadow:0 0 2px rgba(0,0,0,.5);white-space:nowrap}.art-video-player .art-control-selector .art-selector-list .art-selector-item:hover{background-color:hsla(0,0%,100%,.1)}.art-video-player .art-control-selector .art-selector-list .art-selector-item.art-current,.art-video-player .art-control-selector .art-selector-list .art-selector-item:hover{color:#00c9ff}.art-video-player .art-control-selector:hover .art-selector-list{display:block}:root{--balloon-color:hsla(0,0%,6%,.95);--balloon-font-size:12px;--balloon-move:4px}button[aria-label][data-balloon-pos]{overflow:visible}[aria-label][data-balloon-pos]{cursor:pointer;position:relative}[aria-label][data-balloon-pos]:after{background:var(--balloon-color);border-radius:2px;color:#fff;content:attr(aria-label);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-size:var(--balloon-font-size);font-style:normal;font-weight:400;line-height:1.2;padding:.5em 1em;text-indent:0;text-shadow:none;white-space:nowrap}[aria-label][data-balloon-pos]:after,[aria-label][data-balloon-pos]:before{opacity:0;pointer-events:none;position:absolute;transition:all .18s ease-out .18s;z-index:10}[aria-label][data-balloon-pos]:before{border:5px solid transparent;border-top:5px solid var(--balloon-color);content:\"\";height:0;width:0}[aria-label][data-balloon-pos]:hover:after,[aria-label][data-balloon-pos]:hover:before{opacity:1;pointer-events:none}[aria-label][data-balloon-pos][data-balloon-pos=up]:after{margin-bottom:10px}[aria-label][data-balloon-pos][data-balloon-pos=up]:after,[aria-label][data-balloon-pos][data-balloon-pos=up]:before{bottom:100%;left:50%;transform:translate(-50%,var(--balloon-move));transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:before{transform:translate(-50%)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBUUUsTUFBTyxDQVNQLHlDQUE2QyxDQUU3Qyw2QkFBOEIsQ0FSOUIscUJBQXNCLENBRHRCLFVBQVcsQ0FHWCxhQUFjLENBWmQsWUFBYSxDQVFiLDZDQUFpRCxDQUtqRCxjQUFlLENBUmYsV0FBWSxDQVNaLGVBQWdCLENBWmhCLGFBQWMsQ0FJZCxTQUFVLENBTFYsaUJBQWtCLENBVWxCLGVBQWdCLENBTWhCLHlCQUEwQixDQUYxQix3QkFBaUIsQ0FBakIscUJBQWlCLENBQWpCLG9CQUFpQixDQUFqQixnQkFBaUIsQ0FYakIsVUFBVyxDQURYLFVBZWdDLENBQ2hDLG9CQUdFLHFCQUFzQixDQUZ0QixRQUFTLENBQ1QsU0FDd0IsQ0FDMUIsc0NBRUUsVUFBVyxDQURYLFNBQ2EsQ0FDZiw0Q0FDRSxxQkFBd0IsQ0FDMUIsa0RBQ0UscUJBQXdCLENBQzFCLDRCQUdFLGtCQUFtQixDQUZuQixtQkFBb0IsQ0FDcEIsc0JBQXVCLENBRXZCLGVBQWtCLENBQ2xCLGdDQUNFLFNBQVksQ0FDaEIsc0JBQ0UsY0FBZSxDQUNmLGtCQUFxQixDQUN2QiwyRUFDRSx1Q0FDRSxpREFBa0QsQ0FDbEQseUNBQTBDLENBQzFDLHlDQUFpRCxDQUFFLENBRXpELDZCQVNFLHFCQUFzQixDQUN0QixjQUFlLENBUmYsVUFRaUIsQ0FFbkIsMkRBTkUsUUFBUyxDQUVULFdBQVksQ0FMWixNQUFPLENBRlAsaUJBQWtCLENBSWxCLE9BQVEsQ0FEUixLQUFNLENBR04sVUFrQnNCLENBYnhCLDhCQVNFLHVCQUFrQyxDQUNsQywyQkFBNEIsQ0FDNUIscUJBQXNCLENBRXRCLG1CQUFvQixDQURwQix3QkFBaUIsQ0FBakIscUJBQWlCLENBQWpCLG9CQUFpQixDQUFqQixnQkFBaUIsQ0FWakIsVUFXc0IsQ0FFeEIsZ0NBSUUsV0FBWSxDQUlaLFVBQVcsQ0FQWCxZQUFhLENBUWIsY0FBZSxDQUhmLGNBQWUsQ0FJZixtQkFBb0IsQ0FScEIsaUJBQWtCLENBS2xCLGlCQUFrQixDQUlsQix5Q0FBaUQsQ0FOakQsVUFBVyxDQUZYLFVBUW1ELENBQ25ELGtDQUVFLDBCQUFtQixDQUFuQix1QkFBbUIsQ0FBbkIsa0JBQW1CLENBRW5CLGVBQWdCLENBRGhCLGNBQWUsQ0FGZixvQkFHa0IsQ0FFdEIsa0RBQ0UsbUJBQXFCLENBQ3JCLDJCQUE4QixDQUVoQyxrREFDRSxhQUFnQixDQUVsQixpREFDRSxXQUFjLENBRWhCLCtCQUVFLFVBUXNCLENBRXhCLDZEQU5FLFFBQVMsQ0FFVCxXQUFZLENBTFosTUFBTyxDQU1QLGVBQWdCLENBQ2hCLG1CQUFvQixDQVRwQixpQkFBa0IsQ0FJbEIsT0FBUSxDQURSLEtBQU0sQ0FHTixVQWdCc0IsQ0FYeEIsOEJBQ0UsWUFBYSxDQUViLFVBUXNCLENBQ3RCLHlDQUNFLG1CQUFzQixDQUUxQiw2Q0FDRSxhQUFnQixDQUVsQiw0QkFFRSxrQkFBbUIsQ0FPbkIsUUFBUyxDQVJULFlBQWEsQ0FVYixXQUFZLENBUlosc0JBQXVCLENBR3ZCLE1BQU8sQ0FNUCxlQUFnQixDQUNoQixtQkFBb0IsQ0FUcEIsaUJBQWtCLENBSWxCLE9BQVEsQ0FEUixLQUFNLENBR04sVUFBVyxDQUxYLFVBUXNCLENBQ3RCLHVDQUdFLGtCQUFtQixDQUduQixXQUFZLENBTFosWUFBYSxDQU9iLFdBQVksQ0FOWixzQkFBdUIsQ0FPdkIsVUFBWSxDQUxaLGlCQUFrQixDQUNsQixVQUFXLENBRVgsVUFFYyxDQUVsQiwwQ0FDRSxZQUFlLENBRWpCLCtCQVVFLGtCQUFtQixDQUhuQixRQUFTLENBTlQsWUFBYSxDQVFiLFdBQVksQ0FFWixzQkFBdUIsQ0FQdkIsTUFBTyxDQVFQLG1CQUFvQixDQVZwQixpQkFBa0IsQ0FJbEIsT0FBUSxDQURSLEtBQU0sQ0FHTixVQUFXLENBTFgsVUFTc0IsQ0FFeEIsZ0RBQ0UsWUFBZSxDQUVqQiw4QkFlRSxrU0FBbVMsQ0FQblMsUUFBUyxDQVBULFlBQWEsQ0FDYixxQkFBc0IsQ0FPdEIsWUFBYSxDQU5iLDZCQUE4QixDQUc5QixNQUFPLENBS1AsU0FBVSxDQURWLG1CQUFvQixDQUlwQixtQkFBb0IsQ0FWcEIsaUJBQWtCLENBR2xCLE9BQVEsQ0FNUiw4QkFBZ0MsQ0FEaEMsaUJBQWtCLENBUGxCLFVBVXFTLENBQ3JTLDRDQUdFLG1CQUFvQixDQUZwQixpQkFBa0IsQ0FDbEIsU0FDc0IsQ0FDdEIsa0VBSUUsa0JBQW1CLENBRW5CLGNBQWUsQ0FKZixZQUFhLENBQ2Isa0JBQW1CLENBRW5CLFVBQVcsQ0FKWCxpQkFLaUIsQ0FDakIsOEZBRUUsa0JBQW1CLENBSW5CLDZCQUFvQyxDQUxwQyxZQUFhLENBR2IsVUFBVyxDQURYLGlCQUFrQixDQUVsQixVQUNzQyxDQUN0QyxtSEFTRSw2QkFBb0MsQ0FIcEMsUUFBUyxDQUNULFdBQVksQ0FKWixNQUFPLENBRlAsaUJBQWtCLENBSWxCLE9BQVEsQ0FEUixLQUFNLENBSU4sT0FBUSxDQU5SLFVBT3NDLENBQ3hDLG1IQU1FLFFBQVMsQ0FDVCxXQUFZLENBSlosTUFBTyxDQUZQLGlCQUFrQixDQUlsQixPQUFRLENBRFIsS0FBTSxDQUlOLE9BQVEsQ0FOUixVQU1VLENBQ1osc0hBTUUsUUFBUyxDQUNULFdBQVksQ0FKWixNQUFPLENBS1AsbUJBQW9CLENBUHBCLGlCQUFrQixDQUlsQixPQUFRLENBRFIsS0FBTSxDQUZOLFVBTXNCLENBQ3RCLDJIQU9FLGVBQWdCLENBTmhCLG9CQUFxQixDQUtyQixXQUFZLENBSFosTUFBTyxDQUtQLG1CQUFvQixDQU5wQixpQkFBa0IsQ0FFbEIsS0FBTSxDQUNOLFNBR3NCLENBQzFCLHNIQUVFLGtCQUFtQixDQUluQixpQkFBa0IsQ0FIbEIsc0JBQXVCLENBQ3ZCLGlCQUFrQixDQUdsQixtQkFBMEIsQ0FDMUIsb0NBQXNDLENBUHRDLGlCQUFrQixDQUlsQixVQUd3QyxDQUN4QyxnSUFFRSxXQUFZLENBQ1osbUJBQW9CLENBQ3BCLHdCQUFpQixDQUFqQixxQkFBaUIsQ0FBakIsb0JBQWlCLENBQWpCLGdCQUFpQixDQUhqQixVQUdtQixDQUN2QixnSEFZRSx5QkFBOEIsQ0FDOUIsaUJBQWtCLENBSmxCLFVBQVcsQ0FSWCxZQUFhLENBU2IsY0FBZSxDQUlmLGVBQWlCLENBUmpCLFdBQVksQ0FEWixNQUFPLENBR1AsZ0JBQWlCLENBRGpCLGFBQWMsQ0FMZCxpQkFBa0IsQ0FTbEIsaUJBQWtCLENBUGxCLFNBQVUsQ0FXVixrQkFBbUIsQ0FabkIsVUFZcUIsQ0FDM0Isb0VBTUUsK0JBQW9DLENBSHBDLFVBQVcsQ0FGWCxZQUFhLENBR2IsTUFBTyxDQUNQLG1CQUFvQixDQUhwQixpQkFJc0MsQ0FDeEMsOERBUUUsUUFBUyxDQVBULFlBQWEsQ0FHYixXQUFZLENBQ1osTUFBTyxDQUlQLG1CQUFvQixDQVBwQixpQkFBa0IsQ0FLbEIsT0FBUSxDQURSLEtBQU0sQ0FITixVQU1zQixDQUN0Qiw4RUFNRSw4QkFBcUMsQ0FEckMsVUFBVyxDQUhYLE1BQU8sQ0FEUCxpQkFBa0IsQ0FFbEIsUUFBUyxDQUNULFNBRXVDLENBQzdDLDRDQUtFLGtCQUFtQixDQURuQixZQUFhLENBR2IsV0FBWSxDQURaLDZCQUE4QixDQUg5QixtQkFBb0IsQ0FGcEIsaUJBQWtCLENBQ2xCLFNBS2MsQ0FDZCwrSEFFRSxZQUFlLENBQ2pCLHlEQUVFLGtCQUFtQixDQU9uQixjQUFlLENBUmYsWUFBYSxDQUdiLGNBQWUsQ0FHZixhQUFjLENBRmQsZUFBZ0IsQ0FDaEIsY0FBZSxDQUhmLFVBQVksQ0FLWixpQkFBa0IsQ0FFbEIsa0JBQXFCLENBQ3JCLG1FQUVFLGtCQUFtQixDQURuQixZQUFhLENBR2IsVUFBVyxDQUNYLFdBQVksQ0FGWixzQkFBdUIsQ0FHdkIsVUFBYSxDQUNmLCtEQUNFLFNBQVksQ0FDaEIsa0VBQ0UsY0FBaUIsQ0FDbkIsa0ZBRUUsVUFBVyxDQUVYLFdBQVksQ0FFWixlQUFnQixDQUxoQixpQkFBa0IsQ0FJbEIsNkVBQXlGLENBRnpGLE9BR2tCLENBQ2xCLDRHQVFFLGVBQWdCLENBRmhCLGtCQUFtQixDQURuQixXQUFZLENBRlosTUFBTyxDQUlQLGVBQWdCLENBTmhCLGlCQUFrQixDQUNsQixPQUFRLENBRVIsVUFJa0IsQ0FDbEIsbUhBRUUsZUFBZ0IsQ0FEaEIsVUFDa0IsQ0FDcEIsa0hBRUUsNkJBQW9DLENBRHBDLFFBQ3NDLENBQ3hDLHFPQUNFLFVBQVcsQ0FFWCxhQUFjLENBRWQsVUFBVyxDQUNYLGVBQWdCLENBSmhCLGlCQUFrQixDQUVsQixPQUFRLENBR1IsVUFBYSxDQUNuQix3RkFDRSxVQUFhLENBQ2YsaUVBQ0UsaUJBQWtCLENBQ2xCLFVBQWEsQ0FDYiwrRUFRRSx5QkFBOEIsQ0FDOUIsaUJBQWtCLENBTmxCLFdBQVksQ0FJWixVQUFXLENBTlgsWUFBYSxDQUliLGFBQWMsQ0FIZCxpQkFBa0IsQ0FJbEIsaUJBQWtCLENBRmxCLFdBS29CLENBQ3BCLGlHQUNFLFdBQVksQ0FDWixnQkFBaUIsQ0FDakIsZUFBZ0IsQ0FDaEIsc0JBQXVCLENBRXZCLGtDQUF1QyxDQUR2QyxrQkFDeUMsQ0FDekMsdUdBQ0UsbUNBQTRDLENBQ2xELHFGQUNFLGFBQWdCLENBQ3RCLG9HQUNFLFdBQWMsQ0FDZCw0SEFDRSxrQkFBc0IsQ0FDdEIsa0JBQXFCLENBRTNCLHVGQUNFLFNBQVUsQ0FDVixrQkFBcUIsQ0FFdkIsd01BR0Usc0JBQTBCLENBRTVCLHFEQUNFLDRCQUFpQyxDQUNqQyw0QkFBZ0MsQ0FFbEMsOEJBQ0UsWUFBYSxDQUNiLGNBQWUsQ0FHZixNQUFPLENBRVAsWUFBYSxDQUViLG1CQUFvQixDQU5wQixpQkFBa0IsQ0FHbEIsS0FBTSxDQUVOLFVBQVcsQ0FKWCxVQUtzQixDQUN0QixnREFJRSwrQkFBb0MsQ0FDcEMsaUJBQWtCLENBRmxCLFVBQVcsQ0FGWCxvQkFBcUIsQ0FDckIsZ0JBR29CLENBRXhCLDhDQUNFLFlBQWUsQ0FFakIsb0NBU0UsK0JBQW9DLENBQ3BDLGlCQUFrQixDQVRsQixZQUFhLENBQ2IscUJBQXNCLENBR3RCLFNBQVUsQ0FFVixlQUFnQixDQUNoQixhQUFjLENBTGQsaUJBQWtCLENBR2xCLFFBQVMsQ0FGVCxXQU1vQixDQUNwQixxREFVRSwwQ0FBaUQsQ0FOakQsVUFBVyxDQUhYLGNBQWUsQ0FFZixhQUFjLENBRGQsY0FBZSxDQUlmLGVBQWdCLENBRGhCLGlCQUFrQixDQUVsQixzQkFBdUIsQ0FFdkIsa0NBQXVDLENBRHZDLGtCQUVtRCxDQUNuRCx1REFDRSxVQUFXLENBQ1gsb0JBQXVCLENBQ3pCLDBEQUNFLG9CQUFxQixDQUNyQixhQUFnQixDQUNoQixzSUFDRSxhQUFnQixDQUNwQiwyREFDRSxtQ0FBNEMsQ0FDOUMsZ0VBQ0Usa0JBQXFCLENBRTNCLHlEQUNFLFlBQWUsQ0FFakIsZ0NBRUUsa0JBQW1CLENBRG5CLFlBQWEsQ0FPYixXQUFZLENBTFosc0JBQXVCLENBR3ZCLE1BQU8sQ0FJUCxTQUFVLENBR1YsZUFBZ0IsQ0FEaEIsbUJBQW9CLENBUnBCLGlCQUFrQixDQUdsQixLQUFNLENBSU4saUJBQWtCLENBRmxCLFVBQVcsQ0FKWCxVQVFrQixDQUNsQixtREFRRSwrQkFBb0MsQ0FKcEMsUUFBUyxDQUdULGNBQWUsQ0FEZixXQUFZLENBSVosYUFBYyxDQVRkLGlCQUFrQixDQUVsQixZQUFhLENBRGIsS0FBTSxDQU9OLDhCQUFnQyxDQUpoQyxXQUtnQixDQUNoQixxRUFHRSxXQUFZLENBRlosZUFBZ0IsQ0FDaEIsVUFDYyxDQUNkLGtGQUNFLDBDQUFpRCxDQUNqRCxpQkFBb0IsQ0FDcEIsc0dBQ0UsaUJBQW9CLENBQzVCLG1EQUNFLFlBQWUsQ0FDZixtRUFDRSxNQUFPLENBQ1AsYUFBZ0IsQ0FDaEIsMEVBTUUsbUNBQTBDLENBSDFDLFdBQVksQ0FJWixpQkFBa0IsQ0FGbEIsVUFBVyxDQUpYLFdBQVksQ0FHWixZQUFhLENBRmIsVUFLb0IsQ0FHdEIsbUtBQ0Usd0JBQTJCLENBQ2pDLHlEQUlFLHVCQUFnQixDQUFoQixvQkFBZ0IsQ0FBaEIsZUFBZ0IsQ0FDaEIsbUNBQTBDLENBSDFDLFVBQVcsQ0FDWCxZQUFhLENBRmIsVUFJNEMsQ0FDOUMsc0RBRUUsa0JBQW1CLENBRG5CLFlBQ3FCLENBQ3JCLDREQUNFLFdBQVksQ0FFWixnQkFBaUIsQ0FEakIsVUFDbUIsQ0FDdkIsb0RBQ0UsWUFBZSxDQUNmLG9FQU9FLG1DQUEwQyxDQUgxQyxXQUFZLENBSVosaUJBQWtCLENBRmxCLFVBQVcsQ0FKWCxXQUFZLENBQ1osZ0JBQWlCLENBRWpCLFlBQWEsQ0FJYixpQkFBa0IsQ0FSbEIsVUFRb0IsQ0FDdEIsc0VBQ0UsTUFBTyxDQUlQLFdBQVksQ0FDWixnQkFBaUIsQ0FKakIsZUFBZ0IsQ0FLaEIsaUJBQWtCLENBSmxCLHNCQUF1QixDQUN2QixrQkFHb0IsQ0FFMUIsaURBQ0UsU0FBVSxDQUVWLG1CQUFvQixDQURwQixrQkFDc0IsQ0FDdEIsb0VBQ0UsT0FBVSxDQUVkLDRCQVlFLGtDQUFtQyxDQUNuQywrQkFBb0MsQ0FKcEMsVUFBVyxDQVJYLFlBQWEsQ0FDYixxQkFBc0IsQ0FTdEIsd0ZBQStGLENBRC9GLGNBQWUsQ0FOZixTQUFVLENBSVYsWUFBYSxDQUxiLGlCQUFrQixDQUVsQixRQUFTLENBRVQsV0FBWSxDQURaLFdBT3NDLENBQ3RDLDJDQUNFLFlBQWEsQ0FDYixpQkFBb0IsQ0FDcEIsMkRBRUUsZ0JBQWlCLENBRGpCLFdBQ21CLENBQ3JCLDZEQUNFLE1BQU8sQ0FDUCxlQUFnQixDQUdoQixnQkFBaUIsQ0FGakIsc0JBQXVCLENBQ3ZCLGtCQUNtQixDQUNyQixzREFDRSxlQUFrQixDQUN0Qiw0Q0FJRSxjQUFlLENBSGYsaUJBQWtCLENBRWxCLFNBQVUsQ0FEVixPQUVpQixDQUVyQiwwQ0FDRSxZQUFlLENBRWpCLG9DQUNFLHFCQUF5QixDQUUzQiwyQ0FDRSxzQkFBdUIsQ0FDdkIsa0JBQWdCLENBQWhCLGVBQWtCLENBRXBCLHFDQVFFLFFBQVMsQ0FKVCxxQkFBdUIsQ0FDdkIsTUFBTyxDQUpQLGNBQWUsQ0FNZixPQUFRLENBRFIsS0FBTSxDQUhOLG9CQUFzQixDQUR0QixZQU1XLENBRWIsdUJBU0UscUJBQXNCLENBRHRCLFFBQVMsQ0FKVCxXQUFZLENBQ1osTUFBTyxDQUpQLGNBQWUsQ0FNZixPQUFRLENBRFIsS0FBTSxDQUhOLFVBQVcsQ0FEWCxZQU93QixDQUUxQixtQ0FXRSxrQkFBbUIsQ0FEbkIsK0JBQW9DLENBRHBDLFVBQVcsQ0FSWCxZQUFhLENBTWIsV0FBWSxDQUtaLDZCQUE4QixDQVI5QixNQUFPLENBSVAsZ0JBQWlCLENBS2pCLFNBQVUsQ0FYVixpQkFBa0IsQ0FJbEIsT0FBUSxDQURSLEtBQU0sQ0FVTiw4QkFBZ0MsQ0FEaEMsaUJBQWtCLENBWGxCLFdBWWtDLENBQ2xDLG1EQU1FLFdBQVksQ0FMWixNQUFPLENBRVAsZUFBZ0IsQ0FEaEIsY0FBZSxDQUVmLHNCQUF1QixDQUN2QixrQkFDYyxDQUNoQixtREFJRSxjQUFlLENBRGYsY0FBZSxDQURmLGlCQUFrQixDQURsQixVQUdpQixDQUVyQixrQ0FDRSxVQUFjLENBRWhCLDJCQUtFLGlFQUEyRSxDQUQzRSxZQUFhLENBSGIsY0FBZSxDQUVmLFdBQVksQ0FEWixZQUc2RSxDQUM3RSw0Q0FDRSxZQUFhLENBQ2Isd0JBQWlCLENBQWpCLHFCQUFpQixDQUFqQixvQkFBaUIsQ0FBakIsZ0JBQW1CLENBQ3JCLHNEQUNFLFNBQVUsQ0FDVixrQkFBcUIsQ0FDdkIsZ0RBQ0UsZUFBa0IsQ0FDcEIsNlRBUUUsc0JBQTBCLENBRTlCLGVBRUUsa0JBQW1CLENBRG5CLFlBQWEsQ0FFYixzQkFBeUIsQ0FFM0IsbURBQ0Usb0JBQXVCLENBRXpCLGlEQUNFLG9CQUF1QixDQUV6Qiw2Q0FRRSwrQkFBb0MsQ0FDcEMsaUJBQWtCLENBTGxCLFdBQVksQ0FFWixVQUFXLENBTFgsWUFBYSxDQVViLGNBQWUsQ0FSZixTQUFVLENBT1YsV0FBWSxDQUVaLG1CQUFvQixDQVZwQixpQkFBa0IsQ0FLbEIsa0NBQXVDLENBTXZDLHdCQUFpQixDQUFqQixxQkFBaUIsQ0FBakIsb0JBQWlCLENBQWpCLGdCQUFpQixDQVJqQixXQVFtQixDQUNuQiwrQ0FDRSxlQUFnQixDQUNoQixvQkFBdUIsQ0FFM0Isd0NBQ0UsaUJBQW9CLENBQ3BCLDJEQVdFLCtCQUFvQyxDQUNwQyxpQkFBa0IsQ0FUbEIsV0FBWSxDQU9aLFVBQVcsQ0FUWCxZQUFhLENBS2IsZ0JBQWlCLENBRGpCLGVBQWdCLENBRGhCLGVBQWdCLENBR2hCLGFBQWMsQ0FDZCxhQUFjLENBTmQsaUJBQWtCLENBT2xCLGlCQUdvQixDQUNwQiw4RUFDRSxXQUFZLENBQ1osZ0JBQWlCLENBQ2pCLGVBQWdCLENBR2hCLGFBQWMsQ0FGZCxzQkFBdUIsQ0FHdkIsa0NBQXVDLENBRnZDLGtCQUV5QyxDQUN6QyxvRkFDRSxtQ0FBNEMsQ0FDOUMsOEtBQ0UsYUFBZ0IsQ0FDdEIsaUVBQ0UsYUFBZ0IsQ0FFcEIsTUFDRSxpQ0FBdUMsQ0FDdkMsd0JBQXlCLENBQ3pCLGtCQUFxQixDQUV2QixxQ0FDRSxnQkFBbUIsQ0FFckIsK0JBRUUsY0FBZSxDQURmLGlCQUNpQixDQUNqQixxQ0FVRSwrQkFBZ0MsQ0FDaEMsaUJBQWtCLENBQ2xCLFVBQVcsQ0FDWCx3QkFBeUIsQ0FSekIsd0hBQXdJLENBSXhJLGtDQUFtQyxDQUZuQyxpQkFBa0IsQ0FEbEIsZUFBbUIsQ0FXbkIsZUFBZ0IsQ0FIaEIsZ0JBQWtCLENBVmxCLGFBQWMsQ0FJZCxnQkFBaUIsQ0FRakIsa0JBRWEsQ0FDZiwyRUFsQkUsU0FBVSxDQUNWLG1CQUFvQixDQWFwQixpQkFBa0IsQ0FabEIsaUNBQW9DLENBZXBDLFVBV2EsQ0FWZixzQ0FJRSw0QkFBc0MsQ0FBdEMseUNBQXNDLENBSXRDLFVBQVcsQ0FOWCxRQUFTLENBRFQsT0FTYSxDQUNmLHVGQUNFLFNBQVUsQ0FDVixtQkFBc0IsQ0FDeEIsMERBR0Usa0JBRXVCLENBQ3pCLHFIQUxFLFdBQVksQ0FDWixRQUFTLENBRVQsNkNBQStDLENBQy9DLG9CQUt1QixDQUd6QixpSUFDRSx5QkFBK0IiLCJmaWxlIjoiaW5kZXguc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnQtdmlkZW8tcGxheWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMjA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG91dGxpbmU6IDA7XG4gIHpvb206IDE7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXJlY3Rpb246IGx0cjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgLW1zLWhpZ2gtY29udHJhc3QtYWRqdXN0OiBub25lOyB9XG4gIC5hcnQtdmlkZW8tcGxheWVyICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgLmFydC12aWRlby1wbGF5ZXIgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDVweDtcbiAgICBoZWlnaHQ6IDVweDsgfVxuICAuYXJ0LXZpZGVvLXBsYXllciA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2OyB9XG4gIC5hcnQtdmlkZW8tcGxheWVyIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7IH1cbiAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7IH1cbiAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWljb24gc3ZnIHtcbiAgICAgIGZpbGw6ICNmZmY7IH1cbiAgLmFydC12aWRlby1wbGF5ZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgfVxuICBAc3VwcG9ydHMgKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBpbml0aWFsKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBpbml0aWFsKSB7XG4gICAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1iYWNrZHJvcC1maWx0ZXIge1xuICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNykgIWltcG9ydGFudDsgfSB9XG5cbi5hcnQtdmlkZW8tcGxheWVyIC5hcnQtdmlkZW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uYXJ0LXZpZGVvLXBsYXllciAuYXJ0LXBvc3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTE7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG5cbi5hcnQtdmlkZW8tcGxheWVyIC5hcnQtc3VidGl0bGUge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDIwO1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRleHQtc2hhZG93OiAwLjVweCAwLjVweCAwLjVweCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cbiAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1zdWJ0aXRsZSBwIHtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBtYXJnaW46IDVweCAwIDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjsgfVxuXG4uYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWJpbGluZ3VhbCBwOm50aC1jaGlsZChuICsgMikge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7IH1cblxuLmFydC12aWRlby1wbGF5ZXIuYXJ0LXN1YnRpdGxlLXNob3cgLmFydC1zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5hcnQtdmlkZW8tcGxheWVyLmFydC1jb250cm9sLXNob3cgLmFydC1zdWJ0aXRsZSB7XG4gIGJvdHRvbTogNTBweDsgfVxuXG4uYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWRhbm11a3Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDMwO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG5cbi5hcnQtdmlkZW8tcGxheWVyIC5hcnQtbGF5ZXJzIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA0MDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWxheWVycyAuYXJ0LWxheWVyIHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bzsgfVxuXG4uYXJ0LXZpZGVvLXBsYXllci5hcnQtbGF5ZXItc2hvdyAuYXJ0LWxheWVycyB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5hcnQtdmlkZW8tcGxheWVyIC5hcnQtbWFzayB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDUwO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtbWFzayAuYXJ0LXN0YXRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIGJvdHRvbTogNjVweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgb3BhY2l0eTogMC42OyB9XG5cbi5hcnQtdmlkZW8tcGxheWVyLmFydC1tYXNrLXNob3cgLmFydC1tYXNrIHtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4uYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWxvYWRpbmcge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDcwO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuXG4uYXJ0LXZpZGVvLXBsYXllci5hcnQtbG9hZGluZy1zaG93IC5hcnQtbG9hZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7IH1cblxuLmFydC12aWRlby1wbGF5ZXIgLmFydC1ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNjA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDUwcHggMTBweCAwO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFER0NBWUFBQUFUK09xRkFBQUFka2xFUVZRb3o0MlFRUTdBSUFnRUYvVC9EK2ticS9SV0FsblF5eWF6QTRhb0FCNEZzQlNBL2JGanVGMUVPTDdWYnJJckJ1dXNtcnQ0WlpPUmZiNmVoYldkblJIRUlpSVRhRVVLYTVFSnFVYWtSU2FFWUJKU0NZMmRFc3RRWTdBdXhhaHdYRnJ2Wm1XbDJyaDRKWjA3ejlkTHRlc2ZOajVxMEZVM0E1T2Jid0FBQUFCSlJVNUVya0pnZ2c9PSkgcmVwZWF0LXggYm90dG9tOyB9XG4gIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtYm90dG9tIC5hcnQtcHJvZ3Jlc3Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvOyB9XG4gICAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1ib3R0b20gLmFydC1wcm9ncmVzcyAuYXJ0LWNvbnRyb2wtcHJvZ3Jlc3Mge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtYm90dG9tIC5hcnQtcHJvZ3Jlc3MgLmFydC1jb250cm9sLXByb2dyZXNzIC5hcnQtY29udHJvbC1wcm9ncmVzcy1pbm5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7IH1cbiAgICAgICAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1ib3R0b20gLmFydC1wcm9ncmVzcyAuYXJ0LWNvbnRyb2wtcHJvZ3Jlc3MgLmFydC1jb250cm9sLXByb2dyZXNzLWlubmVyIC5hcnQtcHJvZ3Jlc3MtbG9hZGVkIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7IH1cbiAgICAgICAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1ib3R0b20gLmFydC1wcm9ncmVzcyAuYXJ0LWNvbnRyb2wtcHJvZ3Jlc3MgLmFydC1jb250cm9sLXByb2dyZXNzLWlubmVyIC5hcnQtcHJvZ3Jlc3MtcGxheWVkIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogMjA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMDsgfVxuICAgICAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWJvdHRvbSAuYXJ0LXByb2dyZXNzIC5hcnQtY29udHJvbC1wcm9ncmVzcyAuYXJ0LWNvbnRyb2wtcHJvZ3Jlc3MtaW5uZXIgLmFydC1wcm9ncmVzcy1oaWdobGlnaHQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiAzMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gICAgICAgICAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1ib3R0b20gLmFydC1wcm9ncmVzcyAuYXJ0LWNvbnRyb2wtcHJvZ3Jlc3MgLmFydC1jb250cm9sLXByb2dyZXNzLWlubmVyIC5hcnQtcHJvZ3Jlc3MtaGlnaGxpZ2h0IHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHdpZHRoOiA3cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87IH1cbiAgICAgICAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1ib3R0b20gLmFydC1wcm9ncmVzcyAuYXJ0LWNvbnRyb2wtcHJvZ3Jlc3MgLmFydC1jb250cm9sLXByb2dyZXNzLWlubmVyIC5hcnQtcHJvZ3Jlc3MtaW5kaWNhdG9yIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogNDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0OyB9XG4gICAgICAgICAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1ib3R0b20gLmFydC1wcm9ncmVzcyAuYXJ0LWNvbnRyb2wtcHJvZ3Jlc3MgLmFydC1jb250cm9sLXByb2dyZXNzLWlubmVyIC5hcnQtcHJvZ3Jlc3MtaW5kaWNhdG9yIC5hcnQtaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cbiAgICAgICAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1ib3R0b20gLmFydC1wcm9ncmVzcyAuYXJ0LWNvbnRyb2wtcHJvZ3Jlc3MgLmFydC1jb250cm9sLXByb2dyZXNzLWlubmVyIC5hcnQtcHJvZ3Jlc3MtdGlwIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiA1MDtcbiAgICAgICAgICB0b3A6IC0yNXB4O1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1ib3R0b20gLmFydC1wcm9ncmVzcyAuYXJ0LWNvbnRyb2wtdGh1bWJuYWlscyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiA4cHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7IH1cbiAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWJvdHRvbSAuYXJ0LXByb2dyZXNzIC5hcnQtY29udHJvbC1sb29wIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gICAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWJvdHRvbSAuYXJ0LXByb2dyZXNzIC5hcnQtY29udHJvbC1sb29wIC5hcnQtbG9vcC1wb2ludCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTsgfVxuICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWJvdHRvbSAuYXJ0LWNvbnRyb2xzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogNDVweDsgfVxuICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtYm90dG9tIC5hcnQtY29udHJvbHMgLmFydC1jb250cm9scy1sZWZ0LFxuICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtYm90dG9tIC5hcnQtY29udHJvbHMgLmFydC1jb250cm9scy1yaWdodCB7XG4gICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gICAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1ib3R0b20gLmFydC1jb250cm9scyAuYXJ0LWNvbnRyb2wge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgICAgbWluLXdpZHRoOiAzNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWJvdHRvbSAuYXJ0LWNvbnRyb2xzIC5hcnQtY29udHJvbCAuYXJ0LWljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgd2lkdGg6IDM2cHg7IH1cbiAgICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtYm90dG9tIC5hcnQtY29udHJvbHMgLmFydC1jb250cm9sOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTsgfVxuICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtYm90dG9tIC5hcnQtY29udHJvbHMgLmFydC1jb250cm9sLW9ubHlUZXh0IHtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDsgfVxuICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtYm90dG9tIC5hcnQtY29udHJvbHMgLmFydC1jb250cm9sLXZvbHVtZSAuYXJ0LXZvbHVtZS1wYW5lbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSksIHdpZHRoIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSk7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWJvdHRvbSAuYXJ0LWNvbnRyb2xzIC5hcnQtY29udHJvbC12b2x1bWUgLmFydC12b2x1bWUtcGFuZWwgLmFydC12b2x1bWUtc2xpZGVyLWhhbmRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC02cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7IH1cbiAgICAgICAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1ib3R0b20gLmFydC1jb250cm9scyAuYXJ0LWNvbnRyb2wtdm9sdW1lIC5hcnQtdm9sdW1lLXBhbmVsIC5hcnQtdm9sdW1lLXNsaWRlci1oYW5kbGU6OmJlZm9yZSB7XG4gICAgICAgICAgbGVmdDogLTU0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjsgfVxuICAgICAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWJvdHRvbSAuYXJ0LWNvbnRyb2xzIC5hcnQtY29udHJvbC12b2x1bWUgLmFydC12b2x1bWUtcGFuZWwgLmFydC12b2x1bWUtc2xpZGVyLWhhbmRsZTo6YWZ0ZXIge1xuICAgICAgICAgIGxlZnQ6IDZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7IH1cbiAgICAgICAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1ib3R0b20gLmFydC1jb250cm9scyAuYXJ0LWNvbnRyb2wtdm9sdW1lIC5hcnQtdm9sdW1lLXBhbmVsIC5hcnQtdm9sdW1lLXNsaWRlci1oYW5kbGU6OmJlZm9yZSwgLmFydC12aWRlby1wbGF5ZXIgLmFydC1ib3R0b20gLmFydC1jb250cm9scyAuYXJ0LWNvbnRyb2wtdm9sdW1lIC5hcnQtdm9sdW1lLXBhbmVsIC5hcnQtdm9sdW1lLXNsaWRlci1oYW5kbGU6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICAgICAgICB3aWR0aDogNjBweDsgfVxuICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtYm90dG9tIC5hcnQtY29udHJvbHMgLmFydC1jb250cm9sLXZvbHVtZTpob3ZlciAuYXJ0LXZvbHVtZS1wYW5lbCB7XG4gICAgICB3aWR0aDogNjBweDsgfVxuICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtYm90dG9tIC5hcnQtY29udHJvbHMgLmFydC1jb250cm9sLXF1YWxpdHkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMzA7IH1cbiAgICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtYm90dG9tIC5hcnQtY29udHJvbHMgLmFydC1jb250cm9sLXF1YWxpdHkgLmFydC1xdWFsaXR5cyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAzNXB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgfVxuICAgICAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWJvdHRvbSAuYXJ0LWNvbnRyb2xzIC5hcnQtY29udHJvbC1xdWFsaXR5IC5hcnQtcXVhbGl0eXMgLmFydC1xdWFsaXR5LWl0ZW0ge1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjUpOyB9XG4gICAgICAgICAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1ib3R0b20gLmFydC1jb250cm9scyAuYXJ0LWNvbnRyb2wtcXVhbGl0eSAuYXJ0LXF1YWxpdHlzIC5hcnQtcXVhbGl0eS1pdGVtOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgfVxuICAgICAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1ib3R0b20gLmFydC1jb250cm9scyAuYXJ0LWNvbnRyb2wtcXVhbGl0eTpob3ZlciAuYXJ0LXF1YWxpdHlzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IH1cbiAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1ib3R0b206aG92ZXIgLmFydC1wcm9ncmVzcyAuYXJ0LWNvbnRyb2wtcHJvZ3Jlc3MgLmFydC1jb250cm9sLXByb2dyZXNzLWlubmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWJvdHRvbTpob3ZlciAuYXJ0LXByb2dyZXNzIC5hcnQtY29udHJvbC1wcm9ncmVzcyAuYXJ0LWNvbnRyb2wtcHJvZ3Jlc3MtaW5uZXIgLmFydC1wcm9ncmVzcy1pbmRpY2F0b3Ige1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cblxuLmFydC12aWRlby1wbGF5ZXIuYXJ0LWNvbnRyb2wtc2hvdyAuYXJ0LWJvdHRvbSwgLmFydC12aWRlby1wbGF5ZXIuYXJ0LWhvdmVyIC5hcnQtYm90dG9tIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuXG4uYXJ0LXZpZGVvLXBsYXllci5hcnQtZXJyb3IgLmFydC1wcm9ncmVzcy1pbmRpY2F0b3IsXG4uYXJ0LXZpZGVvLXBsYXllci5hcnQtZXJyb3IgLmFydC1wcm9ncmVzcy10aXAsIC5hcnQtdmlkZW8tcGxheWVyLmFydC1kZXN0cm95IC5hcnQtcHJvZ3Jlc3MtaW5kaWNhdG9yLFxuLmFydC12aWRlby1wbGF5ZXIuYXJ0LWRlc3Ryb3kgLmFydC1wcm9ncmVzcy10aXAge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLmFydC12aWRlby1wbGF5ZXIuYXJ0LW1vYmlsZSAuYXJ0LXByb2dyZXNzLWluZGljYXRvciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgIWltcG9ydGFudDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50OyB9XG5cbi5hcnQtdmlkZW8tcGxheWVyIC5hcnQtbm90aWNlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDgwO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LW5vdGljZSAuYXJ0LW5vdGljZS1pbm5lciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7IH1cblxuLmFydC12aWRlby1wbGF5ZXIuYXJ0LW5vdGljZS1zaG93IC5hcnQtbm90aWNlIHtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4uYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWNvbnRleHRtZW51cyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTIwO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxuICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWNvbnRleHRtZW51cyAuYXJ0LWNvbnRleHRtZW51IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cbiAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWNvbnRleHRtZW51cyAuYXJ0LWNvbnRleHRtZW51IGEge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWNvbnRleHRtZW51cyAuYXJ0LWNvbnRleHRtZW51IHNwYW4ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogMCA3cHg7IH1cbiAgICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtY29udGV4dG1lbnVzIC5hcnQtY29udGV4dG1lbnUgc3Bhbjpob3ZlciwgLmFydC12aWRlby1wbGF5ZXIgLmFydC1jb250ZXh0bWVudXMgLmFydC1jb250ZXh0bWVudSBzcGFuLmFydC1jdXJyZW50IHtcbiAgICAgICAgY29sb3I6ICMwMGM5ZmY7IH1cbiAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWNvbnRleHRtZW51cyAuYXJ0LWNvbnRleHRtZW51OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgfVxuICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtY29udGV4dG1lbnVzIC5hcnQtY29udGV4dG1lbnU6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lOyB9XG5cbi5hcnQtdmlkZW8tcGxheWVyLmFydC1jb250ZXh0bWVudS1zaG93IC5hcnQtY29udGV4dG1lbnVzIHtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4uYXJ0LXZpZGVvLXBsYXllciAuYXJ0LXNldHRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LXNldHRpbmdzIC5hcnQtc2V0dGluZy1pbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogLTMwMHB4O1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgb3ZlcmZsb3c6IGF1dG87IH1cbiAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LXNldHRpbmdzIC5hcnQtc2V0dGluZy1pbm5lciAuYXJ0LXNldHRpbmctYm9keSB7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtc2V0dGluZ3MgLmFydC1zZXR0aW5nLWlubmVyIC5hcnQtc2V0dGluZy1ib2R5IC5hcnQtc2V0dGluZyB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDsgfVxuICAgICAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LXNldHRpbmdzIC5hcnQtc2V0dGluZy1pbm5lciAuYXJ0LXNldHRpbmctYm9keSAuYXJ0LXNldHRpbmcgLmFydC1zZXR0aW5nLWhlYWRlciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XG4gIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtc2V0dGluZ3MgLmFydC1zZXR0aW5nLXJhZGlvIHtcbiAgICBkaXNwbGF5OiBmbGV4OyB9XG4gICAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1zZXR0aW5ncyAuYXJ0LXNldHRpbmctcmFkaW8gLmFydC1yYWRpby1pdGVtIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwYWRkaW5nOiAwIDJweDsgfVxuICAgICAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1zZXR0aW5ncyAuYXJ0LXNldHRpbmctcmFkaW8gLmFydC1yYWRpby1pdGVtIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4OyB9XG4gICAgICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtc2V0dGluZ3MgLmFydC1zZXR0aW5nLXJhZGlvIC5hcnQtcmFkaW8taXRlbSBidXR0b246YWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWQ2OyB9XG4gICAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LXNldHRpbmdzIC5hcnQtc2V0dGluZy1yYWRpbyAuYXJ0LXJhZGlvLWl0ZW0uY3VycmVudCBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMWQ2OyB9XG4gIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtc2V0dGluZ3MgLmFydC1zZXR0aW5nLXJhbmdlIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XG4gIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtc2V0dGluZ3MgLmFydC1zZXR0aW5nLWNoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LXNldHRpbmdzIC5hcnQtc2V0dGluZy1jaGVja2JveCBpbnB1dCB7XG4gICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICB3aWR0aDogMTRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XG4gIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtc2V0dGluZ3MgLmFydC1zZXR0aW5nLXVwbG9hZCB7XG4gICAgZGlzcGxheTogZmxleDsgfVxuICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtc2V0dGluZ3MgLmFydC1zZXR0aW5nLXVwbG9hZCAuYXJ0LXVwbG9hZC1idG4ge1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtc2V0dGluZ3MgLmFydC1zZXR0aW5nLXVwbG9hZCAuYXJ0LXVwbG9hZC12YWx1ZSB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGhlaWdodDogMjJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4OyB9XG5cbi5hcnQtdmlkZW8tcGxheWVyLmFydC1zZXR0aW5nLXNob3cgLmFydC1zZXR0aW5ncyB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvOyB9XG4gIC5hcnQtdmlkZW8tcGxheWVyLmFydC1zZXR0aW5nLXNob3cgLmFydC1zZXR0aW5ncyAuYXJ0LXNldHRpbmctaW5uZXIge1xuICAgIHJpZ2h0OiAwOyB9XG5cbi5hcnQtdmlkZW8tcGxheWVyIC5hcnQtaW5mbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOiAzNTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IE5vdG8gU2FucyBDSksgU0MgRGVtaUxpZ2h0LCBSb2JvdG8sIFNlZ29lIFVJLCBUYWhvbWEsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7IH1cbiAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1pbmZvIC5hcnQtaW5mby1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDsgfVxuICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtaW5mbyAuYXJ0LWluZm8taXRlbSAuYXJ0LWluZm8tdGl0bGUge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWluZm8gLmFydC1pbmZvLWl0ZW0gLmFydC1pbmZvLWNvbnRlbnQge1xuICAgICAgZmxleDogMTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDsgfVxuICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtaW5mbyAuYXJ0LWluZm8taXRlbTpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cbiAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1pbmZvIC5hcnQtaW5mby1jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5hcnQtdmlkZW8tcGxheWVyLmFydC1pbmZvLXNob3cgLmFydC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4uYXJ0LXZpZGVvLXBsYXllci5hcnQtaGlkZS1jdXJzb3IgKiB7XG4gIGN1cnNvcjogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5hcnQtdmlkZW8tcGxheWVyW2RhdGEtYXNwZWN0LXJhdGlvXSB2aWRlbyB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBvYmplY3QtZml0OiBmaWxsOyB9XG5cbi5hcnQtdmlkZW8tcGxheWVyLmFydC1mdWxsc2NyZWVuLXdlYiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDsgfVxuXG4uYXJ0LWZ1bGxzY3JlZW4tcm90YXRlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IH1cblxuLmFydC12aWRlby1wbGF5ZXIgLmFydC1taW5pLWhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTEwO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7IH1cbiAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1taW5pLWhlYWRlciAuYXJ0LW1pbmktdGl0bGUge1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjdXJzb3I6IG1vdmU7IH1cbiAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1taW5pLWhlYWRlciAuYXJ0LW1pbmktY2xvc2Uge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5hcnQtdmlkZW8tcGxheWVyLmFydC1pcy1kcmFnZ2luZyB7XG4gIG9wYWNpdHk6IDAuNzsgfVxuXG4uYXJ0LXZpZGVvLXBsYXllci5hcnQtbWluaSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDIyNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cbiAgLmFydC12aWRlby1wbGF5ZXIuYXJ0LW1pbmkgLmFydC1taW5pLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxuICAuYXJ0LXZpZGVvLXBsYXllci5hcnQtbWluaS5hcnQtaG92ZXIgLmFydC1taW5pLWhlYWRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gIC5hcnQtdmlkZW8tcGxheWVyLmFydC1taW5pIC5hcnQtbWFzayAuYXJ0LXN0YXRlIHtcbiAgICBwb3NpdGlvbjogc3RhdGljOyB9XG4gIC5hcnQtdmlkZW8tcGxheWVyLmFydC1taW5pIC5hcnQtY29udGV4dG1lbnUsXG4gIC5hcnQtdmlkZW8tcGxheWVyLmFydC1taW5pIC5hcnQtYm90dG9tLFxuICAuYXJ0LXZpZGVvLXBsYXllci5hcnQtbWluaSAuYXJ0LWRhbm11LFxuICAuYXJ0LXZpZGVvLXBsYXllci5hcnQtbWluaSAuYXJ0LWluZm8sXG4gIC5hcnQtdmlkZW8tcGxheWVyLmFydC1taW5pIC5hcnQtbGF5ZXJzLFxuICAuYXJ0LXZpZGVvLXBsYXllci5hcnQtbWluaSAuYXJ0LW5vdGljZSxcbiAgLmFydC12aWRlby1wbGF5ZXIuYXJ0LW1pbmkgLmFydC1zZXR0aW5nLFxuICAuYXJ0LXZpZGVvLXBsYXllci5hcnQtbWluaSAuYXJ0LXN1YnRpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLmFydC1hdXRvLXNpemUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4uYXJ0LXZpZGVvLXBsYXllcltkYXRhLWZsaXA9XCJob3Jpem9udGFsXCJdIC5hcnQtdmlkZW8ge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7IH1cblxuLmFydC12aWRlby1wbGF5ZXJbZGF0YS1mbGlwPVwidmVydGljYWxcIl0gLmFydC12aWRlbyB7XG4gIHRyYW5zZm9ybTogc2NhbGVZKC0xKTsgfVxuXG4uYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWxheWVycyAuYXJ0LWxheWVyLWxvZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lOyB9XG4gIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtbGF5ZXJzIC5hcnQtbGF5ZXItbG9nIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsOyB9XG5cbi5hcnQtdmlkZW8tcGxheWVyIC5hcnQtY29udHJvbC1zZWxlY3RvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWNvbnRyb2wtc2VsZWN0b3IgLmFydC1zZWxlY3Rvci1saXN0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDM1cHg7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4OyB9XG4gICAgLmFydC12aWRlby1wbGF5ZXIgLmFydC1jb250cm9sLXNlbGVjdG9yIC5hcnQtc2VsZWN0b3ItbGlzdCAuYXJ0LXNlbGVjdG9yLWl0ZW0ge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cbiAgICAgIC5hcnQtdmlkZW8tcGxheWVyIC5hcnQtY29udHJvbC1zZWxlY3RvciAuYXJ0LXNlbGVjdG9yLWxpc3QgLmFydC1zZWxlY3Rvci1pdGVtOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XG4gICAgICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWNvbnRyb2wtc2VsZWN0b3IgLmFydC1zZWxlY3Rvci1saXN0IC5hcnQtc2VsZWN0b3ItaXRlbTpob3ZlciwgLmFydC12aWRlby1wbGF5ZXIgLmFydC1jb250cm9sLXNlbGVjdG9yIC5hcnQtc2VsZWN0b3ItbGlzdCAuYXJ0LXNlbGVjdG9yLWl0ZW0uYXJ0LWN1cnJlbnQge1xuICAgICAgICBjb2xvcjogIzAwYzlmZjsgfVxuICAuYXJ0LXZpZGVvLXBsYXllciAuYXJ0LWNvbnRyb2wtc2VsZWN0b3I6aG92ZXIgLmFydC1zZWxlY3Rvci1saXN0IHtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuXG46cm9vdCB7XG4gIC0tYmFsbG9vbi1jb2xvcjogcmdiYSgxNiwgMTYsIDE2LCAwLjk1KTtcbiAgLS1iYWxsb29uLWZvbnQtc2l6ZTogMTJweDtcbiAgLS1iYWxsb29uLW1vdmU6IDRweDsgfVxuXG5idXR0b25bYXJpYS1sYWJlbF1bZGF0YS1iYWxsb29uLXBvc10ge1xuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxuXG5bYXJpYS1sYWJlbF1bZGF0YS1iYWxsb29uLXBvc10ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuICBbYXJpYS1sYWJlbF1bZGF0YS1iYWxsb29uLXBvc106YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMThzIGVhc2Utb3V0IDAuMThzO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgZm9udC1zaXplOiB2YXIoLS1iYWxsb29uLWZvbnQtc2l6ZSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFsbG9vbi1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGNvbnRlbnQ6IGF0dHIoYXJpYS1sYWJlbCk7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgei1pbmRleDogMTA7IH1cbiAgW2FyaWEtbGFiZWxdW2RhdGEtYmFsbG9vbi1wb3NdOmJlZm9yZSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3AtY29sb3I6IHZhcigtLWJhbGxvb24tY29sb3IpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMThzIGVhc2Utb3V0IDAuMThzO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDsgfVxuICBbYXJpYS1sYWJlbF1bZGF0YS1iYWxsb29uLXBvc106aG92ZXI6YmVmb3JlLCBbYXJpYS1sYWJlbF1bZGF0YS1iYWxsb29uLXBvc106aG92ZXI6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbiAgW2FyaWEtbGFiZWxdW2RhdGEtYmFsbG9vbi1wb3NdW2RhdGEtYmFsbG9vbi1wb3M9J3VwJ106YWZ0ZXIge1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCB2YXIoLS1iYWxsb29uLW1vdmUpKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7IH1cbiAgW2FyaWEtbGFiZWxdW2RhdGEtYmFsbG9vbi1wb3NdW2RhdGEtYmFsbG9vbi1wb3M9J3VwJ106YmVmb3JlIHtcbiAgICBib3R0b206IDEwMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIHZhcigtLWJhbGxvb24tbW92ZSkpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDsgfVxuICBbYXJpYS1sYWJlbF1bZGF0YS1iYWxsb29uLXBvc11bZGF0YS1iYWxsb29uLXBvcz0ndXAnXTpob3ZlcjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7IH1cbiAgW2FyaWEtbGFiZWxdW2RhdGEtYmFsbG9vbi1wb3NdW2RhdGEtYmFsbG9vbi1wb3M9J3VwJ106aG92ZXI6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTsgfVxuIl19 */";
  styleInject(css_248z);

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var optionValidator = {exports: {}};

  (function (module, exports) {
  !function(r,t){module.exports=t();}(commonjsGlobal,function(){function e(r){return (e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var n=Object.prototype.toString,c=function(r){if(void 0===r)return "undefined";if(null===r)return "null";var t=e(r);if("boolean"===t)return "boolean";if("string"===t)return "string";if("number"===t)return "number";if("symbol"===t)return "symbol";if("function"===t)return function(r){return "GeneratorFunction"===o(r)}(r)?"generatorfunction":"function";if(function(r){return Array.isArray?Array.isArray(r):r instanceof Array}(r))return "array";if(function(r){if(r.constructor&&"function"==typeof r.constructor.isBuffer)return r.constructor.isBuffer(r);return !1}(r))return "buffer";if(function(r){try{if("number"==typeof r.length&&"function"==typeof r.callee)return !0}catch(r){if(-1!==r.message.indexOf("callee"))return !0}return !1}(r))return "arguments";if(function(r){return r instanceof Date||"function"==typeof r.toDateString&&"function"==typeof r.getDate&&"function"==typeof r.setDate}(r))return "date";if(function(r){return r instanceof Error||"string"==typeof r.message&&r.constructor&&"number"==typeof r.constructor.stackTraceLimit}(r))return "error";if(function(r){return r instanceof RegExp||"string"==typeof r.flags&&"boolean"==typeof r.ignoreCase&&"boolean"==typeof r.multiline&&"boolean"==typeof r.global}(r))return "regexp";switch(o(r)){case"Symbol":return "symbol";case"Promise":return "promise";case"WeakMap":return "weakmap";case"WeakSet":return "weakset";case"Map":return "map";case"Set":return "set";case"Int8Array":return "int8array";case"Uint8Array":return "uint8array";case"Uint8ClampedArray":return "uint8clampedarray";case"Int16Array":return "int16array";case"Uint16Array":return "uint16array";case"Int32Array":return "int32array";case"Uint32Array":return "uint32array";case"Float32Array":return "float32array";case"Float64Array":return "float64array"}if(function(r){return "function"==typeof r.throw&&"function"==typeof r.return&&"function"==typeof r.next}(r))return "generator";switch(t=n.call(r)){case"[object Object]":return "object";case"[object Map Iterator]":return "mapiterator";case"[object Set Iterator]":return "setiterator";case"[object String Iterator]":return "stringiterator";case"[object Array Iterator]":return "arrayiterator"}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")};function o(r){return r.constructor?r.constructor.name:null}function f(r,t){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:["option"];return s(r,t,e),y(r,t,e),function(a,i,u){var r=c(i),t=c(a);if("object"===r){if("object"!==t)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'object' type, but got '").concat(t,"'"));Object.keys(i).forEach(function(r){var t=a[r],e=i[r],n=u.slice();n.push(r),s(t,e,n),y(t,e,n),f(t,e,n);});}if("array"===r){if("array"!==t)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'array' type, but got '").concat(t,"'"));a.forEach(function(r,t){var e=a[t],n=i[t]||i[0],o=u.slice();o.push(t),s(e,n,o),y(e,n,o),f(e,n,o);});}}(r,t,e),r}function s(r,t,e){if("string"===c(t)){var n=c(r);if("?"===t[0]&&(t=t.slice(1)+"|undefined"),!(-1<t.indexOf("|")?t.split("|").map(function(r){return r.toLowerCase().trim()}).filter(Boolean).some(function(r){return n===r}):t.toLowerCase().trim()===n))throw new Error("[Type Error]: '".concat(e.join("."),"' require '").concat(t,"' type, but got '").concat(n,"'"))}}function y(r,t,e){if("function"===c(t)){var n=t(r,c(r),e);if(!0!==n){var o=c(n);throw "string"===o?new Error(n):"error"===o?n:new Error("[Validator Error]: The scheme for '".concat(e.join("."),"' validator require return true, but got '").concat(n,"'"))}}}return f.kindOf=c,f});
  }(optionValidator));

  var validator = optionValidator.exports;

  var Emitter = /*#__PURE__*/function () {
    function Emitter() {
      _classCallCheck(this, Emitter);
    }

    _createClass(Emitter, [{
      key: "on",
      value: function on(name, fn, ctx) {
        var e = this.e || (this.e = {});
        (e[name] || (e[name] = [])).push({
          fn: fn,
          ctx: ctx
        });
        return this;
      }
    }, {
      key: "once",
      value: function once(name, fn, ctx) {
        var self = this;

        function listener() {
          self.off(name, listener);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          fn.apply(ctx, args);
        }

        listener._ = fn;
        return this.on(name, listener, ctx);
      }
    }, {
      key: "emit",
      value: function emit(name) {
        var evtArr = ((this.e || (this.e = {}))[name] || []).slice();

        for (var _len2 = arguments.length, data = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          data[_key2 - 1] = arguments[_key2];
        }

        for (var i = 0; i < evtArr.length; i += 1) {
          evtArr[i].fn.apply(evtArr[i].ctx, data);
        }

        return this;
      }
    }, {
      key: "off",
      value: function off(name, callback) {
        var e = this.e || (this.e = {});
        var evts = e[name];
        var liveEvents = [];

        if (evts && callback) {
          for (var i = 0, len = evts.length; i < len; i += 1) {
            if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
          }
        }

        if (liveEvents.length) {
          e[name] = liveEvents;
        } else {
          delete e[name];
        }

        return this;
      }
    }]);

    return Emitter;
  }();

  var userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : '';
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  var isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
  var isWechat = /MicroMessenger/i.test(userAgent);
  var isIE = /MSIE|Trident/i.test(userAgent);

  function query(selector) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return parent.querySelector(selector);
  }
  function queryAll(selector) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return Array.from(parent.querySelectorAll(selector));
  }
  function addClass(target, className) {
    return target.classList.add(className);
  }
  function removeClass(target, className) {
    return target.classList.remove(className);
  }
  function hasClass(target, className) {
    return target.classList.contains(className);
  }
  function append(parent, child) {
    if (child instanceof Element) {
      parent.appendChild(child);
    } else {
      parent.insertAdjacentHTML('beforeend', String(child));
    }

    return parent.lastElementChild || parent.lastChild;
  }
  function remove(child) {
    return child.parentNode.removeChild(child);
  }
  function setStyle(element, key, value) {
    element.style[key] = value;
    return element;
  }
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (key) {
      setStyle(element, key, styles[key]);
    });
    return element;
  }
  function getStyle(element, key) {
    var numberType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var value = window.getComputedStyle(element, null).getPropertyValue(key);
    return numberType ? parseFloat(value) : value;
  }
  function sublings(target) {
    return Array.from(target.parentElement.children).filter(function (item) {
      return item !== target;
    });
  }
  function inverseClass(target, className) {
    sublings(target).forEach(function (item) {
      return removeClass(item, className);
    });
    addClass(target, className);
  }
  function tooltip(target, msg) {
    var pos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'up';
    if (isMobile) return;
    target.setAttribute('aria-label', msg);
    target.setAttribute('data-balloon-pos', pos);
  }
  function isInViewport(el) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    var vertInView = rect.top - offset <= windowHeight && rect.top + rect.height + offset >= 0;
    var horInView = rect.left - offset <= windowWidth + offset && rect.left + rect.width + offset >= 0;
    return vertInView && horInView;
  }
  function includeFromEvent(event, target) {
    return event.composedPath && event.composedPath().indexOf(target) > -1;
  }
  function replaceElement(newChild, oldChild) {
    oldChild.parentNode.replaceChild(newChild, oldChild);
    return newChild;
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _isNativeReflectConstruct$a() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct$a()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var ArtPlayerError = /*#__PURE__*/function (_Error) {
    _inherits(ArtPlayerError, _Error);

    var _super = _createSuper$9(ArtPlayerError);

    function ArtPlayerError(message, context) {
      var _this;

      _classCallCheck(this, ArtPlayerError);

      _this = _super.call(this, message);

      if (typeof Error.captureStackTrace === 'function') {
        Error.captureStackTrace(_assertThisInitialized(_this), context || _this.constructor);
      }

      _this.name = 'ArtPlayerError';
      return _this;
    }

    return ArtPlayerError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  function errorHandle(condition, msg) {
    if (!condition) {
      throw new ArtPlayerError(msg);
    }

    return condition;
  }

  function srtToVtt(srtText) {
    return 'WEBVTT \r\n\r\n'.concat(srtText.replace(/{[\s\S]*?}/g, '').replace(/\{\\([ibu])\}/g, '</$1>').replace(/\{\\([ibu])1\}/g, '<$1>').replace(/\{([ibu])\}/g, '<$1>').replace(/\{\/([ibu])\}/g, '</$1>').replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, '$1.$2').concat('\r\n\r\n'));
  }
  function vttToBlob(vttText) {
    return URL.createObjectURL(new Blob([vttText], {
      type: 'text/vtt'
    }));
  }
  function assToVtt(ass) {
    var reAss = new RegExp('Dialogue:\\s\\d,' + '(\\d+:\\d\\d:\\d\\d.\\d\\d),' + '(\\d+:\\d\\d:\\d\\d.\\d\\d),' + '([^,]*),' + '([^,]*),' + '(?:[^,]*,){4}' + '([\\s\\S]*)$', 'i');

    function fixTime() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return time.split(/[:.]/).map(function (item, index, arr) {
        if (index === arr.length - 1) {
          if (item.length === 1) {
            return ".".concat(item, "00");
          }

          if (item.length === 2) {
            return ".".concat(item, "0");
          }
        } else if (item.length === 1) {
          return (index === 0 ? '0' : ':0') + item;
        } // eslint-disable-next-line no-nested-ternary


        return index === 0 ? item : index === arr.length - 1 ? ".".concat(item) : ":".concat(item);
      }).join('');
    }

    return "WEBVTT\n\n".concat(ass.split(/\r?\n/).map(function (line) {
      var m = line.match(reAss);
      if (!m) return null;
      return {
        start: fixTime(m[1].trim()),
        end: fixTime(m[2].trim()),
        text: m[5].replace(/{[\s\S]*?}/g, '').replace(/(\\N)/g, '\n').trim().split(/\r?\n/).map(function (item) {
          return item.trim();
        }).join('\n')
      };
    }).filter(function (line) {
      return line;
    }).map(function (line, index) {
      if (line) {
        return "".concat(index + 1, "\n").concat(line.start, " --> ").concat(line.end, "\n").concat(line.text);
      }

      return '';
    }).filter(function (line) {
      return line.trim();
    }).join('\n\n'));
  }

  function getExt(url) {
    if (url.includes('?')) {
      return getExt(url.split('?')[0]);
    }

    if (url.includes('#')) {
      return getExt(url.split('#')[0]);
    }

    return url.trim().toLowerCase().split('.').pop();
  }
  function download(url, name) {
    var elink = document.createElement('a');
    elink.style.display = 'none';
    elink.href = url;
    elink.download = name;
    document.body.appendChild(elink);
    elink.click();
    document.body.removeChild(elink);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  var def = Object.defineProperty;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function has(obj, name) {
    return hasOwnProperty.call(obj, name);
  }
  function get(obj, name) {
    return Object.getOwnPropertyDescriptor(obj, name);
  }
  function mergeDeep() {
    var isObject = function isObject(item) {
      return item && _typeof(item) === 'object' && !Array.isArray(item);
    };

    for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
      objects[_key] = arguments[_key];
    }

    return objects.reduce(function (prev, obj) {
      Object.keys(obj).forEach(function (key) {
        var pVal = prev[key];
        var oVal = obj[key];

        if (Array.isArray(pVal) && Array.isArray(oVal)) {
          prev[key] = pVal.concat.apply(pVal, _toConsumableArray(oVal));
        } else if (isObject(pVal) && isObject(oVal) && !(oVal instanceof Element)) {
          prev[key] = mergeDeep(pVal, oVal);
        } else {
          prev[key] = oVal;
        }
      });
      return prev;
    }, {});
  }

  function sleep() {
    var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }
  function debounce(func, wait, context) {
    var timeout;

    function fn() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    }

    fn.clearTimeout = function ct() {
      clearTimeout(timeout);
    };

    return fn;
  }
  function throttle(callback, delay) {
    var isThrottled = false;
    var args;
    var context;

    function fn() {
      for (var _len2 = arguments.length, args2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args2[_key2] = arguments[_key2];
      }

      if (isThrottled) {
        args = args2;
        context = this;
        return;
      }

      isThrottled = true;
      callback.apply(this, args2);
      setTimeout(function () {
        isThrottled = false;

        if (args) {
          fn.apply(context, args);
          args = null;
          context = null;
        }
      }, delay);
    }

    return fn;
  }

  function clamp(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
  }
  function secondToTime(second) {
    var add0 = function add0(num) {
      return num < 10 ? "0".concat(num) : String(num);
    };

    var hour = Math.floor(second / 3600);
    var min = Math.floor((second - hour * 3600) / 60);
    var sec = Math.floor(second - hour * 3600 - min * 60);
    return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':');
  }
  function escape(str) {
    return str.replace(/[&<>'"]/g, function (tag) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag;
    });
  }

  var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    query: query,
    queryAll: queryAll,
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    append: append,
    remove: remove,
    setStyle: setStyle,
    setStyles: setStyles,
    getStyle: getStyle,
    sublings: sublings,
    inverseClass: inverseClass,
    tooltip: tooltip,
    isInViewport: isInViewport,
    includeFromEvent: includeFromEvent,
    replaceElement: replaceElement,
    ArtPlayerError: ArtPlayerError,
    errorHandle: errorHandle,
    srtToVtt: srtToVtt,
    vttToBlob: vttToBlob,
    assToVtt: assToVtt,
    getExt: getExt,
    download: download,
    def: def,
    has: has,
    get: get,
    mergeDeep: mergeDeep,
    sleep: sleep,
    debounce: debounce,
    throttle: throttle,
    clamp: clamp,
    secondToTime: secondToTime,
    escape: escape,
    userAgent: userAgent,
    isMobile: isMobile,
    isSafari: isSafari,
    isWechat: isWechat,
    isIE: isIE
  });

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys$o(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$o(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$o(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$o(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var a = 'array';
  var b = 'boolean';
  var s = 'string';
  var n = 'number';
  var o = 'object';
  var f = 'function';
  var r = 'regexp';

  function validElement(value, type, paths) {
    return errorHandle(type === s || value instanceof Element, "".concat(paths.join('.'), " require '").concat(s, "' or 'Element' type"));
  }

  var ComponentOption = {
    html: validElement,
    disable: "?".concat(b),
    name: "?".concat(s),
    index: "?".concat(n),
    style: "?".concat(o),
    click: "?".concat(f),
    mounted: "?".concat(f),
    tooltip: "?".concat(s),
    selector: "?".concat(a),
    onSelect: "?".concat(f)
  };
  var scheme = {
    container: validElement,
    url: s,
    poster: s,
    title: s,
    type: s,
    theme: s,
    lang: s,
    volume: n,
    isLive: b,
    muted: b,
    autoplay: b,
    autoSize: b,
    autoMini: b,
    loop: b,
    flip: b,
    rotate: b,
    playbackRate: b,
    aspectRatio: b,
    screenshot: b,
    setting: b,
    hotkey: b,
    pip: b,
    mutex: b,
    backdrop: b,
    fullscreen: b,
    fullscreenWeb: b,
    subtitleOffset: b,
    miniProgressBar: b,
    localVideo: b,
    localSubtitle: b,
    useSSR: b,
    ads: [{
      url: s
    }],
    plugins: [f],
    whitelist: ["".concat(s, "|").concat(f, "|").concat(r)],
    layers: [ComponentOption],
    contextmenu: [ComponentOption],
    settings: [ComponentOption],
    controls: [_objectSpread$o(_objectSpread$o({}, ComponentOption), {}, {
      position: function position(value, _, paths) {
        var position = ['top', 'left', 'right'];
        return errorHandle(position.includes(value), "".concat(paths.join('.'), " only accept ").concat(position.toString(), " as parameters"));
      }
    })],
    quality: [{
      default: "?".concat(b),
      html: s,
      url: s
    }],
    highlight: [{
      time: n,
      text: s
    }],
    thumbnails: {
      url: s,
      number: n,
      column: n
    },
    subtitle: {
      url: s,
      type: s,
      style: o,
      encoding: s,
      bilingual: b
    },
    moreVideoAttr: o,
    icons: o,
    customType: o
  };

  var config = {
    propertys: ['audioTracks', 'autoplay', 'buffered', 'controller', 'controls', 'crossOrigin', 'currentSrc', 'currentTime', 'defaultMuted', 'defaultPlaybackRate', 'duration', 'ended', 'error', 'loop', 'mediaGroup', 'muted', 'networkState', 'paused', 'playbackRate', 'played', 'preload', 'readyState', 'seekable', 'seeking', 'src', 'startDate', 'textTracks', 'videoTracks', 'volume'],
    methods: ['addTextTrack', 'canPlayType', 'load', 'play', 'pause'],
    events: ['abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'error', 'loadeddata', 'loadedmetadata', 'loadstart', 'pause', 'play', 'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting'],
    prototypes: ["width", "height", "videoWidth", "videoHeight", "poster", "webkitDecodedFrameCount", "webkitDroppedFrameCount", "playsInline", "webkitSupportsFullscreen", "webkitDisplayingFullscreen", "onenterpictureinpicture", "onleavepictureinpicture", "disablePictureInPicture", "cancelVideoFrameCallback", "requestVideoFrameCallback", "getVideoPlaybackQuality", "requestPictureInPicture", "webkitEnterFullScreen", "webkitEnterFullscreen", "webkitExitFullScreen", "webkitExitFullscreen"]
  };

  var Whitelist = /*#__PURE__*/function () {
    function Whitelist(art) {
      _classCallCheck(this, Whitelist);

      this.art = art;
    }

    _createClass(Whitelist, [{
      key: "state",
      get: function get() {
        var _this$art = this.art,
            option = _this$art.option,
            kindOf = _this$art.constructor.kindOf;
        return !isMobile || option.whitelist.some(function (item) {
          switch (kindOf(item)) {
            case 'string':
              return item === '*' || userAgent.indexOf(item) > -1;

            case 'function':
              return item(userAgent);

            case 'regexp':
              return item.test(userAgent);

            default:
              return false;
          }
        });
      }
    }]);

    return Whitelist;
  }();

  var Template = /*#__PURE__*/function () {
    function Template(art) {
      var _this = this;

      _classCallCheck(this, Template);

      this.art = art;
      var option = art.option,
          constructor = art.constructor,
          whitelist = art.whitelist;

      if (option.container instanceof Element) {
        this.$container = option.container;
      } else {
        this.$container = query(option.container);
        errorHandle(this.$container, "No container element found by ".concat(option.container));
      }

      var type = this.$container.tagName.toLowerCase();
      errorHandle(type === 'div', "Unsupported container element type, only support 'div' but got '".concat(type, "'"));
      errorHandle(constructor.instances.every(function (ins) {
        return ins.template.$container !== _this.$container;
      }), 'Cannot mount multiple instances on the same dom element');
      this.query = this.query.bind(this);
      this.$container.dataset.artId = art.id;
      this.$original = this.$container.cloneNode(true);

      if (whitelist.state) {
        this.desktop();
      } else {
        this.mobile();
      }
    }

    _createClass(Template, [{
      key: "query",
      value: function query$1(className) {
        return query(className, this.$container);
      }
    }, {
      key: "desktop",
      value: function desktop() {
        var option = this.art.option;

        if (!option.useSSR) {
          this.$container.innerHTML = Template.html;
        }

        this.$player = this.query('.art-video-player');
        this.$video = this.query('.art-video');
        this.$poster = this.query('.art-poster');
        this.$subtitle = this.query('.art-subtitle');
        this.$danmuku = this.query('.art-danmuku');
        this.$bottom = this.query('.art-bottom');
        this.$progress = this.query('.art-progress');
        this.$controls = this.query('.art-controls');
        this.$controlsLeft = this.query('.art-controls-left');
        this.$controlsRight = this.query('.art-controls-right');
        this.$layer = this.query('.art-layers');
        this.$loading = this.query('.art-loading');
        this.$notice = this.query('.art-notice');
        this.$noticeInner = this.query('.art-notice-inner');
        this.$mask = this.query('.art-mask');
        this.$state = this.query('.art-state');
        this.$setting = this.query('.art-settings');
        this.$settingInner = this.query('.art-setting-inner');
        this.$settingBody = this.query('.art-setting-body');
        this.$info = this.query('.art-info');
        this.$infoPanel = this.query('.art-info-panel');
        this.$infoClose = this.query('.art-info-close');
        this.$miniHeader = this.query('.art-mini-header');
        this.$miniTitle = this.query('.art-mini-title');
        this.$miniClose = this.query('.art-mini-close');
        this.$contextmenu = this.query('.art-contextmenus');

        if (option.backdrop) {
          addClass(this.$settingInner, 'art-backdrop-filter');
          addClass(this.$contextmenu, 'art-backdrop-filter');
          addClass(this.$info, 'art-backdrop-filter');
        }

        if (isMobile) {
          addClass(this.$player, 'art-mobile');
        }
      }
    }, {
      key: "mobile",
      value: function mobile() {
        this.$container.innerHTML = "\n          <div class=\"art-video-player\">\n            <video class=\"art-video\"></video>\n          </div>\n        ";
        this.$player = this.query('.art-video-player');
        this.$video = this.query('.art-video');
      }
    }, {
      key: "destroy",
      value: function destroy(removeHtml) {
        if (removeHtml) {
          replaceElement(this.$original, this.$container);
        } else {
          addClass(this.$player, 'art-destroy');
        }
      }
    }], [{
      key: "html",
      get: function get() {
        return "\n          <div class=\"art-video-player art-subtitle-show art-layer-show\">\n            <video class=\"art-video\"></video>\n            <div class=\"art-poster\"></div>\n            <div class=\"art-subtitle\"></div>\n            <div class=\"art-danmuku\"></div>\n            <div class=\"art-layers\"></div>\n            <div class=\"art-mask\">\n              <div class=\"art-state\"></div>\n            </div>\n            <div class=\"art-bottom\">\n              <div class=\"art-progress\"></div>\n              <div class=\"art-controls\">\n                <div class=\"art-controls-left\"></div>\n                <div class=\"art-controls-right\"></div>\n              </div>\n            </div>\n            <div class=\"art-loading\"></div>\n            <div class=\"art-notice\">\n              <div class=\"art-notice-inner\"></div>\n            </div>\n            <div class=\"art-settings\">\n              <div class=\"art-setting-inner\">\n                <div class=\"art-setting-body\"></div>\n              </div>\n            </div>\n            <div class=\"art-info\">\n              <div class=\"art-info-panel\">\n                <div class=\"art-info-item\">\n                  <div class=\"art-info-title\">Player version:</div>\n                  <div class=\"art-info-content\">4.2.5</div>\n                </div>\n                <div class=\"art-info-item\">\n                  <div class=\"art-info-title\">Video url:</div>\n                  <div class=\"art-info-content\" data-video=\"src\"></div>\n                </div>\n                <div class=\"art-info-item\">\n                  <div class=\"art-info-title\">Video volume:</div>\n                  <div class=\"art-info-content\" data-video=\"volume\"></div>\n                </div>\n                <div class=\"art-info-item\">\n                  <div class=\"art-info-title\">Video time:</div>\n                  <div class=\"art-info-content\" data-video=\"currentTime\"></div>\n                </div>\n                <div class=\"art-info-item\">\n                  <div class=\"art-info-title\">Video duration:</div>\n                  <div class=\"art-info-content\" data-video=\"duration\"></div>\n                </div>\n                <div class=\"art-info-item\">\n                  <div class=\"art-info-title\">Video resolution:</div>\n                  <div class=\"art-info-content\">\n                    <span data-video=\"videoWidth\"></span> x <span data-video=\"videoHeight\"></span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"art-info-close\">[x]</div>\n            </div>\n            <div class=\"art-mini-header\">\n              <div class=\"art-mini-title\"></div>\n              <div class=\"art-mini-close\">\xD7</div>\n            </div>\n            <div class=\"art-contextmenus\"></div>\n          </div>\n        ";
      }
    }]);

    return Template;
  }();

  var Close$1 = "关闭";
  var Volume$1 = "音量";
  var Play$1 = "播放";
  var Pause$1 = "暂停";
  var Rate$1 = "速度";
  var Mute$1 = "静音";
  var Flip$1 = "翻转";
  var Rotate$1 = "旋转";
  var Horizontal$1 = "水平";
  var Vertical$1 = "垂直";
  var Reconnect$1 = "重新连接";
  var Screenshot$1 = "截图";
  var Default$1 = "默认";
  var Normal$1 = "正常";
  var Open$1 = "打开";
  var Fullscreen$1 = "全屏";
  var zhCn = {
  	"Video info": "统计信息",
  	Close: Close$1,
  	"Video load failed": "加载失败",
  	Volume: Volume$1,
  	Play: Play$1,
  	Pause: Pause$1,
  	Rate: Rate$1,
  	Mute: Mute$1,
  	Flip: Flip$1,
  	Rotate: Rotate$1,
  	Horizontal: Horizontal$1,
  	Vertical: Vertical$1,
  	Reconnect: Reconnect$1,
  	"Hide subtitle": "隐藏字幕",
  	"Show subtitle": "显示字幕",
  	"Hide danmu": "隐藏弹幕",
  	"Show danmu": "显示弹幕",
  	"Show setting": "显示设置",
  	"Hide setting": "隐藏设置",
  	Screenshot: Screenshot$1,
  	"Play speed": "播放速度",
  	"Aspect ratio": "画面比例",
  	Default: Default$1,
  	Normal: Normal$1,
  	Open: Open$1,
  	"Switch video": "切换",
  	"Switch subtitle": "切换字幕",
  	Fullscreen: Fullscreen$1,
  	"Exit fullscreen": "退出全屏",
  	"Web fullscreen": "网页全屏",
  	"Exit web fullscreen": "退出网页全屏",
  	"Mini player": "迷你播放器",
  	"PIP mode": "画中画模式",
  	"Exit PIP mode": "退出画中画模式",
  	"PIP not supported": "不支持画中画模式",
  	"Fullscreen not supported": "不支持全屏模式",
  	"Local Subtitle": "本地字幕",
  	"Local Video": "本地视频",
  	"Subtitle offset time": "字幕偏移时间",
  	"No subtitles found": "未发现字幕"
  };

  var Close = "關閉";
  var Volume = "音量";
  var Play = "播放";
  var Pause = "暫停";
  var Rate = "速度";
  var Mute = "靜音";
  var Flip = "翻轉";
  var Rotate = "旋轉";
  var Horizontal = "水平";
  var Vertical = "垂直";
  var Reconnect = "重新連接";
  var Screenshot = "截圖";
  var Default = "默認";
  var Normal = "正常";
  var Open = "打開";
  var Fullscreen = "全屏";
  var zhTw = {
  	"Video info": "統計訊息",
  	Close: Close,
  	"Video load failed": "載入失敗",
  	Volume: Volume,
  	Play: Play,
  	Pause: Pause,
  	Rate: Rate,
  	Mute: Mute,
  	Flip: Flip,
  	Rotate: Rotate,
  	Horizontal: Horizontal,
  	Vertical: Vertical,
  	Reconnect: Reconnect,
  	"Hide subtitle": "隱藏字幕",
  	"Show subtitle": "顯示字幕",
  	"Hide danmu": "隱藏彈幕",
  	"Show danmu": "顯示彈幕",
  	"Show setting": "顯示设置",
  	"Hide setting": "隱藏设置",
  	Screenshot: Screenshot,
  	"Play speed": "播放速度",
  	"Aspect ratio": "畫面比例",
  	Default: Default,
  	Normal: Normal,
  	Open: Open,
  	"Switch video": "切換",
  	"Switch subtitle": "切換字幕",
  	Fullscreen: Fullscreen,
  	"Exit fullscreen": "退出全屏",
  	"Web fullscreen": "網頁全屏",
  	"Exit web fullscreen": "退出網頁全屏",
  	"Mini player": "迷你播放器",
  	"PIP mode": "畫中畫模式",
  	"Exit PIP mode": "退出畫中畫模式",
  	"PIP not supported": "不支持畫中畫模式",
  	"Fullscreen not supported": "不支持全屏模式",
  	"Local Subtitle": "本地字幕",
  	"Local Video": "本地視頻",
  	"Subtitle offset time": "字幕偏移時間",
  	"No subtitles found": "未發現字幕"
  };

  var I18n = /*#__PURE__*/function () {
    function I18n(art) {
      _classCallCheck(this, I18n);

      this.art = art;
      this.languages = {
        'zh-cn': zhCn,
        'zh-tw': zhTw
      };
      this.init();
    }

    _createClass(I18n, [{
      key: "init",
      value: function init() {
        var lang = this.art.option.lang.toLowerCase();
        this.language = this.languages[lang] || {};
      }
    }, {
      key: "get",
      value: function get(key) {
        return this.language[key] || key;
      }
    }, {
      key: "update",
      value: function update(value) {
        this.languages = mergeDeep(this.languages, value);
        this.init();
      }
    }]);

    return I18n;
  }();

  function urlMix(art) {
    var option = art.option,
        $video = art.template.$video;
    def(art, 'url', {
      get: function get() {
        return $video.currentSrc;
      },
      set: function set(url) {
        var typeName = option.type || getExt(url);
        var typeCallback = option.customType[typeName];

        if (typeName && typeCallback) {
          sleep().then(function () {
            art.loading.show = true;
            typeCallback.call(art, $video, url, art);
          });
        } else {
          if (art.url && art.url !== url) {
            art.once('video:canplay', function () {
              if (art.isReady) {
                art.emit('restart');
              }
            });
          }

          $video.src = url;
          art.option.url = url;
          art.emit('url', url);
        }
      }
    });
  }

  function attrMix(art) {
    var $video = art.template.$video;
    def(art, 'attr', {
      value: function value(key, _value) {
        if (_value === undefined) return $video[key];
        $video[key] = _value;
      }
    });
  }

  function playMix(art) {
    var i18n = art.i18n,
        notice = art.notice,
        option = art.option,
        instances = art.constructor.instances,
        $video = art.template.$video;
    def(art, 'play', {
      value: function value() {
        var promise = $video.play();

        if (promise && promise.then) {
          promise.then().catch(function (err) {
            notice.show = err;
            throw err;
          });
        }

        if (option.mutex) {
          for (var index = 0; index < instances.length; index++) {
            var instance = instances[index];

            if (instance !== art) {
              instance.pause();
            }
          }
        }

        notice.show = i18n.get('Play');
        art.emit('play');
        return promise;
      }
    });
  }

  function pauseMix(art) {
    var $video = art.template.$video,
        i18n = art.i18n,
        notice = art.notice;
    def(art, 'pause', {
      value: function value() {
        var result = $video.pause();
        notice.show = i18n.get('Pause');
        art.emit('pause');
        return result;
      }
    });
  }

  function toggleMix(art) {
    def(art, 'toggle', {
      value: function value() {
        if (art.playing) {
          return art.pause();
        } else {
          return art.play();
        }
      }
    });
  }

  function seekMix$1(art) {
    var notice = art.notice;
    def(art, 'seek', {
      set: function set(time) {
        art.currentTime = time;
        art.emit('seek', art.currentTime);

        if (art.duration) {
          notice.show = "".concat(secondToTime(art.currentTime), " / ").concat(secondToTime(art.duration));
        }
      }
    });
    def(art, 'forward', {
      set: function set(time) {
        art.seek = art.currentTime + time;
      }
    });
    def(art, 'backward', {
      set: function set(time) {
        art.seek = art.currentTime - time;
      }
    });
  }

  function volumeMix(art) {
    var $video = art.template.$video,
        i18n = art.i18n,
        notice = art.notice,
        storage = art.storage;
    def(art, 'volume', {
      get: function get() {
        return $video.volume || 0;
      },
      set: function set(percentage) {
        $video.volume = clamp(percentage, 0, 1);
        notice.show = "".concat(i18n.get('Volume'), ": ").concat(parseInt($video.volume * 100, 10));

        if ($video.volume !== 0) {
          storage.set('volume', $video.volume);
        }

        art.emit('volume', $video.volume);
      }
    });
    def(art, 'muted', {
      get: function get() {
        return $video.muted;
      },
      set: function set(muted) {
        $video.muted = muted;
        art.emit('volume', $video.volume);
      }
    });
  }

  function currentTimeMix(art) {
    var $video = art.template.$video;
    def(art, 'currentTime', {
      get: function get() {
        return $video.currentTime || 0;
      },
      set: function set(time) {
        time = parseFloat(time);
        if (Number.isNaN(time)) return;
        $video.currentTime = clamp(time, 0, art.duration);
      }
    });
  }

  function durationMix(art) {
    def(art, 'duration', {
      get: function get() {
        var duration = art.template.$video.duration;
        if (duration === Infinity) return 0;
        return duration || 0;
      }
    });
  }

  function switchMix(art) {
    var i18n = art.i18n,
        option = art.option,
        notice = art.notice;

    function switchUrl(url, name, currentTime) {
      return new Promise(function (resolve) {
        if (url === art.url) return resolve(url);
        URL.revokeObjectURL(art.url);
        art.url = url;
        art.once('video:canplay', function () {
          art.playbackRate = false;
          art.aspectRatio = false;
          art.flip = 'normal';
          art.autoSize = option.autoSize;
          art.currentTime = currentTime;
          art.notice.show = '';

          if (art.playing) {
            art.play();
          }

          if (name) {
            notice.show = "".concat(i18n.get('Switch video'), ": ").concat(name);
          }

          art.emit('switch', url);
          resolve(url);
        });
      });
    }

    def(art, 'switchQuality', {
      value: function value(url, name) {
        return switchUrl(url, name, art.currentTime);
      }
    });
    def(art, 'switchUrl', {
      value: function value(url, name) {
        return switchUrl(url, name, 0);
      }
    });
  }

  function playbackRateMix(art) {
    var _art$template = art.template,
        $video = _art$template.$video,
        $player = _art$template.$player,
        i18n = art.i18n,
        notice = art.notice;
    def(art, 'playbackRate', {
      get: function get() {
        return $player.dataset.playbackRate;
      },
      set: function set(rate) {
        if (rate) {
          if (rate === $player.dataset.playbackRate) return;
          var rateList = [0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0];
          errorHandle(rateList.includes(rate), "'playbackRate' only accept ".concat(rateList.toString(), " as parameters"));
          $video.playbackRate = rate;
          $player.dataset.playbackRate = rate;
          notice.show = "".concat(i18n.get('Rate'), ": ").concat(rate === 1.0 ? i18n.get('Normal') : "".concat(rate, "x"));
          art.emit('playbackRate', rate);
        } else if (art.playbackRate) {
          art.playbackRate = 1;
          delete $player.dataset.playbackRate;
          art.emit('playbackRate');
        }
      }
    });
    def(art, 'playbackRateReset', {
      set: function set(value) {
        if (value) {
          var playbackRate = $player.dataset.playbackRate;

          if (playbackRate) {
            art.playbackRate = Number(playbackRate);
          }
        }
      }
    });
  }

  function aspectRatioMix(art) {
    var _art$template = art.template,
        $video = _art$template.$video,
        $player = _art$template.$player,
        i18n = art.i18n,
        notice = art.notice;
    def(art, 'aspectRatio', {
      get: function get() {
        return $player.dataset.aspectRatio || '';
      },
      set: function set(ratio) {
        if (!ratio) ratio = 'default';
        var ratioList = ['default', '4:3', '16:9'];
        errorHandle(ratioList.includes(ratio), "'aspectRatio' only accept ".concat(ratioList.toString(), " as parameters"));

        if (ratio === 'default') {
          setStyle($video, 'width', null);
          setStyle($video, 'height', null);
          setStyle($video, 'padding', null);
          delete $player.dataset.aspectRatio;
        } else {
          var ratioArray = ratio.split(':').map(Number);
          var videoWidth = $video.videoWidth,
              videoHeight = $video.videoHeight;
          var clientWidth = $player.clientWidth,
              clientHeight = $player.clientHeight;
          var videoRatio = videoWidth / videoHeight;
          var setupRatio = ratioArray[0] / ratioArray[1];

          if (videoRatio > setupRatio) {
            var percentage = setupRatio * videoHeight / videoWidth;
            setStyle($video, 'width', "".concat(percentage * 100, "%"));
            setStyle($video, 'height', '100%');
            setStyle($video, 'padding', "0 ".concat((clientWidth - clientWidth * percentage) / 2, "px"));
          } else {
            var _percentage = videoWidth / setupRatio / videoHeight;

            setStyle($video, 'width', '100%');
            setStyle($video, 'height', "".concat(_percentage * 100, "%"));
            setStyle($video, 'padding', "".concat((clientHeight - clientHeight * _percentage) / 2, "px 0"));
          }

          $player.dataset.aspectRatio = ratio;
        }

        notice.show = "".concat(i18n.get('Aspect ratio'), ": ").concat(ratio === 'default' ? i18n.get('Default') : ratio);
        art.emit('aspectRatio', ratio);
      }
    });
    def(art, 'aspectRatioReset', {
      set: function set(value) {
        if (value && art.aspectRatio) {
          var aspectRatio = art.aspectRatio;
          art.aspectRatio = aspectRatio;
        }
      }
    });
  }

  function screenshotMix(art) {
    var option = art.option,
        notice = art.notice,
        $video = art.template.$video;
    var $canvas = document.createElement('canvas');
    def(art, 'getDataURL', {
      value: function value() {
        return new Promise(function (resolve, reject) {
          try {
            $canvas.width = $video.videoWidth;
            $canvas.height = $video.videoHeight;
            $canvas.getContext('2d').drawImage($video, 0, 0);
            resolve($canvas.toDataURL('image/png'));
          } catch (err) {
            notice.show = err;
            reject(err);
          }
        });
      }
    });
    def(art, 'getBlobUrl', {
      value: function value() {
        return new Promise(function (resolve, reject) {
          try {
            $canvas.width = $video.videoWidth;
            $canvas.height = $video.videoHeight;
            $canvas.getContext('2d').drawImage($video, 0, 0);
            $canvas.toBlob(function (blob) {
              resolve(URL.createObjectURL(blob));
            });
          } catch (err) {
            notice.show = err;
            reject(err);
          }
        });
      }
    });
    def(art, 'screenshot', {
      value: function value() {
        return art.getDataURL().then(function (dataUri) {
          download(dataUri, "".concat(option.title || 'artplayer', "_").concat(secondToTime($video.currentTime), ".png"));
          art.emit('screenshot', dataUri);
          return dataUri;
        });
      }
    });
  }

  var screenfull$1 = {exports: {}};

  /*!
  * screenfull
  * v5.2.0 - 2021-11-03
  * (c) Sindre Sorhus; MIT License
  */

  (function (module) {
  (function () {

  	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
  	var isCommonjs = module.exports;

  	var fn = (function () {
  		var val;

  		var fnMap = [
  			[
  				'requestFullscreen',
  				'exitFullscreen',
  				'fullscreenElement',
  				'fullscreenEnabled',
  				'fullscreenchange',
  				'fullscreenerror'
  			],
  			// New WebKit
  			[
  				'webkitRequestFullscreen',
  				'webkitExitFullscreen',
  				'webkitFullscreenElement',
  				'webkitFullscreenEnabled',
  				'webkitfullscreenchange',
  				'webkitfullscreenerror'

  			],
  			// Old WebKit
  			[
  				'webkitRequestFullScreen',
  				'webkitCancelFullScreen',
  				'webkitCurrentFullScreenElement',
  				'webkitCancelFullScreen',
  				'webkitfullscreenchange',
  				'webkitfullscreenerror'

  			],
  			[
  				'mozRequestFullScreen',
  				'mozCancelFullScreen',
  				'mozFullScreenElement',
  				'mozFullScreenEnabled',
  				'mozfullscreenchange',
  				'mozfullscreenerror'
  			],
  			[
  				'msRequestFullscreen',
  				'msExitFullscreen',
  				'msFullscreenElement',
  				'msFullscreenEnabled',
  				'MSFullscreenChange',
  				'MSFullscreenError'
  			]
  		];

  		var i = 0;
  		var l = fnMap.length;
  		var ret = {};

  		for (; i < l; i++) {
  			val = fnMap[i];
  			if (val && val[1] in document) {
  				for (i = 0; i < val.length; i++) {
  					ret[fnMap[0][i]] = val[i];
  				}
  				return ret;
  			}
  		}

  		return false;
  	})();

  	var eventNameMap = {
  		change: fn.fullscreenchange,
  		error: fn.fullscreenerror
  	};

  	var screenfull = {
  		request: function (element, options) {
  			return new Promise(function (resolve, reject) {
  				var onFullScreenEntered = function () {
  					this.off('change', onFullScreenEntered);
  					resolve();
  				}.bind(this);

  				this.on('change', onFullScreenEntered);

  				element = element || document.documentElement;

  				var returnPromise = element[fn.requestFullscreen](options);

  				if (returnPromise instanceof Promise) {
  					returnPromise.then(onFullScreenEntered).catch(reject);
  				}
  			}.bind(this));
  		},
  		exit: function () {
  			return new Promise(function (resolve, reject) {
  				if (!this.isFullscreen) {
  					resolve();
  					return;
  				}

  				var onFullScreenExit = function () {
  					this.off('change', onFullScreenExit);
  					resolve();
  				}.bind(this);

  				this.on('change', onFullScreenExit);

  				var returnPromise = document[fn.exitFullscreen]();

  				if (returnPromise instanceof Promise) {
  					returnPromise.then(onFullScreenExit).catch(reject);
  				}
  			}.bind(this));
  		},
  		toggle: function (element, options) {
  			return this.isFullscreen ? this.exit() : this.request(element, options);
  		},
  		onchange: function (callback) {
  			this.on('change', callback);
  		},
  		onerror: function (callback) {
  			this.on('error', callback);
  		},
  		on: function (event, callback) {
  			var eventName = eventNameMap[event];
  			if (eventName) {
  				document.addEventListener(eventName, callback, false);
  			}
  		},
  		off: function (event, callback) {
  			var eventName = eventNameMap[event];
  			if (eventName) {
  				document.removeEventListener(eventName, callback, false);
  			}
  		},
  		raw: fn
  	};

  	if (!fn) {
  		if (isCommonjs) {
  			module.exports = {isEnabled: false};
  		} else {
  			window.screenfull = {isEnabled: false};
  		}

  		return;
  	}

  	Object.defineProperties(screenfull, {
  		isFullscreen: {
  			get: function () {
  				return Boolean(document[fn.fullscreenElement]);
  			}
  		},
  		element: {
  			enumerable: true,
  			get: function () {
  				return document[fn.fullscreenElement];
  			}
  		},
  		isEnabled: {
  			enumerable: true,
  			get: function () {
  				// Coerce to boolean in case of old WebKit
  				return Boolean(document[fn.fullscreenEnabled]);
  			}
  		}
  	});

  	if (isCommonjs) {
  		module.exports = screenfull;
  	} else {
  		window.screenfull = screenfull;
  	}
  })();
  }(screenfull$1));

  var screenfull = screenfull$1.exports;

  var nativeScreenfull = function nativeScreenfull(art) {
    var $player = art.template.$player;
    screenfull.on('change', function () {
      return art.emit('fullscreen', screenfull.isFullscreen);
    });
    def(art, 'fullscreen', {
      get: function get() {
        return screenfull.isFullscreen;
      },
      set: function set(value) {
        if (value) {
          screenfull.request($player).then(function () {
            addClass($player, 'art-fullscreen');
            art.aspectRatioReset = true;
            art.autoSize = false;
            art.emit('resize');
            art.emit('fullscreen', true);
          });
        } else {
          screenfull.exit().then(function () {
            removeClass($player, 'art-fullscreen');
            art.aspectRatioReset = true;
            art.autoSize = art.option.autoSize;
            art.emit('resize');
            art.emit('fullscreen');
          });
        }
      }
    });
  };

  var webkitScreenfull = function webkitScreenfull(art) {
    var $video = art.template.$video;
    def(art, 'fullscreen', {
      get: function get() {
        return $video.webkitDisplayingFullscreen;
      },
      set: function set(value) {
        if (value) {
          $video.webkitEnterFullscreen();
          art.emit('fullscreen', true);
        } else {
          $video.webkitExitFullscreen();
          art.emit('fullscreen');
        }
      }
    });
  };

  function fullscreenMix(art) {
    var i18n = art.i18n,
        notice = art.notice,
        $video = art.template.$video;
    art.once('ready', function () {
      if (screenfull.isEnabled) {
        nativeScreenfull(art);
      } else if (document.fullscreenEnabled || $video.webkitSupportsFullscreen) {
        webkitScreenfull(art);
      } else {
        def(art, 'fullscreen', {
          get: function get() {
            return false;
          },
          set: function set() {
            notice.show = i18n.get('Fullscreen not supported');
          }
        });
      } // Asynchronous setting


      def(art, 'fullscreen', get(art, 'fullscreen'));
    });
  }

  function fullscreenWebMix(art) {
    var $player = art.template.$player;
    def(art, 'fullscreenWeb', {
      get: function get() {
        return hasClass($player, 'art-fullscreen-web');
      },
      set: function set(value) {
        if (value) {
          addClass($player, 'art-fullscreen-web');
          art.aspectRatioReset = true;
          art.autoSize = false;
          art.emit('resize');
          art.emit('fullscreenWeb', true);
        } else {
          removeClass($player, 'art-fullscreen-web');
          art.aspectRatioReset = true;
          art.autoSize = art.option.autoSize;
          art.emit('resize');
          art.emit('fullscreenWeb');
        }
      }
    });
  }

  function nativePip(art) {
    var $video = art.template.$video,
        proxy = art.events.proxy,
        notice = art.notice;
    $video.disablePictureInPicture = false;
    def(art, 'pip', {
      get: function get() {
        return document.pictureInPictureElement;
      },
      set: function set(value) {
        if (value) {
          $video.requestPictureInPicture().catch(function (err) {
            notice.show = err;
            throw err;
          });
        } else {
          document.exitPictureInPicture().catch(function (err) {
            notice.show = err;
            throw err;
          });
        }
      }
    });
    proxy($video, 'enterpictureinpicture', function () {
      art.emit('pip', true);
    });
    proxy($video, 'leavepictureinpicture', function () {
      art.emit('pip');
    });
  }

  function webkitPip(art) {
    var $video = art.template.$video;
    $video.webkitSetPresentationMode('inline');
    def(art, 'pip', {
      get: function get() {
        return $video.webkitPresentationMode === 'picture-in-picture';
      },
      set: function set(value) {
        if (value) {
          $video.webkitSetPresentationMode('picture-in-picture');
          art.emit('pip', true);
        } else {
          $video.webkitSetPresentationMode('inline');
          art.emit('pip');
        }
      }
    });
  }

  function pipMix(art) {
    var i18n = art.i18n,
        notice = art.notice,
        $video = art.template.$video;

    if (document.pictureInPictureEnabled) {
      nativePip(art);
    } else if ($video.webkitSupportsPresentationMode) {
      webkitPip(art);
    } else {
      def(art, 'pip', {
        get: function get() {
          return false;
        },
        set: function set() {
          notice.show = i18n.get('PIP not supported');
        }
      });
    }
  }

  function seekMix(art) {
    var $video = art.template.$video;
    def(art, 'loaded', {
      get: function get() {
        return art.loadedTime / $video.duration;
      }
    });
    def(art, 'loadedTime', {
      get: function get() {
        return $video.buffered.length ? $video.buffered.end($video.buffered.length - 1) : 0;
      }
    });
  }

  function playedMix(art) {
    def(art, 'played', {
      get: function get() {
        return art.currentTime / art.duration;
      }
    });
  }

  function playingMix(art) {
    var $video = art.template.$video;
    def(art, 'playing', {
      get: function get() {
        return !!($video.currentTime > 0 && !$video.paused && !$video.ended && $video.readyState > 2);
      }
    });
  }

  function resizeMix(art) {
    var _art$template = art.template,
        $container = _art$template.$container,
        $player = _art$template.$player,
        $video = _art$template.$video;
    def(art, 'autoSize', {
      get: function get() {
        return hasClass($container, 'art-auto-size');
      },
      set: function set(value) {
        if (value) {
          var videoWidth = $video.videoWidth,
              videoHeight = $video.videoHeight;

          var _$container$getBoundi = $container.getBoundingClientRect(),
              width = _$container$getBoundi.width,
              height = _$container$getBoundi.height;

          var videoRatio = videoWidth / videoHeight;
          var containerRatio = width / height;
          addClass($container, 'art-auto-size');

          if (containerRatio > videoRatio) {
            var percentage = height * videoRatio / width * 100;
            setStyle($player, 'width', "".concat(percentage, "%"));
            setStyle($player, 'height', '100%');
          } else {
            var _percentage = width / videoRatio / height * 100;

            setStyle($player, 'width', '100%');
            setStyle($player, 'height', "".concat(_percentage, "%"));
          }

          art.emit('autoSize', {
            width: art.width,
            height: art.height
          });
        } else {
          removeClass($container, 'art-auto-size');
          setStyle($player, 'width', null);
          setStyle($player, 'height', null);
          art.emit('autoSize');
        }
      }
    });
  }

  function rectMix(art) {
    def(art, 'rect', {
      get: function get() {
        return art.template.$player.getBoundingClientRect();
      }
    });
    var keys = ['bottom', 'height', 'left', 'right', 'top', 'width'];

    var _loop = function _loop(index) {
      var key = keys[index];
      def(art, key, {
        get: function get() {
          return art.rect[key];
        }
      });
    };

    for (var index = 0; index < keys.length; index++) {
      _loop(index);
    }

    def(art, 'x', {
      get: function get() {
        return art.left + window.pageXOffset;
      }
    });
    def(art, 'y', {
      get: function get() {
        return art.top + window.pageYOffset;
      }
    });
  }

  function flipMix(art) {
    var $player = art.template.$player,
        i18n = art.i18n,
        notice = art.notice;
    def(art, 'flip', {
      get: function get() {
        return $player.dataset.flip;
      },
      set: function set(flip) {
        if (!flip) flip = 'normal';
        var flipList = ['normal', 'horizontal', 'vertical'];
        errorHandle(flipList.includes(flip), "'flip' only accept ".concat(flipList.toString(), " as parameters"));

        if (flip === 'normal') {
          delete $player.dataset.flip;
        } else {
          art.rotate = false;
          $player.dataset.flip = flip;
        }

        var word = flip.replace(flip[0], flip[0].toUpperCase());
        notice.show = "".concat(i18n.get('Flip'), ": ").concat(i18n.get(word));
        art.emit('flip', flip);
      }
    });
    def(art, 'flipReset', {
      set: function set(value) {
        if (value && art.flip) {
          var flip = art.flip;
          art.flip = flip;
        }
      }
    });
  }

  function miniMix(art) {
    var i18n = art.i18n,
        option = art.option,
        storage = art.storage,
        proxy = art.events.proxy,
        _art$template = art.template,
        $player = _art$template.$player,
        $miniClose = _art$template.$miniClose,
        $miniTitle = _art$template.$miniTitle,
        $miniHeader = _art$template.$miniHeader;
    var cacheStyle = '';
    var isDroging = false;
    var lastPageX = 0;
    var lastPageY = 0;
    var lastPlayerLeft = 0;
    var lastPlayerTop = 0;
    proxy($miniHeader, 'mousedown', function (event) {
      isDroging = true;
      lastPageX = event.pageX;
      lastPageY = event.pageY;
      lastPlayerLeft = art.left;
      lastPlayerTop = art.top;
    });
    proxy(document, 'mousemove', function (event) {
      if (isDroging) {
        addClass($player, 'art-is-dragging');
        var top = lastPlayerTop + event.pageY - lastPageY;
        var left = lastPlayerLeft + event.pageX - lastPageX;
        setStyle($player, 'top', "".concat(top, "px"));
        setStyle($player, 'left', "".concat(left, "px"));
        storage.set('top', top);
        storage.set('left', left);
      }
    });
    proxy(document, 'mouseup', function () {
      isDroging = false;
      removeClass($player, 'art-is-dragging');
    });
    proxy($miniClose, 'click', function () {
      art.mini = false;
      isDroging = false;
      removeClass($player, 'art-is-dragging');
    });
    append($miniTitle, option.title || i18n.get('Mini player'));
    def(art, 'mini', {
      get: function get() {
        return hasClass($player, 'art-mini');
      },
      set: function set(value) {
        if (value) {
          art.autoSize = false;
          cacheStyle = $player.style.cssText;
          addClass($player, 'art-mini');
          var top = storage.get('top');
          var left = storage.get('left');

          if (top && left) {
            setStyle($player, 'top', "".concat(top, "px"));
            setStyle($player, 'left', "".concat(left, "px"));

            if (!isInViewport($miniHeader)) {
              storage.del('top');
              storage.del('left');
              art.mini = true;
            }
          } else {
            var $body = document.body;

            var _top = $body.clientHeight - art.height - 50;

            var _left = $body.clientWidth - art.width - 50;

            storage.set('top', _top);
            storage.set('left', _left);
            setStyle($player, 'top', "".concat(_top, "px"));
            setStyle($player, 'left', "".concat(_left, "px"));
          }

          art.aspectRatio = false;
          art.playbackRate = false;
          art.notice.show = '';
          art.emit('mini', true);
        } else {
          $player.style.cssText = cacheStyle;
          removeClass($player, 'art-mini');
          setStyle($player, 'top', null);
          setStyle($player, 'left', null);
          art.aspectRatio = false;
          art.playbackRate = false;
          art.autoSize = option.autoSize;
          art.notice.show = '';
          art.emit('mini');
        }
      }
    });
  }

  function loopMix(art) {
    var interval = [];
    def(art, 'loop', {
      get: function get() {
        return interval;
      },
      set: function set(value) {
        if (Array.isArray(value) && typeof value[0] === 'number' && typeof value[1] === 'number') {
          var start = clamp(value[0], 0, Math.min(value[1], art.duration));
          var end = clamp(value[1], start, art.duration);

          if (end - start >= 1) {
            interval = [start, end];
            art.emit('loop', interval);
          } else {
            interval = [];
            art.emit('loop');
          }
        } else {
          interval = [];
          art.emit('loop');
        }
      }
    });
    art.on('video:timeupdate', function () {
      if (interval.length) {
        if (art.currentTime < interval[0] || art.currentTime > interval[1]) {
          art.seek = interval[0];
        }
      }
    });
  }

  function rotateMix(art) {
    var _art$template = art.template,
        $video = _art$template.$video,
        $player = _art$template.$player,
        i18n = art.i18n,
        notice = art.notice;
    def(art, 'rotate', {
      get: function get() {
        return Number($player.dataset.rotate) || 0;
      },
      set: function set(deg) {
        if (!deg) deg = 0;
        var degList = [-270, -180, -90, 0, 90, 180, 270];
        errorHandle(degList.includes(deg), "'rotate' only accept ".concat(degList.toString(), " as parameters"));

        if (deg === 0) {
          delete $player.dataset.rotate;
          setStyle($video, 'transform', null);
        } else {
          art.flip = false;
          art.autoSize = true;
          $player.dataset.rotate = deg;

          var getScaleValue = function getScaleValue() {
            var videoWidth = $video.videoWidth,
                videoHeight = $video.videoHeight;
            return videoWidth > videoHeight ? videoHeight / videoWidth : videoWidth / videoHeight;
          };

          var degValue = 0;
          var scaleValue = 1;

          switch (deg) {
            case -270:
              degValue = 90;
              scaleValue = getScaleValue();
              break;

            case -180:
              degValue = 180;
              break;

            case -90:
              degValue = 270;
              scaleValue = getScaleValue();
              break;

            case 90:
              degValue = 90;
              scaleValue = getScaleValue();
              break;

            case 180:
              degValue = 180;
              break;

            case 270:
              degValue = 270;
              scaleValue = getScaleValue();
              break;
          }

          setStyle($video, 'transform', "rotate(".concat(degValue, "deg) scale(").concat(scaleValue, ")"));
        }

        notice.show = "".concat(i18n.get('Rotate'), ": ").concat(deg, "\xB0");
        art.emit('rotate', deg);
      }
    });
    def(art, 'rotateReset', {
      set: function set(value) {
        if (value && art.rotate) {
          var rotate = art.rotate;
          art.rotate = rotate;
        }
      }
    });
  }

  function posterMix(art) {
    var option = art.option,
        $poster = art.template.$poster;
    def(art, 'poster', {
      get: function get() {
        return option.poster;
      },
      set: function set(url) {
        option.poster = url;
        setStyle($poster, 'backgroundImage', "url(".concat(url, ")"));
      }
    });
  }

  function autoHeightMix(art) {
    var option = art.option,
        _art$template = art.template,
        $container = _art$template.$container,
        $video = _art$template.$video;
    var heightCache = $container.style.height;
    def(art, 'autoHeight', {
      get: function get() {
        return hasClass($container, 'art-auto-height');
      },
      set: function set(value) {
        if (value) {
          var clientWidth = $container.clientWidth;
          var videoHeight = $video.videoHeight,
              videoWidth = $video.videoWidth;
          var height = videoHeight * (clientWidth / videoWidth);
          setStyle($container, 'height', height + 'px');
          addClass($container, 'art-auto-height');
          art.autoSize = option.autoSize;
          art.emit('autoHeight', height);
        } else {
          setStyle($container, 'height', heightCache);
          removeClass($container, 'art-auto-height');
          art.autoSize = option.autoSize;
          art.emit('autoHeight');
        }
      }
    });
  }

  function themeMix(art) {
    var option = art.option,
        $player = art.template.$player;
    def(art, 'theme', {
      get: function get() {
        return getComputedStyle($player).getPropertyValue('--theme');
      },
      set: function set(theme) {
        option.theme = theme;
        $player.style.setProperty('--theme', theme);
      }
    });
  }

  function titleMix(art) {
    def(art, 'title', {
      get: function get() {
        return art.option.title;
      },
      set: function set(title) {
        art.option.title = title;
      }
    });
  }

  function exclusiveMix(art) {
    var sizeProps = ['mini', 'pip', 'fullscreen', 'fullscreenWeb'];

    function exclusive(props) {
      var _loop = function _loop(index) {
        var name = props[index];
        art.on(name, function () {
          if (art[name]) {
            props.filter(function (item) {
              return item !== name;
            }).forEach(function (item) {
              if (art[item]) {
                art[item] = false;
              }
            });
          }
        });
      };

      for (var index = 0; index < props.length; index++) {
        _loop(index);
      }
    }

    exclusive(sizeProps);
    def(art, 'normalSize', {
      get: function get() {
        return sizeProps.every(function (name) {
          return !art[name];
        });
      }
    });
  }

  function attrInit(art) {
    var option = art.option,
        storage = art.storage,
        _art$template = art.template,
        $video = _art$template.$video,
        $poster = _art$template.$poster;
    Object.keys(option.moreVideoAttr).forEach(function (key) {
      art.attr(key, option.moreVideoAttr[key]);
    });

    if (option.muted) {
      art.muted = option.muted;
    }

    if (option.volume) {
      $video.volume = clamp(option.volume, 0, 1);
    }

    var volumeStorage = storage.get('volume');

    if (typeof volumeStorage === 'number') {
      $video.volume = clamp(volumeStorage, 0, 1);
    }

    if (option.poster) {
      setStyle($poster, 'backgroundImage', "url(".concat(option.poster, ")"));
    }

    if (option.autoplay) {
      $video.autoplay = option.autoplay;
    }

    if (option.theme) {
      art.theme = option.theme;
    }

    if (option.ads.length === 0) {
      art.url = option.url;
    }
  }

  function eventInit(art) {
    var option = art.option,
        proxy = art.events.proxy,
        _art$template = art.template,
        $player = _art$template.$player,
        $video = _art$template.$video,
        $poster = _art$template.$poster,
        i18n = art.i18n,
        notice = art.notice;
    var reconnectTime = 0;
    var maxReconnectTime = 5;
    proxy($video, 'click', function () {
      art.toggle();
    });
    proxy($video, 'dblclick', function () {
      art.fullscreen = !art.fullscreen;
    });

    for (var index = 0; index < config.events.length; index++) {
      proxy($video, config.events[index], function (event) {
        art.emit("video:".concat(event.type), event);
      });
    } // art.on('video:abort', () => {
    // });


    art.on('video:canplay', function () {
      reconnectTime = 0;
      art.loading.show = false;
    });
    art.once('video:canplay', function () {
      art.loading.show = false;
      art.controls.show = true;
      art.mask.show = true;
      art.isReady = true;
      art.emit('ready');
    }); // art.on('video:canplaythrough', () => {
    // });
    // art.on('video:durationchange', () => {
    // });
    // art.on('video:emptied', () => {
    // });

    art.on('video:ended', function () {
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
    art.on('video:error', function () {
      if (reconnectTime < maxReconnectTime) {
        sleep(1000).then(function () {
          reconnectTime += 1;
          art.url = option.url;
          notice.show = "".concat(i18n.get('Reconnect'), ": ").concat(reconnectTime);
          art.emit('error', reconnectTime);
        });
      } else {
        art.loading.show = false;
        art.controls.show = false;
        addClass($player, 'art-error');
        sleep(1000).then(function () {
          notice.show = i18n.get('Video load failed');
          art.destroy(false);
        });
      }
    }); // art.on('video:loadeddata', () => {
    // });

    art.once('video:loadedmetadata', function () {
      art.autoSize = option.autoSize;

      if (isMobile) {
        art.loading.show = false;
        art.controls.show = true;
        art.mask.show = true;
      }
    });
    art.on('video:loadstart', function () {
      art.loading.show = true;
    });
    art.on('video:pause', function () {
      art.controls.show = true;
      art.mask.show = true;
    });
    art.on('video:play', function () {
      art.mask.show = false;
      setStyle($poster, 'display', 'none');
    });
    art.on('video:playing', function () {
      art.mask.show = false;
    }); // art.on('video:progress', () => {
    // });
    // art.on('video:ratechange', () => {
    // });

    art.on('video:seeked', function () {
      art.loading.show = false;
    });
    art.on('video:seeking', function () {
      art.loading.show = true;
    }); // art.on('video:stalled', () => {
    // });
    // art.on('video:suspend', () => {
    // });

    art.on('video:timeupdate', function () {
      art.mask.show = false;
    }); // art.on('video:volumechange', () => {
    // });

    art.on('video:waiting', function () {
      art.loading.show = true;
    });
  }

  var Player = function Player(art) {
    _classCallCheck(this, Player);

    urlMix(art);
    attrMix(art);
    playMix(art);
    pauseMix(art);
    toggleMix(art);
    seekMix$1(art);
    volumeMix(art);
    currentTimeMix(art);
    durationMix(art);
    switchMix(art);
    playbackRateMix(art);
    aspectRatioMix(art);
    screenshotMix(art);
    fullscreenMix(art);
    fullscreenWebMix(art);
    pipMix(art);
    seekMix(art);
    playedMix(art);
    playingMix(art);
    resizeMix(art);
    rectMix(art);
    flipMix(art);
    miniMix(art);
    loopMix(art);
    rotateMix(art);
    posterMix(art);
    autoHeightMix(art);
    themeMix(art);
    titleMix(art);
    exclusiveMix(art);
    eventInit(art);
    attrInit(art);
  };

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }

    return _get.apply(this, arguments);
  }

  var Component = /*#__PURE__*/function () {
    function Component(art) {
      _classCallCheck(this, Component);

      this.id = 0;
      this.art = art;
      this.add = this.add.bind(this);
    }

    _createClass(Component, [{
      key: "show",
      get: function get() {
        return hasClass(this.art.template.$player, "art-".concat(this.name, "-show"));
      },
      set: function set(value) {
        var $player = this.art.template.$player;
        var className = "art-".concat(this.name, "-show");

        if (value) {
          addClass($player, className);
        } else {
          removeClass($player, className);
        }

        this.art.emit(this.name, value);
      }
    }, {
      key: "toggle",
      set: function set(value) {
        if (value) {
          this.show = !this.show;
        }
      }
    }, {
      key: "add",
      value: function add(getOption) {
        var _this = this;

        var option = typeof getOption === 'function' ? getOption(this.art) : getOption;
        option.html = option.html || '';
        validator(option, ComponentOption);
        if (!this.$parent || !this.name || option.disable) return;
        var name = option.name || "".concat(this.name).concat(this.id);
        errorHandle(!has(this, name), "Cannot add an existing name [".concat(name, "] to the [").concat(this.name, "]"));
        this.id += 1;
        var $ref = document.createElement('div');
        addClass($ref, "art-".concat(this.name));
        addClass($ref, "art-".concat(this.name, "-").concat(name));
        var childs = Array.from(this.$parent.children);
        $ref.dataset.index = option.index || this.id;
        var nextChild = childs.find(function (item) {
          return Number(item.dataset.index) >= Number($ref.dataset.index);
        });

        if (nextChild) {
          nextChild.insertAdjacentElement('beforebegin', $ref);
        } else {
          append(this.$parent, $ref);
        }

        if (option.html) {
          append($ref, option.html);
        }

        if (option.style) {
          setStyles($ref, option.style);
        }

        if (option.tooltip) {
          tooltip($ref, option.tooltip);
        }

        if (option.click) {
          this.art.events.proxy($ref, 'click', function (event) {
            event.preventDefault();
            option.click.call(_this.art, _this, event);
          });
        }

        if (option.selector && ['left', 'right'].includes(option.position)) {
          this.selector(option, $ref);
        }

        if (option.mounted) {
          option.mounted.call(this.art, $ref);
        }

        if ($ref.childNodes.length === 1 && $ref.childNodes[0].nodeType === 3) {
          addClass($ref, 'art-control-onlyText');
        }

        def(this, name, {
          value: $ref
        });
        return $ref;
      }
    }, {
      key: "selector",
      value: function selector(option, $ref) {
        var _this2 = this;

        var _this$art$events = this.art.events,
            hover = _this$art$events.hover,
            proxy = _this$art$events.proxy;
        addClass($ref, 'art-control-selector');
        var $value = document.createElement('div');
        addClass($value, 'art-selector-value');
        append($value, option.html);
        $ref.innerText = '';
        append($ref, $value);
        var list = option.selector.map(function (item, index) {
          return "<div class=\"art-selector-item ".concat(item.default ? 'art-current' : '', "\" data-index=\"").concat(index, "\">").concat(item.html, "</div>");
        }).join('');
        var $list = document.createElement('div');
        addClass($list, 'art-selector-list');
        append($list, list);
        append($ref, $list);

        var setLeft = function setLeft() {
          var left = getStyle($ref, 'width') / 2 - getStyle($list, 'width') / 2;
          $list.style.left = "".concat(left, "px");
        };

        hover($ref, setLeft);
        proxy($list, 'click', function (event) {
          var path = event.composedPath() || [];
          var $item = path.find(function (item) {
            return hasClass(item, 'art-selector-item');
          });
          if (!$item) return;
          inverseClass($item, 'art-current');
          var index = Number($item.dataset.index);
          var find = option.selector[index] || {};
          $value.innerText = $item.innerText;

          if (option.onSelect) {
            var result = option.onSelect.call(_this2.art, find, $item);

            if (typeof result === 'string') {
              $value.innerHTML = result;
            }
          }

          setLeft();

          _this2.art.emit('selector', find, $item);
        });
      }
    }]);

    return Component;
  }();

  function ownKeys$n(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$n(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$n(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$n(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function fullscreen$1(option) {
    return function (art) {
      return _objectSpread$n(_objectSpread$n({}, option), {}, {
        tooltip: art.i18n.get('Fullscreen'),
        mounted: function mounted($control) {
          var proxy = art.events.proxy,
              icons = art.icons,
              i18n = art.i18n;
          append($control, icons.fullscreen);
          proxy($control, 'click', function () {
            art.fullscreen = !art.fullscreen;
          });
          art.on('fullscreen', function (value) {
            tooltip($control, i18n.get(value ? 'Exit fullscreen' : 'Fullscreen'));
          });
        }
      });
    };
  }

  function ownKeys$m(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$m(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$m(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$m(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function fullscreenWeb$1(option) {
    return function (art) {
      return _objectSpread$m(_objectSpread$m({}, option), {}, {
        tooltip: art.i18n.get('Web fullscreen'),
        mounted: function mounted($control) {
          var proxy = art.events.proxy,
              icons = art.icons,
              i18n = art.i18n;
          append($control, icons.fullscreenWeb);
          proxy($control, 'click', function () {
            art.fullscreenWeb = !art.fullscreenWeb;
          });
          art.on('fullscreenWeb', function (value) {
            tooltip($control, i18n.get(value ? 'Exit web fullscreen' : 'Web fullscreen'));
          });
        }
      });
    };
  }

  function ownKeys$l(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$l(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$l(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$l(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function pip$1(option) {
    return function (art) {
      return _objectSpread$l(_objectSpread$l({}, option), {}, {
        tooltip: art.i18n.get('PIP mode'),
        mounted: function mounted($control) {
          var proxy = art.events.proxy,
              icons = art.icons,
              i18n = art.i18n;
          append($control, icons.pip);
          proxy($control, 'click', function () {
            art.pip = !art.pip;
          });
          art.on('pip', function (value) {
            tooltip($control, i18n.get(value ? 'Exit PIP mode' : 'PIP mode'));
          });
        }
      });
    };
  }

  function ownKeys$k(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$k(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$k(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$k(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function playAndPause(option) {
    return function (art) {
      return _objectSpread$k(_objectSpread$k({}, option), {}, {
        mounted: function mounted($control) {
          var proxy = art.events.proxy,
              icons = art.icons,
              i18n = art.i18n;
          var $play = append($control, icons.play);
          var $pause = append($control, icons.pause);
          tooltip($play, i18n.get('Play'));
          tooltip($pause, i18n.get('Pause'));
          proxy($play, 'click', function () {
            art.play();
          });
          proxy($pause, 'click', function () {
            art.pause();
          });

          function showPlay() {
            setStyle($play, 'display', 'flex');
            setStyle($pause, 'display', 'none');
          }

          function showPause() {
            setStyle($play, 'display', 'none');
            setStyle($pause, 'display', 'flex');
          }

          if (art.playing) {
            showPause();
          } else {
            showPlay();
          }

          art.on('video:playing', function () {
            showPause();
          });
          art.on('video:pause', function () {
            showPlay();
          });
        }
      });
    };
  }

  function ownKeys$j(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$j(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$j(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$j(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function getPosFromEvent(art, event) {
    var $progress = art.template.$progress;

    var _$progress$getBoundin = $progress.getBoundingClientRect(),
        left = _$progress$getBoundin.left;

    var eventLeft = typeof event.pageX === 'number' ? event.pageX : event.touches[0].clientX;
    var width = clamp(eventLeft - left, 0, $progress.clientWidth);
    var second = width / $progress.clientWidth * art.duration;
    var time = secondToTime(second);
    var percentage = clamp(width / $progress.clientWidth, 0, 1);
    return {
      second: second,
      time: time,
      width: width,
      percentage: percentage
    };
  }
  function progress(options) {
    return function (art) {
      var icons = art.icons,
          option = art.option,
          proxy = art.events.proxy;
      return _objectSpread$j(_objectSpread$j({}, options), {}, {
        html: "\n                <div class=\"art-control-progress-inner\">\n                    <div class=\"art-progress-loaded\"></div>\n                    <div class=\"art-progress-played\"></div>\n                    <div class=\"art-progress-highlight\"></div>\n                    <div class=\"art-progress-indicator\"></div>\n                    <div class=\"art-progress-tip\"></div>\n                </div>\n            ",
        mounted: function mounted($control) {
          var isDroging = false;
          var $loaded = query('.art-progress-loaded', $control);
          var $played = query('.art-progress-played', $control);
          var $highlight = query('.art-progress-highlight', $control);
          var $indicator = query('.art-progress-indicator', $control);
          var $tip = query('.art-progress-tip', $control);
          setStyle($played, 'backgroundColor', 'var(--theme)');
          var indicatorSize = 14;

          if (icons.indicator) {
            indicatorSize = 16;
            append($indicator, icons.indicator);
          } else {
            setStyles($indicator, {
              backgroundColor: 'var(--theme)'
            });
          }

          setStyles($indicator, {
            left: "-".concat(indicatorSize / 2, "px"),
            width: "".concat(indicatorSize, "px"),
            height: "".concat(indicatorSize, "px")
          });

          function showHighlight(event) {
            var _getPosFromEvent = getPosFromEvent(art, event),
                width = _getPosFromEvent.width;

            var text = event.target.dataset.text;
            $tip.innerHTML = text;
            var tipWidth = $tip.clientWidth;

            if (width <= tipWidth / 2) {
              setStyle($tip, 'left', 0);
            } else if (width > $control.clientWidth - tipWidth / 2) {
              setStyle($tip, 'left', "".concat($control.clientWidth - tipWidth, "px"));
            } else {
              setStyle($tip, 'left', "".concat(width - tipWidth / 2, "px"));
            }
          }

          function showTime(event) {
            var _getPosFromEvent2 = getPosFromEvent(art, event),
                width = _getPosFromEvent2.width,
                time = _getPosFromEvent2.time;

            $tip.innerHTML = time;
            var tipWidth = $tip.clientWidth;

            if (width <= tipWidth / 2) {
              setStyle($tip, 'left', 0);
            } else if (width > $control.clientWidth - tipWidth / 2) {
              setStyle($tip, 'left', "".concat($control.clientWidth - tipWidth, "px"));
            } else {
              setStyle($tip, 'left', "".concat(width - tipWidth / 2, "px"));
            }
          }

          function setBar(type, percentage) {
            if (type === 'loaded') {
              setStyle($loaded, 'width', "".concat(percentage * 100, "%"));
            }

            if (type === 'played') {
              setStyle($played, 'width', "".concat(percentage * 100, "%"));
              setStyle($indicator, 'left', "calc(".concat(percentage * 100, "% - ").concat(indicatorSize / 2, "px)"));
            }
          }

          for (var index = 0; index < option.highlight.length; index++) {
            var item = option.highlight[index];
            var left = clamp(item.time, 0, art.duration) / art.duration * 100;
            append($highlight, "<span data-text=\"".concat(item.text, "\" data-time=\"").concat(item.time, "\" style=\"left: ").concat(left, "%\"></span>"));
          }

          setBar('loaded', art.loaded);
          art.on('video:progress', function () {
            setBar('loaded', art.loaded);
          });
          art.on('video:timeupdate', function () {
            setBar('played', art.played);
          });
          art.on('video:ended', function () {
            setBar('played', 1);
          });
          proxy($control, 'mousemove', function (event) {
            setStyle($tip, 'display', 'block');

            if (includeFromEvent(event, $highlight)) {
              showHighlight(event);
            } else {
              showTime(event);
            }
          });
          proxy($control, 'mouseout', function () {
            setStyle($tip, 'display', 'none');
          });
          proxy($control, 'click', function (event) {
            if (event.target !== $indicator) {
              var _getPosFromEvent3 = getPosFromEvent(art, event),
                  second = _getPosFromEvent3.second,
                  percentage = _getPosFromEvent3.percentage;

              setBar('played', percentage);
              art.seek = second;
            }
          });
          proxy($indicator, 'mousedown', function () {
            isDroging = true;
          });
          proxy(document, 'mousemove', function (event) {
            if (isDroging) {
              var _getPosFromEvent4 = getPosFromEvent(art, event),
                  second = _getPosFromEvent4.second,
                  percentage = _getPosFromEvent4.percentage;

              setBar('played', percentage);
              art.seek = second;
            }
          });
          proxy(document, 'mouseup', function () {
            if (isDroging) {
              isDroging = false;
            }
          });
          proxy($indicator, 'touchstart', function (event) {
            if (event.touches.length === 1) {
              isDroging = true;
            }
          });
          proxy(document, 'touchmove', function (event) {
            if (event.touches.length === 1 && isDroging) {
              var _getPosFromEvent5 = getPosFromEvent(art, event),
                  second = _getPosFromEvent5.second,
                  percentage = _getPosFromEvent5.percentage;

              setBar('played', percentage);
              art.seek = second;
            }
          });
          proxy(document, 'touchend', function () {
            if (isDroging) {
              isDroging = false;
            }
          });
        }
      });
    };
  }

  function ownKeys$i(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$i(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$i(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$i(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function subtitle$1(option) {
    return function (art) {
      return _objectSpread$i(_objectSpread$i({}, option), {}, {
        tooltip: art.i18n.get('Hide subtitle'),
        mounted: function mounted($control) {
          var proxy = art.events.proxy,
              icons = art.icons,
              i18n = art.i18n,
              subtitle = art.subtitle;
          append($control, icons.subtitle);
          proxy($control, 'click', function () {
            subtitle.toggle = true;
          });
          art.on('subtitle', function (value) {
            tooltip($control, i18n.get(value ? 'Hide subtitle' : 'Show subtitle'));
          });
        }
      });
    };
  }

  function ownKeys$h(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$h(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$h(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$h(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function time(option) {
    return function (art) {
      return _objectSpread$h(_objectSpread$h({}, option), {}, {
        mounted: function mounted($control) {
          function getTime() {
            var newTime = "".concat(secondToTime(art.currentTime), " / ").concat(secondToTime(art.duration));

            if (newTime !== $control.innerText) {
              $control.innerText = newTime;
            }
          }

          getTime();
          var events = ['video:loadedmetadata', 'video:timeupdate', 'video:progress'];

          for (var index = 0; index < events.length; index++) {
            art.on(events[index], getTime);
          }
        }
      });
    };
  }

  function ownKeys$g(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$g(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$g(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$g(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function volume$1(option) {
    return function (art) {
      return _objectSpread$g(_objectSpread$g({}, option), {}, {
        mounted: function mounted($control) {
          var proxy = art.events.proxy,
              icons = art.icons,
              i18n = art.i18n;
          var isDroging = false;
          var panelWidth = 60; // 音量条宽度

          var handleWidth = 12; // 音量把手宽度

          var $volume = append($control, icons.volume);
          var $volumeClose = append($control, icons.volumeClose);
          var $volumePanel = append($control, '<div class="art-volume-panel"></div>');
          var $volumeHandle = append($volumePanel, '<div class="art-volume-slider-handle"></div>');
          tooltip($volume, i18n.get('Mute'));
          setStyle($volumeClose, 'display', 'none');

          if (isMobile) {
            setStyle($volumePanel, 'display', 'none');
          }

          function volumeChangeFromEvent(event) {
            var _$volumePanel$getBoun = $volumePanel.getBoundingClientRect(),
                panelLeft = _$volumePanel$getBoun.left;

            var percentage = clamp(event.pageX - panelLeft - handleWidth / 2, 0, panelWidth - handleWidth / 2) / (panelWidth - handleWidth);
            return percentage;
          }

          function setVolumeHandle() {
            var percentage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.7;

            if (art.muted || percentage === 0) {
              setStyle($volume, 'display', 'none');
              setStyle($volumeClose, 'display', 'flex');
              setStyle($volumeHandle, 'left', '0');
            } else {
              var width = (panelWidth - handleWidth) * percentage;
              setStyle($volume, 'display', 'flex');
              setStyle($volumeClose, 'display', 'none');
              setStyle($volumeHandle, 'left', "".concat(width, "px"));
            }
          }

          setVolumeHandle(art.volume);
          art.on('video:volumechange', function () {
            setVolumeHandle(art.volume);
          });
          proxy($volume, 'click', function () {
            art.muted = true;
          });
          proxy($volumeClose, 'click', function () {
            art.muted = false;
          });
          proxy($volumePanel, 'click', function (event) {
            art.muted = false;
            art.volume = volumeChangeFromEvent(event);
          });
          proxy($volumeHandle, 'mousedown', function () {
            isDroging = true;
          });
          proxy($control, 'mousemove', function (event) {
            if (isDroging) {
              art.muted = false;
              art.volume = volumeChangeFromEvent(event);
            }
          });
          proxy(document, 'mouseup', function () {
            if (isDroging) {
              isDroging = false;
            }
          });
        }
      });
    };
  }

  function ownKeys$f(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$f(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$f(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$f(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function setting$1(option) {
    return function (art) {
      return _objectSpread$f(_objectSpread$f({}, option), {}, {
        tooltip: art.i18n.get('Show setting'),
        mounted: function mounted($control) {
          var proxy = art.events.proxy,
              icons = art.icons,
              i18n = art.i18n,
              setting = art.setting;
          append($control, icons.setting);
          proxy($control, 'click', function () {
            setting.toggle = true;
          });
          art.on('setting', function (value) {
            tooltip($control, i18n.get(value ? 'Hide setting' : 'Show setting'));
          });
        }
      });
    };
  }

  function ownKeys$e(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$e(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$e(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function thumbnails(options) {
    return function (art) {
      return _objectSpread$e(_objectSpread$e({}, options), {}, {
        mounted: function mounted($control) {
          var option = art.option,
              _art$template = art.template,
              $progress = _art$template.$progress,
              $video = _art$template.$video,
              _art$events = art.events,
              proxy = _art$events.proxy,
              loadImg = _art$events.loadImg;
          var image = null;
          var loading = false;
          var isLoad = false;

          function showThumbnails(event) {
            var _getPosFromEvent = getPosFromEvent(art, event),
                posWidth = _getPosFromEvent.width;

            var _option$thumbnails = option.thumbnails,
                url = _option$thumbnails.url,
                number = _option$thumbnails.number,
                column = _option$thumbnails.column;
            var width = image.naturalWidth / column;
            var height = width / ($video.videoWidth / $video.videoHeight);
            var perWidth = $progress.clientWidth / number;
            var perIndex = Math.floor(posWidth / perWidth);
            var yIndex = Math.ceil(perIndex / column) - 1;
            var xIndex = perIndex % column || column - 1;
            setStyle($control, 'backgroundImage', "url(".concat(url, ")"));
            setStyle($control, 'height', "".concat(height, "px"));
            setStyle($control, 'width', "".concat(width, "px"));
            setStyle($control, 'backgroundPosition', "-".concat(xIndex * width, "px -").concat(yIndex * height, "px"));

            if (posWidth <= width / 2) {
              setStyle($control, 'left', 0);
            } else if (posWidth > $progress.clientWidth - width / 2) {
              setStyle($control, 'left', "".concat($progress.clientWidth - width, "px"));
            } else {
              setStyle($control, 'left', "".concat(posWidth - width / 2, "px"));
            }
          }

          proxy($progress, 'mousemove', function (event) {
            if (!loading) {
              loading = true;
              loadImg(option.thumbnails.url).then(function (img) {
                image = img;
                isLoad = true;
              });
            }

            if (isLoad) {
              setStyle($control, 'display', 'block');
              showThumbnails(event);
            }
          });
          proxy($progress, 'mouseout', function () {
            setStyle($control, 'display', 'none');
          });
        }
      });
    };
  }

  function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$d(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$d(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function screenshot$1(option) {
    return function (art) {
      return _objectSpread$d(_objectSpread$d({}, option), {}, {
        tooltip: art.i18n.get('Screenshot'),
        mounted: function mounted($control) {
          var proxy = art.events.proxy,
              icons = art.icons;
          append($control, icons.screenshot);
          proxy($control, 'click', function () {
            art.screenshot();
          });
        }
      });
    };
  }

  function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$c(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function quality(option) {
    return function (art) {
      var qualityOption = art.option.quality;
      var qualityDefault = qualityOption.find(function (item) {
        return item.default;
      }) || qualityOption[0];
      return _objectSpread$c(_objectSpread$c({}, option), {}, {
        html: qualityDefault ? qualityDefault.html : '',
        selector: qualityOption,
        onSelect: function onSelect(item) {
          art.switchQuality(item.url, item.html);
        }
      });
    };
  }

  function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$b(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function loop(option) {
    return function (art) {
      return _objectSpread$b(_objectSpread$b({}, option), {}, {
        mounted: function mounted($control) {
          var $left = append($control, "<span class=\"art-loop-point\"></span>");
          var $right = append($control, "<span class=\"art-loop-point\"></span>");
          art.on('loop', function (value) {
            if (value) {
              setStyle($control, 'display', 'block');
              setStyle($left, 'left', "calc(".concat(value[0] / art.duration * 100, "% - ").concat($left.clientWidth, "px)"));
              setStyle($right, 'left', "".concat(value[1] / art.duration * 100, "%"));
            } else {
              setStyle($control, 'display', 'none');
            }
          });
        }
      });
    };
  }

  function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var Control = /*#__PURE__*/function (_Component) {
    _inherits(Control, _Component);

    var _super = _createSuper$8(Control);

    function Control(art) {
      var _this;

      _classCallCheck(this, Control);

      _this = _super.call(this, art);
      _this.name = 'control';
      var option = art.option,
          $player = art.template.$player;
      _this.mouseMoveTime = Date.now();
      art.on('mousemove', function () {
        _this.show = true;
        removeClass($player, 'art-hide-cursor');
        addClass($player, 'art-hover');
        _this.mouseMoveTime = Date.now();
      });
      art.on('video:timeupdate', function () {
        if (art.playing && _this.show && Date.now() - _this.mouseMoveTime >= 3000) {
          _this.show = false;
          addClass($player, 'art-hide-cursor');
          removeClass($player, 'art-hover');
        }
      });
      art.once('ready', function () {
        _this.add(progress({
          name: 'progress',
          disable: option.isLive,
          position: 'top',
          index: 10
        }));

        _this.add(thumbnails({
          name: 'thumbnails',
          disable: !option.thumbnails.url || option.isLive,
          position: 'top',
          index: 20
        }));

        _this.add(loop({
          name: 'loop',
          disable: false,
          position: 'top',
          index: 30
        }));

        _this.add(playAndPause({
          name: 'playAndPause',
          disable: false,
          position: 'left',
          index: 10
        }));

        _this.add(volume$1({
          name: 'volume',
          disable: false,
          position: 'left',
          index: 20
        }));

        _this.add(time({
          name: 'time',
          disable: option.isLive,
          position: 'left',
          index: 30
        }));

        _this.add(quality({
          name: 'quality',
          disable: option.quality.length === 0,
          position: 'right',
          index: 10
        }));

        _this.add(screenshot$1({
          name: 'screenshot',
          disable: !option.screenshot,
          position: 'right',
          index: 20
        }));

        _this.add(subtitle$1({
          name: 'subtitle',
          disable: !option.subtitle.url,
          position: 'right',
          index: 30
        }));

        _this.add(setting$1({
          name: 'setting',
          disable: !option.setting,
          position: 'right',
          index: 40
        }));

        _this.add(pip$1({
          name: 'pip',
          disable: !option.pip,
          position: 'right',
          index: 50
        }));

        _this.add(fullscreenWeb$1({
          name: 'fullscreenWeb',
          disable: !option.fullscreenWeb,
          position: 'right',
          index: 60
        }));

        _this.add(fullscreen$1({
          name: 'fullscreen',
          disable: !option.fullscreen,
          position: 'right',
          index: 70
        }));

        for (var index = 0; index < option.controls.length; index++) {
          _this.add(option.controls[index]);
        }
      });
      return _this;
    }

    _createClass(Control, [{
      key: "add",
      value: function add(getOption) {
        var option = typeof getOption === 'function' ? getOption(this.art) : getOption;
        var _this$art$template = this.art.template,
            $progress = _this$art$template.$progress,
            $controlsLeft = _this$art$template.$controlsLeft,
            $controlsRight = _this$art$template.$controlsRight;

        switch (option.position) {
          case 'top':
            this.$parent = $progress;
            break;

          case 'left':
            this.$parent = $controlsLeft;
            break;

          case 'right':
            this.$parent = $controlsRight;
            break;

          default:
            errorHandle(false, "Control option.position must one of 'top', 'left', 'right'");
            break;
        }

        _get(_getPrototypeOf(Control.prototype), "add", this).call(this, option);
      }
    }]);

    return Control;
  }(Component);

  function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function playbackRate$1(option) {
    return function (art) {
      var i18n = art.i18n;
      return _objectSpread$a(_objectSpread$a({}, option), {}, {
        html: "".concat(i18n.get('Play speed'), ":\n                <span data-rate=\"0.5\">0.5</span>\n                <span data-rate=\"0.75\">0.75</span>\n                <span data-rate=\"1.0\" class=\"art-current\">").concat(i18n.get('Normal'), "</span>\n                <span data-rate=\"1.25\">1.25</span>\n                <span data-rate=\"1.5\">1.5</span>\n                <span data-rate=\"2.0\">2.0</span>\n            "),
        click: function click(contextmenu, event) {
          var rate = event.target.dataset.rate;

          if (rate) {
            art.playbackRate = Number(rate);
            contextmenu.show = false;
          }
        },
        mounted: function mounted($menu) {
          art.on('playbackRate', function (rate) {
            var $current = queryAll('span', $menu).find(function (item) {
              return Number(item.dataset.rate) === rate;
            });

            if ($current) {
              inverseClass($current, 'art-current');
            }
          });
        }
      });
    };
  }

  function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function aspectRatio$1(option) {
    return function (art) {
      var i18n = art.i18n;
      return _objectSpread$9(_objectSpread$9({}, option), {}, {
        html: "".concat(i18n.get('Aspect ratio'), ":\n                <span data-ratio=\"default\" class=\"art-current\">").concat(i18n.get('Default'), "</span>\n                <span data-ratio=\"4:3\">4:3</span>\n                <span data-ratio=\"16:9\">16:9</span>\n            "),
        click: function click(contextmenu, event) {
          var ratio = event.target.dataset.ratio;

          if (ratio) {
            art.aspectRatio = ratio;
            contextmenu.show = false;
          }
        },
        mounted: function mounted($menu) {
          art.on('aspectRatio', function (ratio) {
            var $current = queryAll('span', $menu).find(function (item) {
              return item.dataset.ratio === ratio;
            });

            if ($current) {
              inverseClass($current, 'art-current');
            }
          });
        }
      });
    };
  }

  function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function info(option) {
    return function (art) {
      return _objectSpread$8(_objectSpread$8({}, option), {}, {
        html: art.i18n.get('Video info'),
        click: function click(contextmenu) {
          art.info.show = true;
          contextmenu.show = false;
        }
      });
    };
  }

  function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function version(option) {
    return _objectSpread$7(_objectSpread$7({}, option), {}, {
      html: '<a href="https://artplayer.org" target="_blank">ArtPlayer 4.2.5</a>'
    });
  }

  function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function close(option) {
    return function (art) {
      return _objectSpread$6(_objectSpread$6({}, option), {}, {
        html: art.i18n.get('Close'),
        click: function click(contextmenu) {
          contextmenu.show = false;
        }
      });
    };
  }

  function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var Contextmenu = /*#__PURE__*/function (_Component) {
    _inherits(Contextmenu, _Component);

    var _super = _createSuper$7(Contextmenu);

    function Contextmenu(art) {
      var _this;

      _classCallCheck(this, Contextmenu);

      _this = _super.call(this, art);
      _this.art = art;
      _this.name = 'contextmenu';
      _this.$parent = art.template.$contextmenu;
      art.once('ready', function () {
        if (!isMobile) {
          _this.init();
        }
      });
      return _this;
    }

    _createClass(Contextmenu, [{
      key: "init",
      value: function init() {
        var _this2 = this;

        var _this$art = this.art,
            option = _this$art.option,
            _this$art$template = _this$art.template,
            $player = _this$art$template.$player,
            $contextmenu = _this$art$template.$contextmenu,
            proxy = _this$art.events.proxy;
        this.add(playbackRate$1({
          disable: !option.playbackRate,
          name: 'playbackRate',
          index: 10
        }));
        this.add(aspectRatio$1({
          disable: !option.aspectRatio,
          name: 'aspectRatio',
          index: 20
        }));
        this.add(info({
          disable: false,
          name: 'info',
          index: 30
        }));
        this.add(version({
          disable: false,
          name: 'version',
          index: 40
        }));
        this.add(close({
          disable: false,
          name: 'close',
          index: 60
        }));

        for (var index = 0; index < option.contextmenu.length; index++) {
          this.add(option.contextmenu[index]);
        }

        proxy($player, 'contextmenu', function (event) {
          event.preventDefault();
          _this2.show = true;
          var mouseX = event.clientX;
          var mouseY = event.clientY;

          var _$player$getBoundingC = $player.getBoundingClientRect(),
              cHeight = _$player$getBoundingC.height,
              cWidth = _$player$getBoundingC.width,
              cLeft = _$player$getBoundingC.left,
              cTop = _$player$getBoundingC.top;

          var _$contextmenu$getBoun = $contextmenu.getBoundingClientRect(),
              mHeight = _$contextmenu$getBoun.height,
              mWidth = _$contextmenu$getBoun.width;

          var menuLeft = mouseX - cLeft;
          var menuTop = mouseY - cTop;

          if (mouseX + mWidth > cLeft + cWidth) {
            menuLeft = cWidth - mWidth;
          }

          if (mouseY + mHeight > cTop + cHeight) {
            menuTop = cHeight - mHeight;
          }

          setStyles($contextmenu, {
            top: "".concat(menuTop, "px"),
            left: "".concat(menuLeft, "px")
          });
        });
        proxy($player, 'click', function (event) {
          if (!includeFromEvent(event, $contextmenu)) {
            _this2.show = false;
          }
        });
        this.art.on('blur', function () {
          _this2.show = false;
        });
      }
    }]);

    return Contextmenu;
  }(Component);

  function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var Info = /*#__PURE__*/function (_Component) {
    _inherits(Info, _Component);

    var _super = _createSuper$6(Info);

    function Info(art) {
      var _this;

      _classCallCheck(this, Info);

      _this = _super.call(this, art);
      _this.name = 'info';
      art.once('ready', function () {
        if (!isMobile) {
          _this.init();
        }
      });
      return _this;
    }

    _createClass(Info, [{
      key: "init",
      value: function init() {
        var _this2 = this;

        var _this$art = this.art,
            proxy = _this$art.events.proxy,
            _this$art$template = _this$art.template,
            $infoPanel = _this$art$template.$infoPanel,
            $infoClose = _this$art$template.$infoClose,
            $video = _this$art$template.$video;
        proxy($infoClose, 'click', function () {
          _this2.show = false;
        });
        var timer = null;
        var $types = queryAll('[data-video]', $infoPanel) || [];
        this.art.on('destroy', function () {
          clearTimeout(timer);
        });

        function loop() {
          for (var index = 0; index < $types.length; index++) {
            var item = $types[index];
            var value = $video[item.dataset.video];
            var innerText = typeof value === 'number' ? value.toFixed(2) : value;

            if (item.innerText !== innerText) {
              item.innerText = innerText;
            }
          }

          timer = setTimeout(loop, 1000);
        }

        loop();
      }
    }]);

    return Info;
  }(Component);

  function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var Subtitle = /*#__PURE__*/function (_Component) {
    _inherits(Subtitle, _Component);

    var _super = _createSuper$5(Subtitle);

    function Subtitle(art) {
      var _this;

      _classCallCheck(this, Subtitle);

      _this = _super.call(this, art);
      _this.name = 'subtitle';
      art.once('ready', function () {
        _this.init(art.option.subtitle);
      });
      return _this;
    }

    _createClass(Subtitle, [{
      key: "url",
      get: function get() {
        return this.art.template.$track.src;
      },
      set: function set(url) {
        this.switch(url);
      }
    }, {
      key: "textTrack",
      get: function get() {
        return this.art.template.$video.textTracks[0];
      }
    }, {
      key: "activeCue",
      get: function get() {
        return this.textTrack.activeCues[0];
      }
    }, {
      key: "bilingual",
      get: function get() {
        var $subtitle = this.art.template.$subtitle;
        return hasClass($subtitle, 'art-bilingual');
      },
      set: function set(val) {
        var $subtitle = this.art.template.$subtitle;

        if (val) {
          addClass($subtitle, 'art-bilingual');
        } else {
          removeClass($subtitle, 'art-bilingual');
        }
      }
    }, {
      key: "style",
      value: function style(key, value) {
        var $subtitle = this.art.template.$subtitle;

        if (_typeof(key) === 'object') {
          return setStyles($subtitle, key);
        }

        return setStyle($subtitle, key, value);
      }
    }, {
      key: "update",
      value: function update() {
        var $subtitle = this.art.template.$subtitle;
        $subtitle.innerHTML = '';

        if (this.activeCue) {
          $subtitle.innerHTML = this.activeCue.text.split(/\r?\n/).map(function (item) {
            return "<p>".concat(escape(item), "</p>");
          }).join('');
          this.art.emit('subtitleUpdate', this.activeCue.text);
        }
      }
    }, {
      key: "switch",
      value: function _switch(url) {
        var newOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _this$art = this.art,
            i18n = _this$art.i18n,
            notice = _this$art.notice,
            option = _this$art.option;

        var subtitleOption = _objectSpread$5(_objectSpread$5(_objectSpread$5({}, option.subtitle), newOption), {}, {
          url: url
        });

        return this.init(subtitleOption).then(function (subUrl) {
          if (newOption.name) {
            notice.show = "".concat(i18n.get('Switch subtitle'), ": ").concat(newOption.name);
          }

          return subUrl;
        });
      }
    }, {
      key: "init",
      value: function init(subtitleOption) {
        var _this2 = this;

        validator(subtitleOption, scheme.subtitle);
        if (!subtitleOption.url) return;
        var _this$art2 = this.art,
            notice = _this$art2.notice,
            proxy = _this$art2.events.proxy,
            _this$art2$template = _this$art2.template,
            $subtitle = _this$art2$template.$subtitle,
            $video = _this$art2$template.$video,
            $track = _this$art2$template.$track;

        if (!$track) {
          var _$track = document.createElement('track');

          _$track.default = true;
          _$track.kind = 'metadata';
          $video.appendChild(_$track);
          this.art.template.$track = _$track;
          proxy(this.textTrack, 'cuechange', this.update.bind(this));
        }

        this.style(subtitleOption.style);
        this.bilingual = subtitleOption.bilingual;
        errorHandle(window.fetch, 'fetch not support');
        return fetch(subtitleOption.url).then(function (response) {
          return response.arrayBuffer();
        }).then(function (buffer) {
          errorHandle(window.TextDecoder, 'TextDecoder not support');
          var decoder = new TextDecoder(subtitleOption.encoding);
          var text = decoder.decode(buffer);

          _this2.art.emit('subtitleLoad', subtitleOption.url);

          switch (subtitleOption.type || getExt(subtitleOption.url)) {
            case 'srt':
              return vttToBlob(srtToVtt(text));

            case 'ass':
              return vttToBlob(assToVtt(text));

            case 'vtt':
              return vttToBlob(text);

            default:
              return subtitleOption.url;
          }
        }).then(function (subUrl) {
          $subtitle.innerHTML = '';
          if (_this2.url === subUrl) return subUrl;
          URL.revokeObjectURL(_this2.url);
          _this2.art.template.$track.src = subUrl;

          _this2.art.emit('subtitleSwitch', subUrl);

          return subUrl;
        }).catch(function (err) {
          notice.show = err;
          throw err;
        });
      }
    }]);

    return Subtitle;
  }(Component);

  function clickInit(art, events) {
    var $player = art.template.$player;
    events.proxy(document, ['click', 'contextmenu'], function (event) {
      if (includeFromEvent(event, $player)) {
        art.isFocus = true;
        art.emit('focus');
      } else {
        art.isFocus = false;
        art.emit('blur');
      }
    });
  }

  function hoverInit(art, events) {
    var $player = art.template.$player;
    events.hover($player, function () {
      addClass($player, 'art-hover');
      art.emit('hover', true);
    }, function () {
      removeClass($player, 'art-hover');
      art.emit('hover');
    });
  }

  function mousemoveInitInit(art, events) {
    var $player = art.template.$player;
    events.proxy($player, 'mousemove', function (event) {
      art.emit('mousemove', event);
    });
  }

  function resizeInit(art, events) {
    var option = art.option;
    var resizeFn = throttle(function () {
      if (art.normalSize) {
        art.autoSize = option.autoSize;
      }

      art.aspectRatioReset = true;
      art.emit('resize');
    }, 500);
    events.proxy(window, ['orientationchange', 'resize'], function () {
      resizeFn();
    });

    if (screen && screen.orientation && screen.orientation.onchange) {
      events.proxy(screen.orientation, 'change', function () {
        resizeFn();
      });
    }
  }

  function gestureInit(art, events) {
    if (isMobile && !art.option.isLive) {
      var notice = art.notice,
          $video = art.template.$video;
      var isDroging = false;
      var startX = 0;
      var currentTime = 0;
      events.proxy($video, 'touchstart', function (event) {
        if (event.touches.length === 1) {
          isDroging = true;
          startX = event.touches[0].clientX;
        }
      });
      events.proxy($video, 'touchmove', function (event) {
        if (event.touches.length === 1 && isDroging) {
          var widthDiff = event.touches[0].clientX - startX;
          var proportion = clamp(widthDiff / $video.clientWidth, -1, 1);
          currentTime = clamp(art.currentTime + art.duration * proportion, 0, art.duration);
          notice.show = "".concat(secondToTime(currentTime), " / ").concat(secondToTime(art.duration));
        }
      });
      events.proxy(document, 'touchend', function () {
        if (isDroging && currentTime) {
          art.seek = currentTime;
        }

        isDroging = false;
        startX = 0;
        currentTime = 0;
      });
    }
  }

  function viewInit(art, events) {
    var option = art.option,
        $container = art.template.$container;
    var scrollFn = throttle(function () {
      art.emit('view', isInViewport($container, 50));
    }, 200);
    events.proxy(window, 'scroll', function () {
      scrollFn();
    });
    art.on('view', function (state) {
      if (option.autoMini) {
        art.mini = !state;
      }
    });
  }

  var Events = /*#__PURE__*/function () {
    function Events(art) {
      var _this = this;

      _classCallCheck(this, Events);

      this.destroyEvents = [];
      this.proxy = this.proxy.bind(this);
      this.hover = this.hover.bind(this);
      this.loadImg = this.loadImg.bind(this);

      if (art.whitelist.state) {
        art.once('ready', function () {
          clickInit(art, _this);
          hoverInit(art, _this);
          mousemoveInitInit(art, _this);
          resizeInit(art, _this);
          gestureInit(art, _this);
          viewInit(art, _this);
        });
      }
    }

    _createClass(Events, [{
      key: "proxy",
      value: function proxy(target, name, callback) {
        var _this2 = this;

        var option = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        if (Array.isArray(name)) {
          return name.map(function (item) {
            return _this2.proxy(target, item, callback, option);
          });
        }

        target.addEventListener(name, callback, option);

        var destroy = function destroy() {
          return target.removeEventListener(name, callback, option);
        };

        this.destroyEvents.push(destroy);
        return destroy;
      }
    }, {
      key: "hover",
      value: function hover(target, mouseenter, mouseleave) {
        if (mouseenter) {
          this.proxy(target, 'mouseenter', mouseenter);
        }

        if (mouseleave) {
          this.proxy(target, 'mouseleave', mouseleave);
        }
      }
    }, {
      key: "loadImg",
      value: function loadImg(img) {
        var _this3 = this;

        return new Promise(function (resolve, reject) {
          var image;

          if (img instanceof HTMLImageElement) {
            image = img;
          } else if (typeof img === 'string') {
            image = new Image();
            image.src = img;
          } else {
            return reject(new ArtPlayerError('Unable to get Image'));
          }

          if (image.complete) {
            return resolve(image);
          }

          _this3.proxy(image, 'load', function () {
            return resolve(image);
          });

          _this3.proxy(image, 'error', function () {
            return reject(new ArtPlayerError("Failed to load Image: ".concat(image.src)));
          });
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        for (var index = 0; index < this.destroyEvents.length; index++) {
          this.destroyEvents[index]();
        }
      }
    }]);

    return Events;
  }();

  var Hotkey = /*#__PURE__*/function () {
    function Hotkey(art) {
      var _this = this;

      _classCallCheck(this, Hotkey);

      this.art = art;
      this.keys = {};
      art.once('ready', function () {
        if (art.option.hotkey && !isMobile) {
          _this.init();
        }
      });
    }

    _createClass(Hotkey, [{
      key: "init",
      value: function init() {
        var _this2 = this;

        var proxy = this.art.events.proxy;
        this.add(27, function () {
          if (_this2.art.fullscreenWeb) {
            _this2.art.fullscreenWeb = false;
          }
        });
        this.add(32, function () {
          _this2.art.toggle();
        });
        this.add(37, function () {
          _this2.art.backward = 5;
        });
        this.add(38, function () {
          _this2.art.volume += 0.1;
        });
        this.add(39, function () {
          _this2.art.forward = 5;
        });
        this.add(40, function () {
          _this2.art.volume -= 0.1;
        });
        proxy(window, 'keydown', function (event) {
          if (_this2.art.isFocus) {
            var tag = document.activeElement.tagName.toUpperCase();
            var editable = document.activeElement.getAttribute('contenteditable');

            if (tag !== 'INPUT' && tag !== 'TEXTAREA' && editable !== '' && editable !== 'true') {
              var events = _this2.keys[event.keyCode];

              if (events) {
                event.preventDefault();

                for (var index = 0; index < events.length; index++) {
                  events[index].call(_this2.art, event);
                }

                _this2.art.emit('hotkey', event);
              }
            }
          }
        });
      }
    }, {
      key: "add",
      value: function add(key, event) {
        if (this.keys[key]) {
          this.keys[key].push(event);
        } else {
          this.keys[key] = [event];
        }

        return this;
      }
    }, {
      key: "remove",
      value: function remove(key, event) {
        if (this.keys[key]) {
          var index = this.keys[key].indexOf(event);

          if (index !== -1) {
            this.keys[key].splice(index, 1);
          }
        }

        return this;
      }
    }]);

    return Hotkey;
  }();

  function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var Layer = /*#__PURE__*/function (_Component) {
    _inherits(Layer, _Component);

    var _super = _createSuper$4(Layer);

    function Layer(art) {
      var _this;

      _classCallCheck(this, Layer);

      _this = _super.call(this, art);
      var option = art.option,
          $layer = art.template.$layer;
      _this.name = 'layer';
      _this.$parent = $layer;
      art.once('ready', function () {
        for (var index = 0; index < option.layers.length; index++) {
          _this.add(option.layers[index]);
        }
      });
      return _this;
    }

    return Layer;
  }(Component);

  function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var Loading = /*#__PURE__*/function (_Component) {
    _inherits(Loading, _Component);

    var _super = _createSuper$3(Loading);

    function Loading(art) {
      var _this;

      _classCallCheck(this, Loading);

      _this = _super.call(this, art);
      _this.name = 'loading';
      append(art.template.$loading, art.icons.loading);
      return _this;
    }

    return Loading;
  }(Component);

  var Notice = /*#__PURE__*/function () {
    function Notice(art) {
      _classCallCheck(this, Notice);

      this.art = art;
      this.time = 2000;
      this.timer = null;
    }

    _createClass(Notice, [{
      key: "show",
      set: function set(msg) {
        var _this$art$template = this.art.template,
            $player = _this$art$template.$player,
            $noticeInner = _this$art$template.$noticeInner;
        if (!msg) return removeClass($player, 'art-notice-show');
        $noticeInner.innerText = msg instanceof Error ? msg.message.trim() : msg;
        addClass($player, 'art-notice-show');
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
          $noticeInner.innerText = '';
          removeClass($player, 'art-notice-show');
        }, this.time);
      }
    }]);

    return Notice;
  }();

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var Mask = /*#__PURE__*/function (_Component) {
    _inherits(Mask, _Component);

    var _super = _createSuper$2(Mask);

    function Mask(art) {
      var _this;

      _classCallCheck(this, Mask);

      _this = _super.call(this, art);
      _this.name = 'mask';
      append(art.template.$state, art.icons.state);
      return _this;
    }

    return Mask;
  }(Component);

  var loading = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50px\" height=\"50px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-default\">\n  <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"/>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(0 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-1s\" repeatCount=\"indefinite\"/>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(30 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.9166666666666666s\" repeatCount=\"indefinite\"/>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(60 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.8333333333333334s\" repeatCount=\"indefinite\"/>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(90 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.75s\" repeatCount=\"indefinite\"/></rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(120 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.6666666666666666s\" repeatCount=\"indefinite\"/>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(150 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.5833333333333334s\" repeatCount=\"indefinite\"/>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(180 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.5s\" repeatCount=\"indefinite\"/></rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(210 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.4166666666666667s\" repeatCount=\"indefinite\"/>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(240 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.3333333333333333s\" repeatCount=\"indefinite\"/>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(270 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.25s\" repeatCount=\"indefinite\"/></rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(300 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.16666666666666666s\" repeatCount=\"indefinite\"/>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(330 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.08333333333333333s\" repeatCount=\"indefinite\"/>\n  </rect>\n</svg>";

  var state = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"60\" width=\"60\" style=\"filter: drop-shadow(0px 1px 1px black);\" viewBox=\"0 0 24 24\">\n    <path d=\"M20,2H4C1.8,2,0,3.8,0,6v12c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V6C24,3.8,22.2,2,20,2z M15.6,12.8L10.5,16 C9.9,16.5,9,16,9,15.2V8.8C9,8,9.9,7.5,10.5,8l5.1,3.2C16.3,11.5,16.3,12.5,15.6,12.8z\"/>\n</svg>";

  var play = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\" viewBox=\"0 0 22 22\">\n  <path d=\"M17.982 9.275L8.06 3.27A2.013 2.013 0 0 0 5 4.994v12.011a2.017 2.017 0 0 0 3.06 1.725l9.922-6.005a2.017 2.017 0 0 0 0-3.45z\"></path>\n</svg>";

  var pause = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\" viewBox=\"0 0 22 22\">\n    <path d=\"M7 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zM15 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2z\"></path>\n</svg>";

  var volume = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\" viewBox=\"0 0 22 22\">\n    <path d=\"M10.188 4.65L6 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39V5.04a.498.498 0 0 0-.812-.39zM14.446 3.778a1 1 0 0 0-.862 1.804 6.002 6.002 0 0 1-.007 10.838 1 1 0 0 0 .86 1.806A8.001 8.001 0 0 0 19 11a8.001 8.001 0 0 0-4.554-7.222z\"></path>\n    <path d=\"M15 11a3.998 3.998 0 0 0-2-3.465v6.93A3.998 3.998 0 0 0 15 11z\"></path>\n</svg>";

  var volumeClose = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\" viewBox=\"0 0 22 22\">\n    <path d=\"M15 11a3.998 3.998 0 0 0-2-3.465v2.636l1.865 1.865A4.02 4.02 0 0 0 15 11z\"></path>\n    <path d=\"M13.583 5.583A5.998 5.998 0 0 1 17 11a6 6 0 0 1-.585 2.587l1.477 1.477a8.001 8.001 0 0 0-3.446-11.286 1 1 0 0 0-.863 1.805zM18.778 18.778l-2.121-2.121-1.414-1.414-1.415-1.415L13 13l-2-2-3.889-3.889-3.889-3.889a.999.999 0 1 0-1.414 1.414L5.172 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39v-3.131l2.587 2.587-.01.005a1 1 0 0 0 .86 1.806c.215-.102.424-.214.627-.333l2.3 2.3a1.001 1.001 0 0 0 1.414-1.416zM11 5.04a.5.5 0 0 0-.813-.39L8.682 5.854 11 8.172V5.04z\"></path>\n</svg>";

  var subtitle = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\" viewBox=\"0 0 48 48\">\n    <path d=\"M0 0h48v48H0z\" fill=\"none\"/>\n    <path d=\"M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z\"/>\n</svg>";

  var screenshot = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\" viewBox=\"0 0 50 50\">\n\t<path d=\"M 19.402344 6 C 17.019531 6 14.96875 7.679688 14.5 10.011719 L 14.097656 12 L 9 12 C 6.238281 12 4 14.238281 4 17 L 4 38 C 4 40.761719 6.238281 43 9 43 L 41 43 C 43.761719 43 46 40.761719 46 38 L 46 17 C 46 14.238281 43.761719 12 41 12 L 35.902344 12 L 35.5 10.011719 C 35.03125 7.679688 32.980469 6 30.597656 6 Z M 25 17 C 30.519531 17 35 21.480469 35 27 C 35 32.519531 30.519531 37 25 37 C 19.480469 37 15 32.519531 15 27 C 15 21.480469 19.480469 17 25 17 Z M 25 19 C 20.589844 19 17 22.589844 17 27 C 17 31.410156 20.589844 35 25 35 C 29.410156 35 33 31.410156 33 27 C 33 22.589844 29.410156 19 25 19 Z \"/>\n</svg>\n";

  var setting = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\" viewBox=\"0 0 22 22\">\n    <circle cx=\"11\" cy=\"11\" r=\"2\"></circle>\n    <path d=\"M19.164 8.861L17.6 8.6a6.978 6.978 0 0 0-1.186-2.099l.574-1.533a1 1 0 0 0-.436-1.217l-1.997-1.153a1.001 1.001 0 0 0-1.272.23l-1.008 1.225a7.04 7.04 0 0 0-2.55.001L8.716 2.829a1 1 0 0 0-1.272-.23L5.447 3.751a1 1 0 0 0-.436 1.217l.574 1.533A6.997 6.997 0 0 0 4.4 8.6l-1.564.261A.999.999 0 0 0 2 9.847v2.306c0 .489.353.906.836.986l1.613.269a7 7 0 0 0 1.228 2.075l-.558 1.487a1 1 0 0 0 .436 1.217l1.997 1.153c.423.244.961.147 1.272-.23l1.04-1.263a7.089 7.089 0 0 0 2.272 0l1.04 1.263a1 1 0 0 0 1.272.23l1.997-1.153a1 1 0 0 0 .436-1.217l-.557-1.487c.521-.61.94-1.31 1.228-2.075l1.613-.269a.999.999 0 0 0 .835-.986V9.847a.999.999 0 0 0-.836-.986zM11 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z\"></path>\n</svg>";

  var fullscreen = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"36\" width=\"36\" viewBox=\"0 0 36 36\">\n\t<path d=\"m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z\"></path>\n\t<path d=\"m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z\"></path>\n\t<path d=\"m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z\"></path>\n\t<path d=\"M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z\"></path>\n</svg>";

  var fullscreenWeb = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\" height=\"36\" width=\"36\">\n\t<path d=\"m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z\" fill-rule=\"evenodd\"></path>\n</svg>";

  var pip = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\" height=\"32\" width=\"32\">\n    <path d=\"M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z\"></path>\n</svg>";

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var Icons = function Icons(art) {
    var _this = this;

    _classCallCheck(this, Icons);

    var icons = _objectSpread$4({
      loading: loading,
      state: state,
      play: play,
      pause: pause,
      volume: volume,
      volumeClose: volumeClose,
      subtitle: subtitle,
      screenshot: screenshot,
      setting: setting,
      fullscreen: fullscreen,
      fullscreenWeb: fullscreenWeb,
      pip: pip
    }, art.option.icons);

    Object.keys(icons).forEach(function (key) {
      def(_this, key, {
        get: function get() {
          var icon = document.createElement('i');
          addClass(icon, 'art-icon');
          addClass(icon, "art-icon-".concat(key));
          append(icon, icons[key]);
          return icon;
        }
      });
    });
  };

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function flip(option) {
    return function (art) {
      var i18n = art.i18n;
      return _objectSpread$3(_objectSpread$3({}, option), {}, {
        html: "\n                <div class=\"art-setting-header\">".concat(i18n.get('Flip'), "</div>\n                <div class=\"art-setting-radio\">\n                    <div class=\"art-radio-item current\">\n                        <button type=\"button\" data-value=\"normal\">").concat(i18n.get('Normal'), "</button>\n                    </div>\n                    <div class=\"art-radio-item\">\n                        <button type=\"button\" data-value=\"horizontal\">").concat(i18n.get('Horizontal'), "</button>\n                    </div>\n                    <div class=\"art-radio-item\">\n                        <button type=\"button\" data-value=\"vertical\">").concat(i18n.get('Vertical'), "</button>\n                    </div>\n                </div>\n            "),
        click: function click(_, event) {
          var value = event.target.dataset.value;

          if (value) {
            art.flip = value;
          }
        },
        mounted: function mounted($setting) {
          art.on('flip', function (flip) {
            var $current = queryAll('button', $setting).find(function (item) {
              return item.dataset.value === flip;
            });

            if ($current) {
              inverseClass($current.parentElement, 'current');
            }
          });
        }
      });
    };
  }

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function rotate(option) {
    return function (art) {
      var i18n = art.i18n;
      return _objectSpread$2(_objectSpread$2({}, option), {}, {
        html: "\n                <div class=\"art-setting-header\">\n                    ".concat(i18n.get('Rotate'), ": <span class=\"art-rotate-value\">0\xB0</span>\n                </div>\n                <div class=\"art-setting-radio\">\n                    <div class=\"art-radio-item\">\n                        <button type=\"button\" data-value=\"90\">+90\xB0</button>\n                    </div>\n                    <div class=\"art-radio-item\">\n                        <button type=\"button\" data-value=\"-90\">-90\xB0</button>\n                    </div>\n                </div>\n            "),
        click: function click(setting, event) {
          var value = event.target.dataset.value;

          if (value) {
            var deg = art.rotate + Number(value);

            if (deg === 360 || deg === -360) {
              art.rotate = 0;
            } else {
              art.rotate = deg;
            }
          } else {
            art.rotate = 0;
          }
        },
        mounted: function mounted($setting) {
          var $value = query('.art-rotate-value', $setting);
          art.on('rotate', function (rotate) {
            $value.innerText = "".concat(rotate || 0, "\xB0");
          });
        }
      });
    };
  }

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function aspectRatio(option) {
    return function (art) {
      var i18n = art.i18n;
      return _objectSpread$1(_objectSpread$1({}, option), {}, {
        html: "\n                <div class=\"art-setting-header\">".concat(i18n.get('Aspect ratio'), "</div>\n                <div class=\"art-setting-radio\">\n                    <div class=\"art-radio-item current\">\n                        <button type=\"button\" data-value=\"default\">").concat(i18n.get('Default'), "</button>\n                    </div>\n                    <div class=\"art-radio-item\">\n                        <button type=\"button\" data-value=\"4:3\">4:3</button>\n                    </div>\n                    <div class=\"art-radio-item\">\n                        <button type=\"button\" data-value=\"16:9\">16:9</button>\n                    </div>\n                </div>\n            "),
        click: function click(_, event) {
          var value = event.target.dataset.value;

          if (value) {
            art.aspectRatio = value;
          }
        },
        mounted: function mounted($setting) {
          art.on('aspectRatio', function (ratio) {
            var $current = queryAll('button', $setting).find(function (item) {
              return item.dataset.value === ratio;
            });

            if ($current) {
              inverseClass($current.parentElement, 'current');
            }
          });
        }
      });
    };
  }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function playbackRate(option) {
    return function (art) {
      var i18n = art.i18n,
          proxy = art.events.proxy;
      return _objectSpread(_objectSpread({}, option), {}, {
        html: "\n                <div class=\"art-setting-header\">\n                    ".concat(i18n.get('Play speed'), ": <span class=\"art-subtitle-value\">1.0</span>x\n                </div>\n                <div class=\"art-setting-range\">\n                    <input class=\"art-subtitle-range\" value=\"1\" type=\"range\" min=\"0.5\" max=\"2\" step=\"0.25\">\n                </div>\n            "),
        mounted: function mounted($setting) {
          var $range = query('.art-setting-range input', $setting);
          var $value = query('.art-subtitle-value', $setting);
          proxy($range, 'change', function () {
            var value = $range.value;
            $value.innerText = value;
            art.playbackRate = Number(value);
          });
          art.on('playbackRate', function (rate) {
            if (rate && $range.value !== rate) {
              $range.value = rate;
              $value.innerText = rate;
            }
          });
        }
      });
    };
  }

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  var Setting = /*#__PURE__*/function (_Component) {
    _inherits(Setting, _Component);

    var _super = _createSuper$1(Setting);

    function Setting(art) {
      var _this;

      _classCallCheck(this, Setting);

      _this = _super.call(this, art);
      _this.name = 'setting';
      var option = art.option,
          _art$template = art.template,
          $setting = _art$template.$setting,
          $settingBody = _art$template.$settingBody,
          proxy = art.events.proxy;
      _this.$parent = $settingBody;

      if (option.setting) {
        art.once('ready', function () {
          proxy($setting, 'click', function (event) {
            if (event.target === $setting) {
              _this.show = false;
            }
          });

          _this.add(flip({
            disable: !option.flip,
            name: 'flip'
          }));

          _this.add(rotate({
            disable: !option.rotate,
            name: 'rotate'
          }));

          _this.add(aspectRatio({
            disable: !option.aspectRatio,
            name: 'aspectRatio'
          }));

          _this.add(playbackRate({
            disable: !option.playbackRate,
            name: 'playbackRate'
          }));

          for (var index = 0; index < option.settings.length; index++) {
            _this.add(option.settings[index]);
          }
        });
        art.on('blur', function () {
          _this.show = false;
        });
      }

      return _this;
    }

    return Setting;
  }(Component);

  var Storage = /*#__PURE__*/function () {
    function Storage() {
      _classCallCheck(this, Storage);

      this.name = 'artplayer_settings';
      this.settings = {};
    }

    _createClass(Storage, [{
      key: "get",
      value: function get(key) {
        try {
          var storage = JSON.parse(window.localStorage.getItem(this.name)) || {};
          return key ? storage[key] : storage;
        } catch (error) {
          return key ? this.settings[key] : this.settings;
        }
      }
    }, {
      key: "set",
      value: function set(key, value) {
        try {
          var storage = Object.assign({}, this.get(), _defineProperty({}, key, value));
          window.localStorage.setItem(this.name, JSON.stringify(storage));
        } catch (error) {
          this.settings[key] = value;
        }
      }
    }, {
      key: "del",
      value: function del(key) {
        try {
          var storage = this.get();
          delete storage[key];
          window.localStorage.setItem(this.name, JSON.stringify(storage));
        } catch (error) {
          delete this.settings[key];
        }
      }
    }, {
      key: "clean",
      value: function clean() {
        try {
          window.localStorage.removeItem(this.name);
        } catch (error) {
          this.settings = {};
        }
      }
    }]);

    return Storage;
  }();

  function settingMix(art) {
    var i18n = art.i18n,
        subtitle = art.subtitle,
        proxy = art.events.proxy;
    return {
      title: 'Subtitle',
      name: 'subtitleOffset',
      index: 20,
      html: "\n            <div class=\"art-setting-header\">\n                ".concat(i18n.get('Subtitle offset time'), ": <span class=\"art-subtitle-value\">0</span>s\n            </div>\n            <div class=\"art-setting-range\">\n                <input class=\"art-subtitle-range\" value=\"0\" type=\"range\" min=\"-5\" max=\"5\" step=\"0.5\">\n            </div>\n        "),
      mounted: function mounted($setting) {
        var $range = query('.art-setting-range input', $setting);
        var $value = query('.art-subtitle-value', $setting);
        proxy($range, 'change', function () {
          var value = $range.value;
          $value.innerText = value;
          art.plugins.subtitleOffset.offset(Number(value));
        });
        art.on('subtitle:switch', function () {
          $range.value = 0;
          $value.innerText = 0;
        });
        art.on('subtitleOffset', function (value) {
          subtitle.update();

          if ($range.value !== value) {
            $range.value = value;
            $value.innerText = value;
          }
        });
      }
    };
  }

  function subtitleOffset(art) {
    var clamp = art.constructor.utils.clamp;
    var setting = art.setting,
        notice = art.notice,
        template = art.template,
        i18n = art.i18n;
    setting.add(settingMix);
    var cuesCache = [];
    art.on('subtitle:switch', function () {
      cuesCache = [];
    });
    return {
      name: 'subtitleOffset',
      offset: function offset(value) {
        if (template.$track && template.$track.track) {
          var cues = Array.from(template.$track.track.cues);
          var time = clamp(value, -5, 5);

          for (var index = 0; index < cues.length; index++) {
            var cue = cues[index];

            if (!cuesCache[index]) {
              cuesCache[index] = {
                startTime: cue.startTime,
                endTime: cue.endTime
              };
            }

            cue.startTime = clamp(cuesCache[index].startTime + time, 0, art.duration);
            cue.endTime = clamp(cuesCache[index].endTime + time, 0, art.duration);
          }

          notice.show = "".concat(i18n.get('Subtitle offset time'), ": ").concat(value, "s");
          art.emit('subtitleOffset', value);
        } else {
          notice.show = "".concat(i18n.get('No subtitles found'));
          art.emit('subtitleOffset', 0);
        }
      }
    };
  }

  function localVideo(art) {
    var proxy = art.events.proxy,
        _art$template = art.template,
        $video = _art$template.$video,
        $player = _art$template.$player,
        option = art.option,
        setting = art.setting,
        i18n = art.i18n;

    function loadVideo(file) {
      if (file) {
        var canPlayType = $video.canPlayType(file.type);

        if (canPlayType === 'maybe' || canPlayType === 'probably') {
          var url = URL.createObjectURL(file);
          option.title = file.name;
          art.switchUrl(url, file.name);
          art.emit('localVideo', file);
        } else {
          errorHandle(false, 'Playback of this file format is not supported');
        }
      }
    }

    proxy($player, 'dragover', function (event) {
      event.preventDefault();
    });
    proxy($player, 'drop', function (event) {
      event.preventDefault();
      var file = event.dataTransfer.files[0];
      loadVideo(file);
    });

    function attach(target) {
      var $input = append(target, '<input type="file">');
      setStyle(target, 'position', 'relative');
      setStyles($input, {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: '0',
        top: '0',
        opacity: '0'
      });
      proxy($input, 'change', function () {
        var file = $input.files[0];
        loadVideo(file);
      });
    }

    art.once('ready', function () {
      setting.add({
        title: 'Local Video',
        name: 'localVideo',
        index: 30,
        html: "\n                <div class=\"art-setting-header\">\n                    ".concat(i18n.get('Local Video'), "\n                </div>\n                <div class=\"art-setting-upload\">\n                    <div class=\"art-upload-btn\">").concat(i18n.get('Open'), "</div>\n                    <div class=\"art-upload-value\"></div>\n                </div>\n            "),
        mounted: function mounted($setting) {
          var $btn = query('.art-upload-btn', $setting);
          var $value = query('.art-upload-value', $setting);
          art.on('localVideo', function (file) {
            $value.textContent = file.name;
            $value.title = file.name;
          });
          attach($btn);
        }
      });
    });
    return {
      name: 'localVideo',
      attach: attach
    };
  }

  function localSubtitle(art) {
    var proxy = art.events.proxy,
        subtitle = art.subtitle,
        setting = art.setting,
        i18n = art.i18n;

    function loadSubtitle(file) {
      if (file) {
        var type = getExt(file.name);

        if (['ass', 'vtt', 'srt'].includes(type)) {
          subtitle.switch(URL.createObjectURL(file), {
            name: file.name,
            ext: type
          });
          art.emit('localSubtitle', file);
        } else {
          errorHandle(false, 'Only supports subtitle files in .ass, .vtt and .srt format');
        }
      }
    }

    function attach(target) {
      var $input = append(target, '<input type="file">');
      setStyle(target, 'position', 'relative');
      setStyles($input, {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: '0',
        top: '0',
        opacity: '0'
      });
      proxy($input, 'change', function () {
        var file = $input.files[0];
        loadSubtitle(file);
      });
    }

    art.once('ready', function () {
      setting.add({
        title: 'Local Subtitle',
        name: 'localSubtitle',
        index: 40,
        html: "\n                <div class=\"art-setting-header\">\n                    ".concat(i18n.get('Local Subtitle'), "\n                </div>\n                <div class=\"art-setting-upload\">\n                    <div class=\"art-upload-btn\">").concat(i18n.get('Open'), "</div>\n                    <div class=\"art-upload-value\"></div>\n                </div>\n            "),
        mounted: function mounted($setting) {
          var $btn = query('.art-upload-btn', $setting);
          var $value = query('.art-upload-value', $setting);
          art.on('localSubtitle', function (file) {
            $value.textContent = file.name;
            $value.title = file.name;
          });
          attach($btn);
        }
      });
    });
    return {
      name: 'localSubtitle',
      attach: attach
    };
  }

  function miniProgressBar(art) {
    var layers = art.layers;
    layers.add({
      name: 'miniProgressBar',
      style: {
        display: 'none',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '2px',
        backgroundColor: 'var(--theme)'
      },
      mounted: function mounted($progressBar) {
        art.on('control', function (value) {
          $progressBar.style.display = value ? 'none' : 'block';
        });
        art.on('destroy', function () {
          $progressBar.style.display = 'none';
        });
        art.on('video:timeupdate', function () {
          $progressBar.style.width = "".concat(art.played * 100, "%");
        });
      }
    });
    return {
      name: 'miniProgressBar'
    };
  }

  var Plugins = /*#__PURE__*/function () {
    function Plugins(art) {
      _classCallCheck(this, Plugins);

      this.art = art;
      this.id = 0;
      var option = art.option;

      if (option.subtitle.url && option.subtitleOffset) {
        this.add(subtitleOffset);
      }

      if (!option.isLive && option.miniProgressBar) {
        this.add(miniProgressBar);
      }

      if (option.localVideo) {
        this.add(localVideo);
      }

      if (option.localSubtitle) {
        this.add(localSubtitle);
      }

      for (var index = 0; index < option.plugins.length; index++) {
        this.add(option.plugins[index]);
      }
    }

    _createClass(Plugins, [{
      key: "add",
      value: function add(plugin) {
        this.id += 1;
        var result = plugin.call(this, this.art);
        var pluginName = result && result.name || plugin.name || "plugin".concat(this.id);
        errorHandle(!has(this, pluginName), "Cannot add a plugin that already has the same name: ".concat(pluginName));
        def(this, pluginName, {
          value: result
        });
        return this;
      }
    }]);

    return Plugins;
  }();

  var Ads = /*#__PURE__*/function () {
    function Ads(art) {
      _classCallCheck(this, Ads);

      this.art = art;
      this.init();
    }

    _createClass(Ads, [{
      key: "current",
      get: function get() {
        return this.art.option.ads[this.index];
      }
    }, {
      key: "prev",
      get: function get() {
        return this.art.option.ads[this.index - 1];
      }
    }, {
      key: "next",
      get: function get() {
        return this.art.option.ads[this.index + 1];
      }
    }, {
      key: "init",
      value: function init() {
        this.index = 0;
        this.isEnd = false;
        this.playing = false;
        this.urlCache = this.art.option.url;

        if (this.current) {
          this.playing = true;
          this.play(this.current);
        }
      }
    }, {
      key: "play",
      value: function play() {
        var _this = this;

        var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (this.isEnd) return;
        this.art.switchUrl(item.url);
        this.art.once('video:timeupdate', function () {
          _this.art.emit('ads:start', item);
        });
        this.art.once('video:ended', function () {
          var next = _this.next;

          if (next) {
            _this.index += 1;

            _this.play(next);
          } else {
            _this.end();
          }
        });
      }
    }, {
      key: "end",
      value: function end() {
        if (this.isEnd) return;
        this.isEnd = true;
        this.playing = false;
        this.art.option.url = this.urlCache;
        this.art.switchUrl(this.urlCache);
        this.art.emit('ads:end');
      }
    }]);

    return Ads;
  }();

  var Mobile = function Mobile(art) {
    _classCallCheck(this, Mobile);

    var option = art.option,
        proxy = art.events.proxy,
        $video = art.template.$video;

    for (var index = 0; index < config.events.length; index++) {
      proxy($video, config.events[index], function (event) {
        art.emit("video:".concat(event.type), event);
      });
    }

    Object.keys(option.moreVideoAttr).forEach(function (key) {
      $video[key] = option.moreVideoAttr[key];
    });

    if (option.muted) {
      $video.muted = option.muted;
    }

    if (option.volume) {
      $video.volume = clamp(option.volume, 0, 1);
    }

    if (option.poster) {
      $video.poster = option.poster;
    }

    if (option.autoplay) {
      $video.autoplay = option.autoplay;
    }

    var typeName = option.type || getExt(option.url);
    var typeCallback = option.customType[typeName];

    if (typeName && typeCallback) {
      typeCallback($video, option.url, art);
      art.emit('customType', typeName);
    } else {
      $video.src = option.url;
      art.emit('url', $video.src);
    }
  };

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var id = 0;
  var instances = [];

  var Artplayer = /*#__PURE__*/function (_Emitter) {
    _inherits(Artplayer, _Emitter);

    var _super = _createSuper(Artplayer);

    function Artplayer(option) {
      var _this;

      _classCallCheck(this, Artplayer);

      _this = _super.call(this);
      _this.id = ++id;
      var mergeOption = mergeDeep(Artplayer.option, option);
      _this.option = validator(mergeOption, scheme);
      _this.isReady = false;
      _this.isFocus = false;
      _this.isDestroy = false;
      _this.whitelist = new Whitelist(_assertThisInitialized(_this));
      _this.template = new Template(_assertThisInitialized(_this));
      _this.events = new Events(_assertThisInitialized(_this));

      if (_this.whitelist.state) {
        _this.storage = new Storage(_assertThisInitialized(_this));
        _this.icons = new Icons(_assertThisInitialized(_this));
        _this.i18n = new I18n(_assertThisInitialized(_this));
        _this.notice = new Notice(_assertThisInitialized(_this));
        _this.player = new Player(_assertThisInitialized(_this));
        _this.layers = new Layer(_assertThisInitialized(_this));
        _this.controls = new Control(_assertThisInitialized(_this));
        _this.contextmenu = new Contextmenu(_assertThisInitialized(_this));
        _this.subtitle = new Subtitle(_assertThisInitialized(_this));
        _this.ads = new Ads(_assertThisInitialized(_this));
        _this.info = new Info(_assertThisInitialized(_this));
        _this.loading = new Loading(_assertThisInitialized(_this));
        _this.hotkey = new Hotkey(_assertThisInitialized(_this));
        _this.mask = new Mask(_assertThisInitialized(_this));
        _this.setting = new Setting(_assertThisInitialized(_this));
        _this.plugins = new Plugins(_assertThisInitialized(_this));
      } else {
        _this.mobile = new Mobile(_assertThisInitialized(_this));
      }

      instances.push(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Artplayer, [{
      key: "proxy",
      get: function get() {
        return this.events.proxy;
      }
    }, {
      key: "query",
      get: function get() {
        return this.template.query;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var removeHtml = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.events.destroy();
        this.template.destroy(removeHtml);
        instances.splice(instances.indexOf(this), 1);
        this.isDestroy = true;
        this.emit('destroy');
      }
    }], [{
      key: "instances",
      get: function get() {
        return instances;
      }
    }, {
      key: "version",
      get: function get() {
        return '4.2.5';
      }
    }, {
      key: "env",
      get: function get() {
        return 'development';
      }
    }, {
      key: "build",
      get: function get() {
        return '1642482362039';
      }
    }, {
      key: "config",
      get: function get() {
        return config;
      }
    }, {
      key: "utils",
      get: function get() {
        return utils;
      }
    }, {
      key: "scheme",
      get: function get() {
        return scheme;
      }
    }, {
      key: "Emitter",
      get: function get() {
        return Emitter;
      }
    }, {
      key: "validator",
      get: function get() {
        return validator;
      }
    }, {
      key: "kindOf",
      get: function get() {
        return validator.kindOf;
      }
    }, {
      key: "html",
      get: function get() {
        return Template.html;
      }
    }, {
      key: "option",
      get: function get() {
        return {
          container: '#artplayer',
          url: '',
          poster: '',
          title: '',
          type: '',
          theme: '#f00',
          volume: 0.7,
          isLive: false,
          muted: false,
          autoplay: false,
          autoSize: false,
          autoMini: false,
          loop: false,
          flip: false,
          rotate: false,
          playbackRate: false,
          aspectRatio: false,
          screenshot: false,
          setting: false,
          hotkey: true,
          pip: false,
          mutex: true,
          backdrop: true,
          fullscreen: false,
          fullscreenWeb: false,
          subtitleOffset: false,
          miniProgressBar: false,
          localVideo: false,
          localSubtitle: false,
          useSSR: false,
          ads: [],
          layers: [],
          contextmenu: [],
          controls: [],
          settings: [],
          quality: [],
          highlight: [],
          plugins: [],
          whitelist: [],
          thumbnails: {
            url: '',
            number: 60,
            column: 10
          },
          subtitle: {
            url: '',
            type: '',
            style: {},
            encoding: 'utf-8',
            bilingual: false
          },
          moreVideoAttr: {
            controls: false,
            preload: isSafari ? 'auto' : 'metadata'
          },
          icons: {},
          customType: {},
          lang: navigator.language.toLowerCase()
        };
      }
    }]);

    return Artplayer;
  }(Emitter); // eslint-disable-next-line no-console
  console.log('%c ArtPlayer %c 4.2.5 %c https://artplayer.org', 'color: #fff; background: #5f5f5f', 'color: #fff; background: #4bc729', '');

  return Artplayer;

}));
//# sourceMappingURL=artplayer.js.map
