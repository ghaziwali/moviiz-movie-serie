import React, { Component } from 'react';
import Search from './Search';
import Spinner from './Spinner';
import MoviesList from './MoviesList';

import {connect} from 'react-redux';



export class Home extends Component {
    render() {
        const {loading} = this.props;
        return (
            <div className="container">
                <Search/>
                {loading ? <Spinner /> : <MoviesList />}
               
            </div>
        );
    }
}

const mapStateToProps= state =>({
    loading:state.movies.loading
});

export default connect(mapStateToProps) (Home)
