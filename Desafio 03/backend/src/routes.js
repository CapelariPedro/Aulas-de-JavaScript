const express = require('express');
const routes = express.Router();

const users = [{
    id: 1,
    name: 'Exemplo',
    email: 'exemplo@exemplo.com',
    password: '123456',
    id: 2,
    name: "Pedro",
    email: "pedro@exemplo.com",
    password: "1234567",
}];

routes.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email && user.password === password);
    if(user){
        res.status(200).json(user);
    }

    res.status(401).json({message: 'credenciais inválidas'});

    res.send(email);
});

module.exports = routes;

