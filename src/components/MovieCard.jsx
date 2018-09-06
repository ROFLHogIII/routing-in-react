import React from 'react';
import { Link } from 'react-router-dom';

let MovieCard = (props) => (
    <React.Fragment>
        <div className="col-md-3">
            <div className="card border-dark mb-3">
                <div className="card-header">
                    <p>{props.movie.title}</p>
                </div>
                <div className="card-body text-dark">
                    <p className="card-text"> {props.movie.description}</p>
                    <Link to={`/Movies/${props.movie.id}`} className="btn btn-primary">View in Detail</Link>
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default MovieCard;