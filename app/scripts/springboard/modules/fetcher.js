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

        // Popstate event listener
        window.on('popstate', _before);
        //this thing runs all the time and blocks modals
    };

    const _before = function(e) {

        e.preventDefault();

        const url = e.target.href || location.href;

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
            .then(_inject)
            .then(() => _after(url))
            .catch((error) => console.error(error));
    }

    const _inject = (html) => {

        const nodes = new DOMParser().parseFromString(html, 'text/html');
        const body = nodes.querySelector('body');

        [...SA(_settings.excludes)].map($link => $link.off('click', _before));

        document.documentElement.removeChild(document.body);
        document.documentElement.appendChild(body);

        document.title = nodes.title;
    };

    const _after = function(url) {

        if ( location.href !== url ) {

            history.pushState({}, '', url);
        }

        _setListeners();

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

        [...SA(_settings.excludes)].map($link => $link.off('click', _before));
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


