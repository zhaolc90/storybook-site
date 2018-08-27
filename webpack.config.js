const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
        include: path.resolve(__dirname, "./node_modules")
      },
      {
             test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
             loader: "url-loader?limit=10000&minetype=application/font-woff"
       },
      {
             test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
             loader: "file-loader"
         },
      {
        test: /\.js/,
        loaders: ['babel-loader'],
        include: [
          path.resolve(__dirname, '../../lib/ui/src'),
          path.resolve(__dirname, '../../lib/components/src'),
        ],
      },
    ],
  },
};
