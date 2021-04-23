const nodemailer = require("nodemailer"); // email sender function

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "proyecto.techo.ong@gmail.com",
    pass: "plataforma5",
  },
});

const sendMailController = {
  send(req, res) {
    const { nombre, email, telefono, infoContacto } = req.body;

    contentHTMLTecho = `
      <p> Nombre: ${nombre}, <br/>
      Email: ${email}, <br/>
      Telefono: ${telefono}, <br/>
      Informacion: ${infoContacto}, <br/>
      </p> 
   `;

    transporter.sendMail(
      {
        from: "proyecto.techo.ong@gmail.com",
        to: "proyecto.techo.ong@gmail.com",
        subject: "Nueva consulta",
        html: contentHTMLTecho,
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

module.exports = sendMailController;
