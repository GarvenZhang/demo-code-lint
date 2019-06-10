import React from 'react'
import ReactDOM from 'react-dom'
import { InitReducers } from '@/store/reducers'
import { createStore } from 'redux'
import { windowResize } from '@/store/actions'
// 这个是react-redux提供的管理state的组件，把它放在最高层就可以实现统一管理state。
import { Provider } from 'react-redux'
// router
import { RouteMap } from '@/router/router.js'
import '@/assets/scss/app.scss'
// 引入element ui
import 'element-theme-default'
const store = createStore(InitReducers)

console.log(store, 'store================')
window.onresize = function () {
  store.dispatch(windowResize({
    width: window.innerWidth,
    height: window.innerHeight
  }))
}

ReactDOM.render(
  <Provider store={store}>
    <RouteMap />
  </Provider>
  , document.querySelector('#app')
)
