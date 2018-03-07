/*--------------------------------------------------*\
    Toggler Module

    MK1 @ Version 1.0
\*--------------------------------------------------*/

import {S, SA, CN, ID, TN} from './aliases';

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


    };

    // Public: Destroy module instance and run initialise again
    const reinit = () => {

        destroy();
        init();
    };

    // Public: Initialise module
    const init = (() => {

        const $els = CN('js-toggler');

        [...$els].map(($el) => {

            $el.addEventListener('click', (e) => {

                e.preventDefault();

                const $targets = SA($el.dataset.toggleTarget);

                [...$targets].map(($target) => {

                    $target.classList.toggle($el.dataset.toggleClass);
                });
            });
        });
    })();

    // Return public methods
    return {
        destroy,
        reinit,
        init
    };
}


