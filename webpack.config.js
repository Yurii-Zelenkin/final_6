const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['./src/js/index.js'],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/final_6/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js'),
          path.resolve(__dirname, 'src/blocks'),
          path.resolve(__dirname, 'src/modal')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  browsers: ['last 2 versions', 'not dead']
                }
              }]
            ]
          }
        }
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: '/final_6/fonts/'
            }
          }
        ]
      },

      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|svg|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/img'),
          to: path.resolve(__dirname, 'dist/img')
        },
        {
          from: path.resolve(__dirname, 'src/blocks'),
          to: path.resolve(__dirname, 'dist/blocks')
        },
        {
          from: path.resolve(__dirname, 'src/modal'),
          to: path.resolve(__dirname, 'dist/modal')
        },
        {
          from: path.resolve(__dirname, 'src/fonts'),
          to: path.resolve(__dirname, 'dist/fonts')
        }
      ]
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Указываем папку с собранными файлами
    compress: true, // Сжатие gzip
    port: 8080, // Порт
    hot: true, // Горячая перезагрузка
    open: false // Убираем автооткрытие браузера (оно уже есть в скрипте)
  }
}
