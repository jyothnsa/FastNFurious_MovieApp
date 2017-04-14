var express = require('express');

var app = express();

app.set('view engine','ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.home);

//movies

app.get('/movies/:movie_number?', routes.moviesEach);

app.get('*', routes.notFound);

app.listen(process.env.PORT || 8000);
