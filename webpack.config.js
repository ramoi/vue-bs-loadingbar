const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var commonConfig = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    rules: [
    {
      test: /\.css$/,
      use: [
      'vue-style-loader',
      'css-loader'
      ],
    },      {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
        }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
      ]
    },
    plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    })
    ]
  };

  module.exports = [

    // 설정 1: 브라우저 환경에서 CDN으로 사용하기 위해
    merge(commonConfig, {
        entry: path.resolve(__dirname + '/src/plugin.js'),
        output: {
            filename: 'vue-bs-loadingbar.min.js',
            libraryTarget: 'window',
            library: 'vueJsLoadingBar'
        }
    }),
  
    // Config 2: npm install로 참조하여 사용하기 위해
    merge(commonConfig, {
        entry: path.resolve(__dirname + '/src/components/Loader.js'),
        output: {
          filename: 'vue-bs-loadingbar.js',
          libraryTarget: 'umd',
          library: 'vueJsLoadingBar',
          umdNamedDefine: true
        }
    })
];