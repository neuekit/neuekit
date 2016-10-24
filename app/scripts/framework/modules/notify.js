/*--------------------------------------------------*\
	#CREATIVE LITTLE UI-KIT | NOTIFY LOGS TOOL
	
	This script allows you to use the browser
	notification system to display console.logs
	
	MK1 @ Version 1.0
\*--------------------------------------------------*/

/*  'use strict' enforces correct syntax.  */

'use strict';


/*  Declare IIFE & Namespace  */

((UIKIT) => {
    
    /*--------------------------------------------------*\
    	#UIKIT HELPER METHOD
    	
    	This is a 'singleton' which isolates the code
    	inside from the global namespace, providing
    	a single point of access for functions.
    \*--------------------------------------------------*/
    
    UIKIT.notify = (body, title = 'Notification', type) => {
        
        function Notify() {
            
            const _this = this;
            
            /*--------------------------------------------------*\
            	#NOTIFY LOG METHOD
            \*--------------------------------------------------*/
            
            (() => {
                
                /*  Create a variable to store the last notification.  */
                
                let instance;
                
                
                /*  Set the options  */
                
                const options = {
                    
                    body: JSON.stringify(body)
                };
                
                
                /*  Check if the web notification api is even supported.  */
                
                if ( !( "Notification" in window ) ) {
                    
                    alert(body);
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
                
                type && console[type](`${title}: ${body}`);
                
            })();
        }
        
        /*  creating a new object of helper rather than a funtion */
        
        return new Notify();
        
    };
    
/* Lastly this checks if the namespace already exists & if not will assign it */

})(window.UIKIT = window.UIKIT || {});


