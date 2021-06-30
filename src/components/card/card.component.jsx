import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img className='image' alt="movie" src={'http://image.tmdb.org/t/p/w500/' + props.movies.poster_path} />
        <h3> { props.movies.original_title } </h3>
        <h4> { 'Release Date: ' + props.movies.release_date } </h4>
        <h4> { 'Votings: ' + props.movies.vote_average } </h4>
    </div>
)