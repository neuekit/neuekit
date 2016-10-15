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
                dot: '.',
                tabsClass: 'tabs',
                tabClass: 'tab',
                tabActiveClass: 'on-edge-bottom--active',
                tabContentsClass: 'tab-contents',
                tabContentClass: 'tab-content',
                tabContentActiveClass: 'tab-content--active'
            };
            
            
            
            /*--------------------------------------------------*\
            	#INITIAL TAB CHECK
            \*--------------------------------------------------*/
            
            _this.tabCheck = function() {
                
                if ( document.getElementById(location.hash.substr(1)) && document.getElementById(location.hash.substr(1)).classList.contains(config.tabContentClass) ) {
                        
                    document.querySelector('[href="' + location.hash + '"]').classList.add(config.tabActiveClass);
                    
                    document.querySelector(location.hash).classList.add(config.tabContentActiveClass);
                    
                }
                
                var tab_modules = document.querySelectorAll(config.dot + config.tabsClass);
            
                UIKIT.helper.forEach(tab_modules, function(i, el) {
                    
                    if ( el.querySelectorAll(config.dot + config.tabActiveClass).length === 0 ) {
                        
                        var firstTab        = el.querySelector(config.dot + config.tabClass);
                        var firstTabHash    = firstTab.getAttribute('href');
                        
                        firstTab.classList.add(config.tabActiveClass);
                        
                        document.querySelector(firstTabHash).classList.add(config.tabContentActiveClass);
                        
                    }
                
                });
                
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
                
                tabActive ? tabActive.classList.remove(config.tabActiveClass) : null;
                tabContentActive ? tabContentActive.classList.remove(config.tabContentActiveClass) : null;
                
                //Add active to clicked tab & related content
                
                this.className += ' ' + config.tabActiveClass;
                tabContent.className += ' ' + config.tabContentActiveClass;
               
                //Set hash to tab id
                history.pushState(null, null, tabLink);
				
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
                
                _this.tabCheck();
                
                /*  'this' refers to UIKIT.modal  */
                
                return this; 
            };
            
            /*  This refers to UIKIT.modal.init()  */

            return _this.init(); /*  initialize the init()  */
        }
        
        
        /*  Creating a new object of helper rather than a function  */
        
        return new Tabs();
        
    }());
    
    
/*  Lastly this checks if the namespace already exists & if not will assign it  */

}(window.UIKIT = window.UIKIT || {}));


