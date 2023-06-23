import { gettingData } from "../../feauters/actions/carts";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Countries from "../Countries";
import { valueFolow } from "../../feauters/reducers/cartSlices";
import { Spin } from "antd";
import "./styles.css";
const Cart = () => {
  const { data, initialStateValue, isloading } = useSelector(
    ({ carts }) => carts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(gettingData());
    } catch (e) {
      console.log(e);
    }
  }, [initialStateValue]);

  const SearchInput = (event) => {
    dispatch(valueFolow(event.target.value));
  };
  return (
    <>
      <input type="text" value={initialStateValue} onChange={SearchInput} />
      <div className="countries-container">
        {isloading ? (
          <Spin size="large" className="spin" />
        ) : (
          data.map((countries) => (
            <div key={countries.ccn3}>
              <Countries countries={countries} />
            </div>
          ))
        )}
      </div>
    </>
  );
};
export default Cart;
