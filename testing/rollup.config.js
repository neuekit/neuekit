import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default () => {

    const plugins = [
        babel({
            babelHelpers: 'bundled',
            exclude: [
                /\/core-js\//,
                'node_modules/**',
                './scripts/parties/**',
                './scripts/polyfills/**'
            ],
            include: [
                'node_modules/neuekit/**'
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
    ];

    const polyfills = {
        input: './scripts/polyfills/polyfills.js',
        output: {
            file: './scripts/polyfills/polyfills.min.js',
            format: 'iife',
            name: 'Polyfills',
            sourcemap: false
        },
        context: 'window',
        plugins: [
            resolve(),
            terser()
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