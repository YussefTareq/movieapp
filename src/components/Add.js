import React, {useEffect, useState} from 'react'
import axios from "axios"
import "../components/Add.css"
import ResultCard from './ResultCard';
const Add = () => {
    const [searchValue, setSearchValue] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=da5df37f`).then((res) => {
            if (res.data.Search) {
                console.log(res.data);
                setMovies(res.data.Search)
            }
        }).catch((error) => console.error(error))
    }, [searchValue])
    return (
        <div className='add-page'>
            <div className='container'>
                <div className='add-content'>
                    <div className='input-container'>
                        <input type="text" placeholder='Search For A Move'
                            value={searchValue}
                            onChange={
                                (e) => setSearchValue(e.target.value)
                            }/>
                    </div>
                    {
                    movies.length > 0 && <ul className='results'>
                        {
                        movies.map((movie) => (
                            <li key={movie.imdbID}> 
                            <ResultCard movie={movie}/></li>
                        ))
                    } </ul>
                } </div>
            </div>
        </div>
    )
}

export default Add
