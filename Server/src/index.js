const server = require('./app')
const PORT = 3001;
// Importo instancia de "sequelize" => "conn"
const { conn } = require('./DB_connection');

conn.sync({ force: false })
    .then(() => {
      server.listen(PORT, () => {
         console.log('Server raised in port: ' + PORT);
      })
    })
    .catch(error => console.log(error.message))