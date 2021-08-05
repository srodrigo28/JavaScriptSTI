const express = require("express")
const cors = require("cors")
const nedb = require('nedb')
const bodyParser = require('body-parser')
const db = new nedb({ filename: './database.db', autoload: true})
const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false}))

//app.use(bodyParser.json({ extended: false}))

//listando
app.get('/books', (req, res) => {
    db.find({}, (err, books) =>{
        res.json(books)
    })
})
//cadastrando
app.post('/books', (req, res) => {
    db.insert({
        name: req.body.name,
        author: req.body.author
    }, (err, doc) => {
        res.json(doc)
    })
})

app.delete('/books/:id', (req, res) => {
    db.remove({
        _id: req.params.id 
    }, (err) => {
        res.json({
            success: true
        })
    })
})

//subindo server
app.listen(3000, () => {
    console.log('Servidor executando com sucesso 3000.')
});