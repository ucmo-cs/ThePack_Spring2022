const tempPosts = [
	{
		id: 1,
		username: 'Joe Smith',
		avatar: 'animal_svgs/bunny_tgvcdh.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 2,
		username: 'Mary Brown',
		avatar: 'animal_svgs/cat_hizjv6.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 3,
		username: 'David Johnson',
		avatar: 'animal_svgs/owl_xnejqi.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},

	{
		id: 4,
		username: 'Sara Lee',
		avatar: 'animal_svgs/monkey_ywewbg.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 5,
		username: 'Jessica Jones',
		avatar: 'animal_svgs/bunny_tgvcdh.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 6,
		username: 'Robert Williams',
		avatar: 'animal_svgs/panda_fb7grl.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 7,
		username: 'Joe Smith',
		avatar: 'animal_svgs/bunny_tgvcdh.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 8,
		username: 'Mary Brown',
		avatar: 'animal_svgs/cat_hizjv6.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 9,
		username: 'David Johnson',
		avatar: 'animal_svgs/owl_xnejqi.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},

	{
		id: 10,
		username: 'Sara Lee',
		avatar: 'animal_svgs/monkey_ywewbg.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 11,
		username: 'Jessica Jones',
		avatar: 'animal_svgs/bunny_tgvcdh.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 12,
		username: 'Robert Williams',
		avatar: 'animal_svgs/panda_fb7grl.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 13,
		username: 'Joe Smith',
		avatar: 'animal_svgs/bunny_tgvcdh.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 14,
		username: 'Mary Brown',
		avatar: 'animal_svgs/cat_hizjv6.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 15,
		username: 'David Johnson',
		avatar: 'animal_svgs/owl_xnejqi.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 16,
		username: 'Sara Lee',
		avatar: 'animal_svgs/monkey_ywewbg.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 17,
		username: 'Jessica Jones',
		avatar: 'animal_svgs/bunny_tgvcdh.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 18,
		username: 'Robert Williams',
		avatar: 'animal_svgs/panda_fb7grl.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 19,
		username: 'Joe Smith',
		avatar: 'animal_svgs/bunny_tgvcdh.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 20,
		username: 'Mary Brown',
		avatar: 'animal_svgs/cat_hizjv6.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 21,
		username: 'David Johnson',
		avatar: 'animal_svgs/owl_xnejqi.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},

	{
		id: 22,
		username: 'Sara Lee',
		avatar: 'animal_svgs/monkey_ywewbg.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 23,
		username: 'Jessica Jones',
		avatar: 'animal_svgs/bunny_tgvcdh.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: 24,
		username: 'Robert Williams',
		avatar: 'animal_svgs/panda_fb7grl.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
]

export default tempPosts
