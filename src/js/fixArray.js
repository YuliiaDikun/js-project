import FilmApi from './movieAPI';
const SESSION_KEY = 'genresList';
const FAV_KEY = 'favouriteMovies';

const filmGenre = new FilmApi();

export default async function fixArray(array) {
  try {
    const { genres } = await filmGenre.getGenres();
    localStorage.setItem(SESSION_KEY, JSON.stringify(genres));
    localStorage.setItem(FAV_KEY, JSON.stringify({}));
    const genresListSaved = localStorage.getItem(SESSION_KEY);
    const parsedGenresList = JSON.parse(genresListSaved);
    if (parsedGenresList) {
      return array.map(film => {
        if (!film.poster_path) {
          film.poster_path =
            'https://www.drupal.org/files/project-images/broken-image.jpg';
        } else {
          film.poster_path = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
        }
        if (film.release_date) {
          const date = film.release_date;
          const year = date.slice(0, 4);
          film.release_date = year;
        } else {
          film.release_date = 'Not found';
        }
        if (film.genre_ids.length) {
          const validGenres = film.genre_ids.map(
            id => parsedGenresList.find(({ id: filmId }) => id === filmId).name
          );
          const genres =
            validGenres.length > 2
              ? `${validGenres[0]}, ${validGenres[1]}, Other`
              : `${validGenres.join(', ')}`;
          film.genre_ids = genres;
        } else {
          film.genre_ids = 'Not found';
        }
        return film;
      });
    }
  } catch (error) {
    console.log(error);
  }
}
