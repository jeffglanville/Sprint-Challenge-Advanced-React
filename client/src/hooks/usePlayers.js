import useLocalStorage from '../hooks/useLocalStorage';

const usePlayers = (key, playerData) => {
    const [values, setValues] = useLocalStorage([key], playerData);

    const playerValue = e => {
        setValues({
            ...values,
        })
    }
    return [playerValue];
}


export default usePlayers;