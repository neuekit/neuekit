/*--------------------------------------------------*\
	#PROJECT | UI Kit Settings
\*--------------------------------------------------*/

/*  'use strict' enforces correct syntax.  */

'use strict';


/*  Declare IIFE & Namespace  */

((PROJECT, $) => {
    
    /* UI Kit overrides and config */
    
    UIKit.settings.tabs.tabActiveClass = 'on-edge-bottom--active';
    
    
    /*  Reinitialise modules after config  */
    
    UIKit.tabs.init();

    
/* Checks if the namespace already exists & if not assign it */

})(window.PROJECT = window.PROJECT || {}, window.jQuery = window.jQuery || window.$);


