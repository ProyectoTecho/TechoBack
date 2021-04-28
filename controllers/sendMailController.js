const nodemailer = require("nodemailer"); // email sender function
const { NODEMAILER_PASS, NODEMAILER_USER } = process.env;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASS,
  },
});

const sendMailControllerClient = {
  send(req, res) {
    console.log(req.body)
    const { nombre, email} = req.body;
    contentHTMLClient = `
         <p>${nombre}, este correo es para confirmar que hemos recibido el formulario completo.
         Estaremos confirmando los datos ingresados para que puedas formar parte de la Comunidad de Socios/as que hacen posible nuestra acción en más de 80 barrios populares y nos volveremos a comunicar pronto.
         ¡Gracias por estar del otro lado!</p> 
      `;

    transporter.sendMail(
       {
        from: NODEMAILER_USER,
        to: email,
        subject: "¡Gracias por querer sumarte!",
        html: contentHTMLClient,
      }, 

      function (error, info) {
        if (error) {
          console.log(error);
          res.send(500, error.message);
        } else {
          console.log("Email sent");
          res.status(200).jsonp(req.body);
        }
      }
    );
  },
};

module.exports = sendMailControllerClient;
