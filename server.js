const express = require('express')
const app = express()
const hbs = require('./hbs/helpers')

// Port
const port = process.env.PORT || 3000

// Middleware
app.use(express.static(__dirname + '/public'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Kevin Hernan'
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
})