/*--------------------------------------------------*\
    Core Module

    MK1 @ Version 1.0
\*--------------------------------------------------*/

import {S, SA, CN, ID, TN, extend} from './aliases';
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

    // Public: Destroy module instance
    const destroy = () => {

        Stickyfill && Stickyfill.removeAll();

        util.destroyStandaloneLinks();
    };

    // Public: Destroy module instance and run initialise again
    const reinit = () => {

        destroy();
        init();
    };

    // Public: Initialise module
    const init = (() => {
        
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


