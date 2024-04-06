#!/usr/bin/env node
"use strict";
//OTP Generotor Function
let otp = "";
function otpGenerator(otplenght) {
    for (let i = 0; i < otplenght; i++) {
        otp += Math.floor((Math.random() * 10)).toString();
    }
    return otp;
}
let setOtpLenght = 6; //Set lenght of OTP number you want.It could be 4,5 or 6.
console.log(`Your OTP: ${otpGenerator(setOtpLenght)}`);
