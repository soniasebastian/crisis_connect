import React, { useState } from "react";
import {useLocation} from "react-router-dom";

function UserInfoForm ({ helpRequest })  {
    const location = useLocation();
    const receivedData = location.state;

    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(address);
    }

    return (
        <div>
            {/*<div>
            <h2>Submitted Options</h2>
            <ul>
                {receivedData.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
            </div>*/}
            <div className={'auth-form-container'}>
            <h2>If you need help, please fill out your info</h2>

                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" />
                    <label htmlFor="address">Address</label>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" id="address" name="address" />
                    <label htmlFor="phone">Phone</label>
                    <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="phone" id="phoneNumber" name="phoneNumber" />
                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default UserInfoForm;