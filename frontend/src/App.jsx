import './App.css'
import { Route, Routes } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import Login from './pages/Login'
import Register from './pages/Register'
import OrderCartPage from './pages/OrderCartPage'
import { UserContextProvider } from './context/UserContext'

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path='/products' element={<ProductPage />} />
        <Route exact path='/ordercart' element={<OrderCartPage />} />
        <Route exact path='/contact' element={<ContactPage />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App
