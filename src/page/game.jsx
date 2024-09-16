import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'

function Game(){
    const {id} = useParams();
    const [game, setGame]= useState({});
    
    useEffect(()=>{
        fetch('../games.json').then((response)=>{
            return response.json()      
        }).then((data)=>{
            const g = data[id-1]
            setGame(g)
            

        })
    }, [])
    return(
        <div>
            This is game - {game.name}
        </div>
    )
}
export default Game;