import React from 'react'
import Cards from './Cards.js'
import './style.css'

const App = () => {

    let vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter"

        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall"

        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring"
        }
      ]

      const vacationSpotsMap = vacationSpots.map((item,i) => 
                                <Cards 
                                    place = {item.place} 
                                    price = {item.price} 
                                    timeToGo = {item.timeToGo} 
                                    color ={item.backgroundColor} key ={i} />)
return (
    <div>
        {vacationSpotsMap}
    </div>
)
}

export default App