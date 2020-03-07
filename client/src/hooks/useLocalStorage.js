import {useState} from 'react';

const useLocalStorage = (key, playerData) => {
    const [value, setValue] = useState(() => {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }else {
            window.localStorage.setItem(key, JSON.stringify(playerData));
            return playerData;
        }
    });

    const setPlayer = player => {
        setValue(player);
        window.localStorage.setItem(key, JSON.stringify(player));
    };

    return [value, setPlayer];
}

export default useLocalStorage;