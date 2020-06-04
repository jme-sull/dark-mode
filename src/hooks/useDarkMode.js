import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react'



export const useDarkMode = (key) => {

    const [ darkMode, setDarkMode ] = useLocalStorage(key)

    useEffect(() => {
        useLocalStorage ? document.querySelector('body').classList.add('dark-mode') 
        : document.querySelector('body').classList.remove('dark-mode')
    }, [darkMode])


    return [ darkMode, setDarkMode ]

}