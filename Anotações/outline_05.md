Bem Vindos ao curso de JavaScript(Apagão da TI)
=====================================
Aula 5 (Node.js-API-localhost:3000):

    Introdução:
        Na aula de hoje iremos programar uma conexão local por meio de uma API simples, integrando o front-end(HTML e JavaScript) ao back-end (Node.js e React-native).

    Oque é uma API?
        API significa Application Programming Interface (Interface de Programação de Aplicação).
        APIs são mecanismos que permitem que dois componentes de software se comuniquem usando um conjunto de definições e protocolos. Por exemplo, o sistema de software do instituto meteorológico contém dados meteorológicos diários.
        Objetivo de criação da nossa API é guardar as informações de usuários e senhas que servirão de validação para nosso processo de login, carregando também as informações de conexão com o servidor local. Através do porta padrão 3001, iremos nos comunicar com o arquivo responsável por fornecer as informações de validação e rotas.

    Desafio: Criar um site com node.js e react native que leia um texto json de usuário e senha com uma validação em um servidor locahost e uma tela com a função de logout.

    Back-end

        requisitos:
            VScode.
                Extenções:
                    REST Client
            Node.js
            Navegador(Mozilla, Chrome, Edge, Safari)

        Comandos para a inicialização do Node.js:
            Dentro da pasta do projeto:
                1.mkdir backend
                2.cd backend
                3.npm init 
            
            Instalação de Pacotes e Blibiotecas:
                4.npm i express
                5.npm i nodemon
                6.npm i cors
                7.code .
        
        Dentro do vscode o projeto precisar ser estruturado:
            Com uma a criação da pasta src
                src/server.js
                src/routes.js
            A alteração do arquivo package.json o objeto scripts{
                "dev": 'nodemon src/server.js',
            }
                Após isso abrir o terminal integrado do VScode e rodar o comando:
                    8.npm run dev
                ! Para iniciar o Node.js
            
            ! Para testar a conexão com o servidor criar um arquivo .http com o comando POST e o caminho do servidor. 

            Criando uma pasta no terminal para o front-end:
                // voltar diretorio 9.cd ..
                10.mkdir frontend
                11.cd frontend
                12.npx create-react-app@latest app
                13.cd app
                14.npm i axios
                15.cod .
            No terminal do VScode
                16.npm start
        

