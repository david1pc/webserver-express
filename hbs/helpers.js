const hbs = require('hbs')

hbs.registerHelper('anio', () => new Date().getFullYear())

hbs.registerHelper('capitalizar', (texto) => {
    let arrayDeCadenas = texto.split(' ')

    arrayDeCadenas.forEach((palabra, i) => {
        arrayDeCadenas[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1)
    });

    return arrayDeCadenas.join(' ')
})

module.exports = hbs