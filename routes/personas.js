var express = require("express");
var router = express.Router();
var connection = require("../lib/db");
const { body } = require("express-validator");
var app = express();


router.get("/", function (req, res, next) {
  connection.query("SELECT * FROM persona", function (err, rows) {
    if (err) {
      console.log("Ha habido un error");
    } else {
      console.log("Exito");
      console.log({ data: rows });
      res.send({ data: rows });
    }
  });
});

router.get("/filtro", function (req, res, next) {
  let param = req.query.seleccion;
  console.log(param);
  connection.query("SELECT * FROM persona ORDER BY " + param, function (err, rows) {
    if (err) {
      console.log("Ha habido un error");
    } else {
      console.log("Exito2");
      console.log({ data: rows });
      res.send({ data: rows });
    }
  });
});

router.post("/add", function (req, res, next) {
  var persona = {
    identificacion: req.body.Id,
    tipoIdentificacion: req.body.TipoID,
    email: req.body.Email,
    nombres: req.body.Nombres,
    apellidos: req.body.Apellidos,
    fechaIngreso: req.body.FechaIngreso,
  };

  connection.query("INSERT INTO persona SET ?", persona, function (
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
