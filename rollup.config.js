// Rollup plugins
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
    entry : './app/scripts/framework/framework.js',
    dest : './app/scripts/framework/framework.min.js',
    format : 'iife',
    moduleName : 'UIKit',
    moduleContext : {
        './app/scripts/framework/parties/promise.js' : 'window',
        './app/scripts/framework/parties/fetch.js' : 'window'
    },
    plugins: [
        babel({
            exclude : ['./node_modules/**', './app/scripts/framework/parties/**'],
            presets : [[
                "env", {
                    "modules" : false
                }
            ]],
            plugins : [
                "transform-object-rest-spread",
                "external-helpers"
            ]
        }),
        uglify({
            sourceMap : false
        }, minify)
    ]
};