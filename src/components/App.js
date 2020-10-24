import React, { Component } from 'react';
import './css/App.css';
import Header from './js/Header';
import FooterComponent from './js/FooterComponent';
import Home from './js/Home';
import MovieSingle  from './js/MovieSingle';

import store from '../store';
import {Provider} from 'react-redux';


import { HashRouter as Router, Route } from "react-router-dom";


class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <Router>
                    <div className="app">
                        <Header/>
                        <div className="content">
                            <Route exact path="/" component={Home} />
                            <Route exact path="/movie/:id" component={MovieSingle} />
                        </div>
                        <FooterComponent />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
