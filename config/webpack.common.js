const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: {
    // pavbox application
    main: paths.src + '/main.js',
    // wayneris application
    wayneris: paths.src + '/application/wayneris/wayneris.js',
    // temporary applications
    lera: paths.src + '/application/temporary/lera_congrats_app.js'
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    new HtmlWebpackPlugin({
      title: 'main application',
      favicon: paths.src + '/assets/img/favicon.ico',
      template: paths.src + '/assets/pages/index.html',
      filename: 'index.html',
      mainStyles: '<link href="/main.css" rel="stylesheet">',
      mainScripts: '<script defer="defer" src="/runtime.bundle.js"></script><script defer="defer" src="/main.bundle.js"></script>',
      inject: false
    }),

    new HtmlWebpackPlugin({
      title: 'lera application',
      favicon: paths.src + '/assets/img/favicon.ico',
      template: paths.src + '/assets/pages/lera_congrats.html',
      filename: 'lera_congrats.html',

      // advanced options
      // styles: '<link href="/lera.css" rel="stylesheet">',
      // scripts: '<script defer="defer" src="/lera.bundle.js"></script>'

      // scripts: [
      //   '/runtime.bundle.js',
      //   '/main.bundle.js'
      // ]

      // files: {
      leraStyles: '<link href="/lera.css" rel="stylesheet">',
      leraScripts: '<script defer="defer" src="/runtime.bundle.js"></script><script defer="defer" src="/lera.bundle.js"></script>',
      inject: false
      // }
    }),

    new HtmlWebpackPlugin({
      title: 'wayneris application',
      favicon: paths.src + '/assets/img/favicon.ico',
      template: paths.src + '/assets/pages/wayneris.html',
      filename: 'wayneris.html',
      waynerisStyles: '<link href="/wayneris.css" rel="stylesheet">',
      waynerisScripts: '<script defer="defer" src="/runtime.bundle.js"></script><script defer="defer" src="/wayneris.bundle.js"></script>',
      inject: false
    }),
    // new HtmlWebpackPlugin({
    //   title: 'benzo application',
    //   favicon: paths.src + '/assets/img/favicon.ico',
    //   template: paths.src + '/assets/pages/benzo.html',
    //   filename: 'benzo.html',
    //     css: [
    //       '<link href="/benzo.css" rel="stylesheet">'
    //     ],
    //     js: [
    //       '<script defer="defer" src="/runtime.bundle.js"></script>',
    //       '<script defer="defer" src="/benzo.bundle.js"></script>',
    //     ]
    // }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource',
        generator: { filename: 'images/[name][ext]' }
      },

      // Fonts and SVGs: Inline files
      { 
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/resource',
        generator: { filename: 'fonts/[name][ext]' } 
      },
      // Load Html files as is
      // {
      //   test: /\.html/, type: 'asset/resource',
      //   generator: { filename: '[name][ext]' } 
      // },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}
