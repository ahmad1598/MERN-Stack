import React from 'react'

const AddBounty = (props) => {
    const {handleSubmit,handleChange,firstName,lastName,isLiving,bountyAmount,type,btnText} = props
    return (
        <div className={`container ${!props.editToggle ? "addContainer" : "editContainer"}  hoverable `}>
            <div className="row">
                <form className="col s12 " onSubmit={handleSubmit}>
                   
                    <div className="input-field col s6">
                        <input 
                            placeholder="First Name" 
                            type="text"  
                            name="firstName" 
                            onChange={handleChange} 
                            value={firstName} />
                    </div>

                    <div className="input-field col s6">
                        <input 
                            placeholder="Last Name" 
                            type="text" 
                            name="lastName" 
                            onChange={handleChange} 
                            value={lastName} />
                    </div>

                    <p className="input-field col s4 secondRow first">
                        <input 
                            
                            type="checkbox" 
                            name="isLiving" 
                            checked={isLiving} 
                            
                            onChange={handleChange}/>
                    <label className="black-gray">Living</label> 
                            
                    </p>

                    <div className="input-field col s4 secondRow">
                        <input 
                            placeholder="Bounty Amount" 
                            type="number" 
                            name="bountyAmount" 
                            value={bountyAmount} 
                            onChange={handleChange}/>
                    </div>

                    <div className="input-field col s4 secondRow">
                        <input 
                            placeholder="Type - ( jedi / sith )" 
                            type="text" 
                            name="type" 
                            value={type} 
                            onChange={handleChange}/>
                    </div>
                    
                    <button className="btn">{btnText}</button>
                 </form>
            </div>
        </div>
    )
}


export default AddBounty
