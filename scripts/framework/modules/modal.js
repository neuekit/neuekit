/*--------------------------------------------------*\
	#MODAL COMPONENT
\*--------------------------------------------------*/

(function(UIKIT, $, undefined) {
    
    /*  'use strict' enforces correct syntax.  */
    
    'use strict';
    
        
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


