$(document).ready(function () {
  $("#showMovies").click(function () {
    $('#movies').show(4000); 
  });
});

const showTitle = (title) => {
  document.getElementById('titleMovie').innerHTML = title;
};
getData().then((movies) => {
  movies.forEach(element => showMovie(element));
});
