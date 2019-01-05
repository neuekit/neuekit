import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default config => {

    const dev = false;

    const plugins = [
        babel({
            exclude: [
                'node_modules/**',
                './scripts/parties/**',
                './scripts/polyfills/**'
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
    ];

    const polyfills = {
        input: './scripts/polyfills/polyfills.js',
        output: {
            file: './scripts/polyfills/polyfills.min.js',
            format: 'iife',
        },
        context: 'window',
        plugins: [
            resolve(),
            terser({ sourcemap: false })
        ]
    };

    const springboard = {
        input: './scripts/springboard/springboard.js',
        output: {
            file: './scripts/springboard/springboard.min.js',
            format: 'iife',
        },
        plugins
    };

    const application = {
        input: './scripts/application/application.js',
        output: {
            file: './scripts/application/application.min.js',
            format: 'iife',
        },
        plugins
    };

    return [polyfills, ...(dev ? [springboard] : []), application];
};