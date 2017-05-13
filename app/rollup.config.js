// Rollup plugins
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';

export default {
    entry : './scripts/application/application.js',
    dest : './scripts/application/application.min.js',
    format : 'iife',
    moduleName : 'PROJECT',
    plugins: [
        babel({
            exclude : ['./node_modules/**', './scripts/application/parties/**'],
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
            screwIE8 : true
        }, minify)
    ]
};