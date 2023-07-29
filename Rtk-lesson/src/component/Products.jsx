import React, { useEffect, useState } from 'react'
import Product from './Product';
import Loading from './Loading';

const Products = () => {
  const [load,setLoad]=useState(true);

    const [product,setProduct]=useState([]);
        useEffect(() => {
          fetchData();
        setLoad(true)
        }, []);
    const fetchData=async()=>{
        const data = await fetch("https://dummyjson.com/products");
        const {products}=await data.json();
        setProduct(products);
        console.log(product);
        setLoad(false)
    }
 if(load){
 return <Loading/>
 }

  return (
    <div className='flex justify-center gap-10 flex-wrap'>
      {product?.map((item)=>{
        return(
            <Product key={item.id} {...item}/>
        )
      })}
    </div>
  )
}

export default Products
