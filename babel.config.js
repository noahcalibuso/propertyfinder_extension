/**
 * @fileoverview Babel configuration for transpiling JavaScript.
 */

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '88',
        },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
  env: {
    test: {
      // Special configuration for Jest tests
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
    production: {
      // Production-specific settings
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              chrome: '88',
            },
            useBuiltIns: 'usage',
            corejs: 3,
          },
        ],
      ],
      plugins: [
        // Additional optimization plugins for production
      ],
    },
  },
};