var moviesJSON = require('../movies.json');


//home
exports.home = function(req,res){

  var movies = moviesJSON.movies;

  res.render('home', {
    title: "Fast & Furious Movies",
    movies: movies
  });
};

//all_movies
exports.moviesEach = function(req,res){
  var movie_number = req.params.movie_number;
  var movies = moviesJSON.movies;

    if(movie_number >= 1 && movie_number <= 8){

      var series = movies[movie_number - 1];

      var title = series.title;

      var main_characters = series.main_characters;

      res.render('movie_each', {
        movies : movies,
        title : title,
        series:series,
        main_characters:main_characters
      });
    } else {
      res.render('notFound', {
        movies:movies,
        title:"Oopps!!! Something went wrong GO HOME!!!!"
      })
    }
};

exports.notFound = function(req,res){
  var movies = moviesJSON.movies;
  res.render('notFound', {
    movies: movies,
    title:"Oopps!!! Something went wrong GO HOME!!!!"
  });
};
