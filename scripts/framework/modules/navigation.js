/*--------------------------------------------------*\
	#NAVIGATION COMPONENT
\*--------------------------------------------------*/

(function(UIKIT, $, undefined) {
    
    /*  'use strict' enforces correct syntax.  */
    
    'use strict';
    
        
    UIKIT.nav = (function() {
            
        function Nav() {

            /*  Variablise 'this' to limit it to avoid scope conflicts  */
            /* jshint validthis: true */
            var _this  = this;
             
             
             
            /*--------------------------------------------------*\
            	#TOGGLE MOBILE NAVIGATION
            \*--------------------------------------------------*/

            function navigation(e) {
                
                e.preventDefault();
                
                var classes = nav.classList,
                    body = document.getElementsByTagName('body')[0],
                    bodyClasses = body.classList;
            
                bodyClasses.contains('nav-open') ? bodyClasses.remove('nav-open') : bodyClasses.add('nav-open');
                
                classes.contains('nav--active') ? classes.remove('nav--active') : classes.add('nav--active');
                                 
            }
            
            var navTog  = document.querySelector('.js-nav-toggle'),
                nav     = document.querySelector('.js-nav--primary');
           
            if ( navTog && nav ) {
                
                navTog.addEventListener("click", navigation);
                
            }
            
            
            
            /*--------------------------------------------------*\
            	#TOGGLE MOBILE SUB NAVIGATION
            \*--------------------------------------------------*/

            function subNav(e) {
                
                e.preventDefault();
                
                var itemDrop    = this.parentElement,
                    classes     = itemDrop.classList,
                    activeClass = 'nav__item--drop-active',
                    subNav      = itemDrop.getElementsByClassName('nav--nest')[0],
                    parentNav   = itemDrop.closest('.nav');
                
                if ( classes.contains(activeClass) ) {
                    
                    classes.remove(activeClass);
                    
                    parentNav.style.overflow = "hidden";
                    
                } else {
                    
                    classes.add(activeClass);
                    
                    parentNav.style.overflow = "auto";
                }
            }
            
            function subNavClose(e) {
                
                e.preventDefault();
                
                var itemDrop         = this.closest('.nav__item--drop'),
                    classes          = itemDrop.classList,
                    activeClass      = 'nav__item--drop-active',
                    grandParentNav   = itemDrop.parentElement.closest('.nav');
                
                grandParentNav.style.overflowY = "auto";
                
                classes.contains(activeClass) ? classes.remove(activeClass) : classes.add(activeClass);
                
            }

            var navItem = document.querySelectorAll('.nav__item--drop'),
                close   = document.querySelectorAll('.nav__link--close');
                
            for ( var i = 0; i < navItem.length; i++ ) {
                
                var navLink = navItem[i].getElementsByClassName('nav__link')[0];
                
                navLink.addEventListener("click", subNav);
                
            }
            
            for ( var i = 0; i < close.length; i++ ) {

                close[i].addEventListener("click", subNavClose);
                
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

}(window.UIKIT = window.UIKIT || {}, jQuery));


