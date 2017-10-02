// Promise global, Used ( at least ) by 'whatwg-fetch'. And required by IE 11
require("core-js/es6/string")

if(!window.Promise) {
  require("core-js/fn/promise")
}
