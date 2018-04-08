/*--------------------------------------------------*\
    Modal Module

    MK1 @ Version 1.0
\*--------------------------------------------------*/

import {S, SA, CN, ID, TN, extend} from './aliases';

// Module instantiation
export default function(options) {

    // Private: Default settings object
    const _defaults = {
        beforeOpen: null,
        afterOpen: null,
        beforeClose: null,
        afterClose: null
    };

    // Private: Merge passed in object with defaults
    const _settings = {
        ..._defaults,
        ...options
    };

    // Private: Get elements
    const _getEls = {
        open: CN('js-modal__open'),
        close: CN('js-modal__close'),
        modal: CN('c-modal')
    };

    // Private: Click event callback for open method
    const _clickOpen = function(event) {

        event.preventDefault();

        open(event.target.hash.substring(1));
    }

    // Private: Click event callback for close method
    const _clickClose = function(event) {

        event.preventDefault();

        close(event.target.closest('.c-modal').id);
    };

    // Private: Click modal background event callback for close method
    const _clickOverlay = function(event) {

        if ( this.classList.contains('c-modal') && event.target === this ) {

            event.preventDefault();

            close(this.closest('.c-modal').id);
        }
    };

    const _escape = function(event) {

        const activeModals = SA('.c-modal.active');

        if( event.key == 'Escape' && activeModals.length ) {

            const topModal = activeModals.length - 1;

            close(activeModals[topModal].id)
        }
    };

    const _deeplink = () => {

        const hash = location.hash.substring(1);
        const $el = ID(hash);

        if ( $el && $el.classList.contains('c-modal') ) {

            open(hash, true);
        }
    }

    // Public: Open method
    const open = (id, push) => {

        // Store target elements for later use
        const $modal = ID(id);

        // Pass data to events
        const data = {
            detail: {
                id: id,
                modal: $modal
            }
        };

        // Define custom events
        const before = new CustomEvent('modal.open:before', data);
        const after = new CustomEvent('modal.open:after', data);

        // Check for before callback and run
        typeof _settings.beforeOpen == 'function' && _settings.beforeOpen.call(this);

        // Dispatch the before event
        document.dispatchEvent(before);

        // Add classes
        $modal.classList.add('active');
        document.body.classList.add('u-locked');

        //Update history states
        !push && history.pushState({}, '', `#${id}`);

        // Check for after callback and run
        typeof _settings.afterOpen == 'function' && _settings.afterOpen.call(this);

        // Dispatch the after event
        document.dispatchEvent(after);
    };

    // Public: close method
    const close = (id) => {

        // Pass data to events
        const data = {
            detail: {
                id: id
            }
        };

        // Define custom events
        const before = new CustomEvent('modal.close:before', data);
        const after = new CustomEvent('modal.close:after', data);

        // Check for before callback and run
        typeof _settings.beforeClose == 'function' && _settings.beforeClose.call(this);

        // Dispatch the before event
        document.dispatchEvent(before);

        if ( SA('.c-modal.active').length === 1 ) {

            document.body.classList.remove('u-locked');
        }

        if ( id ) {

            ID(id).closest('.c-modal').classList.remove('active');
        }

        else {

            [...SA('.c-modal')].map(($el) => $el.classList.remove('active'));
        }

        //history.pushState({}, '', location.origin + location.pathname);

        // Check for after callback and run
        typeof _settings.afterClose == 'function' && _settings.afterClose.call(this);

        // Dispatch the after event
        document.dispatchEvent(after);
    };

    // Public: Destroy module instance
    const destroy = () => {

        close();

        // Remove click events to each link
        [..._getEls.open].map(($link) => $link.off('click', _clickOpen));
        [..._getEls.close].map(($link) => $link.off('click', _clickClose));
        [..._getEls.modal].map(($link) => $link.off('click', _clickOverlay));

        // Remove escape key event listener
        window.off('keydown', _escape);

        document.off('fetcher:after', reinit);
    };

    // Public: Destroy module instance and run initialise again
    const reinit = () => {

        destroy();
        init();
    };

    // Public: Initialise module
    function init() {

        // Get data
        const hash = location.hash.substring(1);
        const $el = ID(hash);

        // Run check and open modal if successful
        if ( $el && $el.classList.contains('c-modal') ) {

            open(hash);
        }

        // Add click events to each link
        [..._getEls.open].map(($link) => $link.on('click', _clickOpen));
        [..._getEls.close].map(($link) => $link.on('click', _clickClose));
        [..._getEls.modal].map(($link) => $link.on('click', _clickOverlay));

        // Escape key event listener
        window.on('keydown', _escape);

        document.on('fetcher:after', reinit);
    }

    // Return public methods
    return {
        open,
        close,
        destroy,
        reinit,
        init : init()
    };
}


