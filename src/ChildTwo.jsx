import React, { useContext } from 'react';
import { ThemeContext } from './App';
import { Button } from 'react-bootstrap';

export const ChildTwo = () => {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext)
    return(
        <>
            <h1 className={darkTheme ? 'bg-dark text-white' : 'bg=white text-dark'}>I Am the Grandchild</h1>
            <Button onClick={() => setDarkTheme(!darkTheme) }>Change Theme</Button>
        </>
    )
}