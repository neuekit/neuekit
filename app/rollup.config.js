// Rollup plugins
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
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
                './scripts/parties/**',
                './scripts/polyfills/**'
            ],
            presets : [[
                'env', {
                    'modules' : false
                }
            ]],
            plugins : [
                'external-helpers',
                'transform-object-rest-spread'
            ]
        }),
        resolve(),
        uglify({
            sourceMap : false
        }, minify)
    ]
};