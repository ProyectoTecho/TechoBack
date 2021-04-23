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
    console.log(req.body)
    const { nombre, email, telefono, infoContacto } = req.body;
    contentHTMLClient = `
         <p>${nombre}, este correo es para confirmar que hemos recibido el formulario completo.
         Estaremos confirmando los datos ingresados para que puedas formar parte de la Comunidad de Socios/as que hacen posible nuestra acción en más de 80 barrios populares y nos volveremos a comunicar pronto.
         ¡Gracias por estar del otro lado!</p> 
      `;
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
        to: email,
        subject: "¡Gracias por querer sumarte!",
        html: contentHTML,
      },

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
