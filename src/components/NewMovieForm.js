import React, {Component} from 'react'
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {addNewMovie} from '../actions/postsAction';
import store from '../store';
class NewMovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            overview: '',
            img: '',
            genre_ids:'',
            isOpenAddNewMovie: true
        }
        this.addNewMovie = this
            .addNewMovie
            .bind(this);
        this.onChange = this
            .onChange
            .bind(this);
        this.onSubmit = this
            .onSubmit
            .bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addNewMovie() {

        if (!this.state.isOpenAddNewMovie) {
            this.setState({isOpenAddNewMovie: true});

        } else {
            this.setState({isOpenAddNewMovie: false});

        }
    }
    onSubmit(e) {
        e.preventDefault();

        const currState = store
            .getState()
            .movies
            .items;

        const newMovie = {
            id: currState.length + 1,
            title: this.state.title,
            overview: this.state.overview,
            img: this.state.img,
            genre_ids: this.state.genre_ids,
        }
        this
            .props
            .addNewMovie(newMovie);
    }
    render() {
        console.log(store
            .getState())
        return (
            <div>

                <div className="panel panel-success">
                    <div className="panel-heading">
                        <span className="pull-left">Add New Movie</span>
                        <button onClick={this.addNewMovie} className="pull-right btn btn-primary">Add New Movie</button>
                    </div>
                    {this.state.isOpenAddNewMovie !== true
                        ? <div className="panel-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                    <label>Title</label>
                                        <br/>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="title"
                                            onChange={this.onChange}
                                            value={this.state.value}/>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label>Image Url</label>
                                        <br/>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="img"
                                            onChange={this.onChange}
                                            value={this.state.img}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Movie Genres</label>
                                        <br/>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="img"
                                            onChange={this.onChange}
                                            value={this.state.genre_ids}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Movie Description</label>
                                        <br/>
                                        <textarea
                                            name="overview"
                                            className="form-control"
                                            onChange={this.onChange}
                                            value={this.state.overview}/>
                                    </div>
                                    <br/>
                                    <div>
                                        <button type="submit" className="btn btn-primary">
                                            submit</button>
                                    </div>
                                </form>
                            </div>
                        : <div></div>
}

                </div>

            </div>

        )
    }
}

NewMovieForm.propTypes = {
    addNewMovie: propTypes.func.isRequired
}
export default connect(null, {addNewMovie})(NewMovieForm);