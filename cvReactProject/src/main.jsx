import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from '../components/landing'
import './cv.css'
import Form from '../components/form'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Landing/>
    <Form/>
  </React.StrictMode>,
)
