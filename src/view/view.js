const showMovie = (movie) => {
  const render = 
    `
    <div class="accordion mb-2 class="zoomInDown" onclick="showTitle('${movie.Title}')">
        <div class="bg-white border header-movie p-2" id="h${movie.imdbID}">
            <a class="cursor-pointer" data-toggle="collapse" data-target="#${movie.imdbID}"  aria-controls="${movie.imdbID}">
            <div class="row">
                <div class="col-2 pr-0">
                <img src="${movie.Poster}" class="rounded-circle ">
                </div>
                <div class="col-10">
                <h4>${movie.Title}</h4>
                </div> 
            </div>
              </a>    
         </div> 
    </div>
    <div id="${movie.imdbID}" class="collapse mb-2" aria-labelledby="h${movie.imdbID}">
       <div class="info" class="collapse">
        <div class="row mr-0 ml-0 bg-white">
        <div class="col-4 pr-0 pl-0">
            <img src="${movie.Poster}" class="img-fluid ">
        </div>
        <div class="col-8 pt-2  pr-0 ">
            <h3>${movie.Title}</h3>
            <p><strong>Language:</strong> ${movie.Language}</p>
            <p><strong>Year: </strong>${movie.Year}</p>
            <p><strong>Director:</strong> ${movie.Director}</p>
            <p><strong>Duration: ${movie.Runtime}</strong></p>
        </div>
        </div>
    <div>    
    </div>    
    `;
  const moviesContainer = document.getElementById('movies');
  moviesContainer.innerHTML += render;
};