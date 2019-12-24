// Criando as rotas do usuario
    const userController = require('../controllers/user.js')

    module.exports = (app) => {

        app.route('/v1/users')
        .get(userController.allUsers)
        .post(userController.newUser)
    }