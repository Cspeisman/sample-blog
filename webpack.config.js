import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import data from './data';
import path from 'path';

export default {

  entry: {
    main: './src/render.js',
  },

  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'built'),
    libraryTarget: 'umd',
  },

  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel'},
      {test: /\.md$/, loader: 'markdown-with-front-matter'},
    ],
  },

  plugins: [
    new StaticSiteGeneratorPlugin('index.js', data.routes, data),
  ],

};
