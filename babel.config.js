const presets = [
  [
    '@babel/env',
    {
      useBuiltIns: 'usage',
      corejs: { version: 2 }
    },
  ],
]

const plugins = [
  '@babel/plugin-transform-runtime'
]

module.exports = { presets, plugins }
