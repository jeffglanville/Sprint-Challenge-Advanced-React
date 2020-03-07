import React from 'react';
import './hooks/usePlayers';
import './Players.css';


const Players = (props) => {

    return (
            <div>
                <div className='player-wrapper'>

                {props.players.map(player => {
                    return (
                        <div key={player.id} className='player'>
                            <p>Name: {player.name}</p>
                            <p>Country: {player.country}</p>
                            <p>Searches: {player.searches}</p>
                        </div>
                    )
                })}
                </div>
            </div>
        )
}


export default Players;