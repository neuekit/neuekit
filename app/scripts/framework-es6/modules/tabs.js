/*--------------------------------------------------*\
	#MODAL COMPONENT
	
	This script contains modern tab functionality
	used to not only change tab content but to set
	historical states and support browser navigation.
	
	MK1 @ Version 1.0
\*--------------------------------------------------*/

/*  'use strict' enforces correct syntax.  */

'use strict';


/*  Declare IIFE & Namespace  */

((UIKit) => {
    
    UIKit.tabs = (() => {
            
        function Tabs() {
            
            const _this = this;
            const config = UIKit.settings.tabs;
            
            
            
            /*--------------------------------------------------*\
            	#INITIAL TAB CHECK
            \*--------------------------------------------------*/
            
            _this.tabCheck = () => {
                
                if ( $(location.hash.substr(1)) && $(location.hash.substr(1)).hasClass(config.tabContentClass) ) {
                        
                    $(`[href="${location.hash}"]`).addClass(config.tabActiveClass);
                    
                    $(location.hash).addClass(config.tabContentActiveClass);   
                }
                
                $(`.${config.tabsClass}`).each(function(){
                    
                    if ( $(this).find(`.${config.tabActiveClass}`).length === 0 ) {
                        
                        const firstTab = $(this).find(`.${config.tabsClass}`);
                        const firstTabHash = firstTab.attr('href');
                        
                        firstTab.addClass(config.tabActiveClass);
                        
                        $(firstTabHash).addClass(config.tabContentActiveClass);
                    }
                });
            };
            
            
            
            /*--------------------------------------------------*\
            	#TABS
            \*--------------------------------------------------*/
            
            const tabClick = function(e) {
                
                //Prevent normal link behaviour
                
                e.preventDefault();
                
                const $this             = $(this);
                const tabLink           = $this.attr('href');
                const tabContent        = $(tabLink);
                const tabActive         = $this.siblings(`.${config.tabActiveClass}`);
                const tabContentActive  = tabContent.siblings(`.${config.tabContentActiveClass}`);

                //Find any active tabs & reset
                
                tabActive && tabActive.removeClass(config.tabActiveClass);
                tabContentActive && tabContentActive.removeClass(config.tabContentActiveClass);
                
                //Add active to clicked tab & related content
                
                $this.addClass(config.tabActiveClass);
                tabContent.addClass(config.tabContentActiveClass);
               
                //Set hash to tab id
                history.pushState(null, null, tabLink);
				
            };
            
            $(document).on('click', `.${config.tabClass}`, tabClick);



            /*--------------------------------------------------*\
            	#INIT
            \*--------------------------------------------------*/

            /*  Allow "chaining" of methods together  */
            
            _this.init = function() {
                
                _this.tabCheck();
                
                /*  'this' refers to UIKit.modal  */
                
                return this; 
            };
            
            /*  This refers to UIKit.modal.init()  */

            return _this.init(); /*  initialize the init()  */
        }
        
        
        /*  Creating a new object of helper rather than a function  */
        
        return new Tabs();
        
    })();
    
    
/* Checks if the namespace already exists & if not assign it */

})(window.UIKit = window.UIKit || {});


