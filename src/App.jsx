import React, { useEffect, useState } from 'react'
import { items } from './components/Data'
import Navbar from './components/Navbar'
import Product from './components/Product'
import About from './components/About'
import User from './components/User'
import ProductDetails from './components/ProductDetails'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import Footer from './components/Footer'
import { 
  BrowserRouter,
  Routes,
  Route} from 'react-router-dom'

const App = () => {

  const [data, setData] = useState([...items])
  
  let saved = localStorage.getItem('cart');
  const [cart, setCart] = useState(saved ? JSON.parse(saved) : []);
  
  const onDelete = (itemsToDelete) => {
    setCart(cart.filter((e) => e !== itemsToDelete ));
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
   <>
   <BrowserRouter>
    
    <Navbar title="Shopzy" setData={setData} cart={cart} />
    
     <Routes>
     
     <Route path="/" element={<Product items={data} cart={cart} setCart={setCart}/>}/>

     <Route path="/about" element={<About/>}/>
     <Route path="/user" element={<User cart={cart}/>}/>

     <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart}/>}/>
     <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart}/>}/>

     <Route path="/cart" element={<Cart cart={cart} setCart={setCart} onDelete={onDelete}/>}/>
 
     </Routes>

    <Footer/>
   
   </BrowserRouter>
   </>
  )
}

export default App
