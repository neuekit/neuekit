import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: './src/scripts/neuekit.js',
        output: {
            file: './dist/neuekit.js',
            format: 'iife',
            name: 'NeueKit'
        },
        plugins: [
            babel({
                exclude: [
                    /\/core-js\//,
                    'node_modules/**',
                    'testing/**'
                ],
                presets: [[
                    '@babel/env', {
                        shippedProposals: true,
                        useBuiltIns: 'usage',
                        corejs: "2"
                    }
                ]]
            }),
            commonjs(),
            resolve(),
            terser({ sourcemap: false })
        ]
    }
];