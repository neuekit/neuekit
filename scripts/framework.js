$(function(){
    
    var uikit = {
        support : []
    };
    
    if ( Modernizr.inputtypes ) {
        
        for ( var i in Modernizr.inputtypes) {
            
            if ( Modernizr.inputtypes.hasOwnProperty(i) && ! Modernizr.inputtypes[i]) {
            
                uikit.support.push('no-input-' + i);
            
            }
                        
        }
        
        document.documentElement.className = uikit.support.join(' ');
        
    } 
    
});