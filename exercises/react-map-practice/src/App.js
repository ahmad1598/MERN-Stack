import React from 'react'
// import Names from './Names.js'
import Person from './Person.js'

const App = () =>{
    // const names = ['Steve','Koren','Kerry','Johnson','Bred']
    // const color = ['green','red','blue','gray','pink']
    
    // const namesMap = names.map((name,i) => <Names name ={name} key ={i} />)
    // const colorMap = color.map((color,i) => <Names color ={color} />)
    
    const people = [
        {
            name:"Rick",
            age: 70,
            favColor: "red",
            friends: ["Morty","Birdman"]
        },
        {
            name:"Morty",
            age: 13,
            favColor: "yellow",
            friends: ["Rick","Jerry","Birdman"]
        },
        {
            name:"Jerry",
            age: 20,
            favColor: "purple",
            friends: ["Morty"]
        },
        {
            name:"Birdman",
            age: 13,
            favColor: "blue",
            friends: ["Rick","Morty"]
        }
    ]
    
    const personMap = people.map((character,i) => 
                     <Person 
                        people={character.name} 
                        age={character.age} 
                        friends = {character.friends}
                        favColor={character.favColor}
                        key ={i} />)
                        // instead of all the props that we are passing to the Person component. we can use {...character}
                        // and it will grab all the properties in the character and pass them into Person component
    return(
        <div>
            {/* {namesMap} */}
            {/* {colorMap} */}
            {personMap}
        </div>
    )
}



export default App