const films = [
  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/f283a934-88b0-4d04-8bf6-229979d613ea/220x330',
    name: 'Человек паук',
    genre: 'Фантастика',
    director: 'Сэм Рэйми',
    desc:
      '«Человек-паук 3: Враг в отражении» — третий и заключительный супергеройский фильм в трилогии Сэма Рэйми, основанной на комиксах о приключениях супергероя Человека-паука.',
    description: {
      href: 'https://www.kinopoisk.ru/film/82441/',
      rel: 'noreferrer',
      target: '_blank',
    },
    stars: 5,
    rating: '',
  },
  {
    poster: 'https://www.kino-teatr.ru/movie/posters/big/6/22276.jpg',
    name: 'Властелин колец',
    genre: 'Фантастика',
    director: 'Питер Джексон',
    desc:
      'Кинотрилогия «Властели́н коле́ц» — снятая режиссёром Питером Джексоном серия из трёх связанных единым сюжетом кинофильмов, представляющая собой экранизацию романа Дж. Р. Р. Толкина «Властелин колец».',
    description: {
      href: 'https://www.kinopoisk.ru/film/328/',
      rel: 'noreferrer',
      target: '_blank',
    },

    stars: 4,
    rating: '',
  },
  {
    poster: 'https://cinemaseats.net/movies/wrong-turn/poster',
    name: 'Поворот не туда: Наследие',
    genre: 'Ужасы',
    director: 'Майк П. Нельсон',
    desc:
      'Компания друзей приезжает в Харперс-Ферри, чтобы отправиться в поход по Аппалачской тропе. В этих краях они сталкиваются с сообществом людей, которые жили в горах еще до Гражданской войны. И которые очень не любят незнакомцев.',
    description: {
      href: 'https://www.kinopoisk.ru/film/1200179/',
      rel: 'noreferrer',
      target: '_blank',
    },

    stars: 3,
    rating: '',
  },
  {
    poster: 'https://www.kino-teatr.ru/movie/posters/big/6/98526.jpg',
    name: 'Американский пирог.Все в сборе',
    genre: 'Комедии',
    director: 'Йон Хервиц',
    desc:
      'Добрая американская традиция возвращается. Герои «Американского пирога» встречаются вновь спустя 10 лет. Они докажут, что даже время и расстояние не в силах разрушить их дружбу.Летом 1999-го четверо мичиганских парней решили расстаться с невинностью.',
    description: {
      href: 'https://www.kinopoisk.ru/film/506251/',
      rel: 'noreferrer',
      target: '_blank',
    },

    stars: 2,
    rating: '',
  },
  {
    poster: 'https://upload.wikimedia.org/wikipedia/ru/f/f6/Die_Hard.gif',
    name: 'Крепкий орешек',
    genre: 'Боевики',
    director: 'Джон Мактирнан',
    desc:
      '«Крепкий орешек» (англ. Die Hard) — американский боевик 1988 года. Снят режиссёром Джоном Мактирнаном по роману Родерика Торпа «Ничто не вечно (англ.)русск.».В 2017 году внесён в Национальный реестр фильмов.',
    description: {
      href: 'https://www.kinopoisk.ru/film/471/',
      rel: 'noreferrer',
      target: '_blank',
    },

    stars: 1,
    rating: '',
  },
  {
    poster: 'https://mp4films.ru/_ld/4/91683786.jpg',
    name: 'Джон Уик',
    genre: 'Боевики',
    director: 'Чад Стахелски',
    desc:
      'Джон Уик — бывший наемный убийца — ведет размеренную жизнь, когда преступник крадет его любимый Mustang 1969 года и попутно убивает собаку Дейзи, единственное живое напоминание об умершей жене.',
    description: {
      href: 'https://www.kinopoisk.ru/film/762738/',
      rel: 'noreferrer',
      target: '_blank',
    },

    stars: 5,
    rating: '',
  },
  {
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsluuNaJ7Dph6BzzGritrRSE_5aF7365T30OIxKbo1gLIiilzx',
    name: 'Звонок',
    genre: 'Ужасы',
    director: 'Гор Вербински',
    desc:
      'Телефонный звонок следует после просмотра некой загадочной видеокассеты, после чего каждый посмотревший ее умирает. Жертве дается лишь одна неделя, а дальше следует неминуемая смерть.',
    description: {
      href: 'https://www.kinopoisk.ru/film/804/',
      rel: 'noreferrer',
      target: '_blank',
    },
    stars: 4,
    rating: '',
  },
  {
    poster:
      'http://avatars.mds.yandex.net/get-kinopoisk-image/1599028/f1986ce1-138a-43d3-8142-0a69007879f8/600x900',
    name: 'Знакомство с родителями',
    genre: 'Комедии',
    director: 'Джей Роуч',
    desc:
      '«Знакомство с родителями» — кинокомедия режиссёра Джея Роуча, премьера которой состоялась в 2000 году. Главные роли исполнили Роберт Де Ниро и Бен Стиллер. Успех фильма привёл к появлению двух сиквелов и номинации на премию «Оскар» за лучшую песню года.',
    description: {
      href: 'https://www.kinopoisk.ru/film/750/',
      rel: 'noreferrer',
      target: '_blank',
    },

    stars: 3,
    rating: '',
  },
  {
    poster:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQXKskA949YDC85-yvsGsHYgkXOh_og1Lt12vyGa5KthpCXnvti',
    name: 'Гарри Поттер и философский камень',
    genre: 'Фантастика',
    director: 'Крис Коламбус',
    desc:
      'Жизнь десятилетнего Гарри Поттера нельзя назвать сладкой: его родители умерли, едва ему исполнился год, а от дяди и тётки, взявших сироту на воспитание, достаются лишь тычки да подзатыльники.',
    description: {
      href: 'https://www.kinopoisk.ru/film/689/',
      rel: 'noreferrer',
      target: '_blank',
    },

    stars: 2,
    rating: '',
  },
  {
    poster:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ41ZlgwA6rkBYwHUppm35SXG8crkzrF7wkfO0C9Xy7ow-9P111',
    name: 'Хоббит: Нежданное путешествие',
    genre: 'Фантастика',
    director: 'Питер Джексон',
    desc:
      'Фильм повествует о путешествии Бильбо Бэггинса, который пускается в грандиозный поход, целью которого является отвоевание утраченного королевства гномов Эребор у зловещего дракона Смауга.',
    description: {
      href: 'https://www.kinopoisk.ru/film/278522/',
      rel: 'noreferrer',
      target: '_blank',
    },

    stars: 1,
    rating: '',
  },
  {
    poster:
      'http://kinohod.ru/o/81/08/8108bde2-1df7-4630-8b81-be9040b5d096.jpg',
    name: 'Молчание ягнят',
    genre: 'Ужасы',
    director: 'Джонатан Демми',
    desc:
      'Психопат похищает и убивает молодых женщин по всему Среднему Западу Америки. ФБР, уверенное в том, что все преступления совершены одним и тем же человеком, поручает агенту Клариссе Стерлинг встретиться с заключенным-маньяком, который мог бы объяснить следствию психологические мотивы серийного убийцы и тем самым вывести на его след.',
    description: {
      href: 'https://www.kinopoisk.ru/film/345/',
      rel: 'noreferrer',
      target: '_blank',
    },

    stars: 5,
    rating: '',
  },
  {
    poster:
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/9f8e770b-8d50-42d1-b9b4-bbe58759f29f/220x330',
    name: 'Матрица',
    genre: 'Боевики',
    director: 'Лана Вачовски',
    desc:
      'Мир Матрицы — это иллюзия, существующая только в бесконечном сне обреченного человечества. Холодный мир будущего, в котором люди — всего лишь батарейки в компьютерных системах.',
    description: {
      href: 'https://www.kinopoisk.ru/film/301/',
      rel: 'noreferrer',
      target: '_blank',
    },
    stars: 4,
    rating: '',
  },
];

export { films };
