import React from 'react'

const Bounty = (props) => {
    console.log(props)
    return(
        <div className="container  ">
            <div className="row" >
                <div className="col s4 hoverable">
                    <div className="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span className="card-title">{props.firstName}</span>
                            <p>{props.lastName}</p>
                            <form>
                                <input type="checkbox" name="living" value={props.living} />
                            </form>
                            <a onClick={props.handleDelete} class="btn-floating btn-small red"><i class="material-icons">delete</i></a>
                            <a class="btn-floating btn-small green"><i class="material-icons">edit</i></a>
                        </div>
                    </div>
                
                </div>

            </div>
            
        </div>
    )
}

export default Bounty