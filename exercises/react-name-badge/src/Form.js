import React from 'react'
import PropTypes from 'prop-types'


const Form = (props) => {
    return(
            <div onSubmit = {props.handleSubmit}> 
            <form>
                <input type = "text" name = "firstName" value={props.state.firstName} onChange={props.handleChange} placeholder="First Name "/>
                <input type = "text" name = "lastName" value={props.state.lastName}  onChange={props.handleChange} placeholder="Last Name "/>
                <input type = "email" name = "email" value={props.state.email} onChange={props.handleChange} placeholder="Email" />
                <input type = "text" name = "placeOfBirth" value={props.state.placeOfBirth} onChange={props.handleChange} placeholder="Place of Birth " />
                <input type = "number" name = "phone" value={props.state.phone} onChange={props.handleChange} placeholder="Phone" />
                <input type = "text" name = "favFood" value={props.state.favFood} onChange={props.handleChange} placeholder="Favorite Food" />
                <textarea type = "text" name = "bio" value={props.state.bio} onChange={props.handleChange} placeholder="Tell us about yourself" id="bio"/>

                <button>Submit</button>
            </form>

            <div>
                {
                    
                    
                    props.state.infoArr.map((item,i) =>{
                        
                        const style = (i % 2 === 0) ? "#d35400" : "#22a7f0"
                    return(
                        // #d35400  #f5ab35
                        <div>
                            <div style={{backgroundColor:style}} className="badge">Badge </div>
                            <div  key={i} className="container">
                            <p>Name: {item.firstName} {item.lastName}</p>
                            <p>Phone: {item.phone}</p>
                            <p>Place of Birth: {item.placeOfBirth}</p>
                            <p>Favorite Food: {item.favFood}</p>
                            <p>Email: {item.email}</p>
                            <textarea readOnly>{item.bio}</textarea>
                            </div>
                        </div>
                        )
                    }
                )
                }
            </div>
        </div>
        
    )
}


Form.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    placeOfBirth: PropTypes.string,
    favFood: PropTypes.string,
    phone:PropTypes.number.isRequired

    

}




export default Form


