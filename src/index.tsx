import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Header from 'components/Header'
import Product from 'pages/Product'
import Products from 'pages/Products'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const App=()=>{
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product">
            <Route path=':id' element={<Product/>}/>
            <Route path="" element={<Navigate to="/404" replace />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
