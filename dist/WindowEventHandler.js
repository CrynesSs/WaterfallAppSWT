"use strict";
exports.__esModule = true;
exports.WindowEventHandler = void 0;
var DOMContentLoadedHandler_1 = require("./WindowEventHandlers/DOMContentLoadedHandler");
var WindowEventHandler = /** @class */ (function () {
    function WindowEventHandler() {
        console.log('Hello from DomContentloaderHandler');
    }
    WindowEventHandler.init = function () {
        window.addEventListener('DOMContentLoaded', DOMContentLoadedHandler_1.DOMContentLoadedHandler);
    };
    return WindowEventHandler;
}());
exports.WindowEventHandler = WindowEventHandler;
//# sourceMappingURL=WindowEventHandler.js.map