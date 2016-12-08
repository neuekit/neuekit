// Rollup plugins
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';

export default {
    entry: './app/scripts/framework/framework.js',
    dest: './app/scripts/framework/framework.min.js',
    format: 'iife',
    moduleName: 'UIKit',
    moduleContext: {
        './app/scripts/framework/parties/promise.js' : 'window',
        './app/scripts/framework/parties/fetch.js' : 'window'
    },
    plugins: [
        babel({
            exclude: ['./node_modules/**', './app/scripts/framework/parties/**'],
            "presets": [[
                "env", {
                    "targets": {
                        "browsers": ["> 1%", "last 2 versions", "Firefox ESR", "not ie_mob <= 12"]
                    },
                    "modules": false
                }
            ]],
            "plugins": [
                "external-helpers"
            ]
        }),
        uglify({
            screwIE8: true
        }, minify)
    ]
};