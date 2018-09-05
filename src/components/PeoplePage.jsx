import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import PeopleCard from "./PeopleCard"

const peopleAPI = "https://ghibliapi.herokuapp.com/people"

class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
        }
    }
    componentDidMount() {
        fetch(peopleAPI)
            .then(res => res.json())
            .then(ob => this.setState({ people: ob }))
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    {this.state.people.map((person, index) =>
                        <PeopleCard key={index} person={person} />
                    )}
                </div>
            </React.Fragment>
        )
    }
};
export default PeoplePage;