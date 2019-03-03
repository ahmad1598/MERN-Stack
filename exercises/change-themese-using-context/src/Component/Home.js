import React from 'react'
import { withTheme } from '../context/ThemeProvider';

const Home = (props) => {
    return(
        <div className={`home-${props.theme}`}>
           <h1> “ Art  enables  us  to find  ourselves  and lose ourselves  at the same time.”
           <h4>Thomas Merton</h4> </h1>
        </div>
    )
  
}


export default withTheme(Home)