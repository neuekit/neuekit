/*--------------------------------------------------*\
	#PROJECT | JS SETTINGS
	
	This script contains all the reusable data such
	as urls, error messages, html created by JS &
	repeated values & values that may change later.
	
	To start our script we wrap all of our code in a
	self-executing anonymous function. We then pass
	in 3 arguments to setup jQuery & our namespace.
	
	1. PROJECT is our namespace.
	2. $ is defined for jQuery.
	3. Lastly we ensure undefined really is undefined.
\*--------------------------------------------------*/

(function(PROJECT, $, undefined) {
    
    /* This is our global configuration. It will work across your js files */
    
    PROJECT.settings = {
        debug: true,
        speed: 250
    };
    
    
    
/* Lastly this checks if the namespace already exists & if not will assign it */

}(window.PROJECT = window.PROJECT || {}, jQuery));


