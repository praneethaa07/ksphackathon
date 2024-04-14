const express = require('express');
const jsOTP = require('jsotp');

const app = express();
const PORT = process.env.PORT || 3000;

// Generate and return OTP
app.get('/getotp', (req, res) => {
    try {
        // Generate a new TOTP token
        const secret = 'ksp002'; // Replace 'your_secret_key' with your secret key
        const totp = jsOTP.totp();
        const otp = totp.getOtp(secret);

        // You can also set additional parameters such as token length and expiry time
        // const otp = totp.getOtp(secret, { tokenLength: 6, expiresIn: 30 });

        // Return the OTP as JSON
        res.json({ otp });
    } catch (error) {
        console.error('Error generating OTP:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
