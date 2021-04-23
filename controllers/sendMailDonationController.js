const nodemailer = require("nodemailer"); // email sender function

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "proyecto.techo.ong@gmail.com",
    pass: "plataforma5",
  },
});

const sendMailDonationController = {
  send(req, res) {
    console.log(req.body);
    const { nombre, email } = req.body;
    console.log ("dattttttaaaa", req.body)
    contentHTML = `
         <img src="https://static.wixstatic.com/media/8c9b2b_e86bb6dc915d4cd690053478f0882569~mv2.jpg/v1/fill/w_1440,h_165,al_c,q_80,usm_0.66_1.00_0.01/DSC_0826_edited.webp">
         <p>${nombre}, gracias por tu interés en apoyarnos con una donación. Soy Natasha, del equipo de TECHO Arg y te escribo para contarte que <b>recibimos tus datos correctamente</b>.<br>
         <br>
         En TECHO reunimos a jóvenes voluntarios, donantes y referentes comunitarios de asentamientos para trabajar por una Argentina más justa, igualitaria, integrada y sin pobreza.
         <br>
         <br>
         Ser parte de la comunidad de socios y socias, no solo significa <b>acompañarnos con una donación mensual </b>, sino también <b>transformar la realidad de millones de personas</b> que viven en asentamientos informales de Argentina.
         <br>
         <br>
         Podés sumarte <b>haciendo click en el botón</b> "Quiero apoyar a TECHO", o <b>esperar nuestro llamado</b> en los próximos días para que te contemos más en detalle sobre lo que <b>vamos a lograr con tu donación</b>.</p>
         <div style="display: flex; justify-content: center">
         <a href="https://proyectotecho.vercel.app/" target="_blank" style="background: rgb(0, 146, 221); text-decoration: none; color: white; border-radius: 5px; border: solid 1px white; margin: 0 auto; padding: 2px">QUIERO APOYAR A TECHO</a>
         </div> 
         <p>${nombre}, ya diste el primer paso para seguir transformando realidades, espero que puedas dar el siguiente! &#128522;
         <br>
         <br>
         ¡Saludos!
         <br>
         <em>Natasha<em></p>
      `;

    transporter.sendMail(
      {
        from: "proyecto.techo.ong@gmail.com",
        to: email,
        subject: "¡Gracias por querer sumarte!",
        html: contentHTML,
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

module.exports = sendMailDonationController;
