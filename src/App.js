import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import MoviePage from './components/MoviePage'
import PeoplePage from './components/PeoplePage'
import logo from "./assets/logo.png"

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/Home"><button>Go Home</button></Link>
                    <Link to="/Movies"><button>Go to Movies</button></Link>
                    <Link to="/People"><button>Go to People</button></Link>
                    <div className="row">
                        <div className="col-md-12">
                            <img className="rounded mx-auto d-block" src={logo} alt="Ghibli Logo" />
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/Home" />
                        <Route exact path="/Movies" component={MoviePage} />
                        <Route exact path="/People" component={PeoplePage} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App