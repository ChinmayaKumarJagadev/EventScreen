export const handleOtpChange = (otpDigits, setOtpDigits, index, value) => {
    if (!isNaN(value) && value.length <= 1) {
        const updatedOtpDigits = [...otpDigits];
        updatedOtpDigits[index] = value;
        setOtpDigits(updatedOtpDigits);
    }
};
