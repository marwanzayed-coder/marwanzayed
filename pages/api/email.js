const nodemailer = require("nodemailer");

export default async function sendEmail(req, res) {
  const { email, message } = req.body;
  let mailTransporter = nodemailer.createTransport({
    // service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "marwanzayedshaban@gmail.com",
      pass: "",
    },
  });

  let details = {
    from: "marwanzayedshaban@gmail.com",
    to: email,
    subject: "Portfolio",
    text: message,
  };
  mailTransporter.sendMail(details, (err) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
    } else {
      res.statusCode = 200;
      console.log("Success");
    }
  });
}
