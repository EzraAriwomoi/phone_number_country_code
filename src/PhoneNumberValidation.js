import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import './PhoneNumberValidation.css';

function PhoneNumberValidation() {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);

    const handleChange =(value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{12}$/;
        return phoneNumberPattern.test(phoneNumber);
    }


    return (
        <div className="container">
            <h2>Phone Number Validation</h2>
            <div className="phone-input-container">
            <label className="label">
                Phone Number:
                <PhoneInput
                country={'ke'}
                value={phoneNumber}
                onChange={handleChange}
                placeholder="+254"
                inputProps={{
                    required: true,
                }}
                />
            </label>
            {! valid && (
                <p className="error-message">Please enter a valid phone number!</p>
            )}
            </div>
        </div>
    );
}

export default PhoneNumberValidation;
