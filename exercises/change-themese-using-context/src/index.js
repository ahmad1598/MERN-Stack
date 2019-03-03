import React from 'react'
import ReactDOM from 'react-dom'
import App from './Component/App.js'
import ThemeProvider from './context/ThemeProvider.js'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>,
document.getElementById('root'))