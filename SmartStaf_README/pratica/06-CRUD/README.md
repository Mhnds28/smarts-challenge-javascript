
--------------------------------------------------------------------------
|             CRUD usando NodeJS / ExpressJS / MySQL          |
--------------------------------------------------------------------------

Step 1 : Instale nodejs em seu sistema e execute o seguinte comentário
			npm init
		
Step 2 : Instale pacotes Requred usando NPM

			npm install --save express mysql body-parser ejs
			npm install -g nodemon (optional - used to run app.js automatically while any file content changes)
		
Step 3 : Adicione o seguinte código em app.js
		
			const path = require('path');
			const express = require('express');
			const ejs = require('ejs');
			const bodyParser = require('body-parser');
			const mysql = require('mysql');
			const app = express();

			// Escuta do servidor
			app.listen(3000, () => {
				console.log('Server is running at port 3000');
			});
			
			nodemon app (OR) npm start
		
Step 4 : Criar conexão de banco de dados

			const mysql=require('mysql');
			
			const connection=mysql.createConnection({
			  host:'localhost',
			  user:'root',
			  password:'',
			  database:'node_crud'
			});
			
			connection.connect(function(error){
			  if(!!error) console.log(error);
			  else console.log('Database Connected!');
			}); 

Setp 5 : Definir view engin com ejs / public path / view files path / bodyParser

			//set views file
			app.set('views',path.join(__dirname,'views'));
			
			//set view engine
			app.set('view engine', 'ejs');
			app.use(bodyParser.json());
			app.use(bodyParser.urlencoded({ extended: false }));

Setp 6 : Defina o caminho do índice com '/' e arquivo HTML
			
			//route for user index page
			app.get('/',(req, res) => {
				res.render('user_index', {
					title: 'CRUD Operation using NodeJS / ExpressJS / MySQL '
				});
			});

Setp 7 : Execute um servidor e verifique com o navegador

			npm start (OR) nodemon app

			http://localhost:3000/
			


 -------------------------------------------------------
|             Processo de Deploy          |
--------------------------------------------------------

Step 1 : Acesse o site Heroku.com 
		Create new app
		Heroku Git
		Instale o Heroku CLI
		Instale o Git

Step 2 : Adicione os comandos do heroku no terminal cmd.
		1-heroku login	
		2-cd myproject/
		3-git init
		4-heroku git:remote -a myapp

Step 3 : Fazendo o Deploy
		1-git add .
		2-git commit -am "make it better"
		3-git push heroku master

Step 4 : Deploy do Banco de Dados
		1-add-ons
		2-cleardb
		3-Installed add-ons
		4-Configure Add-ons
		5-Settings 
		6-DATABASE_URL 

Step 5: Copie a URL e connect em seu script node.js. 