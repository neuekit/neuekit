// Rollup plugins
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

const terse = {
    sourceMap : false,
    output: {
        comments: function(node, comment) {
            var text = comment.value;
            var type = comment.type;
            if (type == "comment2") {
            // multiline comment
                return /@preserve|@license|@cc_on/i.test(text);
            }
        }
    }
};

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
            terser(terse)
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
            resolve()//,
            //terser(terse)
        ]
    },
    {
        input: './app/scripts/application/application.js',
        output: {
            file: './app/scripts/application/application.min.js',
            format: 'iife',
            name: 'Application'
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
            terser(terse)
        ]
    }
];