/*--------------------------------------------------*\
    Utilites Module

    MK1 @ Version 1.0
\*--------------------------------------------------*/


/*--------------------------------------------------*\
    Get Domain

    This fetches the url including protocol and port
\*--------------------------------------------------*/

export const getUrl = () => {

    const port = location.port && `:${location.port}`;

    const url = `${location.protocol}//${location.hostname}${port}/`;

    return url;
};



/*--------------------------------------------------*\
    Get URL Query String

    This function accepts 2 arguments:
    1. The key of the query property.
    2. The default value thats returned if they is no
       value or key does not exist.
\*--------------------------------------------------*/

export const getUrlQuery = (key, default_ = '') => {

    key = key.replace(/\[/,'\\[').replace(/\]/,'\\]');

    const regex = new RegExp(`[\\?&]${key}=([^&#]*)`);

    const qs = regex.exec(location.href);

    return qs === null ? default_ : qs[1];
};



/*--------------------------------------------------*\
    Key Events Wait Function

    This function accepts 2 arguments:
    1. A callback function.
    2. A time in milliseconds.
\*--------------------------------------------------*/

export const wait = (() => {

    let timer = 0;

    return function(callback, ms){

        clearTimeout (timer);

        timer = setTimeout(callback, ms);
    };
})();



/*--------------------------------------------------*\
    JS Document Classes

    This sets the classes on the HTML element.
\*--------------------------------------------------*/

export const setDocClasses = () => {

    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');

    if ( window.navigator.standalone == true || window.matchMedia('(display-mode: standalone)').matches ) {
        document.documentElement.classList.add('standalone');
    }
};



/*--------------------------------------------------*\
    Input Type Detection

    This function sets the real type on inputs.
\*--------------------------------------------------*/

export const setInputTypes = () => {

    [...document.getElementsByTagName('input')].map(($el) => {

        if ( $el.type !== $el.getAttribute('type') ) {

            $el.setAttribute('type', $el.type);
        }
    });
};



/*--------------------------------------------------*\
    Sticky Position Polyfill Setup

    This function sets the real type on inputs.
\*--------------------------------------------------*/

export const sticky = () => {

    [...document.getElementsByClassName('sticky')].map(($el) => {

        Stickyfill.add($el);
    })
};


