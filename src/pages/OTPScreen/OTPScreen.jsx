import React, { useState, useRef } from "react";
import TopHeader from "../../components/TopHeader/TopHeader";
import "./OTPScreen.scss";
import ButtonContainer from "../../components/Button/Button";
import { handleOtpChange } from './OTPFunction'

const OTPScreen = () => {
    const [otpDigits, setOtpDigits] = useState(['4', '6', '3', '1']);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const handleChange = (index, value) => {
        handleOtpChange(otpDigits, setOtpDigits, index, value);
        if (value !== '') {
            if (index < otpDigits.length - 1) {
                inputRefs[index + 1].current.focus();
            }
        } else {
            if (index > 0) {
                inputRefs[index - 1].current.focus();
            }
        }
    };
    return (
        <div className="otpScreen">
            <TopHeader />
            <div className="otpTitle">We have sent OTP to your number registered with WhatsApp</div>
            <div className="mainOTP">
                <div className="otp">OTP</div>
                <div className="optContainer">
                    {otpDigits.map((digit, index) => (
                        <input key={index} className="otp-box" type="number" maxLength="1" value={digit} ref={inputRefs[index]} onChange={(e) => handleChange(index, e.target.value)} />
                    ))}
                </div>
                <div className="text-right"><p className="resendOTP">Resend OTP</p></div>
                <ButtonContainer />
            </div>
        </div>
    );
};
export default OTPScreen;
