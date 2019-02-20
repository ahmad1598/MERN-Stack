import React from 'react'
import Box from './Box'
import './styles.css'
function App(){
    const titleObj1 = {
        backgroundColor: "#52b3d9",
        title:"The 400 Blows ",
        Subtitle: "1959" ,
        Information: "A young boy, left without attention, delves into a life of petty crime." 
    }
    const titleObj2 = {
        backgroundColor: "#336e7b",
        title:"La Haine ",
        Subtitle: "1995" ,
        Information: "24 hours in the lives of three young men in the French suburbs the day after a violent riot." 
    }
    const titleObj3 = {
        backgroundColor: "#34495e",
        title:"The Godfather  ",
        Subtitle: "1972" ,
        Information: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son." 
    }
    const titleObj4 = {
        backgroundColor: "#22a7f0",
        title:"The Godfather: Part II  ",
        Subtitle: "1974" ,
        Information: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate." 
    }
    const titleObj5 = {
        backgroundColor: "#6bb9f0",
        title:" Man Bites Dog  ",
        Subtitle: "1992" ,
        Information: "A film crew follows a ruthless thief and heartless killer as he goes about his daily routine. But complications set in when the film crew lose their objectivity and begin lending a hand." 
    }
    const titleObj6 = {
        backgroundColor: "#1f3a93",
        title:"The Departed   ",
        Subtitle: "2006" ,
        Information: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston." 
    }
    const titleObj7 = {
        backgroundColor: "#446cb3",
        title:"Umberto D.   ",
        Subtitle: "1952" ,
        Information: "An elderly man and his dog struggle to survive on his government pension in Rome." 
    }
    const titleObj8 = {
        backgroundColor: "#4b77be",
        title:"White Heat   ",
        Subtitle: "1949" ,
        Information: "A psychopathic criminal with a mother complex makes a daring break from prison and leads his old gang in a chemical plant payroll heist. Shortly after the plan takes place, events take a crazy turn." 
    }
    const titleObj9 = {
        backgroundColor: "#5c97bf",
        title:"Eddie Murphy: Raw    ",
        Subtitle: "1987" ,
        Information: "Eddie Murphy in a stand-up performance recorded live. For an hour and a half he talks about his favourite subjects: sex and women." 
    }
    const titleObj10 = {
        backgroundColor: "#00b5cc",
        title:"All Quiet on the Western Front  ",
        Subtitle: "1930" ,
        Information: "A young soldier faces profound disillusionment in the soul-destroying horror of World War I." 
    }
    return(
        <div>
            <Box style = {titleObj1.backgroundColor} title = {"This is my title"} subtitle = {titleObj1.Subtitle} information = {titleObj1.Information} />
            <Box style = {titleObj2.backgroundColor} title = {titleObj2.title} subtitle = {titleObj2.Subtitle} information = {titleObj2.Information} />
            <Box style = {titleObj3.backgroundColor} title = {titleObj3.title} subtitle = {titleObj3.Subtitle} information = {titleObj3.Information} />
            <Box style = {titleObj4.backgroundColor} title = {titleObj4.title} subtitle = {titleObj4.Subtitle} information = {titleObj4.Information} />
            <Box style = {titleObj5.backgroundColor} title = {titleObj5.title} subtitle = {titleObj5.Subtitle} information = {titleObj5.Information} />
            <Box style = {titleObj6.backgroundColor} title = {titleObj6.title} subtitle = {titleObj6.Subtitle} information = {titleObj6.Information} />
            <Box style = {titleObj7.backgroundColor} title = {titleObj7.title} subtitle = {titleObj7.Subtitle} information = {titleObj7.Information} />
            <Box style = {titleObj8.backgroundColor} title = {titleObj8.title} subtitle = {titleObj8.Subtitle} information = {titleObj8.Information} />
            <Box style = {titleObj9.backgroundColor} title = {titleObj9.title} subtitle = {titleObj9.Subtitle} information = {titleObj9.Information} />
            <Box style = {titleObj10.backgroundColor} title = {titleObj10.title} subtitle = {titleObj10.Subtitle} information = {titleObj10.Information} />
        </div>
    )
}

export default App