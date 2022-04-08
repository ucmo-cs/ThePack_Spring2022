const tempPosts = [
  {
    id: 1,
    userId: 'Joe Smith',
    avatar: 'animal_svgs/bunny_tgvcdh.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 2,
    userId: 'Mary Brown',
    avatar: 'animal_svgs/cat_hizjv6.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 3,
    userId: 'David Johnson',
    avatar: 'animal_svgs/owl_xnejqi.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },

  {
    id: 4,
    userId: 'Sara Lee',
    avatar: 'animal_svgs/monkey_ywewbg.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 5,
    userId: 'Jessica Jones',
    avatar: 'animal_svgs/bunny_tgvcdh.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 6,
    userId: 'Robert Williams',
    avatar: 'animal_svgs/panda_fb7grl.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 7,
    userId: 'Joe Smith',
    avatar: 'animal_svgs/bunny_tgvcdh.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 8,
    userId: 'Mary Brown',
    avatar: 'animal_svgs/cat_hizjv6.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 9,
    userId: 'David Johnson',
    avatar: 'animal_svgs/owl_xnejqi.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },

  {
    id: 10,
    userId: 'Sara Lee',
    avatar: 'animal_svgs/monkey_ywewbg.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 11,
    userId: 'Jessica Jones',
    avatar: 'animal_svgs/bunny_tgvcdh.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 12,
    userId: 'Robert Williams',
    avatar: 'animal_svgs/panda_fb7grl.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 13,
    userId: 'Joe Smith',
    avatar: 'animal_svgs/bunny_tgvcdh.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 14,
    userId: 'Mary Brown',
    avatar: 'animal_svgs/cat_hizjv6.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 15,
    userId: 'David Johnson',
    avatar: 'animal_svgs/owl_xnejqi.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 16,
    userId: 'Sara Lee',
    avatar: 'animal_svgs/monkey_ywewbg.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 17,
    userId: 'Jessica Jones',
    avatar: 'animal_svgs/bunny_tgvcdh.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 18,
    userId: 'Robert Williams',
    avatar: 'animal_svgs/panda_fb7grl.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 19,
    userId: 'Joe Smith',
    avatar: 'animal_svgs/bunny_tgvcdh.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 20,
    userId: 'Mary Brown',
    avatar: 'animal_svgs/cat_hizjv6.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 21,
    userId: 'David Johnson',
    avatar: 'animal_svgs/owl_xnejqi.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },

  {
    id: 22,
    userId: 'Sara Lee',
    avatar: 'animal_svgs/monkey_ywewbg.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 23,
    userId: 'Jessica Jones',
    avatar: 'animal_svgs/bunny_tgvcdh.svg',
    postBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
  {
    id: 24,
    userId: 'Robert Williams',
    avatar: 'animal_svgs/panda_fb7grl.svg',
    postBodyBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
  },
]

export default tempPosts
