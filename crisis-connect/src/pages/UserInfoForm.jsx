import React, { useState } from "react";
import {useLocation} from "react-router-dom";
import './UserInfoForm.css';

function UserInfoForm ({ helpRequest })  {
    const location = useLocation();
    const receivedData = location.state;

    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const help = [name, address, phoneNumber, receivedData]
        console.log(help);//submit to IcanHelp
    }

    return (
        <div className={'userInfoForm'}>
            {/*<div>
            <h2>Submitted Options</h2>
            <ul>
                {receivedData.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
            </div>*/}
            <div className={'reg-form-container'}>
            <h2 className={'h2-title'}>If you need help, please fill out your info</h2>

                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label className='label-container'>Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" required />
                    </div>

                    <div className="input-container">
                    <label className='label-container'>Address</label>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" id="address" name="address" required/>
                    </div>

                    <div className="input-container">
                    <label className='label-container'>Phone Number</label>
                    <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="phone" id="phoneNumber" name="phoneNumber" required/>
                    </div>

                    <div className="button-container">
                        <button type="submit" >Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default UserInfoForm;