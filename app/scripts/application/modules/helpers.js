/*--------------------------------------------------*\
	#PROJECT | JS HELPERS
	
	This script contains all the helper/utility
	functions which we can use across our other
	JS files.
\*--------------------------------------------------*/

/*  'use strict' enforces correct syntax.  */

'use strict';


/*  Declare IIFE & Namespace  */

((PROJECT) => {
    
    
    /*--------------------------------------------------*\
    	#PROJECT HELPER METHOD
    	
    	This is a 'singleton' which isolates the code
    	inside from the global namespace, providing
    	a single point of access for functions.
    \*--------------------------------------------------*/
    
    PROJECT.helper = (() => {
        
        function Helper() {
            
            const _this = this;




            
            /*--------------------------------------------------*\
            	#YOUR HELPER FUNCTIONS HERE
            \*--------------------------------------------------*/
            
            
            
            
                        
            
            /*  Allow "chaining" of methods together  */

            _this.init = () => {
                
                
                
                
                /*  'this' refers to PROJECT.helper & allows chaining  */
                
                return this;
            };
            
            
            /*  This refers to PROJECT.helper.init()  */
            
            return _this.init();
        }
        
        
        /*  creating a new object of helper rather than a function */
        
        return new Helper();
        
    })();


/* Checks if the namespace already exists & if not assign it */

})(window.PROJECT = window.PROJECT || {});


