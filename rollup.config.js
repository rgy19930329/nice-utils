import path from 'path'

import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import alias from 'rollup-plugin-alias'
import { terser } from 'rollup-plugin-terser'

const isProd = process.env.NODE_ENV === 'production'

/* 插件 */
let plugins = [
  resolve(),
  commonjs(),
  json(),
  babel({
    exclude: 'node_modules/**'
  }),
  alias({
    '@': path.resolve(__dirname, 'src')
  })
]

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
