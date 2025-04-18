import request from "request"

const sendSms = ({ toNum, code }) => {
  return new Promise((resolve, reject) => {
    request.post(
      {
        url: "http://ippanel.com/api/select",
        body: {
          op: "pattern",
          user: process.env.SMS_API_USER,
          pass: process.env.SMS_API_PASS,
          fromNum: process.env.SMS_FROM_NUMBER,
          toNum,
          patternCode: process.env.SMS_PATTERN_ID,
          inputData: [{ "verification-code": code }],
        },
        json: true,
      },
      (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(body);
        } else {
          reject(error || new Error("Failed to send SMS"));
        }
      }
    );
  });
};

export default sendSms;
