var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pruebalandingadmin'
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log('La base de datos ha sido conectada');
  }
});

module.exports = connection; 