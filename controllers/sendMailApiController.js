import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: "../config.env" });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.E_PASS,
  },
});

const sendMail = (req, res) => {
  const { bID, name, email, chkIn, chkOut, pkg } = req.body;

  const mailOptions = {
    from: '"comelankatours@gmail.com" <comelankatours@gmail.com>',
    to: email,
    subject: "Booking Accepted",
    text: "ComeLankaTours",
    html: `
    <style type="text/css">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }
  </style>

  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    @import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap);
  </style>

  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    }
  </style>
  <style type="text/css">
    @media only screen and (max-width:480px) {
      table.mj-full-width-mobile {
        width: 100% !important;
      }

      td.mj-full-width-mobile {
        width: auto !important;
      }
    }
  </style>
  <style type="text/css">
    a,
    span,
    td,
    th {
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale !important;
    }
  </style>
</head>

<body style="background-color:#F4F5FB;">
  <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"> ComeLankaTours Mails </div>
  <div style="background-color:#F4F5FB;">

    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
 
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td style="font-size:0px;word-break:break-word;">
  
                      <div style="height:5px;"> &nbsp; </div>
                
            </td>
          </tr>
        </tbody>
      </table>
    </div>

       <div style="line-height:0;font-size:0;">
        <table align="center" background="" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:url(https://i.ibb.co/nQG35kT/com05.png) top center / auto no-repeat;width:100%;border-radius:20px;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                    <tr>
                      <td align="center" style="font-size:0px;padding:8px 0;word-break:break-word;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                          <tbody>
                            <tr>
                              <td style="width:80px;">
                               
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="font-size:0px;word-break:break-word;">
    
                        <div style="height:250px;"> &nbsp; </div>
       
                      </td>
                    </tr>
                  </table>
                </div>
      
                  </table>
        
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
 
    <div style="background:#F4F5FB;background-color:#F4F5FB;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#F4F5FB;background-color:#F4F5FB;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:10px;text-align:center;">

              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                </table>
              </div>
     
            </td>
          </tr>
        </tbody>
      </table>
    </div>
 
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;border-radius:20px;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;border-radius:20px;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">

              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Montserrat, Helvetica, Arial, sans-serif;font-size:20px;font-weight:500;line-height:30px;text-align:left;color:#8189A9;">Hi ${name}, <br> Thank you for Choosing Us.</div>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Montserrat, Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;line-height:20px;text-align:left;color:#8189A9;">
                        <p>Your Booking (#<span style="color: #ff0000;">${bID}</span>) was successfully placed and your payment has been processed. Here is your Booking summary: </p>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
         
            </td>
          </tr>
        </tbody>
      </table>
    </div>
 
    <div style="background:#F4F5FB;background-color:#F4F5FB;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#F4F5FB;background-color:#F4F5FB;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:10px;text-align:center;">
   
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                </table>
              </div>
         
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;border-radius:20px;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;border-radius:20px;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
 
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="left" class="receipt-table" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <table cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#8189A9;font-family:Montserrat, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:none;">
                        <tr>
                          <th colspan="3" style="font-size: 20px; line-height: 30px; font-weight: 500; text-align: center; border-bottom: 2px solid #ddd; padding: 0 0 20px 0;" align="center">Booking summary </th>
                        </tr>
                        <tr>
                          <td style="font-size: 15px; line-height: 22px; font-weight: 400; word-break: normal; width: 60%; padding-top: 10px;" width="60%">Check In Date</td>
                          <td style="font-size: 15px; line-height: 22px; font-weight: 400; word-break: normal; text-align: right; width: 20%;" width="20%" align="right"></td>
                          <td style="font-size: 15px; line-height: 22px; font-weight: 400; word-break: normal; text-align: right; width: 20%;" width="20%" align="right">${chkIn}</td>
                        </tr>
                        <tr>
                          <td style="font-size: 15px; line-height: 22px; font-weight: 400; word-break: normal;">Check Out Date</td>
                          <td style="font-size: 15px; line-height: 22px; font-weight: 400; word-break: normal; text-align: right; padding: 0 0 10px;" align="right"></td>
                          <td style="font-size: 15px; line-height: 22px; font-weight: 400; word-break: normal; text-align: right; padding: 0 0 10px;" align="right">${chkOut}</td>
                        </tr>
                        <tr>
                          <td style="font-size: 15px; line-height: 22px; font-weight: 400; word-break: normal; border-bottom-width: 1px; border-bottom-color: #ddd; border-bottom-style: solid; padding-top: 10px;"></td>
                          <td style="font-size: 15px; line-height: 22px; font-weight: 400; word-break: normal; border-bottom-width: 1px; border-bottom-color: #ddd; border-bottom-style: solid; padding-top: 10px;"></td>
                          <td style="font-size: 15px; line-height: 22px; font-weight: 400; word-break: normal; border-bottom-width: 1px; border-bottom-color: #ddd; border-bottom-style: solid; padding-top: 10px;"></td>
                        </tr>
                        <tr>
                          <td style="word-break: normal; font-size: 16px; line-height: 30px; border-top: 1px solid #ddd; font-weight: 500; padding: 10px 0px 0px 0px; text-align: left;" colspan="6" "><span style="font-size: 20px;">Package</span><span style="text-align: right; padding-left: 100px;">${pkg}</span></td>
                         </tr>
                        
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
   
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="background:#F4F5FB;background-color:#F4F5FB;margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#F4F5FB;background-color:#F4F5FB;width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:10px;text-align:center;">

              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                </table>
              </div>

            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="background:#edeef6;background-color:#edeef6;margin:0px auto;border-radius:20px;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#edeef6;background-color:#edeef6;width:100%;border-radius:20px;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
  
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
       
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                        <tr>
                          <td style="padding:4px;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:24px;">
                              <tr>
                                <td style="font-size:0;height:24px;vertical-align:middle;width:24px;">
                                  <a href="https://web.facebook.com/comelankatours" target="_blank" style="color: #0078be; text-decoration: none; font-weight: 500;">
                                    <img alt="twitter-logo" height="24" src="https://cdn-icons-png.flaticon.com/128/4494/4494475.png" style="border-radius:3px;display:block;" width="24">
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
           
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                        <tr>
                          <td style="padding:4px;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:24px;">
                              <tr>
                                <td style="font-size:0;height:24px;vertical-align:middle;width:24px;">
                                  <a href="https://wa.me/+94777284878" target="_blank" style="color: #0078be; text-decoration: none; font-weight: 500;">
                                    <img alt="facebook-logo" height="24" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-phone-icon-png-image_6315989.png" style="border-radius:3px;display:block;" width="24">
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
         
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                        <tr>
                          <td style="padding:4px;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:24px;">
                              <tr>
                                <td style="font-size:0;height:24px;vertical-align:middle;width:24px;">
                                  <a href="https://wa.me/+94718067126" target="_blank" style="color: #0078be; text-decoration: none; font-weight: 500;">
                                    <img alt="instagram-logo" height="24" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-phone-icon-png-image_6315989.png" style="border-radius:3px;display:block;" width="24">
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
        
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                        <tr>
                          <td style="padding:4px;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:24px;">
                              <tr>
                                <td style="font-size:0;height:24px;vertical-align:middle;width:24px;">
                                  <a href="https://wa.me/+94773333117" target="_blank" style="color: #0078be; text-decoration: none; font-weight: 500;">
                                    <img alt="youtube-logo" height="24" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-phone-icon-png-image_6315989.png" style="border-radius:3px;display:block;" width="24">
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                        <tr>
                          <td style="padding:4px;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:24px;">
                              <tr>
                                <td style="font-size:0;height:24px;vertical-align:middle;width:24px;">
                                  <a href="https://wa.me/+94773333117" target="_blank" style="color: #0078be; text-decoration: none; font-weight: 500;">
                                    <img alt="youtube-logo" height="24" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-phone-icon-png-image_6315989.png" style="border-radius:3px;display:block;" width="24">
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
     
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Montserrat, Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:22px;text-align:center;color:#8189A9;">© 2023 eUNLOCK Solutions</div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Montserrat, Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:22px;text-align:center;color:#8189A9;">Update your <a class="footer-link" href="https://google.com" style="color: #0078be; text-decoration: none; font-weight: 500;">email preferences</a> to choose the types of emails you receive, or you can <a href="https://google.com" class="footer-link" style="color: #0078be; text-decoration: none; font-weight: 500;"> unsubscribe </a>from all future emails.</div>
                    </td>
                  </tr>
                </table>
              </div>
         
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
    
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tr>
                    <td style="font-size:0px;word-break:break-word;">
           
                      <div style="height:1px;"> &nbsp; </div>
          
                    </td>
                  </tr>
                </table>
              </div>
     
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
    `,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
};

export default sendMail;
