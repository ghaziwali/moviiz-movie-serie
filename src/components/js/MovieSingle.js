import React, { Component } from 'react'
import '../css/MovieSingle.css'
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



import { connect } from "react-redux";
import { fetchMovie ,loadingState} from "../../actions/searchActions";
import Spinner from './Spinner';
import {Link} from 'react-router-dom';




export class MovieSingle extends Component {

    componentDidMount(){
        this.props.fetchMovie(this.props.match.params.id);
        this.props.loadingState();
    }

    render() {



        const {loading, movie} = this.props;
        let movieInfo = (
                        <React.Fragment>
                            <h1>{movie.Title}</h1>
                            <Container maxWidth="s">
                            <Grid container spacing={3}>

                                <Grid item xm={3}>
                                    <img src={movie.Poster} alt={movie.Title}/>
                                </Grid>
                                <Grid item xm={6}>
                                    <List component="nav"  aria-label="mailbox folders">
                                          <ListItem divider>
                                            <ListItemText primary="Genre" secondary={movie.Genre} />
                                          </ListItem>
                                          <ListItem divider>
                                            <ListItemText primary="Release Year" secondary={movie.Released} />
                                          </ListItem>
                                          <ListItem divider>
                                            <ListItemText primary="Directed by:" secondary={movie.Director} />
                                          </ListItem>
                                          <ListItem divider>
                                            <ListItemText primary="Writed by:" secondary={movie.Writer} />
                                          </ListItem>
                                          <ListItem divider>
                                            <ListItemText primary="Actors:" secondary={movie.Actors} />
                                          </ListItem>
                                          <ListItem divider>
                                            <ListItemText primary="IMDB rating" secondary={movie.imdbRating} />
                                          </ListItem>
                                    </List>
                                </Grid>


                            </Grid>
                            <h5>Description:</h5>{movie.Plot}<hr/>
                            <div className="btns">

                            <Button   variant="contained" color="secondary">
                                <Link to="/" >
                                    Back To Search
                                </Link>
                            </Button>
                            <Button className="btnMovieSingle" variant="contained" color="primary">
                              <a
                                href={'https://www.imdb.com/title/' + movie.imdbID}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Check on IMDB
                              </a>
                            </Button>
                          </div>
                        </Container>

                        </React.Fragment>
                        )
        let content = loading? <Spinner/> : movieInfo;

        return (
            <div>{content}</div>
        );
    }
} 

const mapStateToProps = state =>({
    loading: state.movies.loading,
    movie: state.movies.movie
});

export default  connect(
        mapStateToProps,
        {fetchMovie,loadingState}) 
        (MovieSingle);
