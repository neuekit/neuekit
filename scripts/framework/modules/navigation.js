/*--------------------------------------------------*\
	#NAVIGATION COMPONENT
	
	This is the progressive enhancement of the
	navigation component, creating a native feel.
	
	MK1 @ Version 1.0
\*--------------------------------------------------*/

(function(UIKIT, $, undefined) {
    
    /*  'use strict' enforces correct syntax.  */
    
    'use strict';
    
        
    UIKIT.nav = (function() {
            
        function Nav() {

            /*  Variablise 'this' to limit it to avoid scope conflicts  */

            var _this  = this;
             
             
             
            function navToggle(e) {
                
                e.preventDefault();
                
                
                
            }
            
            var navLink = document.getElementsByClassName('nav-list__item-drop');
            
            for ( var i = 0; i < navLink.length; i++ ) {
                
                navLink[i].addEventListener("click", navToggle);
                
            }



            /*--------------------------------------------------*\
            	#INIT
            \*--------------------------------------------------*/

            /*  Allow "chaining" of methods together  */
            
            this.init = function() {
                
                /*  'this' refers to UIKIT.modal  */
                
                return this; 
            };
            
            /*  This refers to UIKIT.modal.init()  */

            return this.init(); /*  initialize the init()  */
        }
        
        
        /*  creating a new object of helper rather than a funtion  */
        
        return new Nav();
        
    }());
    
    
/*  Lastly this checks if the namespace already exists & if not will assign it  */

}(window.UIKIT = window.UIKIT || {}));


