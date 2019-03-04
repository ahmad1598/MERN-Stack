import React from 'react'
import Toggle from './Toggle.js'

const Button = (props) => {
    return(
        <div className="card">

        <Toggle render={({ isToggled, toggler }) =>
            <>
                {!isToggled
                    ? <>
                        <div className="left-align blue" onClick={toggler}>
                            <div className="waves-effect waves-light white-text blue btn-flat">
                                <i className="material-icons left">keyboard_arrow_down</i>Add a Cat
                            </div>
                        </div>

                    </>
                    : <>
                        <div className="left-align pink" onClick={toggler}>
                            <div className="waves-effect waves-light white-text pink btn-flat">
                                <i className="material-icons left">keyboard_arrow_up</i>Add a Cat
                            </div>
                        </div>

                        <div className="card-content">
                            <input name="" value="" onChange={toggler}></input>
                            <input name="" value="" onChange={toggler}></input>
                            
                                    
                            <button className="waves-effect waves-light pink secondary-content btn close-button" onClick={toggler}><i className="material-icons left">close</i>close</button>

                        </div>

                    </>
                }
            </>
        } />

    </div>

    )
}

export default Button