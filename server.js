const express = require('express') // o express cria um servidor pra mostrar tudo que a gente ta construindo dentro do navegador
const app = express();

app.set("view engine", "ejs"); // falando pro express que a ferramenta que a gente vai usar pra renderizar o HTML que é o view engine, vai ser o ejs

app.get("/", function(req, res){
    const items = [ // preciso passar esse array pro index
        {
            tittle: 'D',
            message: 'esenvolver aplicações de forma fácil'
        },
        {
            tittle: 'E',
            message: 'JS usa JavaScript para renderizar HTML'
        },
        {
            tittle: 'M',
            message: 'uito fácil de usar'
        },
        {
            tittle: 'A',
            message: 'plicações de forma fácil'
        },
        {
            tittle: 'I',
            message: 'nstall ejs / npm install express'
        },
        {
            tittle: 'S',
            message: 'intaxe simples'
        }
    ]

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript"

    res.render("pages/index", {
        qualidades: items,
        subtitle: subtitle,
    }); // res é response significa oq vou dar de resposta, .render pra renderizar o arquivo index
}) 

app.get("/sobre", function(req, res){
    res.render("pages/about");
}) 

app.listen(8080); // a porta que está sendo ouvida é a 8080
console.log('Servidor rodando')