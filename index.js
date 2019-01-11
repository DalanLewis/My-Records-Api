const express = require('express')
const app = express()
const port = 4000

app.get('/shows', (req, res) => res.send('Hello World!'))

app.push('/shows', (req, res) => res.send('Push Complete'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))