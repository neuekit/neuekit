// Rollup plugins
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

export default {
    input : './scripts/application/application.js',
    output : {
        file : './scripts/application/application.min.js',
        format : 'iife',
        name : 'PROJECT'
    },
    plugins : [
        babel({
            exclude : [
                './node_modules/**',
                './scripts/parties/**',
                './scripts/polyfills/**'
            ],
            presets: [[
                '@babel/preset-env', {
                    'modules' : false,
                    'shippedProposals' : true
                }
            ]]
        }),
        resolve(),
        terser({
            sourcemap : false,
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
        })
    ]
};