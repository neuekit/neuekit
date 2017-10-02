// Rollup plugins
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
    input : './app/scripts/framework/framework.js',
    output : {
        file : './app/scripts/framework/framework.min.js',
        format : 'iife',
        name : 'UIKit'
    },
    moduleContext : {
         './app/scripts/framework/polyfills/promise.js' : 'window',
         './app/scripts/framework/polyfills/fetch.js' : 'window',
         './app/scripts/framework/polyfills/svg4everybody.js' : 'window'
    },
    plugins : [
        babel({
            exclude : [
                'node_modules/**',
                './app/scripts/framework/polyfills/**'
            ],
            presets : [[
                'env', {
                    'modules' : false
                }
            ]],
            plugins : [
                'external-helpers',
                'transform-object-rest-spread',
                ['transform-runtime', {
                    'helpers': false
                }]
            ],
            runtimeHelpers : true
        }),
        resolve(),
        uglify({
            sourceMap : false
        }, minify)
    ]
};