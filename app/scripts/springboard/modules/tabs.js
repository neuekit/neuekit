/*--------------------------------------------------*\
    Tabs Module

    MK1 @ Version 1.0
\*--------------------------------------------------*/

import {S, SA, CN, ID, TN, extend} from './aliases';

// Module instantiation
export default function(options) {

    // Private: Default settings object
    const _defaults = {
        animate: true,
        before: null,
        after: null
    };

    // Private: Merge passed in object with defaults
    const _settings = {
        ..._defaults,
        ...options
    };

    // Private: Click event callback for goto method
    const _clickGoto = function(event) {

        event.preventDefault();

        goto(event.target.hash.substring(1));
    };

    // Public:  Go to method
    const goto = (id, push) => {

        // Store elements for later use
        const $this = id ? S(`[href="#${id}"]`) : this;
        const $tabs = $this.closest('.js-tabs').getElementsByClassName('js-tab');

        // Store target elements for later use
        const $content = ID(id);
        const $contents = $content.closest('.js-tabs-contents').getElementsByClassName('js-tab-content');

        // Pass data to events
        const data = {
            detail: {
                tab: $this,
                tabs: $tabs,
                content: $content,
                contents: $contents
            }
        };

        // Define custom events
        const before = new CustomEvent('tab:before', data);
        const after = new CustomEvent('tab:after', data);

        // Check for before callback and run
        typeof _settings.before == 'function' && _settings.before.call(this);

        // Dispatch the before event
        document.dispatchEvent(before);

        // Remove all active states from
        [...$tabs, ...$contents].map(($el) => $el.classList.remove('active'));

        // Add classes
        $this.classList.add('active');
        $content.classList.add('active');

        //Update history states
        !push && history.pushState({}, '', `#${id}`);

        // Check for after callback and run
        typeof _settings.after == 'function' && _settings.after.call(this);

        // Dispatch the after event
        document.dispatchEvent(after);
    };

    // Private: Deep Link
    const _deeplink = () => {

        const hash = location.hash.substring(1);
        const $el = ID(hash);

        if ( $el && $el.classList.contains('js-tab-content') ) {

            goto(hash, true);
        }
    };

    // Public: Destroy module instance
    const destroy = () => {

        // Get all elements
        const $tabs = CN('js-tab');

        // Add click events to each link
        [...$tabs].map(($el) => $el.removeEventListener('click', _clickGoto));
    };

    // Public: Destroy module instance and run initialise again
    const reinit = () => {

        destroy();
        init();
    };

    // Public: Initialise module
    function init() {

        // Get data
        const $tabs = CN('js-tab');

        // Add click events to each link
        [...$tabs].map(($el) => $el.on('click', _clickGoto));

        _deeplink();

        document.on('fetcher:after', reinit);
    }

    // Return public methods
    return {
        goto,
        destroy,
        reinit,
        init : init()
    };
}


