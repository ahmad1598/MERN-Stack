import React from 'react'
import { withTheme } from '../context/ThemeProvider';
const Services = (props) => {
    return(
        <div className={`service-${props.theme}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default withTheme(Services)