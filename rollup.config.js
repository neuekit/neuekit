// Rollup plugins
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: './app/scripts/framework-es6/framework.js',
    dest: './app/scripts/framework-es6/framework.min.js',
    format: 'iife',
    sourceMap: false,
    moduleContext: {
        './app/scripts/framework-es6/parties/promise.js' : 'window',
        './app/scripts/framework-es6/parties/fetch.js' : 'window',
        './app/scripts/framework-es6/parties/domtastic.js' : 'window'
    },
    plugins: [
        babel({
            exclude: ['./node_modules/**', './app/scripts/framework-es6/parties/**'],
            presets: ['es2015-rollup']
        }),
        uglify()
    ]
};