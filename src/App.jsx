import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import MainLayout from './components/mainlayout'
import HomePage from './pages/homepage/homepage'
import BirthdayCakes from './pages/cakes/birthdaycakes'
import Cake from './pages/cakes/cake'
import Cart from './pages/cart/cart'
import Checkout from './pages/checkout/checkout'
import CheckoutLayout from './components/checkoutlayout'
import Payment from './pages/checkout/payment'
import Summary from './pages/checkout/summary'
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path = "birthday-cakes" element = {<BirthdayCakes/>}/>
          <Route path = "birthday-cakes/:id" element = {<Cake/>}/>
          <Route path='cart' element = {<Cart/>}/>
          <Route path='checkout' element = {<CheckoutLayout/>}>
            <Route index element = {<Checkout/>}/>
            <Route path='payment' element = {<Payment/>}/>
            <Route path='summary' element = {<Summary/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
