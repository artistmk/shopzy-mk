import React, { useState } from 'react'
import '../responsive/Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { FaOpencart } from "react-icons/fa";

const Navbar = (props) => {

  const location = useLocation();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
     
    const element = items.filter((product) => product.category === category)
    props.setData(element);
  }

  const filterByPrice = (price) => {
    
    const element = items.filter((p) => p.price >= price)
    props.setData(element);
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }

  return (
   <>
    <header>

       <div className="nav-bar sticky-top">

         <Link to={"/"} className="brand">{props.title}</Link>

         <form onSubmit={handleSubmit} id='searchinput' name='searchinput' className="search-bar">
             <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="search" placeholder='Search Products...'/>
         </form>
        
        <Link to={"/about"} className="about decorate">About</Link>
        <Link to={"/user"} className="user decorate">User</Link>

        <Link to={"/cart"} className="cart">
          <button type="button" className="btn btn-info position-relative">

          <FaOpencart style={{fontSize: "1.7rem"}}/>

  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {props.cart.length}
    <span className="visually-hidden">unread messages</span>
     </span>
    </button>
   </Link>
          
       </div>

     {location.pathname === "/" ? (
         
         <div className="navbar-wrapper">
        
        <div className="items">Adjust Prefrences!</div>
        <div onClick={() => props.setData(items)} className="items">View All</div>
        <div onClick={() => filterByCategory("mobiles")} className="items">Mobiles</div>
        <div onClick={() => filterByCategory("laptops")} className="items">Laptops</div>
        <div onClick={() => filterByCategory("tablets")} className="items">Tablets</div>
        <div onClick={() => filterByPrice(29999)} className="items">29K+</div>
        <div onClick={() => filterByPrice(49999)} className="items">49K+</div>
        <div onClick={() => filterByPrice(69999)} className="items">69K+</div>
        <div onClick={() => filterByPrice(89999)} className="items">89K+</div>
    
       </div>
     ) : "" }  
      
    </header>
   </>
  )
}

export default Navbar
