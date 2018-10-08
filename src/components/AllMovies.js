import React, {Component} from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchMovies} from '../actions/postsAction';
import EditMovieModal from './EditMovieModal';
import MovieRating from './MovieRating';
import Moment from 'moment';
import MovieOverViewModal from './MovieOverViewModal';

class AllMovies extends Component {

    componentWillMount() {
        this
            .props
            .fetchMovies();
    }
    componentWillReceiveProps(nextProps) {

        if (nextProps.newMovie) {
            this
                .props
                .movies
                .unshift(nextProps.newMovie);
        }
    }
    formatDate(movieDate) {

        var movieFormatedDate = Moment(movieDate.toString()).format('DD-MM-YYYY');

        return movieFormatedDate;
    }
    render() {

        const movieItems = this
            .props
            .movies
            .map(movieItem => (

                <div key={movieItem.id}>
                    <div className="movie-card-item">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <div className="moviePosterCard">
                                    {movieItem.poster_path
                                        ? (<img alt="" src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}/>)
                                        : (<img alt="" src={`${movieItem.img}`}/>)}
                                </div>
                                <div className="movieInfoCard">
                                    <div className="movie-info-card-wrapper">
                                        <div className="movie-release-date">
                                            <span className="italic-title">Released</span>
                                            <span className="movie-release-date-date">{this.formatDate(movieItem.release_date)}</span>
                                        </div>
                                        <div className="movie-rating">

                                            <span className="italic-title">
                                                {movieItem.vote_count}&nbsp; Fan Ratings</span>
                                            <MovieRating currAverage={movieItem.vote_average}/>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="panel-body">
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <span className="movie-title">{movieItem.title}</span>

                                            <span className="pull-right edit-movie-btn">
                                                <EditMovieModal currMovie={movieItem}/>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="movie-overview">
                                            {movieItem.overview}

                                        </div>
                                        <MovieOverViewModal movieObj={movieItem}/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            ));
        return (
            <div>
                {movieItems}
            </div>
        )
    }
}

AllMovies.propTypes = {
    fetchMovies: propTypes.func.isRequired,
    movies: propTypes.array.isRequired,
    // newPost: propTypes.object
}
const mapStateToProps = state => ({movies: state.movies.items, newMovie: state.movies.item, editedMovie: state.movies.item})
export default connect(mapStateToProps, {fetchMovies})(AllMovies);
