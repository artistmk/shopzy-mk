import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import '../responsive/Productdetails.css'
import Product from './Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({cart, setCart}) => {

  const {id} = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
     
    const filterProduct = items.filter((product) =>  product.id == id)
    setProduct(filterProduct[0]);

    const relatedProducts = items.filter((p) => p.category === product.category)
    setRelatedProducts(relatedProducts);

  }, [id, product.category])

  const addToCart = (id, price, title, description, imgSrc) => {
      
      const obj = {
        id: id,
        price: price,
        title: title,
        description: description,
        imgSrc: imgSrc
      }
      
      let flag = true;
  
      if(cart != null && cart.length > 0) {
      
        for (let i=0; i<cart.length; i++) {
  
          if(cart[i].id === id) {
            flag = false;
  
            toast.info('Item Already Added To Cart', {
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
     <div className="container flexi">
            
        <div className="img">

            <img src={product.imgSrc} alt="..." />
        </div>
        
        <div className='text-center'>
        <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem"}}>
          <div className="btn btn-dark">{product.price} ₹</div>
          <div className="btn btn-warning" onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}>Add To Cart</div>
           </div>
        </div>
     </div>

     <h1 className='related text-light'>Discover More - Related Products...</h1>

     <Product items={relatedProducts} cart={cart} setCart={setCart}/>
    </>
  )
}

export default ProductDetails
