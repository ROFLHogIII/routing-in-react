import React from 'react';
import { Link } from 'react-router-dom';



let PeopleCard = (props) => (
    <React.Fragment>
        <div className="col-md-3">
            <div className="card border-dark mb-3">
                <div className="card-header">
                    <p>{props.person.name}</p>
                </div>
                <div className="card-body text-dark">
                    <p className="card-text"> {props.person.age}</p>
                    <p className="card-text"> {props.person.gender}</p>
                    <Link to={`/People/${props.person.id}`} className="btn btn-primary">View in Detail</Link>
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default PeopleCard;