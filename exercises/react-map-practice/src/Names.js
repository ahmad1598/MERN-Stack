import React from 'react'


const Names = (props) => {
   return(
       <div>
           
           <h1>{props.name}</h1>
           {/* {props.name.map(name => <h2 >{name}</h2>)} */}
           
       </div>
   )
}

export default Names