import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import WebApp from 'layout/web'
import WebApp from 'views'

function App() {
  return (
    <BrowserRouter>
      {/* {children} */}
      <WebApp />
    </BrowserRouter>
  )
}

export default App
