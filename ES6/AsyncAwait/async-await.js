// Promise 사용
const getMoviesPromise = () => {
  fetch("https://yts.mx/api/v2/list_movies.json")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((json) => console.log(json))
    .catch((e) => console.log(`❌ ${e}`));
};

// async await
const getMoviesAsync = async () => {
  try {
    const [moviesRes, upcomingRes] = await Promise.all([
      fetch("https://yts.mx/api/v2/list_movies.json"),
      fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=100"),
    ]);
    const [movies, upcoming] = await Promise.all([
      moviesRes.json(),
      upcomingRes.json(),
    ]);

    console.log(movies, upcoming);
  } catch (err) {
    console.log(err);
  }
};

getMoviesAsync();
