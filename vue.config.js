const Dotenv = require('dotenv-webpack');

module.exports = {
  transpileDependencies: true,

  // Configuración del complemento dotenv-webpack
  configureWebpack: {
    plugins: [
      new Dotenv({
        path: './environment/.env',
      }),
    ],
  },
};