// @codekit-prepend "settings.js";
// @codekit-prepend "modules/helpers.js";

/*--------------------------------------------------*\
	#PROJECT NAME | JS MAIN COMPONENTS
	
	This script contains your standard jQuery shiz,
	functions, ui components & any other js magic.
	
	To start our script we wrap all of our code in a
	self-executing anonymous function. We then pass
	in 3 arguments to setup jQuery & our namespace.
	
	1. PROJECT is our namespace.
	2. $ is defined for jQuery.
	3. Lastly we ensure undefined really is undefined.
\*--------------------------------------------------*/

(function(PROJECT, $, undefined) {
    
    /*  'use strict' enforces correct syntax.  */
    
    'use strict';
    
    var obj = {
        
        1:'a',
        2:'b',
        3:'c'
    };
    
    
    /* Your code here */
    setTimeout(function(){
        
        UIKIT.notify.log(obj);
        
    }, 2000);
    
    
    
/* Lastly this checks if the namespace already exists & if not will assign it */

}(window.PROJECT = window.PROJECT || {}, jQuery));


