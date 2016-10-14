/*--------------------------------------------------*\
	#CREATIVE LITTLE UI-KIT | NOTIFY LOGS TOOL
	
	This script allows you to use the browser
	notification system to display console.logs
	
	MK1 @ Version 1.0
\*--------------------------------------------------*/

(function(UIKIT, $, undefined) {
    
    /*  'use strict' enforces correct syntax.  */
    
    'use strict';
    
        
    UIKIT.notify = (function() {
            
        function Notify() {

            /*  Variablise 'this' to limit it to avoid scope conflicts.  */

            var _this = this;
            
            
            
            /*--------------------------------------------------*\
            	#NOTIFY LOG METHOD
            \*--------------------------------------------------*/
            
            _this.log = function( body, title ) {
                
                /*  Create a variable to store the last notification.  */
                
                var instance;
                
                
                /*  Check if a title has been supplied, if not use default.  */
                
                title = title || "UI Kit Console Log"
                
                var options = {
                    
                    body: JSON.stringify(body),
                    icon: UIKIT.icon
                };
                
                
                /*  Check if the web notification api is even supported.  */
                
                if ( !( "Notification" in window ) ) {
                    
                    alert("Oh crumbs, looks like theres no support for notifications here.");
                }
                
                
                /*  If supported, has the user given permssion, if so notify  */
                
                else if ( Notification.permission === "granted" ) {
                    
                    instance = new Notification( title, options );
                }
                
                
                /*  If supported & the user has not granted permission, ask.  */
                
                else if ( Notification.permission !== 'denied' ) {
                    
                    Notification.requestPermission( function( permission ) {
                        
                        if ( permission === "granted" ) {
                            
                            instance = new Notification( title, options );
                        }
                    });
                }
                
                console.log(body);
            };
            
            

            /*  Allow "chaining" of methods together.  */
            
            _this.init = function() {
                
                /*  'this' refers to UIKIT.modal  */
                
                return this; 
            };
            
            
            /*  This refers to UIKIT.modal.init()  */

            return _this.init(); /* initialize the init() */
        }
        
        /*  creating a new object of helper rather than a funtion */
        
        return new Notify();
        
    }());
    
    
/* Lastly this checks if the namespace already exists & if not will assign it */

}(window.UIKIT = window.UIKIT || {}));


