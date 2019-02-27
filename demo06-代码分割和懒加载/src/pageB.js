//require.include('./moduleA')

import(/* webpackChunkName: 'subPageA' */ './subPageA').then(function(subPageA){
  console.log('pageB',subPageA)
})

import(/* webpackChunkName: 'subPageB' */ './subPageB').then(function(subPageB){
  console.log('pageB',subPageB)
})

import(/* webpackChunkName: 'vendor' */ 'lodash').then(function(){
  console.log('pageB', _.join([1,2],3))
})
 
export default 'pageA'
// import() 方法