/*--------------------------------------------------*\
    Core Module

    MK1 @ Version 1.0
\*--------------------------------------------------*/

import {S, SA, CN, ID, TN, on, off} from './aliases';
import * as util from './utilities';

export default function(options) {

    // Private: Default settings object
    const _defaults = {

    };

    // Private: Merge passed in object with defaults
    const _settings = {
        ..._defaults,
        ...options
    };

    const _extendPrototypes = () => {

        Window.prototype.on = Window.prototype.addEventListener;
        Window.prototype.off = Window.prototype.removeEventListener;

        Node.prototype.on = Node.prototype.addEventListener;
        Node.prototype.off = Node.prototype.removeEventListener;
    };

    // Public: Destroy module instance
    const destroy = () => {


    };

    // Public: Destroy module instance and run initialise again
    const reinit = () => {

        destroy();
        init();
    };

    // Public: Initialise module
    const init = (() => {

        _extendPrototypes();

        util.setDocClasses();
        util.setInputTypes();
        util.sticky();
        util.standaloneLinks();
        svg4everybody();
    })();

    // Return public methods
    return {
        destroy,
        reinit,
        init
    };
}


