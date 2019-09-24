export const enviroment = {
  server : { port: process.env.SERVER_PORT || 3000 },
  // db : {url: process.env.DB_URL || 'mongodb://localhost/meat-api'},
  db : {url: process.env.DB_URL || "mongodb+srv://dieinimy:M0du10gp5@cluster0-pqen6.mongodb.net/test?retryWrites=true&w=majority",
  security: {
    saltRounds: process.env.SALT_ROUNDS || 10,
    apiSecret: process.env.API_SCRET || 'meat-api-scret',
    enableHTTPS: process.env.ENABLE_HTTPS || false,
    certificate: process.env.CERTI_FILE || './security/keys/cert.pem',
    key: process.env.CERT_KEY_FILE || './security/keys/key.pem'

  },
  log:{
    level: process.env.LOG_LEVEL || 'debug',
    name: 'meat-api-logger'
  }
}
