const form = document.querySelector('#form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const msg = document.querySelector('#msg');

console.log(form, nome, email, msg);

function btnEnviar(){
    event.preventDefault();

    //Validações
    if(nome.value === '' && email.value === '' && msg.value === ''){
        alert('Preencha todos os campos!');
        return false;
    }

    if(nome.value === ''){
        alert('Preencha o campo nome');
        return false;
    }

    if(email.value === ''){
        alert('Preencha o campo email');
        return false;
    }

    if(!estEmail(email.value)){
        alert('Preencha o campo email com um email válido');
        return false;
    }

    if(msg.value === ''){
        alert('Preencha o campo mensagem');
        return false;
    }

    alert('Mensagem Enviada!');

    console.log(nome.value);
    console.log(email.value);
    console.log(msg.value);

}

//Function para a validação da estrutura do Email

function estEmail(email){

    //regex de validação
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-_%+-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}