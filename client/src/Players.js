import React from 'react'

const Players = props => {
    return (
        <div>
            <h3>Player info</h3>
            {props.players.map(player => {
                return(
                    <div key={player.id} className='player'>
                        <p>Name: {player.name}</p>
                        <p>Country: {player.country}</p>
                        <p>Searches: {player.searches}</p>
                        <p>Id: {player.id}</p>
                    </div>
                )
            })}
        </div>
    )
}


export default Players;