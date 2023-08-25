import React, { useState } from "react";
import TopHeader from "../../components/TopHeader/TopHeader";
import "./OTPScreen.css";
import ButtonContainer from "../../components/Button/Button";

const OTPScreen = () => {
    const [otpDigits, setOtpDigits] = useState(['4', '6', '3', '1']);

    const handleOtpChange = (index, value) => {
        if (!isNaN(value) && value.length <= 1) {
            const updatedOtpDigits = [...otpDigits];
            updatedOtpDigits[index] = value;
            setOtpDigits(updatedOtpDigits);
        }
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
                            onChange={(e) => handleOtpChange(index, e.target.value)}
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
