/*--------------------------------------------------*\
	#CREATIVE LITTLE UI-KIT | JS SETTINGS
	
	This script contains all the reusable data such
	as urls, error messages, html created by JS &
	repeated values & values that may change later.
	
	To start our script we wrap all of our code in a
	self-executing anonymous function. We then pass
	in 3 arguments to setup jQuery & our namespace.
	
	1. UIKIT is our namespace.
	2. $ is defined for jQuery.
	3. Lastly we ensure undefined really is undefined.
\*--------------------------------------------------*/

/*eslint-disable no-unused-vars*/

((UIKIT) => {  
    
    /* This is our global configuration. It will work across your js files */
    
    UIKIT.settings.tabs = {
        tabsClass: 'tabs',
        tabClass: 'tab',
        tabActiveClass: 'tab--active',
        tabContentsClass: 'tab-contents',
        tabContentClass: 'tab-content',
        tabContentActiveClass: 'tab-content--active'
    };
    
    
    
/* Checks if the namespace already exists & if not assign it */

})(window.UIKIT = window.UIKIT || {});


