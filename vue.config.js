module.exports = {
	devServer: {
		overlay: false,
	},
	outputDir: 'F:\\DEV\\spring-workspace\\ACE-ADMIN\\src\\main\\resources\\static',
	configureWebpack: {
		entry: ['babel-polyfill', '@/main.js'],
	},
	transpileDependencies: ['vuetify'],
};
