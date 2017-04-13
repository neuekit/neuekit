/*!---------------------------------------------------------------------------*\
    
	#CREATIVE LITTLE UI KIT
	
	- Version:      0.9.8
	- Author:       Creative Little Dots
	- Site:         http://creativelittle.uk/uikit
	- Copyright:    2016, Creative Little Dots
	– License:      MIT | http://goo.gl/p3bexl
	
\*----------------------------------------------------------------------------*/



/*----------------------------------------------------------------------------*\
	#PARTIES/POLYFILLS
	
	Micro libraries to bootstrap the UI Kit (Dont panic its only 7.6kb GZipped)
\*----------------------------------------------------------------------------*/

import './parties/promise';
import './parties/fetch';
import './parties/stickyfill';



/*----------------------------------------------------------------------------*\
	#SETTINGS
	
	Global and module configurations.
\*----------------------------------------------------------------------------*/

import './settings/global';   
import './settings/tabs';



/*----------------------------------------------------------------------------*\
	#HELPERS
	
	Single concern functions and utilities to help you out.
\*----------------------------------------------------------------------------*/

import './modules/helpers';



/*----------------------------------------------------------------------------*\
	#MODULES
	
	Designed pieces of UI. Only using classes. More explicit naming.
\*----------------------------------------------------------------------------*/

import './modules/modal';
import './modules/notify';
import './modules/tabs';


