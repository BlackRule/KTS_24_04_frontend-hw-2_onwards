import { Navigate, Route, Routes } from 'react-router-dom'
import  Header  from 'components/Header'
import Login from 'pages/Login/Login'
import Product from 'pages/Product'
import Products from 'pages/Products'
import Signup from 'pages/Signup/Signup'
import User from 'pages/User/User'
import {useCartStoreInit} from 'stores/RootStore/hooks/useCartStoreInit'
import {useQueryParamsStoreInit} from 'stores/RootStore/hooks/useQueryParamsStoreInit'
import styles from './App.module.scss'

const App = () => {
  useQueryParamsStoreInit()
  useCartStoreInit()
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/product">
          <Route path=":id" element={<Product />} />
          <Route path="" element={<Navigate to="/404" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
