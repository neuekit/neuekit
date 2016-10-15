/*--------------------------------------------------*\
	#CREATIVE LITTLE UI-KIT | MODAL COMPONENT
	
	This script creates the modal interactions and
	methods required for modals to function, such as
	.opn and .close
	
	MK1 @ Version 1.0
\*--------------------------------------------------*/

(function(UIKIT, $, undefined) {
    
    /*  'use strict' enforces correct syntax.  */
    
    'use strict';
    
        
    UIKIT.modal = (function() {
            
        function Modal() {

            /*  Variablise 'this' to limit it to avoid scope conflicts  */

            var _this = this;
            
            
            
            /*--------------------------------------------------*\
            	#OPEN A MODAL
            \*--------------------------------------------------*/
            
            _this.open = function(e) {
                
                e.preventDefault();
                
                var id = this.hash;
                
                document.querySelector(id).classList.add('modal--visible');
                
                document.querySelector('body').classList.add('locked');
                  
            };
            
            
            var open_modals = document.querySelectorAll('.js-modal-open');
            
            UIKIT.helper.forEach(open_modals, function(i, el) {
                
                el.addEventListener('click', _this.open);
            
            });
            
            
            
            /*--------------------------------------------------*\
            	#CLOSE A MODAL
            \*--------------------------------------------------*/

            _this.close = function(e, el) {
                
                e.preventDefault();
                
                el = el === undefined ? UIKIT.helper.closest(this, 'modal') : el;
                
                if ( document.querySelectorAll('.modal--visible').length === 1 ) {
                
                    document.querySelector('body').classList.remove('locked');
                
                }
                
                el.classList.remove('modal--visible');
                                
            };
            
            
            var close_modals = document.querySelectorAll('.js-modal-close');
            
            UIKIT.helper.forEach(close_modals, function(i, el) {
                
                el.addEventListener('click', _this.close);
            
            });
            
            
            var modals = document.querySelectorAll('.modal');
            
            UIKIT.helper.forEach(modals, function(i, el) {
                
                el.addEventListener('click', function(e){
                    
                    if ( this.classList.contains('modal') && e.target === this ) {
                    
                        _this.close(e, this);
                    
                    }
                    
                });
            
            });



            /*  Allow "chaining" of methods together  */
            
            _this.init = function() {
                
                /*  'this' refers to UIKIT.modal  */
                
                return this; 
            };
            
            
            /*  This refers to UIKIT.modal.init()  */

            return _this.init(); /* initialize the init() */
        }
        
        /*  creating a new object of helper rather than a funtion */
        
        return new Modal();
        
    }());
    
    
/* Lastly this checks if the namespace already exists & if not will assign it */

}(window.UIKIT = window.UIKIT || {}));


