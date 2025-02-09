import React, { useState } from "react";
import "../../src/App.css";

const OtpLogin = ({ otpLength = 5 }) => {
  const [otpValue, setOtpValue] = useState(null);

  const otpLengthArray = Array(otpLength).fill("");

  const handleInputChange = (e) => {
    let val = e.target.value;
    setOtpValue(val);
  };

  return (
    <div className="otp-wrapper">
      {otpLengthArray.map((otp, index) => {
        return (
          <input
            type="text"
            key={index}
            value={otpValue}
            onChange={handleInputChange}
            maxLength={1}
          />
        );
      })}
    </div>
  );
};

export default OtpLogin;
