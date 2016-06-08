/*--------------------------------------------------*\
	#MODAL COMPONENT
\*--------------------------------------------------*/

(function(UIKIT, $, undefined) {
    
    /*  'use strict' enforces correct syntax.  */
    
    'use strict';
    
        
    UIKIT.modal = (function() {
            
        function Modal() {

            /*  Variablise 'this' to limit it to avoid scope conflicts  */
            /* jshint validthis: true */
            var _this = this;
            
            
            _this.open = function(e) {
                
                e.preventDefault();
                
                var id = '#' + this.dataset.modal;
                
                document.querySelector(id).classList.add('modal--visible');
                  
            };
            
            var modals = document.querySelectorAll('.js-modal');
            
            UIKIT.helper.forEach(modals, function(i, el) {
                
                el.addEventListener('click', _this.open);
            
            });
            
            _this.close = function(e) {
                
                e.preventDefault();
                
                UIKIT.helper.closest(this, 'modal').classList.remove('modal--visible');
                
            };
            
            var close_modals = document.querySelectorAll('.js-modal__close');
            
            UIKIT.helper.forEach(close_modals, function(i, el) {
                
                el.addEventListener('click', _this.close);
            
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

}(window.UIKIT = window.UIKIT || {}, jQuery));


