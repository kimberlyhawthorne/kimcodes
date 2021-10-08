const path = require('path');

module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "Kim Hawthorne",
	},
	plugins: [
		"gatsby-plugin-styled-components",
		"gatsby-plugin-react-helmet",
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				root: path.join(__dirname, 'src'),
				components: path.join(__dirname, 'src/components'),
				styles: path.join(__dirname, 'src/styles')
			}
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'data',
				path: path.join(__dirname, 'src/data'),
			}
		},
		{
				resolve: `gatsby-transformer-remark`,
				options: {
					plugins: [
						{
							resolve: `gatsby-remark-prismjs`,
							options: {
								classPrefix: "language-",
								inlineCodeMarker: null,
								aliases: {},
								// code used in markdown i.e. single backtick code like `this`.
								noInlineHighlight: false,
								languageExtensions: [
									{
										language: "superscript",
										extend: "javascript",
										definition: {
											superscript_types: /(SuperType)/,
										},
										insertBefore: {
											function: {
												superscript_keywords: /(superif|superelse)/,
											},
										},
									},
								],
								prompt: {
									user: "root",
									host: "localhost",
									global: false,
								},
								escapeEntities: {},
							},
						},
					],
				},
			}
	]
};
