import React from 'react'
import usePlayer from './hooks/usePlayers'

const initialValue = {
    name: "",
    country: "",
    searches: "",
    id: ""
}

const Players = () => {
    const [values] = usePlayer(
        "Players",
        initialValue
    )
    return (
        <div>
            {values.name}
            {values.country}
            {values.searches}
            {values.id}
        </div>
    )
}


export default Players;

        // <h3>Player info</h3>
            // {props.players.map(player => {
                // return(
                    // <div key={player.id} className='player'>
                        // <p>Name: {player.name}</p>
                        // <p>Country: {player.country}</p>
                        // <p>Searches: {player.searches}</p>
                        // <p>Id: {player.id}</p>
                    // </div>