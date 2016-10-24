/*--------------------------------------------------*\
	#CREATIVE LITTLE UI-KIT | MODAL COMPONENT
	
	This script creates the modal interactions and
	methods required for modals to function, such as
	.opn and .close
	
	MK1 @ Version 1.0
\*--------------------------------------------------*/

/*  'use strict' enforces correct syntax.  */

'use strict';


/*  Declare IIFE & Namespace  */

((UIKIT) => {
    
    UIKIT.modal = (() => {
            
        function Modal() {
            
            const _this = this;
            
            /*--------------------------------------------------*\
            	#OPEN A MODAL
            \*--------------------------------------------------*/
            
            _this.open = function(event) {
                
                event.preventDefault();
                
                $(this.hash).addClass('modal--visible');
                
                $('body').addClass('locked');
                  
            };
            
            $(document).on('click', '.js-modal--open', _this.open);
            
            
            
            /*--------------------------------------------------*\
            	#CLOSE A MODAL
            \*--------------------------------------------------*/

            _this.close = function(event, length, element = this) {
                
                event.preventDefault();
                
                if ( $('.modal--visible').length === 1 ) {
                
                    $('body').removeClass('locked');
                }
                
                $(element).closest('.modal').removeClass('modal--visible');
            };
            
            
            $(document).on('click', '.js-modal--close', _this.close);
            
            
            $(document).on('click', '.modal', function(event) {
                
                if ( $(this).hasClass('modal') && event.target === this ) {
                
                    _this.close(event, 1, this);
                }
            });
            
        }
        
        /*  creating a new object of helper rather than a funtion */
        
        return new Modal();
        
    })();
    
    
/* Checks if the namespace already exists & if not assign it */
    
})(window.UIKIT = window.UIKIT || {});

