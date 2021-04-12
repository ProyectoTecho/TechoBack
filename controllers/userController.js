const User = require("../dbmodels/user");

const userController = {
  create(req, res) {

    User.findOne({ email: req.body.email }) //buscamos el usuario por el mail y nos trae toda la data
      .then((data) => {
        if (data) {
          // si hay usuario creado lo updatea
          User.findOneAndUpdate({ email: data.email }, req.body)
            .then((userMail) => res.send(userMail).status(200))
            .catch((e) => res.send(e).status(500));
        } else {
          // sino hay usuario creado lo crea
          User.create(req.body)
            .then((user) => {
              res.status(201).send(user);
            })
            .catch((err) => {
              res.status(500).send(err);
            });
        }
      });
  },
  update(req, res) {
    User.findOneAndUpdate({ email: req.body.email }, req.body)
      .then((userMail) => res.send(userMail).status(200))
      .catch((e) => res.send(e).status(500));
  },
};
/// crear update para modificar datos de un usuario ya registrado

module.exports = userController;
