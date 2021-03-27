# 	**Projeto .net core com angular integrada com sql server**
* ### Sobre

  * É um projeto web que possui um CRUD (create, read, update e delete) de personagens de um filme de animação escolhido que por sua vez terá os estilos da aplicação seguindo as cores/temas do filme escolhido de acordo com o seu gênero.

* Tecnologias
  * .net core
  * Angular
  * Sql Server
  * Swagger

------



* API
  * Api construída em .net core com a estrutura seguindo alguns princípios da modelagem de software DDD, como API, Application, Domain, Infraestrutura e alguns designs patterns, como por exemplo Repository Pattern ,Injeção de Dependências.
  * Foi usada as configurações de auto mapper para poder converter as model do projeto de domain com as view model da aplicação para não deixar os dados persistidos no banco e o cors para poder usar o http usando o certificado SSL do front pudesse fazer as requisições para a API persistir, consultar e remover os dados que o front mandar nas requests e mostrar as responses  da API nas telas do front. 

<img src="C:\Users\solar\Desktop\b6112b27-a350-4579-89c7-2c8c1a709242.jpg" style="zoom:50%;" />

* Banco
  * Para o banco usei o Migration do Entity Framework onde fora configurado em um context separado da aplicação com a mesma connection string usada no appsettings.json para poder gerar a configuração seguindo os mappings criados no projeto.

**Passos para gerar o Banco**

1. Abre-se o Package Manage Console para dá os comandos.

2. Se for gerar o migrations, seta-se no projeto da Infraestura e dá o comando **Add-Migrations < nome da migração >** criando então a pasta Migrations com o script para gerar o banco.

3. Se for para executar o script já gerado pelo migration que se encontra na pasta Migrations na aplicação,  dá o comando **Update-Database**  para gerar as tabelas.

   ------

   

* Front
  * Construída usando o angular cli, bootstrap e algumas library do angular, as telas foram feitas seguindo o principio de componentização dos componententes de uma tela para monta-lá. 
  * Com a própria library http client do angular foi feito as models exatamente igual a model da API para poder dá o bind quando fosse dá o request e fora criado um service para poder fazer os endpoints das requisições do back end.

<img src="C:\Users\solar\Desktop\estruturaFront.PNG" style="zoom:50%;" />

**Para executar o projeto**

1. Deve-se ter o angular cli instalado na máquina e/ou o nodeJS.
2. Entra-se no diretório do projeto 
3. Dá o comando **npm install** para poder baixar todas as dependências do projeto.
4. Depois que baixa-se todas as dependências dá os seguintes comandos.
5.  *Se for executar pelo angular cli* ,dá o comando **ng serve**
6. *Se for executar pelo próprio nodeJS* * ,dá o comando **npm start**