import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { order, restock } from './cakeSlice'

const CakeView = () => {

  const [value, setValue] = useState(1)
  const numOfCake = useSelector((state) => state.cake.numOfCake)
  const dispatch = useDispatch()
  
  return (
    <>
      <h2>Number of Cakes - {numOfCake}</h2>
      <input
        type='text'
        value={value}
        onChange={e => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(order())}>Order Cake</button>
      <button onClick={() => dispatch(restock(value))}>Restock Cakes</button>
    </>
  );
};

export default CakeView;
