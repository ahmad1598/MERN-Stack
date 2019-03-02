import React from 'react'
// export default class Card extends React.Component {
//     constructor(){
//         super()
//         this.state ={
//             starred:false
//         }
//     }

//     toggleStar = () => {
//         this.setState ({
//             starred: !this.state.starred
//         })
//     }

//     render(){
//         const {starred} = this.state
//         return(
//             <div>
//                 <h3>My sweet Repo</h3>
//                 <p>My sweet description</p>
//                 <button onClick={this.toggleStar}>{starred ? "Unstar" : "Star"}</button>
//             </div>
//         )
//     }
// }


import {withToggler} from './Toggler.js'
function Card ({on,toggle}){
    return(
        <div>
            <h3>My sweet Repo</h3>
            <p>My sweet description</p>
            <button onClick={toggle}>{on ? "Unstar" : "Star"}</button>
        </div>
    )
}

export default withToggler(Card)