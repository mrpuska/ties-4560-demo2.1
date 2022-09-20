const express = require('express')
const ConverterService = require('./converter-service')
const converterService = new ConverterService();
const app = express()
const port = 3000

app.get('/encode/:value', async (req, res) => {
    var result = await converterService.encodeBase64(req.params.value)
    res.send(result);
})

app.get('/decode/:value', async (req, res) => {
    var result = await converterService.decodeBase64(req.params.value)
    res.send(result);
})

app.get('/describe/', async (req, res) => {
    var result = soapService.getClient()
    res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})