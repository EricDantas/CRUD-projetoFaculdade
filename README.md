# Projeto CRUD faculdade

Refatoração do projeto da faculdade feito em JAVA de uma API de gerenciamento de cadastro de professores e escolas.

Tecnologias usadas:
1. Typescript
2. Node.js
3. Express.js
4. TypeORM
5. Postgresql
6. AWS RDS

Para se utilizar o serviço AWS RDS deve-se modificar o host no arquivo data-source.ts e colocar o endereço da url gerada pelo serviço da AWS RDS, assim como configurar as permissões (Policies e Roles), Security Groups para aceitar conexoes de fora via https.
Parte de front end não finalizada, para o tratamento dos dados em JSON.

Start do server `npm run dev`
