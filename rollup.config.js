import filesize from 'rollup-plugin-filesize'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'
import commonjs from '@rollup/plugin-commonjs'
import eslint from '@rollup/plugin-eslint'


const isProd = process.env.NODE_ENV === 'production'

export default {
  input: 'src/index.js',
  output: {
    file: isProd ? 'dist/remember-scroll.min.js' : 'dist/remember-scroll.js',
    format: 'umd',
    exports: 'default',
    name: 'RememberScroll',
  },
  plugins: [
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**'],
      exclude: ['node_modules/**']
    }),
    resolve(),
    commonjs(),
    filesize(),
    babel({ babelHelpers: 'runtime', exclude: ['node_modules/**'] }),
    (isProd && uglify())
  ]
}
