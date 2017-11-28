/*--------------------------------------------------*\
	#CREATIVE LITTLE UI-KIT | NAV COMPONENT

	MK1 @ Version 1.0
\*--------------------------------------------------*/

const nav = ((options) => {

    // Default settings

    const defaults = {
        responsiveWidth: 1024,
        navClass: 'js-nav',
        triggerClass: 'js-nav-trigger',
        overlayClass: 'js-nav-overlay',
        activeClass: 'active',
        linkClass: 'nav__link',
        subNavClass: 'nav--sub',
        backClass: 'js-nav-back',
        beforeOpen: function() {
            console.log('I am about to open.');
        },
        afterOpen: function() {
            console.log('I have opened.');
        },
        beforeClose: function() {
            console.log('I am about to close.');
        },
        afterClose: function() {
            console.log('I have closed.');
        }
    };

    // Settings used including defaults & and user supplied options for config.

    const settings = {
        ...defaults,
        ...options
    };

    // Check if nav exists, if not, return.

    if( !document.getElementsByClassName(settings.navClass).length ) return;


    // Define elements from settings


    const elements = {
        nav: document.getElementsByClassName(settings.navClass)[0],
        trigger: document.getElementsByClassName(settings.triggerClass)[0],
        overlay: document.getElementsByClassName(settings.overlayClass)[0],
        links: Array.from(document.getElementsByClassName(settings.linkClass)),
        subNavs: Array.from(document.getElementsByClassName(settings.subNavClass)),
        backLinks: Array.from(document.getElementsByClassName(settings.backClass))
    };

    // Stores all nav links currently with hover state applied

    const hovers = elements.nav.getElementsByClassName(`${settings.linkClass} hover`);

    /////////////////////
    // PRIVATE METHODS //
    /////////////////////

    // Define Reponsive

    let responsive;

    // Check if responsive mode is on or off

    const isResponsive = () => {

        if ( document.documentElement.clientWidth > settings.responsiveWidth ) {

            responsive = false;

        } else {

            responsive = true;
        }
    };


    // Function to toggle hover class

    const hover = (link, event) => {

        event.preventDefault();

        const parentNav = link.closest('nav');

        // Checks if the clicked link is top level

        if ( ! parentNav.classList.contains('nav') ) {

            // You are not at top level

            const parentLink = link.closest(`.${settings.subNavClass}`).previousElementSibling;

            // Back link

            if ( link.classList.contains(settings.backClass) ) {

                parentLink.classList.remove('hover');
                UIKit.helper.nthParent(parentNav, 2).classList.remove('scroll-lock');
            }

        } else {

            // You are at top level, remove all other hovers before adding
            Array.from(hovers).map( (eachLink) => {

                eachLink.classList.remove('hover');
            });
        }

        // Add hover to clicked link & lock scroll for parent nav
        link.classList.toggle('hover');
        parentNav.closest('nav').classList.toggle('scroll-lock');

    };

    const unHover = (link, event) => {

        const parentNav = link.closest('nav');

        // Checks if the hovered link is top level

        if ( ! parentNav.classList.contains('nav') ) {

            // Add hover to clicked link & unlock scroll for parent nav
            link.classList.remove('hover');
            parentNav.classList.remove('scroll-lock');
        }
    };



    ////////////
    // EVENTS //
    ////////////

    const events = () => {

        // Window resized
        window.onresize = () => isResponsive();

        // Click navigation trigger
        if (elements.trigger) elements.trigger.addEventListener('click', toggle);

        // Click nav overlay
        if (elements.overlay) elements.overlay.addEventListener('click', toggle);

        // Nav link clicks / hovers
        if (elements.links) {

            elements.links.map( (link) => {

                // In responsive mode, rely on clicks
                if (responsive) {

                    link.addEventListener('click', hover.bind(null, link));
                }

                // Outside of responsive mode (a.k.a. on desktop) use hovers
                else {

                    link.addEventListener('mouseleave', unHover.bind(null, link));
                    link.addEventListener('mouseenter', hover.bind(null, link));
                }
            });
        }

        // Nav back link clicked
        if (elements.backLinks) {

            elements.backLinks.map( (link) => {

                link.addEventListener('click', hover.bind(null, link));
            });
        }
    };



    ////////////////////
    // PUBLIC METHODS //
    ////////////////////

    const open = () => {

        settings.beforeOpen(); // Before open callback.

        elements.nav.classList.add(settings.activeClass);

        if( elements.overlay ) { elements.overlay.classList.add(settings.activeClass); }

        settings.afterOpen(); // After open callback.
    };

    const close = () => {

        settings.beforeClose(); // Before close callback.

        elements.nav.classList.remove(settings.activeClass);

        if( elements.overlay ) {

            elements.overlay.classList.remove(settings.activeClass);
        }

        // Reset all .hovers from menu on close
        setTimeout(function() {

            Array.from(hovers).map( (eachLink) => {

                eachLink.classList.remove('hover');
            });

        }, 250);

        settings.afterClose(); // After close callback.
    };

    const toggle = () => {

        elements.nav.classList.contains('active') ? close() : open();
    };

    const destroy = () => {

        console.log('destroy');
    };

    const reinit = () => {

        console.log('reinit');
    };

    const init = () => {

        console.log('init');

        isResponsive();

        events();
    };


    // Make public methods available elsewhere

    return {
        open: open,
        close: close,
        toggle: toggle,
        destroy: destroy,
        reinit: reinit,
        init: init() // Run init immediately
    };
})();


