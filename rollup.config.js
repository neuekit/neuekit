// Rollup plugins
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: './app/scripts/framework/framework.js',
    dest: './app/scripts/framework/framework.min.js',
    format: 'iife',
    moduleName: 'UIKit',
    moduleContext: {
        './app/scripts/framework/parties/promise.js' : 'window',
        './app/scripts/framework/parties/fetch.js' : 'window'
    },
    plugins: [
        babel({
            exclude: ['./node_modules/**', './app/scripts/framework/parties/**'],
            presets: ['es2015-rollup']
        }),
        uglify()
    ]
};