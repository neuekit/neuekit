/*--------------------------------------------------*\
	#CREATIVE LITTLE UI-KIT | JS MAIN COMPONENTS
	
	This file is only to be used to concatenate the
	modules that create the magic that is the UI-Kit.
	
	MK1 @ Version 1.0
\*--------------------------------------------------*/

/*  DOMtastic 0.12.1  */

import $ from './parties/domtastic';


/*  Fetch Polyfill 0.11.1  */

import './parties/fetch';


/*  Helpers  */

import getUrl from './helpers/urls';


/*  Set Strict  */

'use strict';


/*  Declare IIFE & Namespace  */

((UIKit) => {
    
    console.log(getUrl());
    
})(window.UIKit = UIKit || {});


