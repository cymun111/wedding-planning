module.exports = {
  entry: './client/app.js',
  output: {
    path: __dirname + '/client', filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          },
        }
      },
      {
         test: /\.(png|jpg)$/,
         use: [
           {
           loader: 'file-loader',
           options: {
             name: '[name].[ext]',
             outputPath: 'images/',
             publicPath: 'images/'
           }
         }
         ]
       },
       {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
     },

    ]
  }
}
