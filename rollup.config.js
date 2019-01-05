import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default config => {

    const dev = true;

    const plugins = [
        babel({
            exclude: [
                'node_modules/**',
                './app/scripts/parties/**',
                './app/scripts/polyfills/**'
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
        input: './app/scripts/polyfills/polyfills.js',
        output: {
            file: './app/scripts/polyfills/polyfills.min.js',
            format: 'iife',
        },
        context: 'window',
        plugins: [
            resolve(),
            terser({ sourcemap: false })
        ]
    };

    const springboard = {
        input: './app/scripts/springboard/springboard.js',
        output: {
            file: './app/scripts/springboard/springboard.min.js',
            format: 'iife',
        },
        plugins
    };

    const application = {
        input: './app/scripts/application/application.js',
        output: {
            file: './app/scripts/application/application.min.js',
            format: 'iife',
        },
        plugins
    };

    return [polyfills, ...(dev ? [springboard] : []), application];
};