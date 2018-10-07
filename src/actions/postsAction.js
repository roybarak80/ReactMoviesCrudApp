import { FETCH_MOVIES, UPDATE_MOVIE, NEW_MOVIE} from './types';


export function fetchMovies() {
//     var movieGenresArr =''
//     var moviesFromApi =  fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=82e0e5a56b04994581c0700e5d61a2e5')
// .then(res => res.json()).then(data => data);

var moviesArr = '';
fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=82e0e5a56b04994581c0700e5' +
'd61a2e5')
.then((response) => response.json())
.then((json) => moviesArr = json);

var movieGenresArr = '';
fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=82e0e5a56b04994581c0700e5d61a2e5")
.then((response) => response.json())
.then((json) => movieGenresArr = json);

    var movieWithGenres = moviesArr.map
    return function (dispatch) {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=82e0e5a56b04994581c0700e5' +
                    'd61a2e5')
            .then(res => res.json())
            .then(movies => dispatch({type: FETCH_MOVIES, payload: movies['results']}));
    }
};


export function addNewMovie(postData) {
   
    return function (dispatch) {
        dispatch({type: NEW_MOVIE, payload: postData});
    }

};


export function updateMovie(postData) {

    return function (dispatch) {
        dispatch({type: UPDATE_MOVIE, payload: postData});
    }
};
