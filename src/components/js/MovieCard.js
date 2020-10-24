import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../css/MovieCard.css';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';






export class MovieCard extends Component {

    render() {
        const { movie } = this.props;

        return (
            <div className="card" >
                <Link to={'/movie/' + movie.imdbID}> 
                    <div >
                        <Card >
                          <CardActionArea>
                            <CardMedia
                              image={movie.Poster}
                              title={movie.Title}
                              alt={movie.Title}
                              className="media"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                {movie.Title}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Button size="small" color="primary">
                              {movie.Type}
                            </Button>
                            <Button size="small" color="primary">
                              {movie.Year}
                            </Button>
                          </CardActions>
                        </Card></div>
                </Link>  

            </div>
        )
    }
}

export default MovieCard;
