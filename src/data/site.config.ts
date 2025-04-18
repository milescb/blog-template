interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://adventure.crabdance.com/', // Write here your website url
	author: 'Kylie Zajdel', // Site author
	title: 'Travel Blog', // Site title.
	description:
		'This is a website where I document my travel blah blah. This is a website where I document my travel blah blah', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
