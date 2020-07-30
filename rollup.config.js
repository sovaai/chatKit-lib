import typescript from '@wessberg/rollup-plugin-ts'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import nodeResovle from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'



import pkg from './package.json'

const setPlugins = () => [
  peerDepsExternal(),
  nodeResovle(),
  typescript(),
  postcss({
    plugins: [],
  }),
  url(),
  svgr(),
  commonjs({
    include: 'node_modules/**',
    namedExports: {
      'node_modules/react-is/index.js': ['typeOf', 'isElement', 'isValidElementType'],
    },
  }),
]

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: setPlugins(),
}
