var express = require("express");
var router = express.Router();
var connection = require("../lib/db");
const { body } = require("express-validator");
var app = express();




router.get("/", function (req, res, next) {
  connection.query("SELECT * FROM cliente", function (err, rows) {
    if (err) {
      console.log("Ocurrio un error");
    } else {
      console.log("Exito");
      console.log({ data: rows });
      res.send({ data: rows });
    }
  });
});

router.post("/add", function (req, res, next) {
  var cliente = {
    TipoID: req.body.TipoID,
    Identificacion: req.body.Identificacion,
    Email: req.body.Email,
    Nombres: req.body.Nombre,
    Apellidos: req.body.Apellidos,
    Fecha: req.body.Fecha,
  };

  connection.query("INSERT INTO cliente SET ?", cliente, function (
    err,
    result
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
