const express = require('express');
const enderecoController = require('./controllers/EnderecoController');
const { Model } = require('sequelize');

const router = express.Router();

router.post('/enderecos', enderecoController.createEndereco);
router.get('/enderecos', enderecoController.getAllEnderecos);
router.get('/enderecos/:Id', enderecoController.getEnderecoById);
router.put('/enderecos/:Id', enderecoController.updateEndereco);
router.delete('/enderecos/:Id', enderecoController.deleteEndereco);
router.post('/enderecos/consulta/:cep', enderecoController.consultarCep);


module.exports = router;