const express = require('express')
const app = express()
const port = 4000

app.get('/shows', (req, res) => res.send('Hello World!'))

app.post('/shows', (req, res) => res.send('Post Complete'))

app.put('/shows', (req, res) => res.send('Putem Up'))

app.delete('/shows', (req, res) => res.send('D-e-l-eted'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))