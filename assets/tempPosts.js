const tempPosts = [
	{
		id: '1',
		username: 'Joe Smith',
		avatar: 'animal_svgs/bunny_tgvcdh.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '2',
		username: 'Mary Brown',
		avatar: 'animal_svgs/cat_hizjv6.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '3',
		username: 'David Johnson',
		avatar: 'animal_svgs/owl_xnejqi.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},

	{
		id: '4',
		username: 'Sara Lee',
		avatar: 'animal_svgs/monkey_ywewbg.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '5',
		username: 'Jessica Jones',
		avatar: 'animal_svgs/bunny_tgvcdh.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '6',
		username: 'Robert Williams',
		avatar: 'animal_svgs/panda_fb7grl.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '1',
		username: 'Joe Smith',
		avatar: 'animal_svgs/bunny_tgvcdh.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '2',
		username: 'Mary Brown',
		avatar: 'animal_svgs/cat_hizjv6.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '3',
		username: 'David Johnson',
		avatar: 'animal_svgs/owl_xnejqi.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},

	{
		id: '4',
		username: 'Sara Lee',
		avatar: 'animal_svgs/monkey_ywewbg.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '5',
		username: 'Jessica Jones',
		avatar: 'animal_svgs/bunny_tgvcdh.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '6',
		username: 'Robert Williams',
		avatar: 'animal_svgs/panda_fb7grl.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '1',
		username: 'Joe Smith',
		avatar: 'animal_svgs/bunny_tgvcdh.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '2',
		username: 'Mary Brown',
		avatar: 'animal_svgs/cat_hizjv6.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '3',
		username: 'David Johnson',
		avatar: 'animal_svgs/owl_xnejqi.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '4',
		username: 'Sara Lee',
		avatar: 'animal_svgs/monkey_ywewbg.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '5',
		username: 'Jessica Jones',
		avatar: 'animal_svgs/bunny_tgvcdh.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '6',
		username: 'Robert Williams',
		avatar: 'animal_svgs/panda_fb7grl.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '1',
		username: 'Joe Smith',
		avatar: 'animal_svgs/bunny_tgvcdh.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '2',
		username: 'Mary Brown',
		avatar: 'animal_svgs/cat_hizjv6.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '3',
		username: 'David Johnson',
		avatar: 'animal_svgs/owl_xnejqi.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},

	{
		id: '4',
		username: 'Sara Lee',
		avatar: 'animal_svgs/monkey_ywewbg.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '5',
		username: 'Jessica Jones',
		avatar: 'animal_svgs/bunny_tgvcdh.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
	{
		id: '6',
		username: 'Robert Williams',
		avatar: 'animal_svgs/panda_fb7grl.svg',
		post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
	},
]

export default tempPosts
