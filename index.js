const express = require('express')
const bodyParser = require('body-parser')
const db = require('monk')('mongodb://admin:password1@ds042688.mlab.com:42688/tv-demo')
const showsCollection = db.get('shows')
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

    .get(async (req, res) => {
        try {
            const shows = await showsCollection.find(req.params._id)
            res.send(shows)
        }
        catch (err) {
            console.log(err)
        }
    })

    .post(async (req, res) => { console.log(req.body)
        try {
           await showsCollection.insert(req.body)
            // shows.push(req.body)
            // shows = [...shows, req.body]    
            res.send()
            console.log(db, shows)
        }
        catch (err) {
            console.log(err)
        }
    })

    .put((req, res) => { res.send('Putem Up') })

app.delete('/shows', (req, res) => res.send('D-e-l-eted'))

app.listen(port, () => console.log("i'm listening!"))