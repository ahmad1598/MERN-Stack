import React from 'react'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            favMovie: "",
            favActor:"",
            isRotten: false,
            gender: "",
            favCity:"",
            actorCollection:[]
        }
    }

    handleChange = (e) => {
        const target = e.target
        const value = target.type === "checkbox" 
                                            ? target.checked : target.value

        
        
        this.setState({
            [e.target.name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const actorObj = {
            favMovie: this.state.favMovie ,
            favActor: this.state.favActor,
            isRotten: this.state.isRotten,
            gender: this.state.gender,
            favCity: this.setState.favCity,
        }

        this.setState(prevState => {
            return{
                actorCollection: [...prevState.actorObj, actorObj],
                favMovie:"",
                favActor:"",
                isRotten:"",
                gender:"",
                favCity:""
            }
        })
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input 
                        type="type" 
                        name="favMovie" 
                        value={this.state.favMovie} 
                        onChange = {this.handleChange}
                        />
                    <br/>
                    <input 
                        type="type" 
                        name="favActor" 
                        value={this.state.favActor}
                        onChange = {this.handleChange}
                        /> <br/>
                    Is it Rotten?
                    <input 
                        type="checkbox"
                        checked = {this.state.isRotten}
                        name = "isRotten"
                        onChange={this.handleChange}
                        />
                    <br/>

                    Male 
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange = {this.handleChange}
                        checked
                        />
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange = {this.handleChange}
                        />
                    Other
                    <input
                        type="radio"
                        name="gender"
                        value="Other"
                        onChange = {this.handleChange}

                        />
                    <br/>
                    <select name="favCity" onChange={this.handleChange}>
                        <option>Choose Your Fav City</option>
                        <option value="Paris">Paris</option>
                        <option value="Amsterdam">Amsterdam</option>
                        <option value="Cape town">Cape town</option>
                        <option value="Reykajavik">Reykajavik</option>
                    </select>
                    <br/>
                    <button>Submit</button>
                </form>

                <div>
                    {this.state.actorCollection.map((item,i) => {
                        return(
                            <div>
                                <h1>{item.favMovie}</h1>
                                <h1>{item.favActor}</h1>
                                <h1>{item.isRotten.toString()}</h1>
                                <h1>{item.favCity}</h1>
                                <h1>{item.gender}</h1>
                            </div>

                        )
                    })}
                </div>
            </div>
        )
    }
}



export default App