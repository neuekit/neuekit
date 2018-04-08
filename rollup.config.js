// Rollup plugins
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default [
    {
        input: './app/scripts/polyfills/polyfills.js',
        output: {
            file: './app/scripts/polyfills/polyfills.min.js',
            format: 'iife',
            name: 'Polyfills'
        },
        context: 'window',
        plugins: [
            uglify({
                sourceMap: false
            }, minify)
        ]
    },
    {
        input: './app/scripts/springboard/springboard.js',
        output: {
            file: './app/scripts/springboard/springboard.min.js',
            format: 'iife',
            name: 'SpringBoard'
        },
        plugins: [
            babel({
                exclude: [
                    'node_modules/**',
                    './app/scripts/parties/**',
                    './app/scripts/polyfills/**'
                ],
                presets: [[
                    'env', {
                        'modules': false
                    }
                ]],
                plugins: [
                    'external-helpers',
                    'transform-object-rest-spread'
                ]
            }),
            resolve(),
            uglify({
                sourceMap: false
            }, minify)
        ]
    }
];