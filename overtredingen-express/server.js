const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

MongoClient.connect('mongodb://localhost:27017/examen',
    (err, database) => {
        if (err) return console.log(err)
        db = database.db('examen')
        app.listen(process.env.PORT || 3000, () => {
            console.log('Listening on port 3000')
        })
    })

//show the search result err form
app.get('/search_result_err', (req, res) => {
    res.render('search_result_err.ejs', {})
});

app.get('/', (req, res) => {
    db.collection('overtredingen').find().toArray((err, result) => {
        if (err) return console.log(err)
        console.log(result)
        res.render('index.ejs', { overtreding: '' })
    })
})

//Search straat
app.get('/search_straat', (req, res) => {
    db.collection('overtredingen').find({ opnameplaats_straat: req.query.straat }).toArray((err, result) => {
        if (result.length <= 0) {
            res.redirect('/search_result_err')
            return;
        } else {
            res.render('index.ejs', { overtreding: result })
        }
    })
})

//Search straat
app.get('/search_snelheid', (req, res) => {
    db.collection('overtredingen').find({ aantal_overtredingen_snelheid: {$gte: Number(req.query.snelheid) }}).toArray((err, result) => {
        console.log(result)
        if (result.length <= 0) {
            res.redirect('/search_result_err')
            return;
        } else {
            res.render('index.ejs', { overtreding: result })
        }
    })
})
