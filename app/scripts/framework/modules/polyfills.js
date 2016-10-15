/*--------------------------------------------------*\
	#CREATIVE LITTLE UI-KIT | JS POLYFILLS
	
	This script contains the main functions needed
	for the ui-kit to work, like modals, accordions
	& other frequently used ui components.
	
	MK1 @ Version 1.0
\*--------------------------------------------------*/

(function(UIKIT, $, undefined) {
    
    /*  'use strict' enforces correct syntax.  */
    
    'use strict';
    
        
    if (typeof Element.prototype.closest !== 'function') {
        
        Element.prototype.closest = function closest(selector) {
            
            var element = this;
        
            while (element && element.nodeType === 1) {
                
                if (element.matches(selector)) {
                    
                    return element;
                }
        
                element = element.parentNode;
            }
        
            return null;
        };
        
    }
    
/* Lastly this checks if the namespace already exists & if not will assign it */

}(window.UIKIT = window.UIKIT || {}));


