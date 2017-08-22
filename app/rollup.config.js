// Rollup plugins
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
    input : './scripts/application/application.js',
    output : {
        file : './scripts/application/application.min.js',
        format : 'iife',
        name : 'PROJECT'
    },
    plugins : [
        babel({
            exclude : [
                './node_modules/**',
                './scripts/parties/**'
            ],
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