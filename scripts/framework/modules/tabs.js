/*--------------------------------------------------*\
	#MODAL COMPONENT
	
	This script contains modern tab functionality
	used to not only change tab content but to set
	historical states and support browser navigation.
	
	MK1 @ Version 1.0
\*--------------------------------------------------*/

(function(UIKIT, $, undefined) {
    
    /*  'use strict' enforces correct syntax.  */
    
    'use strict';
    
        
    UIKIT.tabs = (function() {
            
        function Tabs() {

            /*  Variablise 'this' to limit it to avoid scope conflicts  */

            var _this  = this,
                config = UIKIT.settings.tabs;
            
            
            
            /*--------------------------------------------------*\
            	#TABS CONFIG
            \*--------------------------------------------------*/

            config = {
                tabsClass: 'tabs',
                tabClass: 'tab',
                tabActiveClass: 'tab--active',
                tabContentsClass: 'tab-contents',
                tabContentClass: 'tab-content',
                tabContentActiveClass: 'tab-content--active'
            };
            
            
            
            /*--------------------------------------------------*\
            	#TABS
            \*--------------------------------------------------*/
            
            var tabClick = function(e) {
                
                //Prevent normal link behaviour
                
                e.preventDefault();
                
                var tabLink           = this.getAttribute('href'),
                    tabTitle          = this.getAttribute('title') ? this.getAttribute('title') : '',
                    tabContent        = document.querySelector(tabLink),
                    tabActive         = this.parentElement.getElementsByClassName(config.tabActiveClass)[0],
                    tabContentActive  = tabContent.parentElement.getElementsByClassName(config.tabContentActiveClass)[0];

                //Find any active tabs & reset
                
                tabActive.classList.remove(config.tabActiveClass);
                tabContentActive.classList.remove(config.tabContentActiveClass);
                
                //Add active to clicked tab & related content
                
                this.className += ' ' + config.tabActiveClass;
                tabContent.className += ' ' + config.tabContentActiveClass;
               
                //Set hash to tab id
                window.location.hash = tabLink;
            
            };
            
            var tab = document.getElementsByClassName(config.tabClass);
            
            for (var i = 0; i < tab.length; i++ ) {
                
                tab[i].addEventListener("click", tabClick);
            
            }



            /*--------------------------------------------------*\
            	#INIT
            \*--------------------------------------------------*/

            /*  Allow "chaining" of methods together  */
            
            _this.init = function() {
                
                /*  'this' refers to UIKIT.modal  */
                
                return this; 
            };
            
            /*  This refers to UIKIT.modal.init()  */

            return _this.init(); /*  initialize the init()  */
        }
        
        
        /*  creating a new object of helper rather than a funtion  */
        
        return new Tabs();
        
    }());
    
    
/*  Lastly this checks if the namespace already exists & if not will assign it  */

}(window.UIKIT = window.UIKIT || {}));


