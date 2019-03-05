module.exports = {
  root: true,
  extends: 'standard',
  plugins:[
    'html'
  ],
  env: {
    browser:true,
    node:true
  },
  globals: {
    $: true // eslint 不允许使用全局变量 ，所以添加global
  },
  rules: {
    'eol-last':['error','never']
  }
}