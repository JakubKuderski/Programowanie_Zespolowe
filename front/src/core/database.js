export function getDatabase () {
	return {
		layout: {
			alias: 'theme-default'
		},
		subpages: [
			{
				meta: {
					name: 'Home',
					path: '/',
					title: 'It is a test title',
					description: 'It is a test description'
				},
				value: {
					sections: [
						{
							alias: 'slider_section',
							value: {
								slides: [
									{
										image: 'https://i.ibb.co/R3JhM0J/Group-1-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/VDnKX0R/Group-3-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/zrQR45k/Group-8-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/9vqcJK3/Group-4-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/c6Kpn9Z/Group-5-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/vJzpDGF/Group-6-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/KL295kL/Group-7-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									}
								]
							}
						},
						{
							alias: 'gallery_section',
							value: {
								images: [
									{
										image: 'https://i.ibb.co/R3JhM0J/Group-1-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/VDnKX0R/Group-3-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/zrQR45k/Group-8-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/9vqcJK3/Group-4-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/c6Kpn9Z/Group-5-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/vJzpDGF/Group-6-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/KL295kL/Group-7-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									}
								]
							}
						},
						{
							alias: 'jumbotron_section',
							value: {
								header: 'Header',
								description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
								image:
									{
										path: 'https://i.ibb.co/R3JhM0J/Group-1-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
							}
						},
						{
							alias: 'textfield_section',
							value: {
								header: 'Header',
								description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
							}
						},
						{
							alias: 'social_media_section',
							value: {
								header: 'Social Media',
								links: [
									{
										header: '/matis1',
										icon: 'https://cdn-icons-png.flaticon.com/512/1077/1077042.png',
										preview: 'https://picsum.photos/id/237/300/300',
									},
									{
										header: '/matis2',
										icon: 'https://cdn-icons-png.flaticon.com/512/747/747374.png',
										preview: 'https://picsum.photos/id/40/300/300',
									},
									{
										header: '/matis3',
										icon: 'https://cdn-icons-png.flaticon.com/512/1077/1077046.png',
										preview: 'https://picsum.photos/id/100/300/300',
									},
								],
							}
						},
					]
				}
			},
			{
				meta: {
					name: 'About',
					path: '/about',
					title: 'About',
					description: 'About description'
				},
				value: {
					sections: [
						{
							alias: 'gallery_section',
							value: {
								images: [
									{
										image: 'https://i.ibb.co/R3JhM0J/Group-1-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/VDnKX0R/Group-3-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/zrQR45k/Group-8-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/9vqcJK3/Group-4-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/c6Kpn9Z/Group-5-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/vJzpDGF/Group-6-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									},
									{
										image: 'https://i.ibb.co/KL295kL/Group-7-min.jpg',
										alt: 'Alternative text',
										title: 'Title of image'
									}
								]
							}
						}
					]
				}
			},
			{
				meta: {
					name: 'Contact',
					path: '/contact',
					title: 'It is a test title',
					description: 'It is a test description'
				},
				value: {
					sections: [
					]
				}
			}
		]
	}
}