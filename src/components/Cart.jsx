import React from 'react'
import { Link } from 'react-router-dom'
import '../responsive/Cart.css'

const Cart = ({cart, setCart, onDelete}) => {

  const myStyle = {
    minHeight: "70vh",
    margrin: "40px auto"
  }

  return (
   <>
   <div style={myStyle}>

     <div className="container my-5" style={{width: "54%"}}>

      {cart.length === 0 ? (
          <>
       <div className='text-center'>
          <h1> Your Cart is Empty :{"("} </h1>
          <Link to={"/"} className="btn btn-dark shopi my-3" style={{fontSize: "15px"}}>Continue Shopping...</Link>
        </div>
        </>
      ) : cart.map((p) => {
        return (
          <div className="card mb-3 my-5" key={p.id} style={{width: "700px"}}>

          <div className="row g-0">
            <div className="col-md-4">
              <img src={p.imgSrc} className="img-fluid rounded-start" alt="..."/>
            </div>

            <div className="col-md-8">
              <div className="card-body text-center my-4" >
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.description}</p>
          <div className='container text-center my-4 flexi1' style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "3rem"}}>
           <button className='btn btn-dark'>{p.price} ₹</button>
        <button className="btn btn-primary">BUY NOW</button>
         <button onClick={() => onDelete(p)} className='btn btn-danger'>Remove</button>
        </div>
              </div>
            </div>
          </div>
        </div>
         )
        })}

     </div>

     {cart.length !=0 && (
       <div className="container text-center my-5" style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "3rem"}}>
           <div className="btn btn-dark">Check Out</div>
           <div onClick={() => setCart("")} className="btn btn-danger">Clear All</div>
       </div>
     )}
         </div>
   </>
  )
}

export default Cart
