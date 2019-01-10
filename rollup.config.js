import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: './src/scripts/springboard.js',
        output: {
            file: './dist/scripts/springboard.js',
            format: 'iife',
            name: 'SpringBoard'
        },
        plugins: [
            babel({
                exclude: [
                    'node_modules/**',
                    'testing/**'
                ],
                presets: [[
                    '@babel/env', {
                        shippedProposals: true,
                        useBuiltIns: 'usage'
                    }
                ]]
            }),
            commonjs(),
            resolve(),
            terser({ sourcemap: false })
        ]
    }
];