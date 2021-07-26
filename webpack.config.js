const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js',
	},
	resolve: {
		modules: [__dirname, 'src/components', 'node_modules'],
		extensions: ['*', '.js', '.jsx'],
		alias: {
			atoms: path.resolve(__dirname, 'src/components/UI/atoms'),
			assets: path.resolve(__dirname, 'src/assets/'),
			components: path.resolve(__dirname, 'src/components/'),
			hooks: path.resolve(__dirname, 'src/hooks/'),
			js: path.resolve(__dirname, 'src/js/'),
			pages: path.resolve(__dirname, 'src/components/pages/'),
			molecules: path.resolve(__dirname, 'src/components/UI/molecules'),
			organisms: path.resolve(__dirname, 'src/components/UI/organisms'),
			templates: path.resolve(__dirname, 'src/components/templates/'),
			utils: path.resolve(__dirname, 'src/utils/'),
			__testHelpers__: path.resolve(__dirname, 'src/__testHelpers__/'),
		},
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, './public'),
		proxy: {
			'/test': {
				target: 'http://localhost:5000',
				changeOrigin: true,
			},
		},
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			inject: true,
			template: path.resolve(__dirname, 'src', 'index.html'),
		}),
	],
};
