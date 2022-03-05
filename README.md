# CrazyPortal
Project repository of VanillaPages

## Dependencies

1. @babel/core : incluye toda la libreria de babel.

2. babel-loader : Este paquete permite transpilar archivos JavaScript utilizando Babel y webpack .

3. html-webpack-plugin: Permite copiar los archivos HTML del proyecto.

4. webpack-cli: Permite manejar ciertos comandos

5. webpack-dev-server : Permite crear un entorno de desarrollo local para probar los cambios que se esta realizando.

6. –save-dev : Permite instalar un conjunto de dependencia en la modalidad de desarrollo para el archivo packet jsom

## Instalacion de babel

1. npm i @babel/core @babel/preset-env @babel/runtime @babel/plugin-transform-runtime babel-loader -D
2. Crear un archivo .babelrc con lo siguiente
 {
"presets": [
    "@babel/preset-env" //Estó es lo que nos permite trabajar con JavaScript moderno y babel lo transpile a versiones entendibles para los navegadores.
],
"plugins": [
    "@babel/plugin-transform-runtime" // ESTE ES MUY IMPORTANTE PARA LA CLASE. Este plugin nos permite trabajar con funciones asincronas(promesas, async/await, cb) Así que si vienes del curso de Webpack, recuerda utilizar estas configuraciones. Y si no lo has hecho. agrega estas configuraciones y espero te ayude
]
}

