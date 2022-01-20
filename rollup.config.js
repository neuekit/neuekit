import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: './src/scripts/neuekit.js',
        output: {
            file: './dist/neuekit.js',
            format: 'iife',
            name: 'NeueKit',
            sourcemap: false
        },
        plugins: [
            babel({
                babelHelpers: 'bundled',
                exclude: [
                    /\/core-js\//,
                    'node_modules/**',
                    'testing/**'
                ],
                presets: [[
                    '@babel/env', {
                        useBuiltIns: 'usage',
                        corejs: {
                            version: 3,
                            proposals: true
                        }
                    }
                ]]
            }),
            commonjs(),
            resolve(),
            terser()
        ]
    }
];