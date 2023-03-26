import { actions } from "./actions";
import { InitialStateType, rootReducer } from "./reducers"

let state: InitialStateType;

beforeEach(() => {
    state  = {
        films: [{
            poster:
              "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/f283a934-88b0-4d04-8bf6-229979d613ea/220x330",
            name: "Человек паук",
            genre: "Фантастика",
            director: "Сэм Рэйми",
            desc: "«Человек-паук 3: Враг в отражении» — третий и заключительный супергеройский фильм в трилогии Сэма Рэйми, основанной на комиксах о приключениях супергероя Человека-паука.",
            description: "https://www.kinopoisk.ru/film/82441/",
            stars: 5,
            rating: "",
          },
          {
            poster: "https://www.kino-teatr.ru/movie/posters/big/6/22276.jpg",
            name: "Властелин колец",
            genre: "Фантастика",
            director: "Питер Джексон",
            desc: "Кинотрилогия «Властели́н коле́ц» — снятая режиссёром Питером Джексоном серия из трёх связанных единым сюжетом кинофильмов, представляющая собой экранизацию романа Дж. Р. Р. Толкина «Властелин колец».",
            description: "https://www.kinopoisk.ru/film/328/",
            stars: 4,
            rating: "",
          },
          {
            poster: "https://cinemaseats.net/movies/wrong-turn/poster",
            name: "Поворот не туда: Наследие",
            genre: "Ужасы",
            director: "Майк П. Нельсон",
            desc: "Компания друзей приезжает в Харперс-Ферри, чтобы отправиться в поход по Аппалачской тропе. В этих краях они сталкиваются с сообществом людей, которые жили в горах еще до Гражданской войны. И которые очень не любят незнакомцев.",
            description: "https://www.kinopoisk.ru/film/1200179/",
            stars: 3,
            rating: "",
          },],
        radioSelect: 'all',
        searchText: '',
    }
})

test('radio', () => {
    const newState = rootReducer(state, actions.changeRadioSelect('horror'));

    expect(newState.radioSelect).toBe('horror')
})