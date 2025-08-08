import nodemailer from "nodemailer";

export const SendOtp = (email, OTP) => {
  // the email or transporter through email send
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "wwwsajjadmalik1122@gmail.com",
      pass: "bknfkwtrwfpeqqwu",
    },
  });
  //  options
  let mailOptions = {
    from: "wwwsajjadmalik1122@gmail.com",
    to: email,
    subject: "OTP Verification",
    html: `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
    <style>
        /* Reset styles for email clients */
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f9;
        }
        table {
            border-collapse: collapse;
            width: 100%;
        }
        img {
            border: 0;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }
        a {
            text-decoration: none;
        }
        /* Main container */
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        /* Header */
        .header {
            background: linear-gradient(135deg, #4a90e2, #50c9c3);
            padding: 30px 20px;
            text-align: center;
            color: #ffffff;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
        }
        /* Content */
        .content {
            padding: 30px 20px;
            text-align: center;
            color: #333333;
        }
        .content h2 {
            font-size: 22px;
            margin: 0 0 20px;
        }
        .content p {
            font-size: 16px;
            margin: 0 0 20px;
            color: #555555;
        }
        /* OTP Box */
        .otp-box {
            display: inline-block;
            background-color: #f8f9fa;
            padding: 15px 30px;
            border-radius: 6px;
            font-size: 24px;
            font-weight: bold;
            color: #4a90e2;
            letter-spacing: 5px;
            margin: 20px 0;
            border: 1px solid #e0e0e0;
        }
        /* Button */
        .button {
            display: inline-block;
            padding: 12px 30px;
            background: linear-gradient(135deg, #4a90e2, #50c9c3);
            color: #ffffff !important;
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
            border-radius: 25px;
            margin: 20px 0;
            transition: background 0.3s ease;
        }
        .button:hover {
            background: linear-gradient(135deg, #357abd, #3ba8a2);
        }
        /* Footer */
        .footer {
            background-color: #f4f4f9;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #777777;
        }
        .footer a {
            color: #4a90e2;
            text-decoration: none;
        }
        /* Responsive Design */
        @media only screen and (max-width: 600px) {
            .container {
                width: 100%;
            }
            .header h1 {
                font-size: 24px;
            }
            .content h2 {
                font-size: 20px;
            }
            .otp-box {
                font-size: 20px;
                padding: 10px 20px;
            }
            .button {
                padding: 10px 20px;
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" bgcolor="#f4f4f9">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table class="container" role="presentation" cellpadding="0" cellspacing="0">
                    <!-- Header -->
                    <tr>
                        <td class="header">
                            <h1>Verify Your Account</h1>
                        </td>
                    </tr>
                    <!-- Content -->
                    <tr>
                        <td class="content">
                            <h2>Your One-Time Password (OTP)</h2>
                            <p>Please use the following OTP to verify your account. This code is valid for the next 10 minutes.</p>
                            <div class="otp-box">${OTP}</div>
                            <p>If you didn't request this verification, please ignore this email or contact our support team.</p>
                            <a href="https://yourwebsite.com/verify" class="button">Verify Now</a>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td class="footer">
                            <p>Need help? <a href="mailto:support@yourwebsite.com">Contact Support</a></p>
                            <p>&copy; 2025 Your Company Name. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  };
  // finally sending mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("mail sent successfully");
    }
  });
};
