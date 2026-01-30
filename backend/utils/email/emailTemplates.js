export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Email Verification</title>
</head>

<body style="margin:0; padding:0; background:#f3f4f6; font-family:Arial, sans-serif;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding:20px 0;">
        
        <table width="600" style="background:#fff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
          
          <tr>
            <td style="background: linear-gradient(135deg, #4caf50, #43a047); padding:30px; text-align:center;">
              <h1 style="margin:0; color:white; font-size:28px;">Verify Your Email</h1>
            </td>
          </tr>

          <tr>
            <td style="padding:25px 30px; color:#333;">
              
              <p style="font-size:16px;">Hello <strong>{userName}</strong>,</p>
              <p style="font-size:15px;">Thanks for signing up! Your verification code is:</p>

              <div style="text-align:center; margin:35px 0;">
                <span style="font-size:36px; font-weight:bold; padding:12px 20px; color:#4CAF50; border:2px dashed #4CAF50; border-radius:8px;">
                  {verificationCode}
                </span>
              </div>

              <p style="font-size:15px;">Enter this code on the verification page to complete your registration.</p>
              <p style="font-size:15px;">This code is valid for <strong>15 minutes</strong>.</p>

              <p style="font-size:15px;">If you didn’t request this, you can safely ignore this email.</p>

              <p style="margin-top:20px; font-size:15px;">Regards,<br><strong>App Team</strong></p>
            </td>
          </tr>

          <tr>
            <td style="text-align:center; padding:20px; background:#fafafa; color:#999; font-size:12px;">
              This is an automated message. Please do not reply.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
`;
export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Password Reset Request</title>
</head>

<body style="margin:0; padding:0; background:#f3f4f6; font-family:Arial, sans-serif;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding:20px 0;">

        <table width="600" style="background:#fff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">

          <tr>
            <td style="background: linear-gradient(135deg, #4caf50, #43a047); padding:30px; text-align:center;">
              <h1 style="margin:0; color:white; font-size:28px;">Reset Your Password</h1>
            </td>
          </tr>

          <tr>
            <td style="padding:25px 30px; color:#333;">

              <p style="font-size:16px;">Hello <strong>{userName}</strong>,</p>
              <p style="font-size:15px;">We received a request to reset your password.</p>
              
              <p style="font-size:15px;">Click the button below to reset your password:</p>

              <div style="text-align:center; margin:35px 0;">
                <a href="{resetURL}"
                  style="background:#4CAF50; color:white; padding:14px 28px; text-decoration:none; font-size:16px; border-radius:5px; display:inline-block;">
                  Reset Password
                </a>
              </div>

              <p style="font-size:15px;">This link will expire in <strong>1 hour</strong>.</p>
              <p style="font-size:15px;">If you didn't request this, simply ignore the email.</p>

              <p style="margin-top:20px; font-size:15px;">Regards,<br><strong>App Team</strong></p>
            </td>
          </tr>

          <tr>
            <td style="text-align:center; padding:20px; background:#fafafa; color:#999; font-size:12px;">
              This is an automated message. Please do not reply.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
`;
export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Password Reset Successful</title>
</head>

<body style="margin:0; padding:0; background:#f3f4f6; font-family:Arial, sans-serif;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding:20px 0;">

        <table width="600" style="background:#fff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">

          <tr>
            <td style="background: linear-gradient(135deg, #4caf50, #43a047); padding:30px; text-align:center;">
              <h1 style="margin:0; color:white; font-size:28px;">Password Reset Successful</h1>
            </td>
          </tr>

          <tr>
            <td style="padding:25px 30px; color:#333;">

              <p style="font-size:16px;">Hello <strong>{userName}</strong>,</p>
              <p style="font-size:15px;">Your password has been successfully updated!</p>

         <div style="text-align:center; margin:35px 0;">
            <div style="background:#4CAF50; color:white; font-size:40px; width:70px; height:70px; border-radius:50%; line-height:70px; text-align:center; display:inline-block;
                ">
                ✓
            </div>
            </div>
              <p style="font-size:15px;">If you didn't perform this action, please contact support immediately.</p>
            <p style="font-size:15px; margin-top:20px;">Regards,<br><strong>App Team</strong></p>
            </td>
          </tr>

          <tr>
            <td style="text-align:center; padding:20px; background:#fafafa; color:#999; font-size:12px;">
              This is an automated message. Please do not reply.
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>
`;
