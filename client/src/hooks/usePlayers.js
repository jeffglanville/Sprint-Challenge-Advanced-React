import useLocalStorage from '../hooks/useLocalStorage';

const usePlayers = (key, playersData) => {
    const [values, setValues] = useLocalStorage([key], playersData);

    const playerValue = e => {
        setValues({
            ...values,
        })
    }
    return [playerValue];
}

export default usePlayers;