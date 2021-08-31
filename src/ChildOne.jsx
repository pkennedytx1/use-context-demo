import React from 'react';
import { ChildTwo } from './ChildTwo';

export const ChildOne = ({ darkTheme, setDarkTheme }) => {
    return(
        <ChildTwo darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
    )
}
