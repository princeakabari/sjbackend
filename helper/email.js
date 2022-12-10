hdfcdata = {
  policeGlance: {
    name: "Ankit",
    policyOwner: "Mr Ankit Gupta",
    lifeInsured: "Mr Ankit Gupta",
    nominee: "Ms Puja Gupta",
    policyNumber: "5555532",
    issuedOn: "31/03/2012",
    matureOn: "31/03/2027",
    policyTerm: "15 Years",
    premiumPayingTerm: "15 Years",
    sumAssured: 1000000,
    premiumFrequency: "Yearly",
    premiumAmount: 100000,
    premiumsPaidUpto: "31/03/2019",
  },
  keyPolicyBenefits: {
    maturityBenefits: {
      cumulativePremium: 800000,
      amountInvested: 704231,
      fundValue: 1135554,
      grossIRR: 20.26,
      netIRR: 14.87,
    },
    maturityBenefitsTable: [
      {
        riskProfile: "Very high",
        fundName: "Opportunities fund",
        premiumAllocation: 100,
        availableUnits: 39124,
        NAV: 29.02,
        fundValue: 1135554,
        fundIRR: 14.87,
        benchmarkIRR: 12.32,
      },
    ],
  },
};

const nodeMailer = require("nodemailer");
const CONFIG = require("../config/config");
const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: CONFIG.email.EMAILUSERNAME,
    pass: CONFIG.email.EMAILPASSWORD,
  },
  // host: CONFIG.email.SMTP,
  // port: CONFIG.email.SMTP_PORT,
  // secure: false,
  // auth: {
  //   user: CONFIG.email.EMAILUSERNAME,
  //   pass: CONFIG.email.EMAILPASSWORD,
  // },
});

module.exports = {
  sendForVeriy: async (body) => {
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: body.email,
      subject: CONFIG.emailSubject.welcome,
      html: `
      
<html
lang="en"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:v="urn:schemas-microsoft-com:vml"
>
<head>
  <title></title>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <!--[if mso
    ]><xml
      ><o:OfficeDocumentSettings
        ><o:PixelsPerInch>96</o:PixelsPerInch
        ><o:AllowPNG /></o:OfficeDocumentSettings></xml
  ><![endif]-->
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: inherit !important;
    }

    #MessageViewBody a {
      color: inherit;
      text-decoration: none;
    }

    p {
      line-height: inherit;
    }

    .desktop_hide,
    .desktop_hide table {
      mso-hide: all;
      display: none;
      max-height: 0px;
      overflow: hidden;
    }

    @media (max-width: 720px) {
      .desktop_hide table.icons-inner,
      .social_block.desktop_hide .social-table {
        display: inline-block !important;
      }

      .icons-inner {
        text-align: center;
      }

      .icons-inner td {
        margin: 0 auto;
      }

      .image_block img.big,
      .row-content {
        width: 100% !important;
      }

      .mobile_hide {
        display: none;
      }

      .stack .column {
        width: 100%;
        display: block;
      }

      .mobile_hide {
        min-height: 0;
        max-height: 0;
        max-width: 0;
        overflow: hidden;
        font-size: 0px;
      }

      .desktop_hide,
      .desktop_hide table {
        display: table !important;
        max-height: none !important;
      }
    }
  </style>
</head>
<body
  style="
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  "
>
  <table
    border="0"
    cellpadding="0"
    cellspacing="0"
    class="nl-container"
    role="presentation"
    style="
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      background-color: #f9f9f9;
    "
    width="100%"
  >
    <tbody>
      <tr>
        <td>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-1"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      color: #000000;
                      width: 700px;
                    "
                    width="700"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            vertical-align: top;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <div
                            class="spacer_block"
                            style="
                              height: 10px;
                              line-height: 10px;
                              font-size: 1px;
                            "
                          >
                             
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-2"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      color: #000000;
                      width: 700px;
                    "
                    width="700"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            vertical-align: top;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        ></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-3"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      color: #000000;
                      width: 700px;
                    "
                    width="700"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            vertical-align: top;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <div
                            class="spacer_block"
                            style="
                              height: 15px;
                              line-height: 15px;
                              font-size: 1px;
                            "
                          >
                             
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-4"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      color: #000000;
                      width: 700px;
                    "
                    width="700"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            vertical-align: top;
                            padding-top: 5px;
                            padding-bottom: 0px;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="image_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  width: 100%;
                                  padding-right: 0px;
                                  padding-left: 0px;
                                "
                              >
                                <div
                                  align="center"
                                  class="alignment"
                                  style="line-height: 10px"
                                ></div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-5"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      background-color: #ffd3e0;
                      color: #000000;
                      width: 700px;
                    "
                    width="700"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            vertical-align: top;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="text_block block-3"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  padding-bottom: 10px;
                                  padding-left: 40px;
                                  padding-right: 40px;
                                  padding-top: 10px;
                                "
                              >
                                <div style="font-family: sans-serif">
                                  <div
                                    class=""
                                    style="
                                      font-size: 12px;
                                      mso-line-height-alt: 18px;
                                      color: #191919;
                                      line-height: 1.5;
                                      font-family: Montserrat, Trebuchet MS,
                                        Lucida Grande, Lucida Sans Unicode,
                                        Lucida Sans, Tahoma, sans-serif;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        font-size: 16px;
                                        text-align: center;
                                        mso-line-height-alt: 24px;
                                      "
                                    >
                                      <strong
                                        ><span style="font-size: 38px"
                                          >Hi ${body.firstName} ${body.lastName},
                                        </span></strong
                                      >
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        font-size: 16px;
                                        text-align: center;
                                        mso-line-height-alt: 24px;
                                      "
                                    >
                                      <strong
                                        ><span style="font-size: 38px"
                                          >Welcome to Frontendarmy!</span
                                        ></strong
                                      >
                                    </p>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="text_block block-4"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  padding-bottom: 65px;
                                  padding-left: 10px;
                                  padding-right: 10px;
                                  padding-top: 10px;
                                "
                              >
                                <div style="font-family: sans-serif">
                                  <div
                                    class=""
                                    style="
                                      font-size: 12px;
                                      mso-line-height-alt: 14.399999999999999px;
                                      color: #191919;
                                      line-height: 1.2;
                                      font-family: Montserrat, Trebuchet MS,
                                        Lucida Grande, Lucida Sans Unicode,
                                        Lucida Sans, Tahoma, sans-serif;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        font-size: 14px;
                                        text-align: center;
                                        mso-line-height-alt: 16.8px;
                                      "
                                    >
                                      <span style="font-size: 22px"
                                        >Thank you for subscribing!</span
                                      >
                                    </p>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>

          
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-17"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      background-color: #ffffff;
                      color: #000000;
                      width: 700px;
                    "
                    width="700"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            vertical-align: top;
                            padding-top: 0px;
                            padding-bottom: 5px;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="social_block block-2"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  padding-bottom: 10px;
                                  padding-left: 10px;
                                  padding-right: 10px;
                                  padding-top: 50px;
                                  text-align: center;
                                "
                              >
                                <div align="center" class="alignment">
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="social-table"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      display: inline-block;
                                    "
                                    width="230px"
                                  >
                                    <tr>
                                      <td style="padding: 0 7px 0 7px">
                                        <a
                                          href="https://www.facebook.com/"
                                          target="_blank"
                                          ><img
                                            alt="Facebook"
                                            height="32"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                            "
                                            title="Facebook"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td style="padding: 0 7px 0 7px">
                                        <a
                                          href="https://twitter.com/"
                                          target="_blank"
                                          ><img
                                            alt="Twitter"
                                            height="32"
                                            src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                            "
                                            title="Twitter"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td style="padding: 0 7px 0 7px">
                                        <a
                                          href="https://instagram.com/"
                                          target="_blank"
                                          ><img
                                            alt="Instagram"
                                            height="32"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                            "
                                            title="Instagram"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td style="padding: 0 7px 0 7px">
                                        <a
                                          href="https://www.linkedin.com/"
                                          target="_blank"
                                          ><img
                                            alt="LinkedIn"
                                            height="32"
                                            src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                            "
                                            title="LinkedIn"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td style="padding: 0 7px 0 7px">
                                        <a href="" target="_blank"
                                          ><img
                                            alt="YouTube"
                                            height="32"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX/////AAD/WVn/sbH/nJz/8fH/Kir/4uL/3t7/zs7/xsb/YGD/7e3/GBj/9fX/y8v/trb/19f/PT3/oaH/jIz/goL/fX3/c3P/bm7/paX/NDT/Dg7/SEj/+vr/wcH/vLz/VFT/IiL/aGj/k5P/UFD/LS3/X1//iYn/gID/Ojr/srL/nZ3/RUX/d3eHgOMVAAAEkklEQVR4nO2d22KiQAyGWdQFBRE84QnBc9ut7/96i9tuz4ZBAiPh/+560Zn8LTCTZCYxDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzSPyOq5l2UHQ7XYHg9469lut+ai9241Pk+k5nG23W8c5mmaSJKZ5dJz051l4nk5O492uPZq3Wn687g0G6W8HgW1ZbseLdKqJPNcKuuu4Nd9NQmf/PFwcNpv+8hcfy/5mc1gMn/dOONnNW/G6G1iuF5Ws2nPtgZ9qmiVDXjnKoofJLNXrD2zX4xbXsf3TcVG9qmssF8eTb3eY1LlxOLwfbR9ZDs+xW1Re1Nv2dQsh6W97hV7OONGtQIEkvllfJ9RtvCLhjW9k76DbcmUOvVsE+rrNzsU8v8C2bptz0pYuMPd/saXb3hvw8wgMdFt7E4G6QG+l29ibWKnvVk+6bb2Rk+xn9IKtqPBBt6E386Am0LpPT0KFpaWksH5L4Ttq6349P6QvrJQeUt1WFkLlMX3SbWQhWgoKJ7qNLITK13Sv28hCrLJjGu59x2Wy6GeHpga6bSxItrf/R7eJBcleEesSfbpGmCUwqvN6f2Gf9anxfus2sSC/s5zEGm+7X8jcfHd1W1iYbobCWLeBhcmK8Y90G1iYUYbCqW4DCzPNUHjUbWBhjhkKh7oNLMwwQ2Hdl8N0QaQFdlg9Cy1ra59OJvKGMEx/wTqeGvSSzxsMNo1oV727SacveqxzmZen4sw6pAK0h8ibVTP/jTmo2F2hg1G80WDzddSnSk8E0D7wmHWu/wqNzrjCz+qYVMi7aTPfB7ZnrCNT0Ns2XjvMj0P3nlnHvs6MVOiwzmV+HnxezYbJIRXynvL6otBwK0kuJ6RC3g/7V4XpjoL3IfkRMv8UPbLO9V2hYaxL38g9UtG2iHf6nxQa3mjDOsk3FpRC5ljijwrT17HcQAIZT+xsWOe6ojB9HctMcG0o94k58XRVoWGU6FeR6SeXd3NFKDS80vyqJaWQOYdPKUwnKysJRLnAlSosza+6I4WpP1rGRo5SaPNOla3QcEvwq6jTbcxn9hQUpn/VLe+kdKCGOfOkpJDfr6KyT7yBKFWFRjTfcE5LhaKYc2uqCtPXkfOcEpVf06Yw/QSYbNNSCplvkeRRmP55ubJC1KF95ksI+RSmfhXPRo4KmM5ZZngjp0KuADl1t0S3wtQChg3APSss/38o/z2U/y2Vvx7K39PI35fK9y3k+4fyfXz5cRrE2nJyh/FS+TFv+XkL+bkn+flD+Tlg+Xl8+WcxGnCeRv6ZKPnn2uSfTZR/vlT+GWH557zln9WXf99C/p0Z+fee5N9da8D9Q/l3SOXfA5Z/l1v+fXz5NRXk18WQX9tEfn0a+TWGGlAnSn6tL/n12uTX3GtA3UT5tS/l1y+VX4O2AXWEa7z5VqwFLb+eN/fptgpR7h0gvq5+A3oj1LR3QI7+Fg3oUVLHRTF3t6C6SczdK6gB/Z4a0LOrAX3XDPm984wG9D+8ILyH5Suy+5C+IbqX7GfE9gOmVYvq6QwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBd/AeVenzu8wDl+AAAAAElFTkSuQmCC"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                            "
                                            title="YouTube"
                                            width="32"
                                        /></a>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="text_block block-4"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  padding-bottom: 10px;
                                  padding-left: 40px;
                                  padding-right: 40px;
                                  padding-top: 25px;
                                "
                              >
                                <div style="font-family: sans-serif">
                                  <div
                                    class=""
                                    style="
                                      font-size: 12px;
                                      mso-line-height-alt: 24px;
                                      color: #555555;
                                      line-height: 2;
                                      font-family: Montserrat, Trebuchet MS,
                                        Lucida Grande, Lucida Sans Unicode,
                                        Lucida Sans, Tahoma, sans-serif;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        font-size: 14px;
                                        text-align: center;
                                        mso-line-height-alt: 28px;
                                      "
                                    >
                                      If you have any questions, feel free
                                      message us at prince.frontendarmy@gmail.com. All
                                      right reserved. Update
                                      <a
                                        href="#"
                                        rel="noopener"
                                        style="
                                          text-decoration: none;
                                          color: #555555;
                                        "
                                        target="_blank"
                                        >email preferences</a
                                      >
                                      or
                                      <a
                                        href="#"
                                        rel="noopener"
                                        style="
                                          text-decoration: none;
                                          color: #555555;
                                        "
                                        target="_blank"
                                        >unsubscribe</a
                                      >.
                                    </p>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="text_block block-5"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  padding-bottom: 10px;
                                  padding-left: 40px;
                                  padding-right: 40px;
                                "
                              >
                                <div style="font-family: sans-serif">
                                  <div
                                    class=""
                                    style="
                                      font-size: 12px;
                                      mso-line-height-alt: 24px;
                                      color: #555555;
                                      line-height: 2;
                                      font-family: Montserrat, Trebuchet MS,
                                        Lucida Grande, Lucida Sans Unicode,
                                        Lucida Sans, Tahoma, sans-serif;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        font-size: 14px;
                                        text-align: center;
                                        mso-line-height-alt: 28px;
                                      "
                                    >
                                      
                                    </p>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-18"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      background-color: #ffffff;
                      color: #000000;
                      width: 700px;
                    "
                    width="700"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            vertical-align: top;
                            padding-top: 5px;
                            padding-bottom: 0px;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="10"
                            cellspacing="0"
                            class="text_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              word-break: break-word;
                            "
                            width="100%"
                          >
                            <tr>
                              <td class="pad">
                                <div style="font-family: sans-serif">
                                  <div
                                    class=""
                                    style="
                                      font-size: 12px;
                                      font-family: Montserrat, Trebuchet MS,
                                        Lucida Grande, Lucida Sans Unicode,
                                        Lucida Sans, Tahoma, sans-serif;
                                      mso-line-height-alt: 14.399999999999999px;
                                      color: #ffffff;
                                      line-height: 1.2;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        font-size: 12px;
                                        text-align: center;
                                        mso-line-height-alt: 14.399999999999999px;
                                      "
                                    >
                                      <span style="color: #555555"
                                        >Terms of use
                                        <strong>|</strong> Privacy
                                        Policy</span
                                      >
                                    </p>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-19"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      color: #000000;
                      width: 700px;
                    "
                    width="700"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            vertical-align: top;
                            padding-top: 0px;
                            padding-bottom: 5px;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="image_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  width: 100%;
                                  padding-right: 0px;
                                  padding-left: 0px;
                                "
                              >
                                <div
                                  align="center"
                                  class="alignment"
                                  style="line-height: 10px"
                                ></div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-20"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      color: #000000;
                      width: 700px;
                    "
                    width="700"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            vertical-align: top;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <div
                            class="spacer_block"
                            style="
                              height: 25px;
                              line-height: 25px;
                              font-size: 1px;
                            "
                          >
                             
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-21"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row-content stack"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      color: #000000;
                      width: 700px;
                    "
                    width="700"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="column column-1"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            font-weight: 400;
                            text-align: left;
                            vertical-align: top;
                            padding-top: 5px;
                            padding-bottom: 5px;
                            border-top: 0px;
                            border-right: 0px;
                            border-bottom: 0px;
                            border-left: 0px;
                          "
                          width="100%"
                        >
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="icons_block block-1"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                            width="100%"
                          >
                            <tr>
                              <td
                                class="pad"
                                style="
                                  vertical-align: middle;
                                  color: #9d9d9d;
                                  font-family: inherit;
                                  font-size: 15px;
                                  padding-bottom: 5px;
                                  padding-top: 5px;
                                  text-align: center;
                                "
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="alignment"
                                      style="
                                        vertical-align: middle;
                                        text-align: center;
                                      "
                                    >
                                      <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                      <!--[if !vml]><!-->
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- End -->
</body>
</html>   
    
`,
    };
    try {
      const sendedMail = await transporter.sendMail(mailOptions);
      if (sendedMail.response) {
        return {
          successMail: true,
          messageMail: "Mail sended",
        };
      } else {
        return {
          successMail: false,
          messageMail: "EMAIL NOT SENT",
        };
      }
    } catch (error) {
      return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
    }
  },
  //   sendForEmailUpdate: async (body) => {
  //     let mailOptions = {
  //       from: CONFIG.email.SENDMAILFROM,
  //       to: body.email,
  //       subject: CONFIG.emailSubject.email_Changed,
  //       text: `
  //       <html
  //       lang="en"
  //       xmlns:o="urn:schemas-microsoft-com:office:office"
  //       xmlns:v="urn:schemas-microsoft-com:vml"
  //     >
  //       <head>
  //         <title></title>
  //         <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
  //         <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  //         <!--[if mso
  //           ]><xml
  //             ><o:OfficeDocumentSettings
  //               ><o:PixelsPerInch>96</o:PixelsPerInch
  //               ><o:AllowPNG /></o:OfficeDocumentSettings></xml
  //         ><![endif]-->
  //         <style>
  //           * {
  //             box-sizing: border-box;
  //           }

  //           body {
  //             margin: 0;
  //             padding: 0;
  //           }

  //           a[x-apple-data-detectors] {
  //             color: inherit !important;
  //             text-decoration: inherit !important;
  //           }

  //           #MessageViewBody a {
  //             color: inherit;
  //             text-decoration: none;
  //           }

  //           p {
  //             line-height: inherit;
  //           }

  //           .desktop_hide,
  //           .desktop_hide table {
  //             mso-hide: all;
  //             display: none;
  //             max-height: 0px;
  //             overflow: hidden;
  //           }

  //           @media (max-width: 720px) {
  //             .desktop_hide table.icons-inner,
  //             .social_block.desktop_hide .social-table {
  //               display: inline-block !important;
  //             }

  //             .icons-inner {
  //               text-align: center;
  //             }

  //             .icons-inner td {
  //               margin: 0 auto;
  //             }

  //             .image_block img.big,
  //             .row-content {
  //               width: 100% !important;
  //             }

  //             .mobile_hide {
  //               display: none;
  //             }

  //             .stack .column {
  //               width: 100%;
  //               display: block;
  //             }

  //             .mobile_hide {
  //               min-height: 0;
  //               max-height: 0;
  //               max-width: 0;
  //               overflow: hidden;
  //               font-size: 0px;
  //             }

  //             .desktop_hide,
  //             .desktop_hide table {
  //               display: table !important;
  //               max-height: none !important;
  //             }
  //           }
  //         </style>
  //       </head>
  //       <body
  //         style="
  //           background-color: #f9f9f9;
  //           margin: 0;
  //           padding: 0;
  //           -webkit-text-size-adjust: none;
  //           text-size-adjust: none;
  //         "
  //       >
  //         <table
  //           border="0"
  //           cellpadding="0"
  //           cellspacing="0"
  //           class="nl-container"
  //           role="presentation"
  //           style="
  //             mso-table-lspace: 0pt;
  //             mso-table-rspace: 0pt;
  //             background-color: #f9f9f9;
  //           "
  //           width="100%"
  //         >
  //           <tbody>
  //             <tr>
  //               <td>
  //                 <table
  //                   align="center"
  //                   border="0"
  //                   cellpadding="0"
  //                   cellspacing="0"
  //                   class="row row-1"
  //                   role="presentation"
  //                   style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
  //                   width="100%"
  //                 >
  //                   <tbody>
  //                     <tr>
  //                       <td>
  //                         <table
  //                           align="center"
  //                           border="0"
  //                           cellpadding="0"
  //                           cellspacing="0"
  //                           class="row-content stack"
  //                           role="presentation"
  //                           style="
  //                             mso-table-lspace: 0pt;
  //                             mso-table-rspace: 0pt;
  //                             color: #000000;
  //                             width: 700px;
  //                           "
  //                           width="700"
  //                         >
  //                           <tbody>
  //                             <tr>
  //                               <td
  //                                 class="column column-1"
  //                                 style="
  //                                   mso-table-lspace: 0pt;
  //                                   mso-table-rspace: 0pt;
  //                                   font-weight: 400;
  //                                   text-align: left;
  //                                   vertical-align: top;
  //                                   padding-top: 5px;
  //                                   padding-bottom: 5px;
  //                                   border-top: 0px;
  //                                   border-right: 0px;
  //                                   border-bottom: 0px;
  //                                   border-left: 0px;
  //                                 "
  //                                 width="100%"
  //                               >
  //                                 <div
  //                                   class="spacer_block"
  //                                   style="
  //                                     height: 10px;
  //                                     line-height: 10px;
  //                                     font-size: 1px;
  //                                   "
  //                                 >
  //
  //                                 </div>
  //                               </td>
  //                             </tr>
  //                           </tbody>
  //                         </table>
  //                       </td>
  //                     </tr>
  //                   </tbody>
  //                 </table>
  //                 <table
  //                   align="center"
  //                   border="0"
  //                   cellpadding="0"
  //                   cellspacing="0"
  //                   class="row row-2"
  //                   role="presentation"
  //                   style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
  //                   width="100%"
  //                 >
  //                   <tbody>
  //                     <tr>
  //                       <td>
  //                         <table
  //                           align="center"
  //                           border="0"
  //                           cellpadding="0"
  //                           cellspacing="0"
  //                           class="row-content stack"
  //                           role="presentation"
  //                           style="
  //                             mso-table-lspace: 0pt;
  //                             mso-table-rspace: 0pt;
  //                             color: #000000;
  //                             width: 700px;
  //                           "
  //                           width="700"
  //                         >
  //                           <tbody>
  //                             <tr>
  //                               <td
  //                                 class="column column-1"
  //                                 style="
  //                                   mso-table-lspace: 0pt;
  //                                   mso-table-rspace: 0pt;
  //                                   font-weight: 400;
  //                                   text-align: left;
  //                                   vertical-align: top;
  //                                   padding-top: 5px;
  //                                   padding-bottom: 5px;
  //                                   border-top: 0px;
  //                                   border-right: 0px;
  //                                   border-bottom: 0px;
  //                                   border-left: 0px;
  //                                 "
  //                                 width="100%"
  //                               ></td>
  //                             </tr>
  //                           </tbody>
  //                         </table>
  //                       </td>
  //                     </tr>
  //                   </tbody>
  //                 </table>
  //                 <table
  //                   align="center"
  //                   border="0"
  //                   cellpadding="0"
  //                   cellspacing="0"
  //                   class="row row-3"
  //                   role="presentation"
  //                   style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
  //                   width="100%"
  //                 >
  //                   <tbody>
  //                     <tr>
  //                       <td>
  //                         <table
  //                           align="center"
  //                           border="0"
  //                           cellpadding="0"
  //                           cellspacing="0"
  //                           class="row-content stack"
  //                           role="presentation"
  //                           style="
  //                             mso-table-lspace: 0pt;
  //                             mso-table-rspace: 0pt;
  //                             color: #000000;
  //                             width: 700px;
  //                           "
  //                           width="700"
  //                         >
  //                           <tbody>
  //                             <tr>
  //                               <td
  //                                 class="column column-1"
  //                                 style="
  //                                   mso-table-lspace: 0pt;
  //                                   mso-table-rspace: 0pt;
  //                                   font-weight: 400;
  //                                   text-align: left;
  //                                   vertical-align: top;
  //                                   padding-top: 5px;
  //                                   padding-bottom: 5px;
  //                                   border-top: 0px;
  //                                   border-right: 0px;
  //                                   border-bottom: 0px;
  //                                   border-left: 0px;
  //                                 "
  //                                 width="100%"
  //                               >
  //                                 <div
  //                                   class="spacer_block"
  //                                   style="
  //                                     height: 15px;
  //                                     line-height: 15px;
  //                                     font-size: 1px;
  //                                   "
  //                                 >
  //
  //                                 </div>
  //                               </td>
  //                             </tr>
  //                           </tbody>
  //                         </table>
  //                       </td>
  //                     </tr>
  //                   </tbody>
  //                 </table>
  //                 <table
  //                   align="center"
  //                   border="0"
  //                   cellpadding="0"
  //                   cellspacing="0"
  //                   class="row row-4"
  //                   role="presentation"
  //                   style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
  //                   width="100%"
  //                 >
  //                   <tbody>
  //                     <tr>
  //                       <td>
  //                         <table
  //                           align="center"
  //                           border="0"
  //                           cellpadding="0"
  //                           cellspacing="0"
  //                           class="row-content stack"
  //                           role="presentation"
  //                           style="
  //                             mso-table-lspace: 0pt;
  //                             mso-table-rspace: 0pt;
  //                             color: #000000;
  //                             width: 700px;
  //                           "
  //                           width="700"
  //                         >
  //                           <tbody>
  //                             <tr>
  //                               <td
  //                                 class="column column-1"
  //                                 style="
  //                                   mso-table-lspace: 0pt;
  //                                   mso-table-rspace: 0pt;
  //                                   font-weight: 400;
  //                                   text-align: left;
  //                                   vertical-align: top;
  //                                   padding-top: 5px;
  //                                   padding-bottom: 0px;
  //                                   border-top: 0px;
  //                                   border-right: 0px;
  //                                   border-bottom: 0px;
  //                                   border-left: 0px;
  //                                 "
  //                                 width="100%"
  //                               >
  //                                 <table
  //                                   border="0"
  //                                   cellpadding="0"
  //                                   cellspacing="0"
  //                                   class="image_block block-1"
  //                                   role="presentation"
  //                                   style="
  //                                     mso-table-lspace: 0pt;
  //                                     mso-table-rspace: 0pt;
  //                                   "
  //                                   width="100%"
  //                                 >
  //                                   <tr>
  //                                     <td
  //                                       class="pad"
  //                                       style="
  //                                         width: 100%;
  //                                         padding-right: 0px;
  //                                         padding-left: 0px;
  //                                       "
  //                                     >
  //                                       <div
  //                                         align="center"
  //                                         class="alignment"
  //                                         style="line-height: 10px"
  //                                       >
  //                                         <img
  //                                           alt="Alternate text"
  //                                           class="big"
  //                                           src="images/Up_pink.png"
  //                                           style="
  //                                             display: block;
  //                                             height: auto;
  //                                             border: 0;
  //                                             width: 700px;
  //                                             max-width: 100%;
  //                                           "
  //                                           title="Alternate text"
  //                                           width="700"
  //                                         />
  //                                       </div>
  //                                     </td>
  //                                   </tr>
  //                                 </table>
  //                               </td>
  //                             </tr>
  //                           </tbody>
  //                         </table>
  //                       </td>
  //                     </tr>
  //                   </tbody>
  //                 </table>
  //                 <table
  //                   align="center"
  //                   border="0"
  //                   cellpadding="0"
  //                   cellspacing="0"
  //                   class="row row-5"
  //                   role="presentation"
  //                   style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
  //                   width="100%"
  //                 >
  //                   <tbody>
  //                     <tr>
  //                       <td>
  //                         <table
  //                           align="center"
  //                           border="0"
  //                           cellpadding="0"
  //                           cellspacing="0"
  //                           class="row-content stack"
  //                           role="presentation"
  //                           style="
  //                             mso-table-lspace: 0pt;
  //                             mso-table-rspace: 0pt;
  //                             background-color: #ffd3e0;
  //                             color: #000000;
  //                             width: 700px;
  //                           "
  //                           width="700"
  //                         >
  //                           <tbody>
  //                             <tr>
  //                               <td
  //                                 class="column column-1"
  //                                 style="
  //                                   mso-table-lspace: 0pt;
  //                                   mso-table-rspace: 0pt;
  //                                   font-weight: 400;
  //                                   text-align: left;
  //                                   vertical-align: top;
  //                                   padding-top: 0px;
  //                                   padding-bottom: 0px;
  //                                   border-top: 0px;
  //                                   border-right: 0px;
  //                                   border-bottom: 0px;
  //                                   border-left: 0px;
  //                                 "
  //                                 width="100%"
  //                               >

  //                                 <table
  //                                   border="0"
  //                                   cellpadding="0"
  //                                   cellspacing="0"
  //                                   class="text_block block-3"
  //                                   role="presentation"
  //                                   style="
  //                                     mso-table-lspace: 0pt;
  //                                     mso-table-rspace: 0pt;
  //                                     word-break: break-word;
  //                                   "
  //                                   width="100%"
  //                                 >
  //                                   <tr>
  //                                     <td
  //                                       class="pad"
  //                                       style="
  //                                         padding-bottom: 10px;
  //                                         padding-left: 40px;
  //                                         padding-right: 40px;
  //                                         padding-top: 10px;
  //                                       "
  //                                     >
  //                                       <div style="font-family: sans-serif">
  //                                         <div
  //                                           class=""
  //                                           style="
  //                                             font-size: 12px;
  //                                             mso-line-height-alt: 18px;
  //                                             color: #191919;
  //                                             line-height: 1.5;
  //                                             font-family: Montserrat, Trebuchet MS,
  //                                               Lucida Grande, Lucida Sans Unicode,
  //                                               Lucida Sans, Tahoma, sans-serif;
  //                                           "
  //                                         >
  //                                           <p
  //                                             style="
  //                                               margin: 0;
  //                                               font-size: 16px;
  //                                               text-align: center;
  //                                               mso-line-height-alt: 24px;
  //                                             "
  //                                           >
  //                                             <strong
  //                                               ><span style="font-size: 38px"
  //                                                 >Hi ${body.firstName} ${body.lastName},
  //                                               </span></strong
  //                                             >
  //                                           </p>
  //                                           <p
  //                                             style="
  //                                               margin: 0;
  //                                               font-size: 16px;
  //                                               text-align: center;
  //                                               mso-line-height-alt: 24px;
  //                                             "
  //                                           >
  //                                             <strong
  //                                               ><span style="font-size: 38px"
  //                                                 >welcome to MailPro!</span
  //                                               ></strong
  //                                             >
  //                                           </p>
  //                                         </div>
  //                                       </div>
  //                                     </td>
  //                                   </tr>
  //                                 </table>
  //                                 <table
  //                                   border="0"
  //                                   cellpadding="0"
  //                                   cellspacing="0"
  //                                   class="text_block block-4"
  //                                   role="presentation"
  //                                   style="
  //                                     mso-table-lspace: 0pt;
  //                                     mso-table-rspace: 0pt;
  //                                     word-break: break-word;
  //                                   "
  //                                   width="100%"
  //                                 >
  //                                   <tr>
  //                                     <td
  //                                       class="pad"
  //                                       style="
  //                                         padding-bottom: 65px;
  //                                         padding-left: 10px;
  //                                         padding-right: 10px;
  //                                         padding-top: 10px;
  //                                       "
  //                                     >
  //                                       <div style="font-family: sans-serif">
  //                                         <div
  //                                           class=""
  //                                           style="
  //                                             font-size: 12px;
  //                                             mso-line-height-alt: 14.399999999999999px;
  //                                             color: #191919;
  //                                             line-height: 1.2;
  //                                             font-family: Montserrat, Trebuchet MS,
  //                                               Lucida Grande, Lucida Sans Unicode,
  //                                               Lucida Sans, Tahoma, sans-serif;
  //                                           "
  //                                         >
  //                                           <p
  //                                             style="
  //                                               margin: 0;
  //                                               font-size: 14px;
  //                                               text-align: center;
  //                                               mso-line-height-alt: 16.8px;
  //                                             "
  //                                           >
  //                                             <span style="font-size: 22px"
  //                                               >Thank you for subscribing!</span
  //                                             >
  //                                           </p>
  //                                         </div>
  //                                       </div>
  //                                     </td>
  //                                   </tr>
  //                                 </table>
  //                               </td>
  //                             </tr>
  //                           </tbody>
  //                         </table>
  //                       </td>
  //                     </tr>
  //                   </tbody>
  //                 </table>

  //                 <table
  //                   align="center"
  //                   border="0"
  //                   cellpadding="0"
  //                   cellspacing="0"
  //                   class="row row-16"
  //                   role="presentation"
  //                   style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
  //                   width="100%"
  //                 >
  //                   <tbody>
  //                     <tr>
  //                       <td>
  //                         <table
  //                           align="center"
  //                           border="0"
  //                           cellpadding="0"
  //                           cellspacing="0"
  //                           class="row-content stack"
  //                           role="presentation"
  //                           style="
  //                             mso-table-lspace: 0pt;
  //                             mso-table-rspace: 0pt;
  //                             background-color: #ffd3e0;
  //                             color: #000000;
  //                             width: 700px;
  //                           "
  //                           width="700"
  //                         >
  //                           <tbody>
  //                             <tr>
  //                               <td
  //                                 class="column column-1"
  //                                 style="
  //                                   mso-table-lspace: 0pt;
  //                                   mso-table-rspace: 0pt;
  //                                   font-weight: 400;
  //                                   text-align: left;
  //                                   vertical-align: top;
  //                                   border-top: 0px;
  //                                   border-right: 0px;
  //                                   border-bottom: 0px;
  //                                   border-left: 0px;
  //                                 "
  //                                 width="50%"
  //                               >
  //                                 <table
  //                                   border="0"
  //                                   cellpadding="0"
  //                                   cellspacing="0"
  //                                   class="text_block block-3"
  //                                   role="presentation"
  //                                   style="
  //                                     mso-table-lspace: 0pt;
  //                                     mso-table-rspace: 0pt;
  //                                     word-break: break-word;
  //                                   "
  //                                   width="100%"
  //                                 >
  //                                   <tr>
  //                                     <td
  //                                       class="pad"
  //                                       style="
  //                                         padding-bottom: 25px;
  //                                         padding-left: 40px;
  //                                         padding-right: 40px;
  //                                         padding-top: 50px;
  //                                       "
  //                                     >
  //                                       <div style="font-family: sans-serif">
  //                                         <div
  //                                           class=""
  //                                           style="
  //                                             font-size: 12px;
  //                                             mso-line-height-alt: 18px;
  //                                             color: #191919;
  //                                             line-height: 1.5;
  //                                             font-family: Montserrat, Trebuchet MS,
  //                                               Lucida Grande, Lucida Sans Unicode,
  //                                               Lucida Sans, Tahoma, sans-serif;
  //                                           "
  //                                         >
  //                                           <p
  //                                             style="
  //                                               margin: 0;
  //                                               font-size: 16px;
  //                                               text-align: center;
  //                                               mso-line-height-alt: 45px;
  //                                             "
  //                                           >
  //                                             <span style="font-size: 30px"
  //                                               ><strong
  //                                                 ><span style=""
  //                                                   >Get Our
  //                                                 </span></strong
  //                                               ></span
  //                                             >
  //                                           </p>
  //                                           <p
  //                                             style="
  //                                               margin: 0;
  //                                               font-size: 16px;
  //                                               text-align: center;
  //                                               mso-line-height-alt: 45px;
  //                                             "
  //                                           >
  //                                             <span style="font-size: 30px"
  //                                               ><strong
  //                                                 ><span style=""
  //                                                   >Mobile App</span
  //                                                 ></strong
  //                                               ></span
  //                                             >
  //                                           </p>
  //                                         </div>
  //                                       </div>
  //                                     </td>
  //                                   </tr>
  //                                 </table>
  //                                 <table
  //                                   border="0"
  //                                   cellpadding="0"
  //                                   cellspacing="0"
  //                                   class="image_block block-4"
  //                                   role="presentation"
  //                                   style="
  //                                     mso-table-lspace: 0pt;
  //                                     mso-table-rspace: 0pt;
  //                                   "
  //                                   width="100%"
  //                                 >
  //                                   <tr>
  //                                     <td
  //                                       class="pad"
  //                                       style="
  //                                         padding-bottom: 15px;
  //                                         width: 100%;
  //                                         padding-right: 0px;
  //                                         padding-left: 0px;
  //                                       "
  //                                     >
  //                                       <div
  //                                         align="center"
  //                                         class="alignment"
  //                                         style="line-height: 10px"
  //                                       >
  //                                         <img
  //                                           alt="Alternate text"
  //                                           src="images/App_Store_Badge_US_Black.png"
  //                                           style="
  //                                             display: block;
  //                                             height: auto;
  //                                             border: 0;
  //                                             width: 175px;
  //                                             max-width: 100%;
  //                                           "
  //                                           title="Alternate text"
  //                                           width="175"
  //                                         />
  //                                       </div>
  //                                     </td>
  //                                   </tr>
  //                                 </table>
  //                                 <table
  //                                   border="0"
  //                                   cellpadding="0"
  //                                   cellspacing="0"
  //                                   class="image_block block-5"
  //                                   role="presentation"
  //                                   style="
  //                                     mso-table-lspace: 0pt;
  //                                     mso-table-rspace: 0pt;
  //                                   "
  //                                   width="100%"
  //                                 >
  //                                   <tr>
  //                                     <td
  //                                       class="pad"
  //                                       style="
  //                                         width: 100%;
  //                                         padding-right: 0px;
  //                                         padding-left: 0px;
  //                                         padding-bottom: 35px;
  //                                       "
  //                                     >
  //                                       <div
  //                                         align="center"
  //                                         class="alignment"
  //                                         style="line-height: 10px"
  //                                       >
  //                                         <img
  //                                           alt="Alternate text"
  //                                           src="images/Google_Play_Badge_US.png"
  //                                           style="
  //                                             display: block;
  //                                             height: auto;
  //                                             border: 0;
  //                                             width: 175px;
  //                                             max-width: 100%;
  //                                           "
  //                                           title="Alternate text"
  //                                           width="175"
  //                                         />
  //                                       </div>
  //                                     </td>
  //                                   </tr>
  //                                 </table>
  //                               </td>
  //                               <td
  //                                 class="column column-2"
  //                                 style="
  //                                   mso-table-lspace: 0pt;
  //                                   mso-table-rspace: 0pt;
  //                                   font-weight: 400;
  //                                   text-align: left;
  //                                   vertical-align: top;
  //                                   border-top: 0px;
  //                                   border-right: 0px;
  //                                   border-bottom: 0px;
  //                                   border-left: 0px;
  //                                 "
  //                                 width="50%"
  //                               >
  //                                 <table
  //                                   border="0"
  //                                   cellpadding="0"
  //                                   cellspacing="0"
  //                                   class="image_block block-3"
  //                                   role="presentation"
  //                                   style="
  //                                     mso-table-lspace: 0pt;
  //                                     mso-table-rspace: 0pt;
  //                                   "
  //                                   width="100%"
  //                                 >
  //                                   <tr>
  //                                     <td
  //                                       class="pad"
  //                                       style="
  //                                         width: 100%;
  //                                         padding-right: 0px;
  //                                         padding-left: 0px;
  //                                         padding-top: 20px;
  //                                       "
  //                                     >
  //                                       <div
  //                                         align="center"
  //                                         class="alignment"
  //                                         style="line-height: 10px"
  //                                       >
  //                                         <img
  //                                           alt="Alternate text"
  //                                           src="images/app_image_2.png"
  //                                           style="
  //                                             display: block;
  //                                             height: auto;
  //                                             border: 0;
  //                                             width: 298px;
  //                                             max-width: 100%;
  //                                           "
  //                                           title="Alternate text"
  //                                           width="298"
  //                                         />
  //                                       </div>
  //                                     </td>
  //                                   </tr>
  //                                 </table>
  //                               </td>
  //                             </tr>
  //                           </tbody>
  //                         </table>
  //                       </td>
  //                     </tr>
  //                   </tbody>
  //                 </table>
  //                 <table
  //                   align="center"
  //                   border="0"
  //                   cellpadding="0"
  //                   cellspacing="0"
  //                   class="row row-17"
  //                   role="presentation"
  //                   style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
  //                   width="100%"
  //                 >
  //                   <tbody>
  //                     <tr>
  //                       <td>
  //                         <table
  //                           align="center"
  //                           border="0"
  //                           cellpadding="0"
  //                           cellspacing="0"
  //                           class="row-content stack"
  //                           role="presentation"
  //                           style="
  //                             mso-table-lspace: 0pt;
  //                             mso-table-rspace: 0pt;
  //                             background-color: #ffffff;
  //                             color: #000000;
  //                             width: 700px;
  //                           "
  //                           width="700"
  //                         >
  //                           <tbody>
  //                             <tr>
  //                               <td
  //                                 class="column column-1"
  //                                 style="
  //                                   mso-table-lspace: 0pt;
  //                                   mso-table-rspace: 0pt;
  //                                   font-weight: 400;
  //                                   text-align: left;
  //                                   vertical-align: top;
  //                                   padding-top: 0px;
  //                                   padding-bottom: 5px;
  //                                   border-top: 0px;
  //                                   border-right: 0px;
  //                                   border-bottom: 0px;
  //                                   border-left: 0px;
  //                                 "
  //                                 width="100%"
  //                               >
  //                                 <table
  //                                   border="0"
  //                                   cellpadding="0"
  //                                   cellspacing="0"
  //                                   class="social_block block-2"
  //                                   role="presentation"
  //                                   style="
  //                                     mso-table-lspace: 0pt;
  //                                     mso-table-rspace: 0pt;
  //                                   "
  //                                   width="100%"
  //                                 >
  //                                   <tr>
  //                                     <td
  //                                       class="pad"
  //                                       style="
  //                                         padding-bottom: 10px;
  //                                         padding-left: 10px;
  //                                         padding-right: 10px;
  //                                         padding-top: 50px;
  //                                         text-align: center;
  //                                       "
  //                                     >
  //                                       <div align="center" class="alignment">
  //                                         <table
  //                                           border="0"
  //                                           cellpadding="0"
  //                                           cellspacing="0"
  //                                           class="social-table"
  //                                           role="presentation"
  //                                           style="
  //                                             mso-table-lspace: 0pt;
  //                                             mso-table-rspace: 0pt;
  //                                             display: inline-block;
  //                                           "
  //                                           width="230px"
  //                                         >
  //                                           <tr>
  //                                             <td style="padding: 0 7px 0 7px">
  //                                               <a
  //                                                 href="https://www.facebook.com/"
  //                                                 target="_blank"
  //                                                 ><img
  //                                                   alt="Facebook"
  //                                                   height="32"
  //                                                   src="images/facebook2x.png"
  //                                                   style="
  //                                                     display: block;
  //                                                     height: auto;
  //                                                     border: 0;
  //                                                   "
  //                                                   title="Facebook"
  //                                                   width="32"
  //                                               /></a>
  //                                             </td>
  //                                             <td style="padding: 0 7px 0 7px">
  //                                               <a
  //                                                 href="https://twitter.com/"
  //                                                 target="_blank"
  //                                                 ><img
  //                                                   alt="Twitter"
  //                                                   height="32"
  //                                                   src="images/twitter2x.png"
  //                                                   style="
  //                                                     display: block;
  //                                                     height: auto;
  //                                                     border: 0;
  //                                                   "
  //                                                   title="Twitter"
  //                                                   width="32"
  //                                               /></a>
  //                                             </td>
  //                                             <td style="padding: 0 7px 0 7px">
  //                                               <a
  //                                                 href="https://instagram.com/"
  //                                                 target="_blank"
  //                                                 ><img
  //                                                   alt="Instagram"
  //                                                   height="32"
  //                                                   src="images/instagram2x.png"
  //                                                   style="
  //                                                     display: block;
  //                                                     height: auto;
  //                                                     border: 0;
  //                                                   "
  //                                                   title="Instagram"
  //                                                   width="32"
  //                                               /></a>
  //                                             </td>
  //                                             <td style="padding: 0 7px 0 7px">
  //                                               <a
  //                                                 href="https://www.linkedin.com/"
  //                                                 target="_blank"
  //                                                 ><img
  //                                                   alt="LinkedIn"
  //                                                   height="32"
  //                                                   src="images/linkedin2x.png"
  //                                                   style="
  //                                                     display: block;
  //                                                     height: auto;
  //                                                     border: 0;
  //                                                   "
  //                                                   title="LinkedIn"
  //                                                   width="32"
  //                                               /></a>
  //                                             </td>

  //                                           </tr>
  //                                         </table>
  //                                       </div>
  //                                     </td>
  //                                   </tr>
  //                                 </table>
  //                                 <table
  //                                   border="0"
  //                                   cellpadding="0"
  //                                   cellspacing="0"
  //                                   class="text_block block-4"
  //                                   role="presentation"
  //                                   style="
  //                                     mso-table-lspace: 0pt;
  //                                     mso-table-rspace: 0pt;
  //                                     word-break: break-word;
  //                                   "
  //                                   width="100%"
  //                                 >
  //                                   <tr>
  //                                     <td
  //                                       class="pad"
  //                                       style="
  //                                         padding-bottom: 10px;
  //                                         padding-left: 40px;
  //                                         padding-right: 40px;
  //                                         padding-top: 25px;
  //                                       "
  //                                     >
  //                                       <div style="font-family: sans-serif">
  //                                         <div
  //                                           class=""
  //                                           style="
  //                                             font-size: 12px;
  //                                             mso-line-height-alt: 24px;
  //                                             color: #555555;
  //                                             line-height: 2;
  //                                             font-family: Montserrat, Trebuchet MS,
  //                                               Lucida Grande, Lucida Sans Unicode,
  //                                               Lucida Sans, Tahoma, sans-serif;
  //                                           "
  //                                         >
  //                                           <p
  //                                             style="
  //                                               margin: 0;
  //                                               font-size: 14px;
  //                                               text-align: center;
  //                                               mso-line-height-alt: 28px;
  //                                             "
  //                                           >
  //                                             If you have any questions, feel free
  //                                             message us at support@mailus.com. All
  //                                             right reserved. Update
  //                                             <a
  //                                               href="#"
  //                                               rel="noopener"
  //                                               style="
  //                                                 text-decoration: none;
  //                                                 color: #555555;
  //                                               "
  //                                               target="_blank"
  //                                               >email preferences</a
  //                                             >
  //                                             or
  //                                             <a
  //                                               href="#"
  //                                               rel="noopener"
  //                                               style="
  //                                                 text-decoration: none;
  //                                                 color: #555555;
  //                                               "
  //                                               target="_blank"
  //                                               >unsubscribe</a
  //                                             >.
  //                                           </p>
  //                                         </div>
  //                                       </div>
  //                                     </td>
  //                                   </tr>
  //                                 </table>
  //                                 <table
  //                                   border="0"
  //                                   cellpadding="0"
  //                                   cellspacing="0"
  //                                   class="text_block block-5"
  //                                   role="presentation"
  //                                   style="
  //                                     mso-table-lspace: 0pt;
  //                                     mso-table-rspace: 0pt;
  //                                     word-break: break-word;
  //                                   "
  //                                   width="100%"
  //                                 >
  //                                   <tr>
  //                                     <td
  //                                       class="pad"
  //                                       style="
  //                                         padding-bottom: 10px;
  //                                         padding-left: 40px;
  //                                         padding-right: 40px;
  //                                       "
  //                                     >
  //                                       <div style="font-family: sans-serif">
  //                                         <div
  //                                           class=""
  //                                           style="
  //                                             font-size: 12px;
  //                                             mso-line-height-alt: 24px;
  //                                             color: #555555;
  //                                             line-height: 2;
  //                                             font-family: Montserrat, Trebuchet MS,
  //                                               Lucida Grande, Lucida Sans Unicode,
  //                                               Lucida Sans, Tahoma, sans-serif;
  //                                           "
  //                                         >
  //                                           <p
  //                                             style="
  //                                               margin: 0;
  //                                               font-size: 14px;
  //                                               text-align: center;
  //                                               mso-line-height-alt: 28px;
  //                                             "
  //                                           >
  //                                             5781 Spring St Salinas, Idaho 88606
  //                                             United States
  //                                           </p>
  //                                         </div>
  //                                       </div>
  //                                     </td>
  //                                   </tr>
  //                                 </table>
  //                               </td>
  //                             </tr>
  //                           </tbody>
  //                         </table>
  //                       </td>
  //                     </tr>
  //                   </tbody>
  //                 </table>
  //                 <table
  //                   align="center"
  //                   border="0"
  //                   cellpadding="0"
  //                   cellspacing="0"
  //                   class="row row-18"
  //                   role="presentation"
  //                   style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
  //                   width="100%"
  //                 >
  //                   <tbody>
  //                     <tr>
  //                       <td>
  //                         <table
  //                           align="center"
  //                           border="0"
  //                           cellpadding="0"
  //                           cellspacing="0"
  //                           class="row-content stack"
  //                           role="presentation"
  //                           style="
  //                             mso-table-lspace: 0pt;
  //                             mso-table-rspace: 0pt;
  //                             background-color: #ffffff;
  //                             color: #000000;
  //                             width: 700px;
  //                           "
  //                           width="700"
  //                         >
  //                           <tbody>
  //                             <tr>
  //                               <td
  //                                 class="column column-1"
  //                                 style="
  //                                   mso-table-lspace: 0pt;
  //                                   mso-table-rspace: 0pt;
  //                                   font-weight: 400;
  //                                   text-align: left;
  //                                   vertical-align: top;
  //                                   padding-top: 5px;
  //                                   padding-bottom: 0px;
  //                                   border-top: 0px;
  //                                   border-right: 0px;
  //                                   border-bottom: 0px;
  //                                   border-left: 0px;
  //                                 "
  //                                 width="100%"
  //                               >
  //                                 <table
  //                                   border="0"
  //                                   cellpadding="10"
  //                                   cellspacing="0"
  //                                   class="text_block block-1"
  //                                   role="presentation"
  //                                   style="
  //                                     mso-table-lspace: 0pt;
  //                                     mso-table-rspace: 0pt;
  //                                     word-break: break-word;
  //                                   "
  //                                   width="100%"
  //                                 >
  //                                   <tr>
  //                                     <td class="pad">
  //                                       <div style="font-family: sans-serif">
  //                                         <div
  //                                           class=""
  //                                           style="
  //                                             font-size: 12px;
  //                                             font-family: Montserrat, Trebuchet MS,
  //                                               Lucida Grande, Lucida Sans Unicode,
  //                                               Lucida Sans, Tahoma, sans-serif;
  //                                             mso-line-height-alt: 14.399999999999999px;
  //                                             color: #ffffff;
  //                                             line-height: 1.2;
  //                                           "
  //                                         >
  //                                           <p
  //                                             style="
  //                                               margin: 0;
  //                                               font-size: 12px;
  //                                               text-align: center;
  //                                               mso-line-height-alt: 14.399999999999999px;
  //                                             "
  //                                           >
  //                                             <span style="color: #555555"
  //                                               >Terms of use
  //                                               <strong>|</strong> Privacy
  //                                               Policy</span
  //                                             >
  //                                           </p>
  //                                         </div>
  //                                       </div>
  //                                     </td>
  //                                   </tr>
  //                                 </table>
  //                               </td>
  //                             </tr>
  //                           </tbody>
  //                         </table>
  //                       </td>
  //                     </tr>
  //                   </tbody>
  //                 </table>
  //                 <table
  //                   align="center"
  //                   border="0"
  //                   cellpadding="0"
  //                   cellspacing="0"
  //                   class="row row-19"
  //                   role="presentation"
  //                   style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
  //                   width="100%"
  //                 >
  //                   <tbody>
  //                     <tr>
  //                       <td>
  //                         <table
  //                           align="center"
  //                           border="0"
  //                           cellpadding="0"
  //                           cellspacing="0"
  //                           class="row-content stack"
  //                           role="presentation"
  //                           style="
  //                             mso-table-lspace: 0pt;
  //                             mso-table-rspace: 0pt;
  //                             color: #000000;
  //                             width: 700px;
  //                           "
  //                           width="700"
  //                         >
  //                           <tbody>
  //                             <tr>
  //                               <td
  //                                 class="column column-1"
  //                                 style="
  //                                   mso-table-lspace: 0pt;
  //                                   mso-table-rspace: 0pt;
  //                                   font-weight: 400;
  //                                   text-align: left;
  //                                   vertical-align: top;
  //                                   padding-top: 0px;
  //                                   padding-bottom: 5px;
  //                                   border-top: 0px;
  //                                   border-right: 0px;
  //                                   border-bottom: 0px;
  //                                   border-left: 0px;
  //                                 "
  //                                 width="100%"
  //                               >
  //                                 <table
  //                                   border="0"
  //                                   cellpadding="0"
  //                                   cellspacing="0"
  //                                   class="image_block block-1"
  //                                   role="presentation"
  //                                   style="
  //                                     mso-table-lspace: 0pt;
  //                                     mso-table-rspace: 0pt;
  //                                   "
  //                                   width="100%"
  //                                 >
  //                                   <tr>
  //                                     <td
  //                                       class="pad"
  //                                       style="
  //                                         width: 100%;
  //                                         padding-right: 0px;
  //                                         padding-left: 0px;
  //                                       "
  //                                     >
  //                                       <div
  //                                         align="center"
  //                                         class="alignment"
  //                                         style="line-height: 10px"
  //                                       >
  //                                         <img
  //                                           alt="Alternate text"
  //                                           class="big"
  //                                           src="images/white_down.png"
  //                                           style="
  //                                             display: block;
  //                                             height: auto;
  //                                             border: 0;
  //                                             width: 700px;
  //                                             max-width: 100%;
  //                                           "
  //                                           title="Alternate text"
  //                                           width="700"
  //                                         />
  //                                       </div>
  //                                     </td>
  //                                   </tr>
  //                                 </table>
  //                               </td>
  //                             </tr>
  //                           </tbody>
  //                         </table>
  //                       </td>
  //                     </tr>
  //                   </tbody>
  //                 </table>
  //                 <table
  //                   align="center"
  //                   border="0"
  //                   cellpadding="0"
  //                   cellspacing="0"
  //                   class="row row-20"
  //                   role="presentation"
  //                   style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
  //                   width="100%"
  //                 >
  //                   <tbody>
  //                     <tr>
  //                       <td>
  //                         <table
  //                           align="center"
  //                           border="0"
  //                           cellpadding="0"
  //                           cellspacing="0"
  //                           class="row-content stack"
  //                           role="presentation"
  //                           style="
  //                             mso-table-lspace: 0pt;
  //                             mso-table-rspace: 0pt;
  //                             color: #000000;
  //                             width: 700px;
  //                           "
  //                           width="700"
  //                         >
  //                           <tbody>
  //                             <tr>
  //                               <td
  //                                 class="column column-1"
  //                                 style="
  //                                   mso-table-lspace: 0pt;
  //                                   mso-table-rspace: 0pt;
  //                                   font-weight: 400;
  //                                   text-align: left;
  //                                   vertical-align: top;
  //                                   padding-top: 5px;
  //                                   padding-bottom: 5px;
  //                                   border-top: 0px;
  //                                   border-right: 0px;
  //                                   border-bottom: 0px;
  //                                   border-left: 0px;
  //                                 "
  //                                 width="100%"
  //                               >
  //                                 <div
  //                                   class="spacer_block"
  //                                   style="
  //                                     height: 25px;
  //                                     line-height: 25px;
  //                                     font-size: 1px;
  //                                   "
  //                                 >
  //
  //                                 </div>
  //                               </td>
  //                             </tr>
  //                           </tbody>
  //                         </table>
  //                       </td>
  //                     </tr>
  //                   </tbody>
  //                 </table>
  //                 <table
  //                   align="center"
  //                   border="0"
  //                   cellpadding="0"
  //                   cellspacing="0"
  //                   class="row row-21"
  //                   role="presentation"
  //                   style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
  //                   width="100%"
  //                 >
  //                   <tbody>
  //                     <tr>
  //                       <td>
  //                         <table
  //                           align="center"
  //                           border="0"
  //                           cellpadding="0"
  //                           cellspacing="0"
  //                           class="row-content stack"
  //                           role="presentation"
  //                           style="
  //                             mso-table-lspace: 0pt;
  //                             mso-table-rspace: 0pt;
  //                             color: #000000;
  //                             width: 700px;
  //                           "
  //                           width="700"
  //                         >
  //                           <tbody>
  //                             <tr>
  //                               <td
  //                                 class="column column-1"
  //                                 style="
  //                                   mso-table-lspace: 0pt;
  //                                   mso-table-rspace: 0pt;
  //                                   font-weight: 400;
  //                                   text-align: left;
  //                                   vertical-align: top;
  //                                   padding-top: 5px;
  //                                   padding-bottom: 5px;
  //                                   border-top: 0px;
  //                                   border-right: 0px;
  //                                   border-bottom: 0px;
  //                                   border-left: 0px;
  //                                 "
  //                                 width="100%"
  //                               >
  //                                 <table
  //                                   border="0"
  //                                   cellpadding="0"
  //                                   cellspacing="0"
  //                                   class="icons_block block-1"
  //                                   role="presentation"
  //                                   style="
  //                                     mso-table-lspace: 0pt;
  //                                     mso-table-rspace: 0pt;
  //                                   "
  //                                   width="100%"
  //                                 >
  //                                   <tr>
  //                                     <td
  //                                       class="pad"
  //                                       style="
  //                                         vertical-align: middle;
  //                                         color: #9d9d9d;
  //                                         font-family: inherit;
  //                                         font-size: 15px;
  //                                         padding-bottom: 5px;
  //                                         padding-top: 5px;
  //                                         text-align: center;
  //                                       "
  //                                     >
  //                                       <table
  //                                         cellpadding="0"
  //                                         cellspacing="0"
  //                                         role="presentation"
  //                                         style="
  //                                           mso-table-lspace: 0pt;
  //                                           mso-table-rspace: 0pt;
  //                                         "
  //                                         width="100%"
  //                                       >
  //                                         <tr>
  //                                           <td
  //                                             class="alignment"
  //                                             style="
  //                                               vertical-align: middle;
  //                                               text-align: center;
  //                                             "
  //                                           >
  //                                             <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
  //                                             <!--[if !vml]><!-->
  //                                           </td>
  //                                         </tr>
  //                                       </table>
  //                                     </td>
  //                                   </tr>
  //                                 </table>
  //                               </td>
  //                             </tr>
  //                           </tbody>
  //                         </table>
  //                       </td>
  //                     </tr>
  //                   </tbody>
  //                 </table>
  //               </td>
  //             </tr>
  //           </tbody>
  //         </table>
  //         <!-- End -->
  //       </body>
  //     </html>
  // `,
  //     };
  //     try {
  //       const sendedMail = await transporter.sendMail(mailOptions);
  //       if (sendedMail.response) {
  //         return {
  //           successMail: true,
  //           messageMail: "Mail sended",
  //         };
  //       } else {
  //         return {
  //           successMail: false,
  //           messageMail: "EMAIL NOT SENT",
  //         };
  //       }
  //     } catch (error) {
  //       return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
  //     }
  //   },
  sendFor: async (response) => {
    let body = hdfcdata;
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: "prince.frontendarmy@gmail.com",
      subject: CONFIG.emailSubject.order_confirmation,
      html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>Invoice</title>
          <link
            href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body
          style="
            font-family: 'PT Sans', sans-serif;
            margin: 0;
            padding: 0px;
            color: #222;
            font-weight: 400;
          "
        >
          <div
            style="max-width: 803px; margin: 0 auto; padding: 7px 0px; display: block"
          >
            <div
              style="
                background-image: url('images/bg.jpg');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                border: 1px solid rgb(165, 164, 164);
                padding: 20px;
                max-width: 760px;
                margin: 0px auto;
              "
            >
              <div
                style="
                  max-width: 750px;
                  width: 100%;
                  margin: 0px auto;
                  display: block;
                  font-family: 'PT Sans', sans-serif;
                  font-size: 15px;
                "
              >
                <p
                  style="font-size: 12px; margin: 0; padding: 0; margin-bottom: -15px"
                >
                  In this policy, the investment risk in investment portfolio is borne
                  by the policyholder
                </p>
                <div style="width: 125px; float: right">
                  <img src="images/logo.png" width="100%" />
                </div>
                <div
                  style="border-top: 2px solid #af1f24; width: 100%; clear: both"
                ></div>
                <p
                  style="
                    font-size: 15px;
                    margin: 0;
                    padding: 10px 0 5px 0;
                    display: block;
                  "
                >
                  Dear ${body.policeGlance.name},
                </p>
                <p
                  style="
                    font-size: 15px;
                    margin: 0;
                    padding: 0px 0 0px 0;
                    display: block;
                  "
                >
                  Below is an update on the performance of your policy till date and
                  the likely future value.
                </p>
                <div
                  style="
                    background-color: #005e9d;
                    color: #fff;
                    padding: 10px;
                    margin: 10px 0;
                    font-size: 15px;
                    font-weight: 700;
                  "
                >
                  A. Your policy at a glance
                </div>
                <div
                  style="
                    width: 100%;
                    border: 1px solid #005e9d;
                    margin-top: 5px;
                    display: flex;
                    clear: both;
                    background-color: #fff;
                    font-size: 15px;
                  "
                >
                  <div
                    style="width: 25%; border-right: 1px solid #005e9d; float: left"
                  >
                    <span
                      style="
                        color: #005e9d;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 10px 10px 0 10px;
                      "
                      >Policy owner:</span
                    >
                    <span
                      style="
                        color: #af1f24;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 4px 10px 10px 10px;
                      "
                    >
                      ${body.policeGlance.policyOwner}</span
                    >
                  </div>
                  <div
                    style="width: 25%; border-right: 1px solid #005e9d; float: left"
                  >
                    <span
                      style="
                        color: #005e9d;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 10px 10px 0 10px;
                      "
                      >Life insured:</span
                    >
                    <span
                      style="
                        color: #af1f24;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 4px 10px 10px 10px;
                      "
                      >${body.policeGlance.lifeInsured}</span
                    >
                  </div>
                  <div
                    style="width: 25%; border-right: 1px solid #005e9d; float: left"
                  >
                    <span
                      style="
                        color: #005e9d;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 10px 10px 0 10px;
                      "
                      >Nominee</span
                    >
                    <span
                      style="
                        color: #af1f24;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 4px 10px 10px 10px;
                      "
                      >${body.policeGlance.nominee}</span
                    >
                  </div>
                  <div style="width: 25%; float: left">
                    <span
                      style="
                        color: #005e9d;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 10px 10px 0 10px;
                      "
                      >Policy number:</span
                    >
                    <span
                      style="
                        color: #af1f24;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 4px 10px 10px 10px;
                      "
                      >${body.policeGlance.policyNumber}</span
                    >
                  </div>
                </div>
                <div
                  style="
                    width: 100%;
                    border: 1px solid #005e9d;
                    display: flex;
                    margin-top: 15px;
                    clear: both;
                    background-color: #fff;
                  "
                >
                  <div
                    style="width: 25%; border-right: 1px solid #005e9d; float: left"
                  >
                    <span
                      style="
                        color: #005e9d;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 10px 10px 0 10px;
                      "
                      >Issued on:</span
                    >
                    <span
                      style="
                        color: #af1f24;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 4px 10px 10px 10px;
                      "
                      >${body.policeGlance.issuedOn}</span
                    >
                  </div>
                  <div
                    style="width: 25%; border-right: 1px solid #005e9d; float: left"
                  >
                    <span
                      style="
                        color: #005e9d;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 10px 10px 0 10px;
                      "
                      >Will mature on:</span
                    >
                    <span
                      style="
                        color: #af1f24;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 4px 10px 10px 10px;
                      "
                      >${body.policeGlance.matureOn}</span
                    >
                  </div>
                  <div
                    style="width: 25%; border-right: 1px solid #005e9d; float: left"
                  >
                    <span
                      style="
                        color: #005e9d;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 10px 10px 0 10px;
                      "
                      >Policy term:</span
                    >
                    <span
                      style="
                        color: #af1f24;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 4px 10px 10px 10px;
                      "
                      >${body.policeGlance.policyTerm}</span
                    >
                  </div>
                  <div style="width: 25%; float: left">
                    <span
                      style="
                        color: #005e9d;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 10px 10px 0 10px;
                      "
                      >Premium paying term:</span
                    >
                    <span
                      style="
                        color: #af1f24;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 4px 10px 10px 10px;
                      "
                      >${body.policeGlance.premiumPayingTerm}</span
                    >
                  </div>
                </div>
                <div
                  style="
                    width: 100%;
                    border: 1px solid #005e9d;
                    display: flex;
                    margin-top: 15px;
                    clear: both;
                    background-color: #fff;
                  "
                >
                  <div
                    style="width: 25%; border-right: 1px solid #005e9d; float: left"
                  >
                    <span
                      style="
                        color: #080a0c;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 10px 10px 0 10px;
                      "
                      >Sum assured:</span
                    >
                    <span
                      style="
                        color: #af1f24;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 4px 10px 10px 10px;
                      "
                      >INR ${body.policeGlance.sumAssured}</span
                    >
                  </div>
                  <div
                    style="width: 25%; border-right: 1px solid #005e9d; float: left"
                  >
                    <span
                      style="
                        color: #005e9d;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 10px 10px 0 10px;
                      "
                      >Premium frequency:</span
                    >
                    <span
                      style="
                        color: #af1f24;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 4px 10px 10px 10px;
                      "
                      >${body.policeGlance.premiumFrequency}</span
                    >
                  </div>
                  <div
                    style="width: 25%; border-right: 1px solid #005e9d; float: left"
                  >
                    <span
                      style="
                        color: #005e9d;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 10px 10px 0 10px;
                      "
                      >Premium amount:
                    </span>
                    <span
                      style="
                        color: #af1f24;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 4px 10px 10px 10px;
                      "
                      >INR ${body.policeGlance.premiumAmount}</span
                    >
                  </div>
                  <div style="width: 25%; float: left">
                    <span
                      style="
                        color: #005e9d;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 10px 10px 0 10px;
                      "
                      >Premiums paid upto:</span
                    >
                    <span
                      style="
                        color: #af1f24;
                        display: block;
                        line-height: 18px;
                        font-weight: 700;
                        padding: 4px 10px 10px 10px;
                      "
                      >${body.policeGlance.premiumsPaidUpto}</span
                    >
                  </div>
                </div>
                <div
                  style="
                    background-color: #005e9d;
                    color: #fff;
                    padding: 10px;
                    margin: 15px 0 5px 0;
                    font-size: 15px;
                    font-weight: 700;
                  "
                >
                  B. Key policy benefits (as of DD/MM/YYYY)
                </div>
                <div style="clear: both; width: 100%"></div>
                <div style="width: 58%; float: left">
                  <div
                    style="
                      color: #af1f24;
                      padding: 5px 0;
                      margin: 0;
                      font-size: 15px;
                      font-weight: 700;
                    "
                  >
                    1) Maturity benefits
                  </div>
                  <p
                    style="margin: 0; padding: 0px 0; display: block; font-size: 15px"
                  >
                    Cumulative premium paid: INR<span
                      style="color: #005e9d; font-weight: 600"
                    >
                    ${body.maturityBenefits.cumulativePremium}</span
                    >
                  </p>
                  <p
                    style="margin: 0; padding: 0px 0; display: block; font-size: 15px"
                  >
                    Amount invested: INR<span
                      style="color: #005e9d; font-weight: 600"
                    >
                    ${body.maturityBenefits.amountInvested}<sup>1</sup></span
                    >
                  </p>
                  <p
                    style="margin: 0; padding: 0px 0; display: block; font-size: 15px"
                  >
                    Fund value: INR<span style="color: #005e9d; font-weight: 600">
                      ${body.maturityBenefits.fundValue}<sup>2</sup></span
                    >
                  </p>
                  <p
                    style="margin: 0; padding: 4px 0; display: block; font-size: 15px"
                  >
                    Gross IRR:
                    <span style="color: #005e9d; font-weight: 600"> ${body.maturityBenefits.grossIRR}%</span>
                  </p>
                  <p
                    style="margin: 0; padding: 4px 0; display: block; font-size: 15px"
                  >
                    Net IRR:
                    <span style="color: #005e9d; font-weight: 600"> ${body.maturityBenefits.netIRR}%</span>
                  </p>
                  <p
                    style="
                      margin: 5px 0 0 0;
                      padding: 1px 0;
                      display: inline-block;
                      font-size: 12px;
                      width: 100%;
                    "
                  >
                    <span style="width: 5%; float: left">1.</span>
                    <span
                      style="
                        width: 95%;
                        float: left;
                        font-size: 12px;
                        line-height: 15px;
                      "
                    >
                      Amount invested is net of premium allocation charge</span
                    >
                  </p>
                  <p
                    style="
                      margin: 0px 0 0 0;
                      padding: 0px 0;
                      display: inline-block;
                      font-size: 12px;
                      width: 100%;
                    "
                  >
                    <span style="width: 5%; float: left">2.</span>
                    <span
                      style="
                        width: 95%;
                        float: left;
                        font-size: 12px;
                        line-height: 15px;
                      "
                    >
                      Fund value is post deduction of all other charges, including
                      policy administrative charges, fund management charges &
                      mortality charge</span
                    >
                  </p>
                  <p
                    style="
                      margin: 0px 0 0 0;
                      padding: 3px 0;
                      display: inline-block;
                      font-size: 12px;
                      width: 100%;
                    "
                  >
                    <span
                      style="
                        width: 100%;
                        float: left;
                        font-size: 12px;
                        line-height: 15px;
                      "
                    >
                      Charges detailed in appendix (section 1)</span
                    >
                  </p>
                </div>
                <div style="width: 42%; float: right">
                  <img src="images/map.png" width="100%" />
                </div>
                <div style="clear: both; width: 100%"></div>
                <div
                  style="
                    color: #222;
                    padding: 5px 0 5px 0;
                    margin: 0;
                    font-size: 15px;
                    font-weight: 700;
                    display: block;
                  "
                >
                  Performance of your funds vis a vis benchmark
                </div>
                <table
                  style="
                    border-collapse: collapse;
                    border: 1px solid #005e9d;
                    font-size: 14px;
                    color: #005e9d;
                    font-weight: 700;
                    border-bottom: 0;
                    max-width: 800px;
                    width: 100%;
                  "
                >
                  <tr>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 10px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Risk profile
                    </td>
                    <td
                      style="
                        min-width: 85px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 10px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Fund Name
                    </td>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 10px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Premium <br />
                      allocation
                    </td>
                    <td
                      style="
                        min-width: 85px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 10px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Available units
                    </td>
                    <td
                      style="
                        min-width: 85px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 10px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      NAV as <br />
                      on 29/09/2019
                    </td>
                    <td
                      style="
                        min-width: 85px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 10px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Fund value
                    </td>
                    <td
                      style="
                        min-width: 85px;
                        max-width: 100px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 10px 1px;
                        text-align: center;
                        border-bottom: 1px solid #005e9d;
                        border-right: 1px solid #005e9d;
                      "
                    >
                      <span style="color: #af1f24">Fund IRR</span> <br />
                      (from inception till date)
                    </td>
                    <td
                      style="
                        min-width: 85px;
                        max-width: 100px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 10px 1px;
                        text-align: center;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Benchmark IRR (from inception till date)
                    </td>
                  </tr>
                  
                  <tr>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 10px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Very high
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 10px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Opportunities fund
                    </td>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 10px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      100%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 10px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      39,124
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 10px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      29.02
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 10px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      11,35,554
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 10px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      14.87%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 10px 1px;
                        text-align: center;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      12.32%
                    </td>
                  </tr>
      
                </table>
                <p
                  style="
                    margin: 0px 0 0 0;
                    padding: 5px 0;
                    display: inline-block;
                    font-size: 12px;
                    width: 100%;
                  "
                >
                  <span
                    style="
                      width: 100%;
                      float: left;
                      font-size: 12px;
                      line-height: 15px;
                    "
                  >
                    Note: Performance of funds vis-a-vis benchmark detailed in
                    Appendix (section 2)</span
                  >
                </p>
                <div
                  style="
                    color: #af1f24;
                    padding: 0px 0 6px 0;
                    display: block;
                    margin: 0px 0 0px 0;
                    font-size: 15px;
                    font-weight: 700;
                  "
                >
                  2) Death benefits
                </div>
                <p
                  style="
                    margin: 0;
                    padding: 0px 0 5px 0;
                    display: block;
                    font-size: 15px;
                  "
                >
                  Death benefit = Sum assured (INR 10, 00,000) + total fund value (as
                  applicable on demise of life assured)
                </p>
                <p style="margin: 0; padding: 0px 0; display: block; font-size: 15px">
                  In case of life insured's unfortunate demise before end of policy
                  term, the nominee will get the death benefit. Minimum death benefit
                  will be at least 105% of the premiums paid
                </p>
              </div>
            </div>
          </div>
          <!-- 2nd pdf -->
          <div
            style="max-width: 803px; margin: 0 auto; padding: 7px 0px; display: block"
          >
            <div
              style="
                background-image: url('images/bg.jpg');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                border: 1px solid rgb(165, 164, 164);
                padding: 20px;
                max-width: 760px;
                margin: 0px auto;
              "
            >
              <div
                style="
                  max-width: 750px;
                  width: 100%;
                  margin: 0px auto;
                  display: block;
                  font-family: 'PT Sans', sans-serif;
                  font-size: 15px;
                "
              >
                <div style="width: 125px; float: right; margin-top: -15px">
                  <img src="images/logo.png" width="100%" />
                </div>
                <div
                  style="border-top: 2px solid #af1f24; width: 100%; clear: both"
                ></div>
                <div
                  style="
                    background-color: #005e9d;
                    color: #fff;
                    padding: 10px;
                    margin: 5px 0;
                    font-size: 15px;
                    font-weight: 700;
                  "
                >
                  C. Benefits of continuing the policy
                </div>
                <ul style="margin: 0; padding: 0 0 0 27px">
                  <li style="margin: 0px; padding: 0px 0px">
                    <strong style="font-weight: 600; width: 100%"
                      >Illustrative maturity benefit</strong
                    >
                    <ul
                      style="list-style-type: circle; margin: 0; padding: 0 0 0 17px"
                    >
                      <li style="margin: 0px; padding: 0px 0px">
                        INR 21,04,758 (@ 4% assumed rate of return)<sup>1</sup> OR
                      </li>
                      <li style="margin: 0px; padding: 0px 0px">
                        INR 26,25,764 (@ 8% assumed rate of return)<sup>1</sup>
                      </li>
                    </ul>
                  </li>
                  <li style="margin: 0px; padding: 0px 0px">
                    Continuation of
                    <strong style="font-weight: 600">life cover</strong>
                  </li>
                  <li style="margin: 0px; padding: 0px 0px">
                    <strong style="font-weight: 600">Lower charges</strong> deducted
                    from premium in
                    <strong style="font-weight: 600"> future</strong> (1%) and hence
                    higher returns
                  </li>
                  <li style="margin: 0px; padding: 0px 0px">
                    <strong>Tax benefits</strong><sup>2</sup> u/s 80C and 10(10D)
                  </li>
                  <li style="margin: 0px; padding: 0px 0px">
                    Systematic saving ensuring benefit of
                    <strong style="font-weight: 600">averaging</strong> on your
                    investment
                  </li>
                  <li style="margin: 0px; padding: 0px 0px">
                    Options to manage market volatility (not available in other
                    investments)
                    <ul
                      style="list-style-type: circle; margin: 0; padding: 0 0 0 17px"
                    >
                      <li style="margin: 0px; padding: 0px 0px">
                        Fund switch / premium re-direction during policy term
                        (detailed in section D)
                      </li>
                      <li style="margin: 0px; padding: 0px 0px">
                        Option to take maturity fund value in periodic installments,
                        over a period which may extend up to 5 years,
                        <strong style="font-weight: 700"
                          >to over come downturn in markets at time of
                          maturity</strong
                        >
                      </li>
                    </ul>
                  </li>
                  <li style="margin: 0px; padding: 0px 0px">
                    Option of partial withdrawal for liquidity
                    <p
                      style="
                        margin: 0;
                        padding: 3px;
                        font-size: 12px;
                        line-height: 16px;
                      "
                    >
                      1. Assumed rates of return are not guaranteed as the policy
                      value is dependent on a number of factors including future
                      investment performance. The past performance of any of the funds
                      is not necessarily an indication of future performance. Detailed
                      in appendix (section 3)
                    </p>
                    <p
                      style="
                        margin: 0;
                        padding: 3px;
                        font-size: 12px;
                        line-height: 16px;
                      "
                    >
                      2. Tax benefits are subject to changes in tax laws
                    </p>
                  </li>
                </ul>
                <div
                  style="
                    background-color: #005e9d;
                    color: #fff;
                    padding: 10px;
                    margin: 5px 0;
                    font-size: 15px;
                    font-weight: 700;
                  "
                >
                  D. Option of fund switch / premium re-direction
                </div>
                <div style="clear: both; width: 100%"></div>
                <table
                  style="
                    border-collapse: collapse;
                    border: 1px solid #005e9d;
                    font-size: 14px;
                    color: #005e9d;
                    font-weight: 700;
                    border-bottom: 0;
                    max-width: 800px;
                    width: 100%;
                  "
                >
                  <tr>
                    <td
                      style="
                        min-width: 120px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Risk profile
                    </td>
                    <td
                      style="
                        min-width: 85px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Fund / benchmark index
                    </td>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      1 year
                    </td>
                    <td
                      style="
                        min-width: 85px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      3 years
                    </td>
                    <td
                      style="
                        min-width: 85px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      5 years
                    </td>
                    <td
                      style="
                        min-width: 102px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Since inception
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Low
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Short term fund CRISIL short term bond fund index
                    </td>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      6.80% 10.03%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      4.81% 7.86%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      5.56% 8.18%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      6.79%<br />
                      8.41%
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Moderate
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Income fund CRISIL composite bond fund index
                    </td>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      12.42% 13.48%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      7.15% 8.36%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      7.59%<br />
                      8.83%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      8.14%<br />
                      8.35%
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Moderate to High
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Balanced fund 60% BSE 100 40% CRISIL composite bond fund index
                    </td>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      -6.60% <br />
                      -4.3%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      2.84%<br />
                      3.92%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      5.28%<br />
                      5.72%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      7.32%<br />
                      6.89%
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Very high
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Bluechip fund BSE 100
                    </td>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      -13.08%<br />
                      -16.15%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      2.19%<br />
                      0.96%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      5.23% <br />
                      3.64%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 3px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      7.07%<br />
                      6.01%
                    </td>
                  </tr>
                </table>
                <p
                  style="
                    margin: 0px 0 0 0;
                    padding: 5px 0;
                    display: inline-block;
                    font-size: 12px;
                    width: 100%;
                  "
                >
                  <span
                    style="
                      width: 100%;
                      float: left;
                      font-size: 12px;
                      line-height: 15px;
                    "
                  >
                    Fund investment philosophy and asset classes detailed in appendix
                    (section 4)</span
                  >
                </p>
                <div
                  style="
                    background-color: #005e9d;
                    color: #fff;
                    padding: 10px;
                    margin: 5px 0;
                    font-size: 15px;
                    font-weight: 700;
                  "
                >
                  E. Your decision
                </div>
                <p
                  style="
                    margin: 0;
                    padding: 0px 0 5px 0;
                    display: block;
                    font-size: 15px;
                  "
                >
                  I, Ankit, declare that I have been explained the benefits of
                  continuing my policy. My final decision is as follows:
                </p>
                <ul style="margin: 0; padding: 0 0 0 27px">
                  <li style="margin: 0px; padding: 0px 0px">
                    I would like to
                    <strong style="font-weight: 700">continue</strong> the policy
                    <strong style="font-weight: 700">as is</strong>
                  </li>
                  <li style="margin: 0px; padding: 0px 0px">
                    I would like to use the
                    <strong style="font-weight: 700">fund switch option</strong>
                  </li>
                  <li style="margin: 0px; padding: 0px 0px">
                    I would like to opt for
                    <strong style="font-weight: 700"> partial withdrawal </strong>
                  </li>
                  <li style="margin: 0px; padding: 0px 0px">
                    I would like to
                    <strong style="font-weight: 700">surrender</strong> the policy and
                    forego all the benefits that will accrue towards this policy in
                    the future
                  </li>
                </ul>
                <div
                  style="
                    background-color: #005e9d;
                    color: #fff;
                    padding: 10px;
                    margin: 5px 0;
                    font-size: 15px;
                    font-weight: 700;
                  "
                >
                  F . Appendix
                </div>
                <ul
                  style="margin: 0; padding: 0 0 0 27px; list-style-type: upper-greek"
                >
                  <li style="margin: 0px; padding: 0px 0px">Charges</li>
                  <li style="margin: 0px; padding: 0px 0px">
                    Fund performance vis-à-vis benchmark
                  </li>
                  <li style="margin: 0px; padding: 0px 0px">Future projection</li>
                  <li style="margin: 0px; padding: 0px 0px">Other fund details</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 3rd pdf -->
          <div
            style="max-width: 803px; margin: 0 auto; padding: 7px 0px; display: block"
          >
            <div
              style="
                background-image: url('images/bg.jpg');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                border: 1px solid rgb(165, 164, 164);
                padding: 20px;
                max-width: 760px;
                margin: 0px auto;
              "
            >
              <div
                style="
                  max-width: 750px;
                  width: 100%;
                  margin: 0px auto;
                  display: block;
                  font-family: 'PT Sans', sans-serif;
                  font-size: 15px;
                "
              >
                <div style="width: 125px; float: right; margin-top: -15px">
                  <img src="images/logo.png" width="100%" />
                </div>
                <div
                  style="border-top: 2px solid #af1f24; width: 100%; clear: both"
                ></div>
                <div
                  style="
                    background-color: #005e9d;
                    color: #fff;
                    text-align: center;
                    padding: 10px;
                    margin: 7px 0;
                    font-size: 18px;
                    font-weight: 700;
                  "
                >
                  Appendix
                </div>
                <div
                  style="
                    color: #af1f24;
                    padding: 0px 0 5px 0;
                    display: block;
                    margin: 0px 0 0px 0;
                    font-size: 15px;
                    font-weight: 700;
                  "
                >
                  Section 1: Charges
                </div>
                <p style="margin: 0; padding: 3px 0">
                  Charges under this policy are deducted to provide policy benefits
                  and towards administration.
                </p>
                <ol
                  style="
                    margin: 0;
                    padding: 0 0 0 15px;
                    font-weight: 700;
                    list-style-type: decimal;
                    font-weight: 700;
                  "
                >
                  <li style="margin: 0px; padding: 3px 0px">
                    <strong style="font-weight: 700"
                      >Premium allocation charge:</strong
                    >
                    <span style="font-weight: 400"
                      >An annual fee that is first deducted from your premium before
                      it is invested in funds of your choice; this is charged as a %
                      of yearly premium</span
                    >
                    <div style="clear: both; width: 100%; padding-top: 10px"></div>
                    <table
                      style="
                        border-collapse: collapse;
                        border: 1px solid #005e9d;
                        margin-bottom: 10px;
                        font-size: 15px;
                        color: #fff;
                        font-weight: 700;
                        border-bottom: 0;
                        max-width: 800px;
                        width: 100%;
                      "
                    >
                      <tr>
                        <td
                          style="
                            min-width: 120px;
                            vertical-align: top;
                            background-color: #005e9d;
                            padding: 5px 1px;
                            text-align: center;
                            border-right: 1px solid #fff;
                            border-bottom: 1px solid #005e9d;
                          "
                        >
                          Premium paid during year
                        </td>
                        <td
                          style="
                            min-width: 85px;
                            vertical-align: top;
                            background-color: #005e9d;
                            padding: 5px 1px;
                            text-align: center;
                            border-right: 1px solid #fff;
                            border-bottom: 1px solid #005e9d;
                          "
                        >
                          Year 1 to 7
                        </td>
                        <td
                          style="
                            min-width: 75px;
                            vertical-align: top;
                            background-color: #005e9d;
                            padding: 5px 1px;
                            text-align: center;
                            border-right: 1px solid #005e9d;
                            border-bottom: 1px solid #005e9d;
                          "
                        >
                          Year 8+
                        </td>
                      </tr>
                      <tr>
                        <td
                          style="
                            min-width: 75px;
                            vertical-align: top;
                            background-color: #fff;
                            padding: 5px 1px;
                            text-align: center;
                            border-right: 1px solid #005e9d;
                            color: #333;
                            font-weight: 500;
                            font-size: 15px;
                            border-bottom: 1px solid #005e9d;
                          "
                        >
                          Premium allocation rate
                        </td>
                        <td
                          style="
                            vertical-align: top;
                            background-color: #fff;
                            padding: 5px 1px;
                            text-align: center;
                            border-right: 1px solid #005e9d;
                            color: #333;
                            font-weight: 500;
                            font-size: 15px;
                            border-bottom: 1px solid #005e9d;
                          "
                        >
                          96%
                        </td>
                        <td
                          style="
                            min-width: 75px;
                            vertical-align: top;
                            background-color: #fff;
                            padding: 5px 1px;
                            text-align: center;
                            border-right: 1px solid #005e9d;
                            color: #333;
                            font-weight: 500;
                            font-size: 15px;
                            border-bottom: 1px solid #005e9d;
                          "
                        >
                          99%
                        </td>
                      </tr>
                      <tr>
                        <td
                          style="
                            min-width: 75px;
                            vertical-align: top;
                            background-color: #fff;
                            padding: 5px 1px;
                            text-align: center;
                            border-right: 1px solid #005e9d;
                            color: #333;
                            font-weight: 500;
                            font-size: 15px;
                            border-bottom: 1px solid #005e9d;
                          "
                        >
                          Premium allocation charge
                        </td>
                        <td
                          style="
                            vertical-align: top;
                            background-color: #fff;
                            padding: 5px 1px;
                            text-align: center;
                            border-right: 1px solid #005e9d;
                            color: #333;
                            font-weight: 500;
                            font-size: 15px;
                            border-bottom: 1px solid #005e9d;
                          "
                        >
                          4%
                        </td>
                        <td
                          style="
                            min-width: 75px;
                            vertical-align: top;
                            background-color: #fff;
                            padding: 5px 1px;
                            text-align: center;
                            border-right: 1px solid #005e9d;
                            color: #333;
                            font-weight: 500;
                            font-size: 15px;
                            border-bottom: 1px solid #005e9d;
                          "
                        >
                          1%
                        </td>
                      </tr>
                    </table>
                  </li>
                  <li style="margin: 0px; padding: 3px 0px">
                    <strong style="font-weight: 700">
                      Fund management charge (FMC):</strong
                    >
                    <span style="font-weight: 400">
                      Towards management of your funds charged daily at 1.35% per year
                      of the fund value</span
                    >
                  </li>
                  <li style="margin: 0px; padding: 3px 0px">
                    <strong style="font-weight: 700">
                      Policy Administration Charge:</strong
                    >
                    <span style="font-weight: 400">
                      Charge towards management of your policy expenses, charged
                      monthly by cancellation of units subject to a maximum charge of
                      0.4 % of the annual premium or INR 500 per month, whichever is
                      lower (0.25% per month of the original annual premium and
                      increased by 5% per annum on every policy anniversary)</span
                    >
                  </li>
                  <li style="margin: 0px; padding: 3px 0px">
                    <strong style="font-weight: 700">
                      Mortality and other Risk Benefit Charge:</strong
                    >
                    <span style="font-weight: 400"
                      >: Charges towards benefits chosen by you (e.g,., life cover,
                      critical illness cover, permanent disability cover etc.). Note
                      that this is dependent on your age & the specific benefits
                      chosen by you. This is charged monthly via deduction from your
                      units</span
                    >
                  </li>
                  <li style="margin: 0px; padding: 3px 0px">
                    <strong style="font-weight: 700"> Discontinuance Charge:</strong>
                    <span style="font-weight: 400">
                      Charged in case you discontinue or surrender within first 5
                      policy years</span
                    >
                  </li>
                </ol>
                <table
                  style="
                    border-collapse: collapse;
                    border: 1px solid #005e9d;
                    margin: 10px 0;
                    font-size: 15px;
                    color: #fff;
                    font-weight: 700;
                    border-bottom: 0;
                    max-width: 800px;
                    width: 100%;
                  "
                >
                  <tr>
                    <td
                      style="
                        min-width: 120px;
                        vertical-align: middle;
                        background-color: #005e9d;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #fff;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Discontinuance during the policy year
                    </td>
                    <td
                      colspan="2"
                      style="
                        min-width: 85px;
                        vertical-align: middle;
                        background-color: #005e9d;
                        padding: 0px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      <span
                        style="
                          background-color: #0b80c4;
                          display: block;
                          border-bottom: 1px solid #fff;
                          padding: 5px 1px;
                        "
                        >DISCONTINUANCE CHARGE</span
                      >
                      <span
                        style="
                          background-color: #005e9d;
                          display: inline-block;
                          padding: 5px 0px;
                          float: left;
                          width: 272px;
                          border-right: 1px solid #fff;
                        "
                        >Annual premium up to and including INR 25,000</span
                      >
                      <span
                        style="
                          background-color: #005e9d;
                          display: inline-block;
                          padding: 5px 0px;
                          float: left;
                          width: 267px;
                        "
                        >Annual premium above INR 25,000</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: middle;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Year 1
                    </td>
                    <td
                      style="
                        width: 270px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      <ul style="margin: 0; padding: 0 0 0 25px">
                        <li>20% x lower of (Annual Premium or Fund Value)</li>
                        <li>Maximum charge: INR 3,000</li>
                      </ul>
                    </td>
                    <td
                      style="
                        width: 270px;
                        vertical-align: middle;
                        background-color: #fff;
                        padding: 5px 1px;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      <ul style="margin: 0; padding: 0 0 0 25px">
                        <li>6% x lower of (Annual Premium or Fund Value)</li>
                        <li>Maximum charge: INR 3,000</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: middle;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Year 2
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      <ul style="margin: 0; padding: 0 0 0 25px">
                        <li>15% x lower of (Annual Premium or Fund Value)</li>
                        <li>Maximum charge: INR 2,000</li>
                      </ul>
                    </td>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: middle;
                        background-color: #fff;
                        padding: 5px 1px;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      <ul style="margin: 0; padding: 0 0 0 25px">
                        <li>4% x lower of (Annual Premium or Fund Value)</li>
                        <li>Maximum charge: INR 5,000</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: middle;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Year 3
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      <ul style="margin: 0; padding: 0 0 0 25px">
                        <li>10% x lower of (Annual Premium or Fund Value)</li>
                        <li>Maximum charge: INR 1,500</li>
                      </ul>
                    </td>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: middle;
                        background-color: #fff;
                        padding: 5px 1px;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      <ul style="margin: 0; padding: 0 0 0 25px">
                        <li>3% x lower of (Annual Premium or Fund Value)</li>
                        <li>Maximum charge: INR 4,000</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: middle;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Year 4
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      <ul style="margin: 0; padding: 0 0 0 25px">
                        <li>10% x lower of (Annual Premium or Fund Value)</li>
                        <li>Maximum charge: INR 1,500</li>
                      </ul>
                    </td>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: middle;
                        background-color: #fff;
                        padding: 5px 1px;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      <ul style="margin: 0; padding: 0 0 0 25px">
                        <li>2% x lower of (Annual Premium or Fund Value)</li>
                        <li>Maximum charge: INR 2,000</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: middle;
                        background-color: #fff;
                        padding: 5px 5px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Year 5 and beyond
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 5px;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Nill
                    </td>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: middle;
                        background-color: #fff;
                        padding: 5px 5px;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Nill
                    </td>
                  </tr>
                </table>
                <p style="margin: 0; padding: 0; font-size: 12px">
                  Miscellaneous Charge(s): INR 250 may be charged for each Additional
                  Servicing Request(s)
                </p>
                <p style="margin: 0; padding: 0 0 10px 0; font-size: 12px">
                  * Statutory charges - Taxes and levies on the applicable charges are
                  payable at the current rate
                </p>
              </div>
            </div>
          </div>
          <!-- 4th pdf -->
          <div
            style="max-width: 803px; margin: 0 auto; padding: 7px 0px; display: block"
          >
            <div
              style="
                background-image: url('images/bg.jpg');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                border: 1px solid rgb(165, 164, 164);
                padding: 20px;
                max-width: 760px;
                margin: 0px auto;
              "
            >
              <div
                style="
                  max-width: 750px;
                  width: 100%;
                  margin: 0px auto;
                  display: block;
                  font-family: 'PT Sans', sans-serif;
                  font-size: 15px;
                "
              >
                <div style="width: 125px; float: right; margin-top: -15px">
                  <img src="images/logo.png" width="100%" />
                </div>
                <div
                  style="border-top: 2px solid #af1f24; width: 100%; clear: both"
                ></div>
      
                <div
                  style="
                    padding: 10px 0 5px 0;
                    display: block;
                    margin: 0px 0 0px 0;
                    font-size: 15px;
                  "
                >
                  <strong style="color: #af1f24; font-weight: 700"
                    >Alteration to charges:</strong
                  >
                  Current charges cannot be altered without prior approval from IRDAI
                </div>
                <ul style="margin: 0; padding: 0 0 0 30px">
                  <li style="margin: 0; padding: 4px 0px">
                    The critical illness and accidental total & permanent disability
                    charge rates can be reviewed at the end of every three years from
                    the date of launch of this plan and can be increased subject to a
                    maximum increase of 200% of every rate
                  </li>
                  <li style="margin: 0; padding: 4px 0px">
                    A maximum of INR 500 per request can be charged for additional
                    servicing requests
                  </li>
                </ul>
                <div
                  style="
                    padding: 10px 0 5px 0;
                    display: block;
                    margin: 0px 0 0px 0;
                    font-size: 15px;
                  "
                >
                  <strong style="color: #af1f24; font-weight: 700"
                    >Section 2: Fund performance vis-à-vis benchmark</strong
                  >
                </div>
                <table
                  style="
                    border-collapse: collapse;
                    border: 1px solid #005e9d;
                    font-size: 14px;
                    color: #005e9d;
                    font-weight: 700;
                    max-width: 800px;
                    width: 100%;
                    margin: 10px 0;
                  "
                >
                  <tr>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Fund / Benchmark Index
                    </td>
                    <td
                      style="
                        min-width: 85px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      1 year
                    </td>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      3 years
                    </td>
                    <td
                      style="
                        min-width: 85px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      5 years
                    </td>
                    <td
                      style="
                        min-width: 85px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Since inception
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      Opportunities fund
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      -
                    </td>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      -4.19%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      4.44%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      8.90%
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      Nifty free float mid cap 100
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      -
                    </td>
                    <td
                      style="
                        min-width: 75px;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      -9.28%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1.25%
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 1px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      6.56%
                    </td>
                  </tr>
                </table>
                <p style="font-size: 12px; margin: 0; padding: 3px 0">
                  The past performance of any of the funds is not necessarily an
                  indication of future performance.
                </p>
                <p style="font-size: 12px; margin: 0; padding: 3px 0">Disclaimer:</p>
                <ul style="margin: 0; padding: 0 0 0 15px">
                  <li style="margin: 0; padding: 3px 0px; font-size: 12px">
                    The returns for periods longer than a year are depicted on the
                    basis of Compounded Annualized Growth (CAGR) returns.
                  </li>
                  <li style="margin: 0; padding: 3px 0px; font-size: 12px">
                    Unit prices can fluctuate. No fund offers an assured return.
                  </li>
                  <li style="margin: 0; padding: 3px 0px; font-size: 12px">
                    The names of the funds we offer under this plan do not indicate
                    the quality of the plan, its future prospects or returns. None of
                    the funds participate in the profits of HDFC Life Insurance
                    Company Limited. Investment professionals regard money market
                    instruments as unsuitable investments for the long term and are
                    generally used for the short term. This is because money market
                    instruments have relatively stable returns and offer high degree
                    of capital safety. However, they tend to offer lower returns over
                    the term compared to other investments.
                  </li>
                </ul>
                <div
                  style="
                    padding: 10px 0 5px 0;
                    display: block;
                    margin: 0px 0 0px 0;
                    font-size: 15px;
                  "
                >
                  <strong style="color: #af1f24; font-weight: 700"
                    >Section 3: Future Projections</strong
                  >
                </div>
                <p style="font-size: 15px; margin: 0; padding: 3px 0">
                  Projected Statement of premiums, charges and fund value based on
                  Assumed Investment Return of 8% p.a.**
                </p>
                <table
                  style="
                    border-collapse: collapse;
                    border: 1px solid #005e9d;
                    font-size: 14px;
                    color: #005e9d;
                    font-weight: 700;
                    max-width: 800px;
                    width: 100%;
                    margin: 10px 0;
                  "
                >
                  <tr>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Policy Year
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Annualized Premium (INR)
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Premium Allocation Charge (INR)
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Policy Admin. Charge (INR)
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Mortality Charge (INR)
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Taxes and Levies as applicable (INR)
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Total Charges (INR)
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Fund Value (INR)
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Surrender Benefit (INR)
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Death Benefit (INR)
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      9
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      2,00,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      2,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      2,520
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      2,130
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      3,123
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      20,472
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      13,75,912
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      13,75,912
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      23,75,912
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      10
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,00,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      4,560
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      4,153
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      5,442
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      35,675
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      15,56,908
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      15,56,908
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      25,56,908
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      11
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,00,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      4,800
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      4,979
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      6,087
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      39,905
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      17,47,995
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      17,47,995
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      27,47,995
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      12
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,00,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      4,800
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      5,959
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      6,742
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      44,200
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      19,49,912
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      19,49,912
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      29,49,912
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      13
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,00,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      4,800
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      7,078
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      7,450
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      48,837
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      21,63,169
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      21,63,169
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      31,63,169
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      14
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,00,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      4,800
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      8,349
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      8,213
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      53,839
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      23,88,296
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      23,88,296
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      33,88,296
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        color: #ec2c3d;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      15
                    </td>
                    <td
                      style="
                        color: #ec2c3d;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,00,000
                    </td>
                    <td
                      style="
                        color: #ec2c3d;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,000
                    </td>
                    <td
                      style="
                        color: #ec2c3d;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      4,800
                    </td>
                    <td
                      style="
                        color: #ec2c3d;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      9,845
                    </td>
                    <td
                      style="
                        color: #ec2c3d;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      9,045
                    </td>
                    <td
                      style="
                        color: #ec2c3d;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      59,298
                    </td>
                    <td
                      style="
                        color: #ec2c3d;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      26,25,764
                    </td>
                    <td
                      style="
                        color: #ec2c3d;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      NA
                    </td>
                    <td
                      style="
                        color: #ec2c3d;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      NA
                    </td>
                  </tr>
                </table>
                <p style="font-size: 12px; margin: 0; padding: 3px 0 105px 0">
                  Projected Statement of premiums, charges and fund value based on
                  Assumed Investment Return of 8% p.a.**
                </p>
              </div>
            </div>
          </div>
          <!-- 5th pdf -->
          <div
            style="max-width: 803px; margin: 0 auto; padding: 7px 0px; display: block"
          >
            <div
              style="
                background-image: url('images/bg.jpg');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                border: 1px solid rgb(165, 164, 164);
                padding: 20px;
                max-width: 760px;
                margin: 0px auto;
              "
            >
              <div
                style="
                  max-width: 750px;
                  width: 100%;
                  margin: 0px auto;
                  display: block;
                  font-family: 'PT Sans', sans-serif;
                  font-size: 15px;
                "
              >
                <div style="width: 125px; float: right; margin-top: -15px">
                  <img src="images/logo.png" width="100%" />
                </div>
                <div
                  style="border-top: 2px solid #af1f24; width: 100%; clear: both"
                ></div>
                <p style="margin: 0; padding: 10px 0">
                  Projected Statement of premiums, charges and fund value based on
                  Assumed Investment Return of 4% p.a.**
                </p>
                <table
                  style="
                    border-collapse: collapse;
                    border: 1px solid #005e9d;
                    font-size: 14px;
                    color: #005e9d;
                    font-weight: 700;
                    max-width: 800px;
                    width: 100%;
                    margin: 10px 0;
                  "
                >
                  <tr>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Policy Year
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Annualized Premium (INR)
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Premium Allocation Charge (INR)
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Policy Admin. Charge (INR)
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Mortality Charge (INR)
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Taxes and Levies as applicable (INR)
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Total Charges (INR)
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Fund Value (INR)
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Surrender Benefit (INR)
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                      "
                    >
                      Death Benefit (INR)
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        color: #333;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      9
                    </td>
                    <td
                      style="
                        color: #333;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      2,00,000
                    </td>
                    <td
                      style="
                        color: #333;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      2,000
                    </td>
                    <td
                      style="
                        color: #333;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      2,520
                    </td>
                    <td
                      style="
                        color: #333;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      2,130
                    </td>
                    <td
                      style="
                        color: #333;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      2,130
                    </td>
                    <td
                      style="
                        color: #333;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      20,313
                    </td>
                    <td
                      style="
                        color: #333;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      13,45,900
                    </td>
                    <td
                      style="
                        color: #333;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      13,45,900
                    </td>
                    <td
                      style="
                        color: #333;
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      23,45,900
                    </td>
                  </tr>
      
                  <tr>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      10
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,00,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      4,560
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      4,153
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      5,293
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      34,697
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      14,68,349
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      14,68,349
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      24,68,349
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      11
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,00,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      4,800
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      4,979
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      5,785
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      37,921
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      15,92,410
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      15,92,410
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      25,92,410
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      12
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,00,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      4,800
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      5,959
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      6,265
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      41,070
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      17,18,223
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      17,18,223
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      27,18,223
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      13
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,00,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      4,800
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      7,078
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      6,775
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      44,411
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      18,45,662
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      18,45,662
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      28,45,662
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      14
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,00,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      4,800
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      8,349
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      7,315
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      47,955
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      19,74,585
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      19,74,585
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #333;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      29,74,585
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #ec2c3d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      15
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #ec2c3d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,00,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #ec2c3d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      1,000
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #ec2c3d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      4,800
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #ec2c3d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      9,845
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #ec2c3d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      7,899
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #ec2c3d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      51,786
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #ec2c3d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      21,04,758
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #ec2c3d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      NA
                    </td>
                    <td
                      style="
                        vertical-align: top;
                        background-color: #fff;
                        padding: 5px 4px;
                        text-align: center;
                        border-right: 1px solid #005e9d;
                        border-bottom: 1px solid #005e9d;
                        color: #ec2c3d;
                        font-weight: 500;
                        font-size: 15px;
                      "
                    >
                      NA *
                    </td>
                  </tr>
                </table>
                <p
                  style="
                    font-size: 12px;
                    margin: 0;
                    padding: 5px 0;
                    line-height: 16px;
                  "
                >
                  Note: The above calculations are for the remaining term of your
                  policy
                </p>
                <p
                  style="
                    font-size: 12px;
                    margin: 0;
                    padding: 5px 0;
                    line-height: 16px;
                  "
                >
                  Note: FMC is deducted from the fund before declaration of the daily
                  NAV @ 1.35% of net assets of the fund
                </p>
                <p
                  style="
                    font-size: 12px;
                    margin: 0;
                    padding: 5px 0;
                    line-height: 16px;
                  "
                >
                  * On maturity, death benefit ceases
                </p>
                <p
                  style="
                    font-size: 12px;
                    margin: 0;
                    padding: 5px 0;
                    line-height: 16px;
                  "
                >
                  ** These assumed rates of return are not guaranteed and they are not
                  the upper or lower limits of what you might get back, as the value
                  of your policy is dependent on a number of factors including future
                  investment performance
                </p>
                <p
                  style="
                    font-size: 15px;
                    margin: 0;
                    padding: 5px 0;
                    line-height: 20px;
                  "
                >
                  Disclaimer:
                </p>
                <p
                  style="
                    font-size: 15px;
                    margin: 0;
                    padding: 5px 0;
                    line-height: 20px;
                  "
                >
                  The illustration has been produced by HDFC Life Insurance Company
                  Limited to help you understand the benefits of your HDFC SL
                  ProGrowth Super Il. The illustration must be read in conjunction
                  with the sales literature, which describes the features of this
                  product. The values shown are for illustration only. What you
                  actually receive will depend on what happens over the future
                  lifetime of your policy, particularly investment returns. The
                  illustration shows what you could get back using two assumed rates
                  of investment return. The rates have been specified by the life
                  insurance company. Some benefits are guaranteed and some benefits
                  are variable with returns based on the future performance of your
                  Insurer carrying on life insurance business. If your policy offers
                  guaranteed returns then these will be clearly marked "quaranteed” in
                  the illustra- tion table on this page. If your policy offers
                  variable returns, then the illustrations on this page will show two
                  different rates of assumed future investment returns. These assumed
                  rates of return are not guaranteed and they are not the upper or
                  lower limits of what you might get back, as the value of your policy
                  is dependent on a number of factors including future investment
                  performance. Whilst future investment returns would significantly
                  influence policy benefits, other factors such as charges and taxes
                  also have an impact on your benefits. The illustration benefits
                  assume that all premiums that are due have been paid.
                </p>
                <p
                  style="
                    font-size: 15px;
                    margin: 0;
                    padding: 5px 0 100px 0;
                    line-height: 20px;
                  "
                >
                  ULIP Life Cycle is only a concept and is based on the view gathered
                  through market research; actual performance may vary
                </p>
              </div>
            </div>
          </div>
          <!-- 6th pdf -->
          <div
            style="max-width: 803px; margin: 0 auto; padding: 7px 0px; display: block"
          >
            <div
              style="
                background-image: url('images/bg.jpg');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                border: 1px solid rgb(165, 164, 164);
                padding: 20px;
                max-width: 760px;
                margin: 0px auto;
              "
            >
              <div
                style="
                  max-width: 750px;
                  width: 100%;
                  margin: 0px auto;
                  display: block;
                  font-family: 'PT Sans', sans-serif;
                  font-size: 15px;
                "
              >
                <div style="width: 125px; float: right; margin-top: -15px">
                  <img src="images/logo.png" width="100%" />
                </div>
                <div
                  style="border-top: 2px solid #af1f24; width: 100%; clear: both"
                ></div>
                <div
                  style="
                    padding: 10px 0 5px 0;
                    display: block;
                    margin: 0px 0 0px 0;
                    font-size: 15px;
                  "
                >
                  <strong style="color: #af1f24; font-weight: 700"
                    >Section 4: Other fund details</strong
                  >
                </div>
                <p style="margin: 0px; padding: 5px 0 5px 0">
                  Basis your current risk profile, you can opt for switching your
                  accumulated investment from current fund / (s) to another OR/AND
                  redirect your future premium into different fund / (s). The
                  composition of available funds is detailed below:
                </p>
      
                <table
                  style="
                    border: 1px solid #0b80c4;
                    width: 100%;
                    background-color: #fff;
                    font-size: 15px;
                    font-weight: 400;
                    color: #333;
                    border-bottom: 0;
                  "
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tbody>
                    <tr>
                      <td
                        rowspan="3"
                        style="
                          text-align: center;
                          font-weight: 700;
                          vertical-align: top;
                          padding: 4px 2px;
                          color: #005e9d;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Fund*
                      </td>
                      <td
                        rowspan="3"
                        style="
                          text-align: center;
                          font-weight: 700;
                          vertical-align: top;
                          padding: 4px 2px;
                          color: #005e9d;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Details
                      </td>
                      <td
                        colspan="3"
                        style="
                          text-align: center;
                          font-weight: 700;
                          vertical-align: top;
                          padding: 4px 2px;
                          color: #005e9d;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Asset Class
                      </td>
                      <td
                        rowspan="3"
                        style="
                          min-width: 70px;
                          font-weight: 700;
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          color: #005e9d;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Risk & Return Rating
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          min-width: 60px;
                          font-weight: 700;
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          color: #005e9d;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Money Market Instruments** /Liquid Mutual Fund^/Cash/
                        Deposits***
                      </td>
                      <td
                        style="
                          min-width: 60px;
                          font-weight: 700;
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          color: #005e9d;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Government Securities & Fixed Income Securities
                      </td>
                      <td
                        style="
                          min-width: 60px;
                          font-weight: 700;
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          color: #005e9d;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Equity
                      </td>
                    </tr>
                    <tr>
                      <td
                        colspan="3"
                        style="
                          text-align: center;
                          font-weight: 700;
                          vertical-align: top;
                          padding: 4px 2px;
                          color: #005e9d;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Fund Composition
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Short Term Fund [ULIF03801/09/10 Short TrmFd101]
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        <ul style="margin: 0; padding: 0 0 0 18px">
                          <li style="margin: 0; padding: 0; text-align: left">
                            Low Capital risk as exposure is only to short - term
                            securities (M ax 3 - year residual maturity)
                          </li>
                        </ul>
                      </td>
                      <td
                        colspan="2"
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        0 % to1 0 0 %
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        --
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Low
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Income Fund [ULIF03401/01/10 IncomeFund101]
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        <ul style="margin: 0; padding: 0 0 0 18px">
                          <li style="margin: 0; padding: 0; text-align: left">
                            Higher potential return due to higher duration and credit
                            exposure
                          </li>
                        </ul>
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        0 % to 20 %
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        80 % to 100 %
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        --
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Moderate
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Balanced Fund [ULIF03901/09/10 BalancedFd101]
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        <ul style="margin: 0; padding: 0 0 0 18px">
                          <li style="margin: 0; padding: 0; text-align: left">
                            Dynamic Equity exposure to enhance the returns while the
                            debt allocation reduces the volatility of returns
                          </li>
                        </ul>
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        0 % to 20 %
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        80 % to 60 %
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        40 % to 80 %
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Moderate to Low
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Blue Chip Fund [ULIF03501/01/10 BlueChipFd101]
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        <ul style="margin: 0; padding: 0 0 0 18px">
                          <li style="margin: 0; padding: 0; text-align: left">
                            Exposure to large-cap equities & equity related securities
                          </li>
                        </ul>
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        0 % to 20 %
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        --
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        80 % to 100 %
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Very High
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Opportunities Fund [ULIF03601/01/10O pprtntyFD101]
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        <ul style="margin: 0; padding: 0 0 0 18px">
                          <li style="margin: 0; padding: 0; text-align: left">
                            Exposure to mid-cap equities & equity related securities
                          </li>
                        </ul>
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        0 % to 20 %
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        --
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-right: 1px solid #0b80c4;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        80 % to 100 %
                      </td>
                      <td
                        style="
                          text-align: center;
                          vertical-align: top;
                          padding: 4px 2px;
                          border-bottom: 1px solid #0b80c4;
                        "
                      >
                        Very High
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p style="font-size: 12px; margin: 0; padding: 3px 0px">
                  * Notes on the Funds available: We will manage the investment in
                  each fund so that the proportion of each Asset Class is within the
                  range given. Option to use derivatives: Short Term Fund, Balanced
                  Fund, Income Fund, BlueChip Fund & Opportunities. Funds will be
                  allowed to use derivatives as and when regulations allow the same
                </p>
                <p style="font-size: 12px; margin: 0; padding: 3px 0px">
                  * * " Money Market Instruments " shall comprise of short term
                  securities with maturity not more than one year comprising of
                  instruments as specified by IRDAI regulation IRDA /Reg./5 /47 /2008
                  (issued on 22nd August 2008 ). ^T he investment in the Liquid Mutual
                  Fund will always be within the Mutual Fund limits as prescribed by
                  IRDAI regulations and guidelines. The current prescribed limit is 0%
                  to 5%
                </p>
                <p style="font-size: 12px; margin: 0; padding: 3px 0px 130px 0">
                  * * * Deposits mean deposits with Banks included in the Second
                  Schedule of the Reserve Bank of India Act,1934 and Primary Dealers
                  recognized as such by the Reserve Bank of India. When there are
                  excessive inflows into a fund, we may hold additional amounts (upto
                  5% of the fund) in Money Market Instruments /cash over and above the
                  limits specified in the mandates. Investments professionals regard
                  money market instruments as unsuitable investments for the long term
                  and are generally used for the short term. This is because money
                  market instruments have relatively stable returns and offer high
                  degree of capital safety. However, they tend to offer lower returns
                  over the long term compared to other investments
                </p>
              </div>
            </div>
          </div>
          <!-- 7th pdf -->
          <div
            style="max-width: 803px; margin: 0 auto; padding: 7px 0px; display: block"
          >
            <div
              style="
                background-image: url('images/bg.jpg');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                border: 1px solid rgb(165, 164, 164);
                padding: 20px;
                max-width: 760px;
                margin: 0px auto;
              "
            >
              <div
                style="
                  max-width: 750px;
                  width: 100%;
                  margin: 0px auto;
                  display: block;
                  font-family: 'PT Sans', sans-serif;
                  font-size: 15px;
                "
              >
                <div
                  style="
                    width: 225px;
                    margin: 0 auto;
                    display: block;
                    margin-top: 350px;
                  "
                >
                  <img src="images/logo.png" width="100%" />
                </div>
                <div style="clear: both; width: 100%"></div>
                <p style="font-size: 12px; margin: 0px; padding: 3px 0">
                  Illustration designed is indicative in nature for any other policy
                  related details like Names of Nominee or Appointee, Names of Life
                  assured incase of Jointlife policy, please refer the policy document
                  or visit My Account portal on https://myaccount.hdfclife.com/
                </p>
                <p style="font-size: 12px; margin: 0px; padding: 3px 0">
                  <span style="font-weight: 600; font-size: 13px"
                    >HDFC Life Insurance Company Limited (“HDFC Life”)</span
                  >.
                  <span style="font-size: 13px"
                    >CIN: L65110MH2000PLC128245. IRDAI Registration No. 101</span
                  >. <br />
                  <span style="font-weight: 600; font-size: 13px">
                    Registered Office:</span
                  >
                  13th Floor, Lodha Excelus, Apollo Mills Compound, N. M. Joshi Marg,
                  Mahalaxmi, Mumbai - 400 011.
                </p>
                <p style="font-size: 12px; margin: 0px; padding: 3px 0">
                  Email: service@hdfclife.com, Call 1860-267-9999 (local charges
                  apply) | 022-68446530 (STD charges apply). Do NOT prefix any country
                  code. e.g. +91 or 00.
                </p>
                <p style="font-size: 12px; margin: 0px; padding: 3px 0">
                  Website: www.hdfclife.com
                </p>
                <p style="font-size: 12px; margin: 0px; padding: 3px 0">
                  The name/letters "HDFC" in the name/logo of the company belongs to
                  Housing Development Finance Corporation Limited ("HDFC Limited") and
                  is used by HDFC Life under an agreement entered into with HDFC
                  Limited.
                </p>
                <p style="font-size: 12px; margin: 0px; padding: 3px 0">
                  Life Insurance Coverage is a vailable in this product.For more
                  details on risk factors, associated terms and conditions and
                  exclusions please read sales brochure carefully before concluding a
                  sale. HDFC SL ProGrowth Super II (Form No: P501. UIN:101L066V0) is
                  the name of A Unit Linked Non Participating Life Insurance Plan.
                  HDFC Life Income Benefit on Accidental Disability Rider (UIN:
                  4101B013V03) and HDFC Life Critical Illness Rider (UIN:101B014V02)
                  are the names of the riders. Unit Linked Life Insurance products are
                  different from the traditional insurance products and are subject to
                  the risk factors. The premium paid in Unit Linked Life Insurance
                  policies are subject to investment risks associated with capital
                  markets and the NAV s of the units may go up or down based on the
                  performance of fund and factors in fluencing the capital market and
                  the insured is responsible for his/her decisions. HDFC Life
                  InsuranceCompany Limited is only the name of the Insurance Company,
                  HDFC Life is only the name of the brand and HDFC SL ProGrowth Super
                  II (Form No: P501. UIN: 101L066V0) is only the name of A Unit Linked
                  Non Participating Life Insurance Plan. The name of the company, name
                  of the brand and name of the contract does not in any way indicate
                  the quality of the contract, its future prospects or returns. Please
                  know the associated risks and the applicable charges,from your
                  Insurance agent or the Intermediary or policy document of the
                  insurer. The various funds offered under this contract are the names
                  of the funds and do not in any way indicate the quality of these
                  plans, their future prospects and returns. ARN:MC/12/21/26782
                </p>
                <div
                  style="
                    width: 90%;
                    font-size: 12px;
                    margin: 0px auto;
                    padding: 10px 5px;
                    margin-top: 20px;
                    border: 1px solid #777;
                    margin-bottom: 20px;
                  "
                >
                  <p
                    style="
                      font-size: 15px;
                      margin: 0px;
                      padding: 3px 0;
                      font-weight: 600;
                      text-align: center;
                      text-decoration: underline;
                    "
                  >
                    BEWARE OF SPURIOUS PHONE CALLS AND FICTITIOUS/FRAUDULENT OFFERS
                  </p>
                  <p
                    style="
                      font-size: 13px;
                      margin: 0px;
                      padding: 0px 0;
                      text-align: center;
                    "
                  >
                    • IRDAI is not involved in activities like selling insurance
                    policies, announcing bonus or investment of premiums
                  </p>
                  <p
                    style="
                      font-size: 13px;
                      margin: 0px;
                      padding: 0px 0 5px 0;
                      text-align: center;
                    "
                  >
                    Public receiving such phone calls are requested to lodge a police
                    complaint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
      
        `,
    };
    return mailOptions;
  },
  sendForPasswordUpdate: async (body) => {
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: body.email,
      subject: CONFIG.emailSubject.password_Changed,
      text: `   
    Hi ${body.firstName},
        Please Change your password using below 
        Link:- https://ecommercefa.netlify.app/confirmpassword?uid=${body._id}
    Regards,
    ECOM
`,
    };
    try {
      const sendedMail = await transporter.sendMail(mailOptions);
      if (sendedMail.response) {
        return {
          successMail: true,
          messageMail: "Mail sended",
        };
      } else {
        return {
          successMail: false,
          messageMail: "EMAIL NOT SENT",
        };
      }
    } catch (error) {
      return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
    }
  },
  sendForPasswordUpdateSuccess: async (body) => {
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: body.email,
      subject: CONFIG.emailSubject.password_Changed,
      text: `   
    Hi ${body.firstName},
    Your password has been changed successfully
    Regards,
    ECOM
`,
    };
    try {
      const sendedMail = await transporter.sendMail(mailOptions);
      if (sendedMail.response) {
        return {
          successMail: true,
          messageMail: "Mail sended",
        };
      } else {
        return {
          successMail: false,
          messageMail: "EMAIL NOT SENT",
        };
      }
    } catch (error) {
      return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
    }
  },
  sendOrderSuccess: async (body, response) => {
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: response.userId.email,
      subject: CONFIG.emailSubject.order_confirmation,
      html: `
      <html>
<body>

<div  style="background-color:#ffffff;border: 4px solid #b4b4b4;">
<table style="margin:10px;"  width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td colspan="2"><img style ="margin-left:10px;margin-top:10px" src="https://ecommercefa.netlify.app/images/logo.png" width="150"  /></td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td width="49%"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td><table style ="margin-left:10px" width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif;font-weight:600; font-size:15px;">Payment Information</td>
          </tr>
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Date: ${
              response.createdAt
            }</td>
          </tr>
          <tr>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Payment-Id: ${
            response.paymentId
          }</td>
        </tr>
        <tr>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Order-Status: ${
            response.orderStatus
          }</td>
        </tr>
        <tr>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Promo-code used: ${
          response.promocodeId.couponcode
        }</td>
      </tr>
          <tr>
            <td> </td>
          </tr>
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:15px;">Invoice to: </td>
          </tr>
          <tr>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">${
            response.userId.firstName + " " + response.userId.lastName
          }</td>
        </tr>
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">${
              response.addressId.address_1
            }</td>
          </tr>
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">${
              response.addressId.address_2
            }</td>
          </tr>
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">${
              response.addressId.landmark
            }</td>
          </tr>
          <tr>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">${
            response.addressId.pincode
          }</td>
        </tr> 
          <tr>
            <td> </td>
          </tr>
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Phone no:${
              response.userId.phoneNumber
            }</td>
          </tr>
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Addres-type:${
              response.addressId.type
            }</td>
          </tr>
        
          <tr>
            <td> </td>
          </tr>
          </table></td>
      </tr>
    </table></td>
    
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td colspan="2"><table width="97%" border="0" cellspacing="0" cellpadding="0">
      <thead>
      <tr>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;" width="34%" height="32" align="center">Product Name</td>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-right:1px solid #333;" width="26%" align="center">Quantity</td>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-right:1px solid #333;" width="25%" align="center">Price</td>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-right:1px solid #333; border-right:1px solid #333;" width="15%" align="center">Discount-Price</td>
      </tr>
      </thead>
      <tbody>
      ${response.cartdetail
        .map(
          (value) =>
            `<tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;" height="32" align="center">${value.productId.name}</td>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-right:1px solid #333;" align="center">${value.quantity}</td>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-right:1px solid #333;" align="center">${value.productId.price}</td>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-right:1px solid #333; border-right:1px solid #333;" align="center">${value.productId.discountPrice}</td>
          </tr>`
        )
        .join("")}
      </tbody>
    </table></td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr >

    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" colspan="2">Discount-taken: ${
      response.discountPrice
    }</td>
   
  </tr>
  <tr >

    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" colspan="2">Total amount to be paid: ${
      response.totalPrice
    }</td>
   
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px;" colspan="2">Please Note:</td>
  </tr>
  <tr>
    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" colspan="2">Dear Consumer, the bill payment will reflect in next 48 hours or in the next billing cycle, at your service provider’s end. Please  contact paytm customer support for any queries regarding this order.</td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px;" colspan="2">DECLARATION:</td>
  </tr>
  <tr>
    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" colspan="2">This is invoice is only a confirmation of the receipt of the amount paid against for the service as described above.  Subject to terms and conditions mentioned at Shoppy</td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" colspan="2" align="center">(This is computer generated receipt and does not require physical signature.)  <br />804, Fortune Business Hub,<br/>Ahmedabad, Gujarat. 380060, <br/> PH: +91 79-46006836<br />  Service tax registration number: AAACO4007ASD002</td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
</table>
</div>
</body>
</html>
      `,
    };
    try {
      const sendedMail = await transporter.sendMail(mailOptions);
      if (sendedMail.response) {
        return {
          successMail: true,
          messageMail: "Mail sended",
        };
      } else {
        return {
          successMail: false,
          messageMail: "EMAIL NOT SENT",
        };
      }
    } catch (error) {
      return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
    }
  },
  sendForAdminRegister: async (body, password) => {
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: body.email,
      subject: CONFIG.emailSubject.welcome,
      text: `Hi ${body.firstName},
         You have successfully registered to our Admin and your password is ${password}
        Regards,
        ECOM`,
    };
    try {
      const sendedMail = await transporter.sendMail(mailOptions);
      if (sendedMail.response) {
        return {
          successMail: true,
          messageMail: "Mail sended",
        };
      } else {
        return {
          successMail: false,
          messageMail: "EMAIL NOT SENT",
        };
      }
    } catch (error) {
      return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
    }
  },
  sendPwdUpdationSuccessfull: async (body, password) => {
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: body.email,
      subject: CONFIG.emailSubject.welcome,
      text: `Hi ${body.firstName},
         Your passwors has been updated and your new password is ${password}.
        Regards,
        ECOM`,
    };
    try {
      const sendedMail = await transporter.sendMail(mailOptions);
      if (sendedMail.response) {
        return {
          successMail: true,
          messageMail: "Mail sended",
        };
      } else {
        return {
          successMail: false,
          messageMail: "EMAIL NOT SENT",
        };
      }
    } catch (error) {
      return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
    }
  },
  sendPwdByMail: async (body, password) => {
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: body.email,
      subject: CONFIG.emailSubject.welcome,
      text: `Hi ${body.firstName},
         Your passwors has been updated and your new password is ${password}.
        Regards,
        ECOM`,
    };
    try {
      const sendedMail = await transporter.sendMail(mailOptions);
      if (sendedMail.response) {
        return {
          successMail: true,
          messageMail: "Mail sended",
        };
      } else {
        return {
          successMail: false,
          messageMail: "EMAIL NOT SENT",
        };
      }
    } catch (error) {
      return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
    }
  },
  adminUser_Pwd_Mail_Link: async (body) => {
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: body.email,
      subject: CONFIG.emailSubject.password_Changed,
      text: `   
    Hi ${body.firstName},
        Please Change your password using below 
        Link:- https://ecommercefa.netlify.app/confirmpassword?uid=${body._id}
    Regards,
    ECOM
`,
      sendForss: async (body) => {
        let mailOptions = {
          from: CONFIG.email.SENDMAILFROM,
          to: [`${body.email}` + "," + "prince.fontendarmy@gmail.com"],
          subject: CONFIG.emailSubject.welcome,
          text: `Hi ${body.firstName},
    You have successfully registered as an ${body.firstName}.
     Regards,
     `,
        };
        try {
          const sendedMail = await transporter.sendMail(mailOptions);
          console.log(sendedMail);
          if (sendedMail.response) {
            return {
              successMail: true,
              messageMail: "Mail sended",
            };
          } else {
            return {
              successMail: false,
              messageMail: "EMAIL NOT SENT",
            };
          }
        } catch (error) {
          return {
            successMail: false,
            messageMail: "ERROR HAPPEND IN SEND MAIl",
          };
        }
      },
    };
    try {
      const sendedMail = await transporter.sendMail(mailOptions);
      if (sendedMail.response) {
        return {
          successMail: true,
          messageMail: "Mail sended",
        };
      } else {
        return {
          successMail: false,
          messageMail: "EMAIL NOT SENT",
        };
      }
    } catch (error) {
      return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
    }
  },
};

//   text: `Hi ${body.firstName},
//   You have successfully registered as an ${body.role} and your
//   password is ${body.password}
//   Regards,
//  ECOM`,
