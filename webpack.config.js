const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin;
const ManifestPlugin = require("webpack-manifest-plugin");
const envSet = require("./env");

module.exports = (env, argv) => {
	let envMode = argv.mode;
	if (argv.isuat === "true") {
		envMode = "uat";
	}
	// 创建node环境
	const { raw, stringified } = envSet(envMode);

	// webpack环境
	const isPro = envMode === "production";
	const isDev = envMode === "development";
	const isUat = envMode === "uat";

	return {
		context: path.resolve(__dirname, "src"),
		entry: {
			index: "./index.ts"
		},
		output: {
			library: "___WALLE___",
			libraryTarget: "umd",
			path: path.resolve(__dirname, "lib"),
			publicPath: process.env.PUBLIC_PATH,
			filename: "index.js"
		},
		resolve: {
			extensions: [
				".ts",
				".tsx",
				".jsx",
				".js",
				".json",
				".less",
				".scss",
				".css"
			],
			modules: [
				path.resolve(__dirname, "src/lib"),
				path.resolve(__dirname, "node_modules"),
				"node_modules"
			],
			alias: {
				components: path.resolve(__dirname, "src/components"), // used for tests
				style: path.resolve(__dirname, "src/style"),
				core: path.resolve(__dirname, "src/core"),
				"~": path.resolve(__dirname, "src")
			}
		},
		optimization: isDev
			? {}
			: {
				minimizer: [
					new OptimizeCssAssetsPlugin({
						// css压缩
						cssProcessor: require("cssnano"),
						cssProcessorPluginOptions: {
							preset: ["default", { discardComments: { removeAll: true } }]
						},
						canPrint: true
					}),
					new UglifyJsPlugin({
						uglifyOptions: {
							output: {
								comments: false
							},
							compress: {
								drop_console: isPro
							}
						}
					})
				]
			},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					loaders: ["ts-loader"]
				},
				{
					test: /\.(jsx|js)?$/,
					exclude: path.resolve(__dirname, "src"),
					enforce: "pre",
					use: "source-map-loader"
				},
				{
					test: /\.(jsx|js)?$/,
					exclude: /node_modules/,
					use: "babel-loader"
				},
				{
					test: /\.(jsx|js)?$/,
					include: /node_modules(\/|\\)(lru-*)/,
					use: "babel-loader"
				},
				{
					test: /\.(css|scss|sass)$/,
					rules: [
						{
							loader: "style-loader"
						},
						{
							oneOf: [
								{
									include: [
										path.resolve(__dirname, "node_modules"),
										path.resolve(__dirname, "src/style")
									],
									loader: "css-loader",
									options: {
										sourceMap: !isPro
									}
								},
								{
									loader: "css-loader",
									options: {
										modules: true,
										sourceMap: !isPro,
										importLoaders: 1,
										minimize: true
									}
								}
							]
						},
						{
							loader: "postcss-loader",
							options: {
								sourceMap: !isPro
							}
						},
						{
							test: /\.(sass|scss)$/,
							loader: "sass-loader"
						}
					]
				},
				{
					test: /\.json$/,
					loader: "json-loader",
					type: "javascript/auto"
				},
				{
					test: /\.(xml|html|txt|md)$/,
					use: "raw-loader"
				},
				{
					test: /\.(svg|woff2?|ttf|eot)(\?.*)?$/i,
					use: isPro ? "file-loader" : "url-loader"
				},
				{
					test: /\.(jpe?g|png|gif)$/,
					use: isPro
						? { loader: "url-loader?limit=10000" }
						: { loader: "url-loader?limit=10000" }
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "./index.ejs",
				minify: { collapseWhitespace: true },
				...raw
			}),
			new webpack.DefinePlugin(stringified)
		]
			.concat(isUat ? [new ManifestPlugin()] : [])
			.concat(argv.report ? [new BundleAnalyzerPlugin()] : []),
		devtool: isPro || isUat ? "source-map" : "cheap-module-eval-source-map",
		devServer: {
			port: process.env.PORT || 3001,
			host: "localhost",
			publicPath: "/",
			contentBase: "./src",
			historyApiFallback: true,
			open: false,
			// openPage: '',
			proxy: {
				"/scrm": {
					target: "https://yyj-test.by-health.com",
					changeOrigin: true
				},
				"/blessCodeActivity": {
					target: "https://yyj-test.by-health.com",
					changeOrigin: true
				}
			}
		}
	};
};
