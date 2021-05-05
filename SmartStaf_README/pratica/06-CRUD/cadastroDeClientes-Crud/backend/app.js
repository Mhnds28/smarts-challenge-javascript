//Constants
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();
const urlencodeParser = bodyParser.urlencoded({ extended: false });
const sql = mysql.createPool({
   user: "b6ed02d1514f1f",
   password: "dd07cefe",
   host: "us-cdbr-east-03.cleardb.com",
   database: "heroku_24fc687da9bd3ec"
});


let port =process.env.PORT || 3000;
app.use('/img', express.static('img'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));


app.engine("handlebars", handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.get("/", function (req, res) {
   //   res.send("Esta é");
   //res.render('index',{id:req.params.id});
   res.render('index');

});

app.get("/inserir", function (req, res) { res.render("inserir"); });
app.get("/select/:id?", function (req, res) {
   if (!req.params.id) {
      sql.getConnection(function (err, connection) {
         connection.query("select * from user order by id asc", function (err, results, fields) {
            res.render('select', { data: results });
         });
      });

   } else {
      sql.getConnection(function (err, connection) {
         sql.query("select * from user where id=? order by id asc", [req.params.id], function (err, results, fields) {
            res.render('select', { data: results });
         });
      });
   }
});

app.post("/controllerForm", urlencodeParser, function (req, res) {
   sql.getConnection(function (err, connection) {
      connection.query("insert into user values (?,?,?)", [req.body.id, req.body.name, req.body.age]);
      res.render('controllerForm', { name: req.body.name });
   });

});

app.get('/deletar/:id', function (req, res) {
   sql.getConnection(function (err, connection) {
      connection.query("delete from user where id=?", [req.params.id]);
      res.render('deletar');
   });

});

app.get("/update/:id", function (req, res) {
   sql.getConnection(function (err, connection) {
      connection.query("select * from user where id=?", [req.params.id], function (err, results, fields) {
         res.render('update', { id: req.params.id, name: results[0].name, age: results[0].age });
      });
   });
});
app.post("/controllerUpdate", urlencodeParser, function (req, res) {
   sql.getConnection(function (err, connection) {
      connection.query("update user set name=?,age=? where id=?", [req.body.name, req.body.age, req.body.id]);
      res.render('controllerUpdate');
   });
});


//Start do servidor 
app.listen(port, function (req, res) {
   console.log('Servidor está rodando corretamente!');
});