//biblioteca express
var express = require('express');

const app = express();

const port = 8081;

// //rota chamando o html
// app.get("/", function(req,res){
// res.sendFile(__dirname +"/html/index.html");
// });

// app.get("/sobre",function(req,res){
//     res.sendFile(__dirname + "/html/sobre.html");
// });

// app.get("/produtos",function(req,res){
//     res.send("Produtos da empresa");
// });
// //rota com parâmetros

// app.get("/ola/:nome/:cargo/:idade", function(req,res){
//     res.send('<h1> Ola ' + req.params.nome + 
//     '<h1>'+ '<br> <h2> Seu cargo é: ' + req.params.cargo+ '<br> Sua idade é: ' + req.params.idade +
//     '</h2>');
// });


//requirindo biblioteca handlebars
const handlebars = require('express-handlebars');


const sequelize = require("sequelize"); //requirindo modulo sequelize para conexão e administração do BD

const sequelize2 = new sequelize('testenode', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

//criar rota get
app.get('/cad', function (req, res) {
    res.render('formulario.handlebars');
});

//criando rota POST
app.post('/add', function (req, res) {
    res.send('FORMULARIO RECEBIDO');
});

//configurando o handlebars e o template engine

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view.engine', 'handlebars');

//porta do protocolo http
app.listen(port, function () {
    console.log('servidor funcionando no endereço http://localhost:8081:');
}
);