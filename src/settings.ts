export const profile = {
	fullName: 'Gilvir Gill',
	title: 'P.h.D. Candidate',
	institute: 'Stony Brook University',
	author_name: 'Gilvir Gill', // Author name to be highlighted in the papers section
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
		{ title: 'Distributed Graph Sketching', description: 'Designing and analyzing sketching data structures for large, dynamic graphs in distributed settings.', field: 'distributed-graph-sketching' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'gigill@cs.stonybrook.edu',
	linkedin: 'https://www.linkedin.com/in/gilvir-gill/',
	x: '',
	github: 'https://github.com/gillgamesh',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=2KCwSzQAAAAJ&hl=en',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Gilvir Gill',
	default_description: 'Ph.D. Candidate at Stony Brook University',
	default_image: '/images/astro-academia.png',
}
