import movieTemplate from '../templates/movie-card.hbs';

// ========== функция отрисовки вкладки WATCHED ==========
export default function watchedMovies(arrFromLocalStorage) {
  // контейнер для фильмов из Watched
  const watchedGalleryList = document.querySelector('.watched-gallery');

  // выводим сообщение, если в библиотеке нет фильмов
  if (!arrFromLocalStorage.length) {
    watchedGalleryList.innerHTML = `<div style="display: block; width: 100%; min-height: 50px;">Список просмотренных фильмов пуст...</div>`;
    return;
  }
  // если есть фильмы, создаём и рендерим разметку
  const ArrayForRendering = arrFromLocalStorage.map(el => Object.values(el));
  const watchedMarkup = ArrayForRendering.flat()
    .map(el => movieTemplate(el))
    .join('');
  watchedGalleryList.innerHTML = watchedMarkup;
}
