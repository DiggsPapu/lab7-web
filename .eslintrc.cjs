module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'Description of the rule',
    },
    fixable: 'code',
    schema: [
      {
        type: 'array',
        items: [
          {
            enum: ['always'],
          },
        ],
      },
    ],
    messages: {
      lineBiggerThan120: 'Line bigger than 120 characters',
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
  },
}
