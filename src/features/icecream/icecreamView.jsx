import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { order, restock } from './icecreamSlice'

const IcecreamView = () => {

  const numofIcecream = useSelector((state) => state.icecream.numOfIceCream)
  const dispatch = useDispatch()

  return (
    <>
      <h2>Number of icecream - { numofIcecream }</h2>
      <button onClick={(state) => dispatch(order())}>Order icecream</button>
      <button onClick={(state) => dispatch(restock(1))}>Restock icecream</button>
    </>
  );
};

export default IcecreamView;
