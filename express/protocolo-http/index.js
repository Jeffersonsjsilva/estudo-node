var express = require('express');

const app = express();

const port = 8081;

app.get("/", function(req,res){
res.send("Seja bem-vindo");
});

app.get("/sobre",function(req,res){
    res.send("Sobre minha empresa")
})

app.get("/produtos",function(req,res){
    res.send("Produtos da empresa")
})
//rota com parâmetros

app.get("/ola/:nome/:cargo/:idade", function(req,res){
    res.send('<h1> Ola ' + req.params.nome + 
    '<h1>'+ '<br> <h2> Seu cargo é: ' + req.params.cargo+ '<br> Sua idade é: ' + req.params.idade +
    '</h2>');
})

//porta do protocolo http
app.listen(port, function(){
console.log('servidor funcionando no endereço http://localhost:8081:');
}
);
