Bem Vindos ao curso de JavaScript(Apagão da TI)
=====================================
Aula 4 (Validações e Envio de Dados.):

    Introdução
        Nesta aula, vamos explorar como utilizar funções em JavaScript para criar validações robustas em formulários de login web. A validação de login é fundamental para garantir a segurança de uma aplicação web, protegendo-a contra acessos não autorizados.

    O que é Validação de Login?
        A validação de login consiste em verificar se as credenciais (usuário e senha) fornecidas por um usuário correspondem às informações armazenadas em um banco de dados ou outro sistema de autenticação. Além disso, a validação também pode incluir verificações adicionais, como:

        Campos obrigatórios: Verificar se todos os campos do formulário foram preenchidos.
        Formato: Verificar se o formato dos dados está correto (ex: e-mail válido).
        Complexidade da senha: Verificar se a senha atende a requisitos de complexidade (tamanho mínimo, caracteres especiais, etc.).
        Funções em JavaScript para Validação de Login
        As funções em JavaScript são essenciais para realizar a validação do lado do cliente, ou seja, no navegador do usuário. Podemos criar funções para:

        Verificar campos obrigatórios: Utilizar o método value para obter o valor de cada campo e verificar se está vazio.
        Verificar formato do e-mail: Utilizar expressões regulares para validar o formato do endereço de e-mail.
        Verificar complexidade da senha: Criar uma função personalizada para verificar se a senha atende aos requisitos de complexidade.
        Enviar os dados para o servidor: Utilizar AJAX para enviar os dados do formulário para o servidor e verificar a autenticidade das credenciais.

        Implementar a lógica de autenticação no servidor: Criar uma rota no servidor para receber os dados do formulário e verificar se as credenciais são válidas.
        
    Melhorias e Considerações
        Mensagens de erro personalizadas: Exibir mensagens de erro mais específicas para cada tipo de erro.
        Validação em tempo real: Utilizar eventos como oninput para validar os campos à medida que o usuário digita.
        
    Segurança:
        Hashing de senhas: Armazenar as senhas no banco de dados em formato hash para aumentar a segurança.
        Proteção contra ataques XSS: Sanitizar todos os dados recebidos do cliente antes de processá-los no servidor.
        Proteção contra ataques de força bruta: Implementar mecanismos para limitar o número de tentativas de login.
    
    Experiência do usuário:
        Feedback visual: Utilizar elementos visuais para indicar erros de validação (ex: campos com borda vermelha).
        Lembrar dados: Permitir que o usuário salve suas credenciais para login automático.

    Desáfio 02:
    Crie um formulário de login com validações robustas utilizando JavaScript e HTML, com as validações de tipo de usuário como email, uma validação para campos vazios, uma validação que coloque uma tamanho minimo de 8 caracteres
    de senha.
