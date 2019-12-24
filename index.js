// Carregando modulos/frameworks para inicializar o servidor
    const app = require('./config/express')();
    
    require('./config/database');

    app.listen(app.get('port'), () => {
        console.log('Server running on port 3001...')
    });