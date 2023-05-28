const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: {
    // pavbox application
    mainpage: paths.src + '/main.js',
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
      // scripts: [
      //   '/js/runtime.bundle.js',
      //   '/js/main.bundle.js'
      // ]

      // advanced options
      styles: '<link href="/styles/main.css" rel="stylesheet">',
      scripts: '<script defer="defer" src="/js/main.bundle.js"></script>'
    }),

    new HtmlWebpackPlugin({
      title: 'lera application',
      favicon: paths.src + '/assets/img/favicon.ico',
      template: paths.src + '/assets/pages/lera_congrats.html',
      filename: 'lera_congrats.html',

      // advanced options
      // styles: '<link href="/styles/lera.styles.css" rel="stylesheet">',
      // scripts: '<script defer="defer" src="/js/lera.bundle.js"></script>'

      // scripts: [
      //   '/js/runtime.bundle.js',
      //   '/js/main.bundle.js'
      // ]

      // files: {
        css: [
          '<link href="/styles/lera.styles.css" rel="stylesheet">'
        ],
        js: [
          '<script defer="defer" src="/js/runtime.bundle.js"></script>',
          '<script defer="defer" src="/js/lera.bundle.js"></script>',
        ]
      // }
    }),

    new HtmlWebpackPlugin({
      title: 'wayneris application',
      favicon: paths.src + '/assets/img/favicon.ico',
      template: paths.src + '/assets/pages/wayneris.html',
      filename: 'wayneris.html',
        css: [
          '<link href="/styles/wayneris.styles.css" rel="stylesheet">'
        ],
        js: [
          '<script defer="defer" src="/js/runtime.bundle.js"></script>',
          '<script defer="defer" src="/js/wayneris.bundle.js"></script>',
        ]
    }),

    new HtmlWebpackPlugin({
      title: 'benzo application',
      favicon: paths.src + '/assets/img/favicon.ico',
      template: paths.src + '/assets/pages/benzo.html',
      filename: 'benzo.html',
        css: [
          '<link href="/styles/benzo.styles.css" rel="stylesheet">'
        ],
        js: [
          '<script defer="defer" src="/js/runtime.bundle.js"></script>',
          '<script defer="defer" src="/js/benzo.bundle.js"></script>',
        ]
    }),

    
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
