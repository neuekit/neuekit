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

export const wait = () => {

    let timer = 0;

    return function(callback, ms){

        clearTimeout (timer);

        timer = setTimeout(callback, ms);
    };
};



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
    Cookie Management

    Functions to get, set & remove cookies
\*--------------------------------------------------*/

export const setCookie = (name, value, days) => {

    let expires = '';

    if (days) {

        const date = new Date();

        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

        expires = `; expires=${date.toGMTString()}`;
    }

    document.cookie = `${name}=${value}${expires}; path=/`;
};

export const getCookie = (name) => {

    name = name + "=";
    let cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i += 1) {

        let cookie = cookies[i];

        while (cookie.charAt(0) === ' ') {

            cookie = cookie.substring(1, cookie.length);
        }

        if (cookie.indexOf(name) === 0) {

            return cookie.substring(name.length, cookie.length);
        }
    }

    return null;
};

export const removeCookie = (name) => {

    setCookie(name, '', -1);
};



/*--------------------------------------------------*\
    Local Storage Management

    Functions to get, set & remove local storage data
\*--------------------------------------------------*/

export const setStorage = function(name, value) {

    if (typeof window.localStorage !== 'undefined') {

        localStorage.setItem(name, value);
    }

    else {

        setCookie(name, value);
    }
};

export const getStorage = (name, checkCookie) => {

    let value = '';

    if (typeof window.localStorage !== 'undefined') {

        value = localStorage.getItem(name);
    }

    else {

        value = getCookie(name);
    }

    if (checkCookie === true) {

        value = getCookie(name);
    }

    return value;
};

export const removeStorage = (name, checkCookie) => {

    if (typeof window.localStorage !== 'undefined') {

        localStorage.removeItem(name);
    }

    else {

        removeCookie(name);
    }

    checkCookie === true && removeCookie(name);
};



/*--------------------------------------------------*\
    Sticky Position Polyfill Setup

    This function sets the real type on inputs.
\*--------------------------------------------------*/

export const sticky = () => {

    [...document.getElementsByClassName('u-sticky')].map(($el) => {

        Stickyfill.add($el);
    })
};



/*--------------------------------------------------*\
    Support for standalone links

    This stops webapps jumping out to Safari on iOS
\*--------------------------------------------------*/

export const standaloneLinks = () => {

    if ( ('standalone' in navigator) && navigator['standalone'] ) {

        const $els = document.getElementsByClassName('js-history');

        [...$els].map(($el) => {

            $el.addEventListener('click', function(e) {

                e.preventDefault();

                if ( $el.dataset.history === ('reload' || 'refresh') ) {

                    location.reload();
                }

                else {

                    history[$el.dataset.history]();
                }
            });
        });

        document.addEventListener('click', function(e) {

            let target = e.target;
            let location = document.location;
            let stop = /^(a|html)$/i;

            while (!(stop).test(target.nodeName)) {

                target = target.parentNode;
            }

            if (
                'href' in target
                &&
                (href = target.href).replace(location.href, '').indexOf('#')
                &&
                (
                    !(/^[a-z\+\.\-]+:/i).test(href)
                    ||
                    href.indexOf(location.protocol + '//' + location.host) === 0
                )
            ) {

                e.preventDefault();

                location.href = target.href;
            }
        }, false);
    }
};


