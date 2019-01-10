import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default () => {

    const plugins = [
        babel({
            exclude: [
                'node_modules/**',
                './scripts/parties/**',
                './scripts/polyfills/**'
            ],
            include: [
                'node_modules/springboard/**'
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
            name: 'Polyfills'
        },
        context: 'window',
        plugins: [
            resolve(),
            terser({ sourcemap: false })
        ]
    };

    const application = {
        input: './scripts/application/application.js',
        output: {
            file: './scripts/application/application.min.js',
            format: 'iife',
            name: 'Application'
        },
        plugins
    };

    return [polyfills, application];
};