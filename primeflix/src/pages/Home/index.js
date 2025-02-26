import {useEffect, useState} from 'react'
import api from '../../services/api'

// https://api.themoviedb.org/3/movie/now_playing?api_key=d9fd0086812f610837729c617ee89806&lenguage=pt-BR


function Home(){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        async function loadFilmes(){
            const responde = await api.get("movie/now_playing", {
                params:{
                    api_key: "d9fd0086812f610837729c617ee89806",
                    lenguage: "pt-BR",
                    page: 1,
                }
            });

            console.log(responde.data.results);
        }

        loadFilmes();
    }, [])


    return(
        <div>
            <h1> BEM VINDO A HOME</h1>
        </div>
    )
}

export default Home;