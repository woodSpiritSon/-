import React from 'react'
import ReactDOM from 'react-dom'
import fetchJSONP from 'fetch-jsonp'

//设置自己的baseURL
React.Component.prototype.baseURL = "https://api.douban.com"
//挂载发起JSONP 请求的API
React.Component.prototype.$http = fetchJSONP

// http://39.106.32.91:3005
// https://api.douban.com
import App from "@/comment/App.jsx"


ReactDOM.render(
    <App></App>
,document.getElementById('app') )
