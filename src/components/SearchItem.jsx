import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';

const SearchItem = ({cart, setCart}) => {

  const {term} = useParams();

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    
    const filteredData = () => {
      
      const data = items.filter((p) => p.title.toLowerCase().includes(term.toLowerCase()));
      setFilterData(data);
    }

    filteredData();

  }, [term])

  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
}

  return (
    <>
    {filterData.length === 0 ? (
       
      <div style={myStyle}>
        <h1 className='related text-light my-5'>Search Item Not Found :{"("}</h1>   
      </div>
      
    ) : (
    
    <Product items={filterData} cart={cart} setCart={setCart} />

    )}
    </>
  )
}

export default SearchItem
