import React from 'react';

let MovieCard = (props) => (
    <React.Fragment>
        <div className="col-md-3">
            <div className="card border-dark mb-3">
                <div className="card-header">
                    <p>{props.movie.title}</p>
                </div>
                <div className="card-body text-dark">
                    <p className="card-text"> {props.movie.description}</p>
                    <a href={props.person.url} className="btn btn-primary">View in Detail</a>
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default MovieCard;