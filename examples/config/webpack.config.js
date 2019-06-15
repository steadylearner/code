const webpack = require("webpack");

// HtmlWebPackPlugin -> Generate default index.html, but its better to make your own index.html version to include cdn etc
const HtmlWebPackPlugin = require("html-webpack-plugin"); // https://github.com/jantimon/html-webpack-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CSPWebpackPlugin = require("csp-webpack-plugin"); // allow you use CDN when there is security problem
const autoprefixer = require("autoprefixer");
// You can use class instead of className using setting above

// plugins for result
// result in text https://github.com/robertknight/webpack-bundle-size-analyzer,
// https://www.google.com/search?client=firefox-b&q=webpack+plugins+to+descrease+bundle+size

// https://github.com/webpack-contrib/webpack-bundle-analyzer, http://localhost:8888 to see results
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); // works well but not so compatible with others
// incompatible with BundleAnalyzerPlugin?
// const { WebpackBundleSizeAnalyzerPlugin } = require("webpack-bundle-size-analyzer");

// const CompressionPlugin = require("compression-webpack-plugin"); // use nginx and $gzip instead of this
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); 
const DynamicCdnWebpackPlugin = require("dynamic-cdn-webpack-plugin"); // move dependencies to html

// incompatible with HtmlWebPackPlugin
// const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");

// const OfflinePlugin = require("offline-plugin") // should be last, learnt more and used after deploy

// Use it for env file for frontend and far from security
// const Dotenv = require("dotenv-webpack"); You don't have to use it if you know how to write backend code

const FilterWarningsPlugin = require('webpack-filter-warnings-plugin'); // To suppres warning from using react-easy-md
const eslintUse = process.env.NODE_ENV === "development" ? ["babel-loader", "eslint-loader"] : ["babel-loader"];
const TerserPlugin = require('terser-webpack-plugin'); // Use it instead of uglify https://stackoverflow.com/questions/47439067/uglifyjs-throws-unexpected-token-keyword-const-with-node-modules

const path = require("path");
function resolve (dir) {
  return path.join(__dirname, '..', dir)
};

const MinifyPlugin = require("babel-minify-webpack-plugin");

// module.exports = (env) => {
module.exports = () => {

	// console.log("NODE_ENV: ", env.NODE_ENV); // "local"
	// console.log("Production: ", env.production); // true
	// console.log("Should investigate env and use CompressionPlugin ", env);
	// console.log("Env ", env);

	return ({
		devtool: 'inline-source-map',
		module: {

			// https://webpack.js.org/configuration/module/#condition exclude unecessary files
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
					},
				},
				{
					test: /\.(js)$/,
					exclude: /node_modules/,
					use: eslintUse,
				},
				{   // https://github.com/aws-amplify/amplify-js/issues/433
					// to remove source map error from 3rd libraires such as rxjs from the console.
					test: /\.(js|jsx)$/,
					// exclude: /node_modules/,
					use: ["source-map-loader"],
					enforce: "pre",
				},
				// https://webpack.js.org/guides/typescript/
				// {
				// 	test: /\.tsx?$/,
				// 	use: 'ts-loader',
				// 	exclude: /node_modules/
				// },
				{
					test: /\.html$/,
					use: [
						{
							loader: "html-loader",
							options: { minimize: true },
						},
					],
				},
				{
					test: /\.(scss|css)$/,
					use: [
						MiniCssExtractPlugin.loader, // This plugin should be used only on production builds without style-loader
						{
							loader: "css-loader",
							// options: {
							// 	minimize: {
							// 		safe: true,
							// 	},
							// 	modules: true,
							// 	// Turn it on when you restructure your css again, make local to default
							// },
						},
						{
							loader: "postcss-loader",
							options: {
								autoprefixer: {
									browsers: ["last 2 versions"],
								},
								plugins: () => [
									autoprefixer,
								],
							},
						},
						{
							loader: "sass-loader",
							options: {},
						},
					],

					// It works with CSS, Sass, CSS Module, React Specific(Inline Style and styled components)
				},

				{
					test: /\.(png|jp(e*)g|svg)$/,
					use: [{
						loader: "url-loader",
						options: {
							limit: 50000, // Convert images less than 50kb
							// limit: 8000, // Convert images less than 8kb
							name: "images/[hash]-[name].[ext]",
						},
					}],
				},
			],
		},
		// It is important to include it to use react-easy-md without errors
		node: {
			fs: "empty",
			tls: "empty",
			net: "empty",
			child_process: "empty",
		},

		// historyApiFallback to handle browser unsync problem with webpack and react router
		// proxy to handle api CORS problem(https://webpack.js.org/configuration/dev-server/#devserver-proxy)

		devServer: {
			historyApiFallback: true,
			proxy: {
				"/api": "http://localhost:8000",
				"/static": "http://localhost:8000",
			},
		},

		// url-loader -> Images, fonts etc

		optimization: {
			minimizer: [
				new TerserPlugin({
					// chunkFilter: (chunk) => {
					// 	// Exclude uglification for the `vendor` chunk
					// 	if (chunk.name === 'vendor') {
					// 		return false;
					// 	}

					// 	return true;
					// },
				}),
			],

			splitChunks: { // https://medium.com/reactbrasil/code-splitting-e-lazy-loading-em-react-b1ce9870289f
				cacheGroups: { // separate vendors
					commons: {
						test: /[\\/]node_modules[\\/]/,
						name: "vendors",
						chunks: "all",
					}
				}
			}
		},

		//   optimization: {
		// 		minimizer: [
		// 			new UglifyJsPlugin({
		// 				chunkFilter: (chunk) => {
		// 					// Exclude uglification for the `vendor` chunk
		// 					if (chunk.name === 'vendor') {
		// 						return false;
		// 					}
							
		// 					return true;
		// 				}
		// 			}),
		// 		],
		// 	},

		// https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html

		resolve: { // https://gist.github.com/bvaughn/25e6233aeb1b4f0cdb8d8366e54a3977
			alias: {
				"react-dom": "react-dom/profiling",
				"scheduler/tracing": "scheduler/tracing-profiling",
			},
			//
			// extensions: [ '.tsx', '.ts', '.js' ]
		},

		plugins: [
			new webpack.ProgressPlugin(), // Show progress
			// new webpack.DefinePlugin({ // it affects video part when develope, is it necessary at the moment also?
			// 	"process.env.NODE_ENV": ""production""
			// }),
			new webpack.optimize.AggressiveMergingPlugin(),
			// new webpack.optimize.AggressiveSplittingPlugin(), // incompatible with react-code-splitting?
			new HtmlWebPackPlugin({ // https://github.com/jantimon/html-webpack-plugin
				template: "./src/index.html",
				filename: "./index.html",
			}),
			new CSPWebpackPlugin({
				"object-src": "\"none\"",
				"base-uri": "\"self\"",
				"script-src": [
					"\"unsafe-inline\"",
					"\"self\"",
					"\"unsafe-eval\"",
					"https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.1/babel.min.js",
					"https://apis.google.com/",
				],
				"worker-src": ["\"self\"", "blob:"],
			}),
			new MiniCssExtractPlugin({
				filename: "[name].css",
				chunkFilename: "[id].css",
			}),
			new CleanWebpackPlugin(["public"]), // It inscreases process speed so much.

			// for results

			// new BundleAnalyzerPlugin(), // comment it when writing react codes, you have to read doc to snyc it to final result
			// new WebpackBundleSizeAnalyzerPlugin("./reports/plain-report.txt"), // does it work?

			// new CompressionPlugin({ // think of compression after deploy it to nginx
			// 	// html and maybe css don't have to be included here for they should be tweaked in server side
			// 	// exlucde html?
			//  // You have to return .gz file conditionally so this returns original file also
			// 	// refer https://medium.com/@rajaraodv/two-quick-ways-to-reduce-react-apps-size-in-production-82226605771a
			// 	// https://stackoverflow.com/questions/49844846/compression-webpack-bundle-using-plugin
			// 	cache: true,
			// 	// asset: "[path].gz[query]",
			// 	// algorithm: "gzip",
			// 	// test: /\.js$|\.css$|\.html$/,
			// 	// threshold: 10240,
			// 	// minRatio: 0.8,]
			// }),

			new DynamicCdnWebpackPlugin({ // unexpected results
				exclude: ["rxjs"], // include package name here that shows errors, Id don't use redux-thunk anymore
				// exclude: ["rxjs", "redux-thunk"], // include package name here that shows errors, Id don't use redux-thunk anymore
			}),

			// new ChunkManifestPlugin({
			// 	filename: "manifest.json",
			// 	manifestVariable: "webpackManifest",
			// 	inlineManifest: false,
			// }),

			// new OfflinePlugin(),

			// To remove waring from using react-easy-md
			new FilterWarningsPlugin({
				exclude: /Critical dependency: the request of a dependency is an expression/,
			}),
                        // new TerserPlugin({
                        //  parallel: true,
                        //  terserOptions: {
                        //    ecma: 6,
                        //  },
                        // }),
                        // new MinifyPlugin(),
		],
	});
};


