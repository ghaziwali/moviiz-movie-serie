import React, { Component } from 'react'
import '../css/MoviesList.css'

import {connect} from 'react-redux';

import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid'; 

export class MoviesList extends Component {

    
    render() {
        const {movies} = this.props;
        let content = '';

        content = movies.Response === 'True'
        ? movies.Search.map((movie, index) => (
                            
                                <Grid item xs={12} sm={4}><MovieCard key={index} movie={movie} /></Grid>
          ))
        : null;
        return (
            <div className="grid">
                  <Grid container spacing={2} >
                      {content}
                 </Grid>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    movies:state.movies.movies
})

export default connect(mapStateToProps) (MoviesList)
