import React, { Component } from 'react'
import '../css/Search.css';

import { searchMovie, fetchMovies ,loadingState} from '../../actions/searchActions';
import { connect } from "react-redux";



export class Search extends Component {
    onChange = e =>{
      this.props.searchMovie(e.target.value);  
    }   
    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.loadingState();}
    

    render() {
        return (
            <div className="slider">
                <h2 className="title">Browse our movies and TV series Database</h2>
                <div className="searchForm">
                    <form  onSubmit={this.onSubmit}>
                        <input
                            className="formSearch"
                            type="text"
                            placeholder="Search Your Desired Movie"
                            onChange={this.onChange}/>
                        <button className="btnSearch" type="submit">SEARCH</button>
                    </form>     
                </div>
            </div>
        );
    };
}


const mapStatesToProps = state => ({
    text:state.movies.text
});

export default connect(mapStatesToProps,{searchMovie,fetchMovies,loadingState})(Search)
