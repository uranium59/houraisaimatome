module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  plugins:[
    'standard',
    'vue'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'indent': 0,
    'semi': 0,
    'quotes': 1,
    'spaced-comment': 0,
    'no-trailing-spaces': 0,
    'comma-dangle': 0,
    'operator-linebreak': 0,
    'keyword-spacing': 0,
    'padded-blocks': 0,
    'space-before-blocks': 0,
    'yoda': 0,
    'no-multi-spaces': 0,

    // #
    // for VUE
    'vue/no-v-html': 0,
    'vue/max-attributes-per-line': 0,
  }
}