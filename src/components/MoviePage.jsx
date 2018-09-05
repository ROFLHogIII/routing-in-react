import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import MovieCard from "./MovieCard"


const filmAPI = "https://ghibliapi.herokuapp.com/films/"

class MoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        fetch(filmAPI)
            .then(res => res.json())
            .then(ob => this.setState({ movies: ob }))
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    {this.state.movies.map((movie, index) =>
                        <MovieCard key={index} movie={movie} />
                    )}
                </div>
            </React.Fragment>
        )
    }
};
export default MoviePage;