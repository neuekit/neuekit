/*--------------------------------------------------*\
	#CREATIVE LITTLE UI-KIT | GALLERY COMPONENT
	
	This script creates the lightbox gallery and
	methods required for galleries to function, such
	as .open and .close
	
	MK1 @ Version 1.0
\*--------------------------------------------------*/

/*  'use strict' enforces correct syntax.  */

'use strict';


/*  Declare IIFE & Namespace  */

((UIKit, $) => {
    
    UIKit.gallery = (() => {
            
        function Gallery() {
            
            const _this = this;
            
            /*--------------------------------------------------*\
            	#OPEN GALLARY
            \*--------------------------------------------------*/
            
            _this.open = function(event) {
                
                event.preventDefault();
                
                fetch(this.href)
                .then(function(response) {
                    
                    return response.blob();
                })
                .then(function(blob) {
                    
                    
                });
                
                $('.gallery').addClass('gallery--visible');
                
                $('body').addClass('locked');
            };
            
            $(document).on('click', '.js-gallery', _this.open);
            
            
            
            /*--------------------------------------------------*\
            	#CLOSE GALLERY
            \*--------------------------------------------------*/

            _this.close = function(event, element) {
                
                event.preventDefault();
                
                if ( $('.gallery--visible').length === 1 ) {
                
                    $('body').removeClass('locked');
                }
                
                $(element).closest('.gallery').removeClass('gallery--visible');
            };
            
            
            $(document).on('click', '.js-gallery--close', function(event) {
                
                _this.close(event, this);
            });
            
            
            
            /*--------------------------------------------------*\
            	#NEXT GALLERY ITEM
            \*--------------------------------------------------*/
            
            _this.next = function(event) {
                
                event.preventDefault();
            }
            
        }
        
        /*  creating a new object of helper rather than a function */
        
        return new Gallery();
        
    })();
    
    
/* Checks if the namespace already exists & if not assign it */
    
})(window.UIKit = window.UIKit || {}, window.jQuery = window.jQuery || window.$);

