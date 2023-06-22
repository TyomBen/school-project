import { gettingData } from "../../feauters/actions/carts";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Countries from "../Countries";
import { initialStateValue, valueFolow } from "../../feauters/reducers/cartSlices";
const Cart = () => {
    const {data,  dataSearching} = useSelector (({carts}) => carts)
    const dispatch = useDispatch ()
    useEffect (() => {
        try {
            dispatch (gettingData ()) 
            dispatch (dataSearching()) 
            dispatch ()
        }catch (e) {
            console.log(e);
        }
    
    }, [])
    const SearchInput = (event) => {
        dispatch (valueFolow (event.target.value))
        console.log(event.target.value);
    }
    return (
        <>
        <input type="text" onChange={(event) => SearchInput (event)}/>
        {
                data.map ((countries) => (
                    <Countries countries = {countries} />
                ))
        }
        </>
        
    )
}
export default Cart;