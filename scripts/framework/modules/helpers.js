/*--------------------------------------------------*\
	#CREATIVE LITTLE UI-KIT | JS HELPERS
	
	This script contains all the helper/utility
	functions which we can use across our other
	JS files.
	
	MK1 @ Version 1.0
\*--------------------------------------------------*/

(function(UIKIT, $, undefined) {
    
    /*  'use strict' enforces correct syntax.  */
    
    'use strict';
    
    
    /*--------------------------------------------------*\
    	#UIKIT HELPER METHOD
    	
    	This is a 'singleton' which isolates the code
    	inside from the global namespace, providing
    	a single point of access for functions.
    \*--------------------------------------------------*/
    
    UIKIT.helper = (function() {
        
        function Helper() {

            /*  Variablise 'this' to limit it to avoid scope conflicts  */

            var _this = this,


            /*--------------------------------------------------*\
            	#SET COOKIE
            	
            	This function accepts 3 arguments:
                1. The name of the cookie.
                2. The value you want to assign to the cookie.
                   Can be a string, integer, booleon, etc.
                3. The number of days until the cookie expires.
            \*--------------------------------------------------*/
            
            setCookie = function(name, value, days) {
                
                var date = '',
                    expires = '';

                if (days) {
                    
                    date = new Date();
                    
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    
                    expires = '; expires=' + date.toGMTString();
                    
                }

                document.cookie = name + '=' + value + expires + '; path=/';
                
            },



            /*--------------------------------------------------*\
            	#GET COOKIE
            	
            	This function accepts 1 argument:
                1. The name of the cookie.
            \*--------------------------------------------------*/
            
            getCookie = function(name) {
                
                var nameEQ = name + '=',
                    cookies = document.cookie.split(';');
                    
                for (var i = 0; i < cookies.length; i += 1) {
                    
                    var cookie = cookies[i];
                    
                    while (cookie.charAt(0) === ' ') {
                        
                        cookie = cookie.substring(1, cookie.length);
                        
                    }
                    
                    if ( cookie.indexOf(nameEQ) === 0 ) {
                        
                        return cookie.substring(nameEQ.length, cookie.length);
                        
                    }
                }
                
                return null;
                
            },
            


            /*--------------------------------------------------*\
            	#REMOVE COOKIE
            	
            	This function accepts 1 argument:
                1. The name of the cookie.
            \*--------------------------------------------------*/
            
            removeCookie = function(name) {
                
                setCookie(name, '', -1);
                
            };

            
            
            /*--------------------------------------------------*\
            	#SET LOCAL STORAGE PROPERTY
            	
            	This function accepts 2 arguments:
                1. The name of the localStorage property.
                2. The value you want to assign to the property.
                   Can be a string, integer, booleon, etc.
            \*--------------------------------------------------*/
            
            _this.setInfo = function(name, value) {
                
                if ( typeof window.localStorage !== 'undefined' ) {
                    
                    localStorage.setItem(name, value);
                    
                } else {
                    
                    setCookie(name, value);
                    
                }
                
            };
            
            
            
            /*--------------------------------------------------*\
            	#GET LOCAL STORAGE PROPERTY
            	
            	This function accepts 2 arguments:
                1. The name of the localStorage property.
                2. A booleon value to check for & get the cookie
                   even if localStorage is supported.
            \*--------------------------------------------------*/
            
            _this.getInfo = function(name, checkCookie) {
                
                var value = '';
                
                if ( typeof window.localStorage !== 'undefined' ) {
                    
                    value = localStorage.getItem(name);
                    
                } else {
                    
                    value = getCookie(name);
                    
                }

                if (checkCookie === true) {
                    
                    value = getCookie(name);
                    
                }
                
                return value;
                
            };
            
            
            
            /*--------------------------------------------------*\
            	#REMOVE LOCAL STORAGE PROPERTY
            	
            	This function accepts 2 arguments:
                1. The name of the localStorage property.
                2. A booleon value to check for & remove the
                   cookie even if localStorage is supported.
            \*--------------------------------------------------*/
            
            _this.removeInfo = function(name, checkCookie) {
                
                if ( typeof window.localStorage !== 'undefined' ) {
                    
                    localStorage.removeItem(name);
                    
                } else {
                    
                    removeCookie(name);
                    
                }
                
                if (checkCookie === true) {
                    
                    removeCookie(name);
                    
                }
                
            };
            
            
            
            /*--------------------------------------------------*\
            	#GET SITE DOMAIN
            	
            	This function accepts 2 arguments:
                1. The name of the localStorage property.
                2. A booleon value to check for & remove the
                   cookie even if localStorage is supported.
            \*--------------------------------------------------*/
            
            _this.getDomain = function() {
                
                var port = '',
                    url = '';

                if ( window.location.port ) {
                    
                    port = ':' + window.location.port;
                    
                }
                
                url = window.location.protocol + '//' + window.location.hostname + port + '/';
                
                return url;
                
            };
            
            
            
            /*--------------------------------------------------*\
            	#GET QUERY STRING FROM THE URL
            	
            	This function accepts 2 arguments:
                1. The key of the query property.
                2. The default value thats returned if they is no
                   value or key does not exist.
            \*--------------------------------------------------*/
            
            _this.getQueryString = function(key, default_) {
                
                if ( default_ === null ) {
                    
                    default_ = '';
                    
                }

                key = key.replace(/\[/,'\\[').replace(/\]/,'\\]');
                
                var regex = new RegExp('[\\?&]' + key + '=([^&#]*)'),
                    qs = regex.exec(window.location.href);

                if ( qs === null ) {
                    
                    return default_;
                    
                } else {
                    
                    return qs[1];
                    
                }
                
            };            
            
            
            
            /*--------------------------------------------------*\
            	#WAIT FUNCTION FOR USE WITH KEY EVENTS
            	
            	This function accepts 2 arguments:
                1. A callback function.
                2. A time in milliseconds.
            \*--------------------------------------------------*/
            
            _this.wait = (function(){
        
                var timer = 0;
                
                return function(callback, ms){
                    
                    clearTimeout (timer);
                    
                    timer = setTimeout(callback, ms);
                    
                };

            })();
            
            
            
            /*--------------------------------------------------*\
            	#FOREACH FUNCTION
            	
            	This function accepts 3 arguments:
                1. An node list.
                2. A callback function.
                3. A scope to limit to.
            \*--------------------------------------------------*/
            
            _this.forEach = function (array, callback, scope) {
                
                for (var i = 0; i < array.length; i++) {
                    
                    callback.call(scope, i, array[i]);
                    
                }
                
            };
            
            
            
            /*--------------------------------------------------*\
            	#DOCUMENT CLASSES
            	
            	This sets the classes on the HTML element.
            \*--------------------------------------------------*/
            
            _this.setDocClasses = function() {
                
                document.documentElement.classList.remove('no-js');
                
                document.documentElement.classList.add('js');
                
            };
            
            
            
            /*--------------------------------------------------*\
            	#INPUT TYPE DETECTION
            	
            	This function sets the real type on inputs.
            \*--------------------------------------------------*/
            
            _this.setInputTypes = function() {
            
                var inputs = document.querySelectorAll('input');
        
                _this.forEach(inputs, function(i, el) {
                    
                    if(el.type !== el.getAttribute('type')) {
                    
                        el.dataset.type = el.type;
                    }
                    
                });
            
            };
            
            
            
            /*  Allow "chaining" of methods together  */

            _this.init = function() {
                
                _this.getDomain();
                
                _this.setDocClasses();
                
                _this.setInputTypes();
                
                /*  'this' refers to UIKIT.helper  */
                
                return this;
                
            };
            
            
            /*  This refers to UIKIT.helper.init()  */
            
            return _this.init();
            
        }
        
        
        /*  creating a new object of helper rather than a funtion */
        
        return new Helper();
        
    }());


/* Lastly this checks if the namespace already exists & if not will assign it */

}(window.UIKIT = window.UIKIT || {}));


