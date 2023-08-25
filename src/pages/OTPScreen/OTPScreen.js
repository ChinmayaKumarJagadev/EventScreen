import React, { useState } from "react";
import TopHeader from "../../components/TopHeader/TopHeader";
import "./OTPScreen.css";
import ButtonContainer from "../../components/Button/Button";
import { handleOtpChange } from './OTPFunction'

const OTPScreen = () => {
    const [otpDigits, setOtpDigits] = useState(['4', '6', '3', '1']);

    const handleChange = (index, value) => {
        handleOtpChange(otpDigits, setOtpDigits, index, value);
    };

    return (
        <div className="otpScreen">
            <TopHeader />

            <p className="otpTitle">
                We have sent OTP to your number registered with WhatsApp
            </p>
            <div className="mainOTP">
                <p className="otp">OTP</p>

                <div className="optContainer">
                    {otpDigits.map((digit, index) => (
                        <input
                            key={index}
                            className="otp-box"
                            type="tel"
                            inputMode="numeric"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                        />
                    ))}
                </div>

                <div className="text-right mt-2">
                    <p className="resendOTP">Resend OTP</p>
                </div>

                <ButtonContainer />
            </div>
        </div>
    );
};
export default OTPScreen;
