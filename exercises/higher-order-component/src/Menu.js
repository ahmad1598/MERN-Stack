import React from 'react'

// class Menu extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             show:true
//         }
//     }
//     toggleShow = () => {
        
//         this.setState({
//             show: !this.state.show
//         })
//     }

//     render(){
//         const {show} = this.state;
//         return(
//             <div>
//                 <button onClick={this.toggleShow}>Menu</button>
//                 <nav className={show ? "show" : "hide"}>
//                     <h6>Signed in as Code123</h6>
//                     <a>Your Profile</a>
//                     <a>Your Repositories</a>
//                     <a>Your Stars</a>
//                     <a>Your Gists</a>
//                 </nav>
//             </div>
//         )
//     }
// }

import {withToggler} from './Toggler.js'

function Menu({on,toggle}){
    return(
        <div>
            <button onClick={toggle}>Menu</button>
            <nav className={on ? "show" : "hide"}>
                <h6>Signed in as Code123</h6>
                <a>Your Profile</a>
                <a>Your Repositories</a>
                <a>Your Stars</a>                
                <a>Your Gists</a>
            </nav>
        </div>
    )
}

export default withToggler(Menu)