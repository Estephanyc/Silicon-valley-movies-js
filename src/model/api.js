const getData= () => {
  return new Promise((resolve, reject) => {
    fetch('https://www.omdbapi.com/?apikey=9a385ed4&s=code&type=movie')
      .then((resp) => resp.json())
      .then((movies)=>{
        let list = [];
        movies.Search.forEach(element => {
          list.push(getIndividualData(element.imdbID).then(movie => movie))
        });
        Promise.all(list).then(values => resolve(values));
      })
      .catch(err => reject('sorry'));
  });
};
getIndividualData = (id) => {
  return fetch(`https://www.omdbapi.com/?apikey=9a385ed4&i=${id}`)
    .then((resp) => resp.json())
    .catch(err => alert('sorry'));
};
