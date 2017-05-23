import path from 'path';
import typescript from 'rollup-plugin-typescript';

export default {
    entry: path.resolve(__dirname, '../src/vnode.ts'),
    dest: path.resolve(__dirname, '../dist/vdom.js'),
    moduleName: 'vdom',
    format: 'iife',
    sourceMap: true,
    plugins: [
        typescript()
    ]
};