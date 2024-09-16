import axios from "axios"
import { useEffect, useState } from "react"
import{Link} from 'react-router-dom'

function Games(){
    const [games, setGames]= useState([]);

    useEffect(()=>{
        fetch('games.json').then((response)=>{
            return response.json()      
        }).then((data)=>{
            setGames(data)

        })
    }, [])

    return(
        <div>
            {games.map(
                (game, index)=>(
                <div key={index}>   
                   <Link to={'/games/'+ (index + 1)}>{game.name}</Link>
                    
                </div>)
            )}
        </div>
    )
}
export default Games;