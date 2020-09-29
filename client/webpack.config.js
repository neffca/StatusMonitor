const path = require("path");
const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', "./src/index.js"],
  mode: "development",
  output: {
    filename: "./main.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', }
    ],
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /\.st.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192
          }
        }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    historyApiFallback: true,
    progress: true
  },
  plugins: [
      new StylableWebpackPlugin()
  ]
};
