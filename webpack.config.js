//toda la configuracion que necesitamos para nuestro proyecto

/*
const path = require('path');//nos va a permitir acceder hacia donde estamos en  la carpeta
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path/posix');


//modulo para exportar 
module.exports = {                          //este modulo es un objeto donde vive esa configuracion 
 entry: './src/index.js',                   //punto de entrada
 output:{                                   //output donde va a estar el proyecto listo y copilado para mandarce a produccion
     path: path.resolve(__dirname, 'dist'), //donde se encuentre la carpeta ahi vas a crear una nueva carpeta
     filename: 'main.js'                    //Archivo que se va a generar
 } ,     
  resolve: {                                
    extensions: ['.js'],                   //Extenciones que va a trabajar nuestro proyecto 
  }, 
  //reglas con las que se va a trabajar "las de babel"
  module:{
      rules: [                            //valores de una ruta que queremos filtrar de una ruta, como identificar nuestros archivos en nuestro entorno
        {
            test:/\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }                               //va a utilizar un loader o una cofiguracion establecida para trabajr todo nuestro codigo                          
        }
      ]
  },
  //plugin
  plugins:[
      new HtmlWebpackPlugin([//aca se va a establecer lo que se necesita
          { 
           inject:true,  //como a un arvhivo html le voy a inyectar un valor
           template: './public/index.html',   //donde se encuentra el template principal
           filename: './index.html',                                   //donde lo vamos a guardar
          }
    ])
  ]

};*/

// Permitir traer path. Acceder dentro de la carpte no importa el lugar donde se encuentre
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {targets: "defaults"}]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin([
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ])
    ]
}