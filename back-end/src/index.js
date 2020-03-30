const express = require('express');
const cors = require('cors');
const routes = require('./routes');
//Criando varia´vel que vai armazenar minha aplicação
const app = express();

//Faz o express entender json e converte o json em um objeto
//javascript e assim a aplicação pode entendê-lo

//O cors permite que todas as aplicações front end possam ter acesso 
//a api, como parametro podemos passar o endereço do front end 
app.use(cors()); 
app.use(express.json());
app.use(routes);

//A aplicação vai ouvir a porta 3333. Dessa forma podemos acessar 
//localhost:3333
app.listen(3333); 

/**
 * Depois de criado isso e acessarmos o endereço não vai abrir
 * nada por que não há nenhuma rota criada. 
 */