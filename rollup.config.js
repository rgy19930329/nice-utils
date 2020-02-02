import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'

const isProd = process.env.NODE_ENV === 'production'

let plugins = [
  resolve(),
  commonjs(),
  babel({
    exclude: 'node_modules/**'
  }),
  json(),
];

isProd && (plugins = plugins.concat([terser()]))

export default {
  input: 'index.js',
  plugins,
  sourceMap: isProd,
  external: ['axios'],
  output: [
    {
      file: isProd ? 'es/index.min.js' : 'es/index.js',
      format: 'es'
    },
    {
      file: isProd ? 'cjs/index.min.js' : 'cjs/index.js',
      format: 'cjs'
    }
  ]
}