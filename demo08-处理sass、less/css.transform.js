module.exports = function(css){
  console.log(css);
  console.log(window.innerWidth)
  let transformCss;
  if(window.innerWidth >= 768){
    transformCss = css.replace('red','green')
  }else{
    transformCss = css.replace('red','orange')
  }
  return transformCss
} 