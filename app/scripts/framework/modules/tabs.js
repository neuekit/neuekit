// Module instantiation
const Tabs = ((options) => {
console.log('h');
    // Default settings object
    const defaults = {
        animate: true,
        before: null,
        after: null
    };

    // Merge passed in object with defaults
    const settings = {
        ...defaults,
        ...options
    };

    // Private setup method not returned
    const setup = () => {
console.log('h');
        // Get all tab elements
        const $tabs = document.getElementsByClassName('js-tab');

        // Add click events to each tab
        [...$tabs].map(($tab) => $tab.addEventListener('click', goto));
    };

    // Public go to method returned
    const goto = function(tab) {

        // Define custom events
        const before = new CustomEvent('tab:before');
        const after = new CustomEvent('tab:after');

        // Store tab elements for later use
        const $tab = this;
        const $tabs = $tab.closest('.js-tabs').getElementsByClassName('js-tab');

        // Store tab content elements for later use
        const $content = document.getElementById(tab.target.hash.substring(1));
        const $contents = $content.closest('.js-tabs-contents').getElementsByClassName('js-tab-content');

        // Check for before callback and run
        typeof settings.before == 'function' && settings.before.call(this);

        // Dispatch the before event
        document.dispatchEvent(before);

        // Remove all active states from
        [...$tabs, ...$contents].map(($el) => $el.classList.remove('active'));

        // Add active class to selected tab and tab content
        $tab.classList.add('active');
        $content.classList.add('active');

        // Check for after callback and run
        typeof settings.after == 'function' && settings.after.call(this);

        // Dispatch the after event
        document.dispatchEvent(after);
    };

    // Initialise public method immediately invoked in return
    const init = () => {
        setup();
    };

    // Return Object Which Makes Methods Available Publicly
    return {
        goto: goto,
        init: init()
    };
})();


