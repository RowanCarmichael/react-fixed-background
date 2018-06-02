module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          require.resolve('sass-loader')
        ],
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ],
  },
}