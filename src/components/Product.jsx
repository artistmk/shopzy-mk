import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({items, cart, setCart}) => {

  const addToCart = (id, price, title, description, imgSrc) => {
    
    const obj = {
      id: id,
      price: price,
      title: title,
      description: description,
      imgSrc: imgSrc
    }
    
    let flag = true;

    if(cart !== null && cart.length > 0) {
    
      for (let i=0; i<cart.length; i++) {

        if(cart[i].id === id) {
          flag = false;

          toast.info('Product Already Added To Cart', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          
          break;
        }
      }
    }
    
    if(flag) {
      setCart([...cart, obj]);
      
      toast.success('Great choice! Your item is Added', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  
  let myStyle = {
      minHeight: "70vh",
      margin: "40px auto",
  }

  return (
   <>
<ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

   <div className="container my-5" style={myStyle}>

     <div className="row">
      
      {items.map((product) => {
         return (

         <div key={product.id} className='col-lg-4 col-md-6 my-3 text-center'>
         
         <div className="card" style={{width: "18rem"}}>
                
                <Link to={`/product/${product.id}`} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img src={product.imgSrc} className="card-img-top" alt="..."/>
                </Link>

           <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description.slice(0, 60)}...</p>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem"}}>
          <div className="btn btn-success">{product.price} ₹</div>
          <div className="btn btn-warning" onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}>Add To Cart</div>
           </div>

       </div>
       </div>

         </div>
         )
      })}
     </div>
   </div>
   </>
  )
}

export default Product
