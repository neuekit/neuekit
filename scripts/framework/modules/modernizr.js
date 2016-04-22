/*--------------------------------------------------*\
	#FEATURE DETECTION
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
        
        
/* Lastly this checks if the namespace already exists & if not will assign it */

}(window.UIKIT = window.UIKIT || {}, jQuery));


