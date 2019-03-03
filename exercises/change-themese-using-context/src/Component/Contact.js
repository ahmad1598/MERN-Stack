import React from 'react'
import {withTheme} from '../context/ThemeProvider'
const Contact = (props) => {
    return (
        <div className={`contact-${props.theme}`}>
            <p></p>
            <h4>​Email: ahmad.raman83@yahoo.com</h4>
            <h4>Linkedin: ahmad-rasoulpour</h4>
            <h4>Github: ahmad1598</h4>
        </div>
    )
}

export default withTheme(Contact)