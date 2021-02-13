
initialize npm with flag -y to sa yes to all options

`npm init -y`

install webpack in dev mode (-D)

`npm i -D webpack webpack-cli`

can be run without config file , compiles to dist

`npx webpack`

you can add scripts to package.json as shortcuts for commands e.g.

`"build": "webpack"`
`"watch": "webpack --watch"`

if we want to compile js ,even for older browser , or you need compatibility, use babel

`npm i @babel/core @babel/preset-env babel-loader`

webpack config file 

`webpack.config.js`

### Development server (hot reloading server)

install: `npm i -D webpack-dev-server`

webpack.config.js: `devServer: { contentBase: './dist' }`

package.json script: `"start": "webpack serve"`

### CSS

`npm i -D css-loader` compile basic css

`npm i -D style-loader` compile and output inline css

`npm i -D sass sass-loader` compile scss files with styles

`npm i -D mini-css-extract-plugin`

`npm i -D postcss postcss-loader postcss-preset-env`