const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000
let shows = []

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
   })

app.route('/shows')
.get((req, res) => {
    

    res.send(shows)})


.post((req, res) => {
    shows = [...shows, req.body]    
    res.send(shows)})
    

.put((req, res) => {res.send('Putem Up')})
app.delete('/shows', (req, res) => res.send('D-e-l-eted'))
app.listen(port, () => console.log("i'm listening!"))