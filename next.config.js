const cloudinaryBaseUrl = `https://res.cloudinary.com/wuphf/image/upload/`
module.exports = {
	reactStrictMode: true,
	images: {
		loader: 'cloudinary',
		path: cloudinaryBaseUrl,
	},
	compiler: {
		styledComponents: true,
	},
	experimental: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
}
