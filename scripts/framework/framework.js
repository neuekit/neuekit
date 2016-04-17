// @codekit-prepend "settings.js";
// @codekit-prepend "helpers.js";

/*--------------------------------------------------*\
	#CREATIVE LITTLE UI-KIT | JS MAIN COMPONENTS
	
	This script contains the main functions needed
	for the ui-kit to work, like modals, accordions
	& other frequently used ui components.
	
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
    
    
    UIKIT.modernizr = (function() {
        
        if ( Modernizr.inputtypes ) {
            
            var support = [];
        
            for ( var i in Modernizr.inputtypes) {
                
                if ( Modernizr.inputtypes.hasOwnProperty(i) && ! Modernizr.inputtypes[i]) {
                
                    support.push('no-input-' + i);
                
                }
                            
            }
            
            document.documentElement.className = support.join(' ');
            
        }
        
    }());
    
    /*--------------------------------------------------*\
    	#MODAL COMPONENT
    \*--------------------------------------------------*/
    
    UIKIT.modal = (function() {
            
        function _modal() {

            /*  Variablise 'this' to limit it to avoid scope conflicts  */
            /* jshint validthis: true */
            var _this = this;
            
            
            /*--------------------------------------------------*\
            	#MODAL CODE HERE
            \*--------------------------------------------------*/
            
            


            /*  Allow "chaining" of methods together  */
            
            this.init = function() {
                
                /*  'this' refers to UIKIT.modal  */
                
                return this; 
            };
            
            
            /*  This refers to UIKIT.modal.init()  */

            return this.init(); /*initialize the init()*/
        }
        
        /*  creating a new object of helper rather than a funtion */
        
        return new _modal();
        
    }());
    
    
/* Lastly this checks if the namespace already exists & if not will assign it */

}(window.UIKIT = window.UIKIT || {}, jQuery));


