// module.exports = {
//   webpackDevMiddleware: (config) => {
//     config.watchOptions.poll = 300;
//     return config;
//   },
// };
// const path = require('path');

// module.exports = {
//   trailingSlash: true,
//   webpackDevMiddleware: (config) => {
//     config.watchOptions = {
//       poll: 300,
//       aggregateTimeout: 300,
//     };

//     return config;
//   },
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   future: {
//     webpack5: true,
//   },
// };
// Example config for adding a loader that depends on babel-loader
// This source was taken from the @next/mdx plugin source:
// https://github.com/vercel/next.js/tree/canary/packages/next-mdx
//
