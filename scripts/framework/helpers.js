/*--------------------------------------------------*\
	#CREATIVE LITTLE UI-KIT | JS HELPERS
	
	This script contains all the helper/utility
	functions which we can use across our other
	JS files.
	
	To start our script we wrap all of our code in a
	self-executing anonymous function. We then pass
	in 3 arguments to setup jQuery & our namespace.
	
	1. UIKIT is our namespace.
	2. $ is defined for jQuery.
	3. Lastly we ensure undefined really is undefined.
\*--------------------------------------------------*/

(function(UIKIT, $, undefined) {
    
    /*  'use strict' enforces correct syntax.  */
    
    'use strict';
    
    
    
    /*--------------------------------------------------*\
    	#GLOBAL LOG FUNCTION
    \*--------------------------------------------------*/
    
    $.log = function(message) {
        
        if ( UIKIT.settings.debug ) {
            
            console.log(message);
            
        }
    };



    /*--------------------------------------------------*\
    	#GLOBAL BETTER TYPE CHECKER FUNCTION
    	
    	See why its better here: http://goo.gl/GtvsU
    \*--------------------------------------------------*/
    
    $.toType = (function toType(global) {
        
        return function(obj) {
            
            if ( obj === global ) {
                
                return 'global';
                
            }
            
            return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
            
        };
        
    }(this));
    
    
    
    /*--------------------------------------------------*\
    	#UIKIT HELPER METHOD
    	
    	This is a 'singleton' which isolates the code
    	inside from the global namespace, providing
    	a single point of access for functions.
    \*--------------------------------------------------*/
    
    UIKIT.helper = (function() {
        
        function _helper() {

            /*  Variablise 'this' to limit it to avoid scope conflicts  */
            /* jshint validthis: true */
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
                
                var date = "",
                    expires = "";

                if (days) {
                    
                    date = new Date();
                    
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    
                    expires = "; expires=" + date.toGMTString();
                    
                }

                document.cookie = name + "=" + value + expires + "; path=/";
            },


            /*--------------------------------------------------*\
            	#GET COOKIE
            	
            	This function accepts 1 argument:
                1. The name of the cookie.
            \*--------------------------------------------------*/
            
            getCookie = function(name) {
                
                var nameEQ = name + "=",
                    i,
                    ca = document.cookie.split(';');
                    
                for (i = 0; i < ca.length; i += 1) {
                    
                    var c = ca[i];
                    
                    while (c.charAt(0) === ' ') {
                        
                        c = c.substring(1, c.length);
                        
                    }
                    
                    if ( c.indexOf(nameEQ) === 0 ) {
                        
                        return c.substring(nameEQ.length, c.length);
                        
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
                
                setCookie(name, "", -1);
                
            };

            
            /*--------------------------------------------------*\
            	#SET LOCAL STORAGE PROPERTY
            	
            	This function accepts 2 arguments:
                1. The name of the localStorage property.
                2. The value you want to assign to the property.
                   Can be a string, integer, booleon, etc.
            \*--------------------------------------------------*/
            
            this.setInfo = function(name, value) {
                
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
            
            this.getInfo = function(name, checkCookie) {
                
                var value = "";
                
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
            
            this.removeInfo = function(name, checkCookie) {
                
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
            
            this.getDomain = function() {
                
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
            
            this.getQueryString = function(key, default_) {
                
                if ( default_ === null ) {
                    
                    default_ = "";
                    
                }

                key = key.replace(/\[/,"\\[").replace(/\]/,"\\]");
                
                var regex = new RegExp("[\\?&]" + key + "=([^&#]*)"),
                    qs = regex.exec(window.location.href);

                if ( qs === null ) {
                    
                    return default_;
                    
                } else {
                    
                    return qs[1];
                    
                }
            };            
            
            
            /*--------------------------------------------------*\
            	#WAIT FUNCTION FOR USE WITH KEY EVENTS
            	
            	This function accepts callback & a time in ms.
            \*--------------------------------------------------*/
            
            this.wait = (function(){
        
                var timer = 0;
                
                return function(callback, ms){
                    
                    clearTimeout (timer);
                    
                    timer = setTimeout(callback, ms);
                    
                };
                
            })();
            
            
            /*  Allow "chaining" of methods together  */

            this.init = function() {
                
                _this.getDomain();
                
                
                /*  'this' refers to UIKIT.helper  */
                
                return this;
            };
            
            
            /*  This refers to UIKIT.helper.init()  */
            
            return this.init();
        }
        
        
        /*  creating a new object of helper rather than a funtion */
        
        return new _helper();
        
    }());


/* Lastly this checks if the namespace already exists & if not will assign it */

}(window.UIKIT = window.UIKIT || {}, jQuery));


