const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: "development",
  entry: './main.js',
  output: {
    filename: 'bundle.main.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  module : {
      rules: [
        {
        test : /\.js/,
        exclude : [
          path.resolve(__dirname,"node_modules")
        ],
        // rules for modules (configure loaders, parser options, etc.)
        use :   {
          loader: "babel-loader",
          // the loader which should be applied, it'll be resolved relative to the context
          options: {
            presets: [["@babel/preset-env", {
              useBuiltIns: "usage",
              corejs: 3, // or 2,
            }]
          ],
          sourceType : "unambiguous"
        },
      },
    },
    {
      test: /\.svg$/,
      use: ['babel-loader', 'vue-svg-loader'],
    },
    {
      test : /\.vue/,
      use :  {
          loader : "vue-loader",
          options: {
            loaders: {
              'scss': 'vue-style-loader!css-loader!sass-loader'
            }, 
          }
        }      
    },
    {
      test: /\.css$/,
      use: ['vue-style-loader', {loader : "css-loader", options : { modules : true}}]
    },
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ]
},
plugins : [
  new VueLoaderPlugin()
],
devtool : "eval-cheap-module-source-map",
devServer : {
  contentBase : './',
  hot : true,
},
};