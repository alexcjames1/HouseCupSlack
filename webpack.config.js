const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'App.js',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = {
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
       ]
    },
}
