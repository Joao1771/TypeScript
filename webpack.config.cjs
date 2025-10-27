const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/a019-exercicio/a019-exercicio.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig-frontend.json'
        }
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
      extensionAlias: {
    ".js": [".ts", ".js"],  // se pedirem .js, pode resolver .ts também
    ".jsx": [".tsx", ".jsx"],
  },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend','assets','js'),
  },
  devtool: 'source-map',
};
