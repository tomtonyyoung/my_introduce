import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

window.addEventListener('scroll', function(ev) {
    document.body.toggleAttribute('scroll', true)
    this.timer && clearTimeout(this.timer)
    this.timer = setTimeout(() => {
        document.body.toggleAttribute('scroll')
    }, 500)
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
,
)
