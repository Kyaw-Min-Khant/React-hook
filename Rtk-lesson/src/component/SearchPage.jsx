import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Product from './Product';

const SearchPage = () => {
    const location=useLocation()
    const product=location?.state?.filterProduct;
  return (
    <div className=" flex justify-center gap-10 flex-wrap">
      {product?.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
}

export default SearchPage