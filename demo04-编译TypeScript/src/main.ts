const NUM = 13

interface Cat { 
  name: String,
  gender: String
}

function touchCat(cat: Cat){
  console.log('miao~', cat.name)
}

touchCat({
  name: 'tom',
  gender: 'male'
})