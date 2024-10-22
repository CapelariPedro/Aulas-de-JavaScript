function validarLogin() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
  
    // Verificar se os campos estão preenchidos
    if (usuario === '' || senha === '') {
      alert('Por favor, preencha todos os campos.');
      return false;
    }
  
    // Verificar se o email é válido (simplificado)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(usuario)) {
      alert('Digite um endereço de email válido.');
      return false;
    }
  
    // Verificar se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
      alert('A senha deve ter pelo menos 8 caracteres.');
      return false;
    }
  
    // Enviar os dados para o servidor (exemplo com Fetch API)
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ usuario, senha })
    })
    .then(response => {
      if (response.ok) {
        // Redirecionar para a página inicial após login bem-sucedido
        window.location.href = '/home';
      } else {
        alert('Usuário ou senha inválidos.');
      }
    })
    .catch(error => {
      console.error('Erro ao realizar login:', error);
    });

    console.log(usuario, senha);
  
    return false; // Impede o envio padrão do formulário
  }