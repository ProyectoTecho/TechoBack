const nodemailer = require("nodemailer"); // email sender function

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "equipo.ebooks@gmail.com",
    pass: "Ebooks123",
  },
});

const sendMailController = {
  send(req, res) {
    const { nombre, email } = req.body;
    contentHTML = `
         <p>¡Muchas gracias ${nombre} por ser parte de Techo!</p> 
         <img src="https://www.techo.org/wp-content/uploads/2019/04/Color-RGB-Sin-fondo-02.png">
      `;

    transporter.sendMail(
      {
        from: "equipo.ebooks@gmail.com",
        to: email,
        subject: "Mensaje de eBooks",
        html: contentHTML,
      },
      function (error, info) {
        if (error) {
          console.log(error);
          res.send(500, err.message);
        } else {
          console.log("Email sent");
          res.status(200).jsonp(req.body);
        }
      }
    );
  },
};

module.exports = sendMailController;
