import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import CurrencyChange from './ChangeCurrency';

const background = 'red';
const color = 'white';

const CurrencyDropDown = () =>{
    const { dispatch, currency } = useContext(AppContext)
    return (
        <div>
            <select className="custom-select" style={{background, color}} value={currency} onChange={(event) => CurrencyChange(event, dispatch)}>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
                <option value="£">£ Pound</option>
            </select>
        </div>
    );
}

export default CurrencyDropDown ;