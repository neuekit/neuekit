/*--------------------------------------------------*\
    #CREATIVE LITTLE UI-KIT | JS HELPERS

    This script contains all the helper/utility
    functions which we can use across our other
    JS files.

    MK1 @ Version 1.0
\*--------------------------------------------------*/

/*  'use strict' enforces correct syntax.  */

'use strict';


/*  Declare IIFE & Namespace  */

((UIKit, $) => {

    /*--------------------------------------------------*\
        #UIKit HELPER METHOD

        This is a 'singleton' which isolates the code
        inside from the global namespace, providing
        a single point of access for functions.
    \*--------------------------------------------------*/

    UIKit.helper = (() => {

        function Helper() {

            const _this = this;

            /*--------------------------------------------------*\
                #GET DOMAIN

                This fetches the url including protocol and port
            \*--------------------------------------------------*/

            _this.getUrl = () => {

                const port = location.port && `:${location.port}`;

                const url = `${location.protocol}//${location.hostname}${port}/`;

                return url;
            };



            /*--------------------------------------------------*\
                #GET QUERY STRING FROM THE URL

                This function accepts 2 arguments:
                1. The key of the query property.
                2. The default value thats returned if they is no
                   value or key does not exist.
            \*--------------------------------------------------*/

            _this.getUrlQuery = (key, default_ = '') => {

                key = key.replace(/\[/,'\\[').replace(/\]/,'\\]');

                const regex = new RegExp(`[\\?&]${key}=([^&#]*)`);

                const qs = regex.exec(location.href);

                return qs === null ? default_ : qs[1];
            };



            /*--------------------------------------------------*\
                #WAIT FUNCTION FOR USE WITH KEY EVENTS

                This function accepts 2 arguments:
                1. A callback function.
                2. A time in milliseconds.
            \*--------------------------------------------------*/

            _this.wait = (() => {

                let timer = 0;

                return function(callback, ms){

                    clearTimeout (timer);

                    timer = setTimeout(callback, ms);

                };

            })();



            /*--------------------------------------------------*\
                #DOCUMENT CLASSES

                This sets the classes on the HTML element.
            \*--------------------------------------------------*/

            _this.setDocClasses = () => {

                $('html').toggleClass('no-js js');

                if ( window.navigator.standalone == true || window.matchMedia('(display-mode: standalone)').matches ) {
                    $('html').addClass('standalone');
                }

            };



            /*--------------------------------------------------*\
                #INPUT TYPE DETECTION

                This function sets the real type on inputs.
            \*--------------------------------------------------*/

            _this.setInputTypes = () => {

                $('input').each(function() {

                    if(this.type !== $(this).attr('type')) {

                        $(this).attr('type', this.type);
                    }
                });
            };



            /*--------------------------------------------------*\
                #INPUT TYPE DETECTION

                This function sets the real type on inputs.
            \*--------------------------------------------------*/

            _this.sticky = () => {

                const elems = document.getElementsByClassName('sticky');

                for ( let i = elems.length - 1; i >= 0; i-- ) {

                    Stickyfill.add(elems[i]);
                }
            };



            /*--------------------------------------------------*\
                #INITIALISATION

                This function calls methods on init.
            \*--------------------------------------------------*/

            _this.init = () => {

                this.setDocClasses();

                this.setInputTypes();

                this.sticky();

                svg4everybody();

                /*  'this' refers to UIKit.helper & allows chaining  */

                return this;
            };



            /*  This refers to UIKit.helper.init()  */

            return _this.init();

        }

        /*  creating a new object of helper rather than a function */

        return new Helper();

    })();


/* Checks if the namespace already exists & if not assign it */

})(window.UIKit = window.UIKit || {}, window.jQuery = window.jQuery || window.$);


