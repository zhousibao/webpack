$('div').addClass('new')

const APIURL = '/api/notes/38552723/included_collections'
const data = {
  page: 1
}

$.get(APIURL, data, function (data) {
  console.log(data)
})

// 真正业务中由loaders解决
if (module.hot) {
  module.hot.accept()
}