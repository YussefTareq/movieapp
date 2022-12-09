import React from 'react'
import {useMovieContext} from './context/GlobalContext';
import "./ResultCard.css"
import * as actions from "./context/ActionTypes"
const ResultCard = ({movie}) => {
    const MovieContext = useMovieContext();
    const storedMovie = MovieContext.watchlist.find((o) => o.imdbID === movie.imdbID);
    const storedMovieWatched = MovieContext.watched.find((o) => o.imdbID === movie.imdbID);
    const WatchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;
    const watchedDisabled = storedMovieWatched ? true : false;
    return (
        <div className='result-card'>
            <div className='poster-wrapper'>
                {
                movie.Poster ? (
                    <img src={
                            movie.Poster
                        }
                        alt=''/>
                ) : (
                    <div className='filter-poster'></div>
                )
            } </div>
            <div className='info'>
                <div className='heading'>
                    <h3 className='title'>
                        {
                        movie.Title
                    }</h3>
                    {
                    movie.Year ? (
                        <h4 className='release-date'>
                            {
                            movie.Year
                        }</h4>
                    ) : (
                        <div>-</div>
                    )
                }
                    <div className='controls'>
                        <button onClick={
                                () => MovieContext.MoviesDispatch({type: actions.ADD_MOVIE_TO_WATCHLIST, payload: movie})
                            }
                            className='btn'
                            disabled={WatchlistDisabled}>add to watchedlist</button>
                        <button onClick={
                                () => MovieContext.MoviesDispatch({type: actions.ADD_MOVIE_TO_WATCHED, payload: movie})
                            }
                            className='btn'
                            disabled={watchedDisabled}>add to watched</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ResultCard
