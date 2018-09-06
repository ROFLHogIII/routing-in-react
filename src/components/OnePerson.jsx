import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';


const filmAPI = "https://ghibliapi.herokuapp.com/people/"

class OnePerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [],
            film: [],
            species: [],
        }
    }

    async componentDidMount() {
        try { //try this block of async code
            let result1 = await fetch(filmAPI + this.props.match.params.id);
            let obj1 = await result1.json();
            await this.setState({ person: obj1 });
            console.log(this.state.person);
            let result2 = await fetch(this.state.person.films[0])
            let obj2 = await result2.json();
            await this.setState({ film: obj2 });
            console.log(this.state.film.title);
            let result3 = await fetch(this.state.person.species)
            let obj3 = await result3.json();
            await this.setState({ species: obj3 });
            console.log(this.state.species.name);
            
        } catch (error) { //catch block for errors
            console.log(`You done messed up!! ${error}`);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-center">
                    <div className="col-md-3">
                        <div className="card border-dark mb-3">
                            <div className="card-header">
                                <h1>{this.state.person.name}</h1>
                            </div>
                            <div className="card-body text-dark">
                                <p className="card-text">Gender: {this.state.person.gender}</p>
                                <p className="card-text">Age: {this.state.person.age}</p>
                                <p className="card-text">Hair color: {this.state.person.hair_color}</p>
                                <p className="card-text">Eye Color: {this.state.person.eye_color}</p>
                                <p className="card-text">Species: {this.state.species.name}</p>
                                <p className="card-text">From the Film "{this.state.film.title}"</p>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
};
export default OnePerson;