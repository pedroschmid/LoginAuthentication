// Configurações do mongodb
    const mongoose = require('mongoose')

    mongoose.Promise = global.Promise

    mongoose.connect('mongodb://localhost:27017/Autentication', { useMongoClient: true})

    mongoose.connection.on('connected', () => {
        console.log('Successfully connected to the database')
    })

    mongoose.connection.on('error', (err) => {
        console.log('Error on connection: ' + err)
    })

    mongoose.connection.on('disconnect', () => {
        console.log('Disconnected :(')
    })