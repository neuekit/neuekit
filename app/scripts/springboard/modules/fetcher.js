/*--------------------------------------------------*\
    Fetcher Module

    MK1 @ Version 1.0
\*--------------------------------------------------*/

import {S, SA, CN, ID, TN, extend} from './aliases';

export default function(options) {

    // Private: Default settings object
    const _defaults = {
        excludes: 'a:not([href=""],[href^="#"],[href*="wp-"],[class*="js-"])',
        before: null,
        after: null
    };

    // Private: Merge passed in object with defaults
    const _settings = {
        ..._defaults,
        ...options
    };

    const _setListeners = () => {

        [...SA(_settings.excludes)].map($link => $link.on('click', _before));
    };

    const _before = function(e) {

        e.preventDefault();

        const url = e.target.href;

        // Pass data to events
        const data = {
            detail: e
        };

        // Define custom events
        const before = new CustomEvent('fetcher:before', data);

        // Check for before callback and run
        if ( typeof _settings.before == 'function' ) {

            _settings.before
                .call(this)
                .then(_fetch(url));
        }

        else {

            _fetch(url)
        }

        // Dispatch the before event
        document.dispatchEvent(before);
    };

    const _fetch = (url) => {

        fetch(url)
            .then(response => response.text())
            .then(_inject);
    }

    const _inject = (html) => {

        const nodes = new DOMParser().parseFromString(html, 'text/html');
        const body = nodes.querySelector('body');

        document.documentElement.removeChild(document.body);
        document.documentElement.appendChild(body);

        _after();
    };

    const _after = function() {

        // Pass data to events
        const data = {
            detail: {

            }
        };

        // Define custom events
        const after = new CustomEvent('fetcher:after', data);

        // Check for before callback and run
        typeof _settings.after == 'function' && _settings.after.call(this);

        // Dispatch the before event
        document.dispatchEvent(after);
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

        _setListeners();
    })();

    // Return public methods
    return {
        destroy,
        reinit,
        init
    };
}


