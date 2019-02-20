import React from 'react'

function Products(){
    return (
        <div className="products">
            <div className="products-1">
                <li>Espresso <span id="span"> $2.50</span></li>
                <li>Macchiato <span> $3.00</span> </li>
                <li>Undertow <span> $3.50</span></li>
                <li>Cubano <span id="span"> $3.00</span></li>
                <li>Espresso <span id="span"> $2.50</span></li>
                <li>Macchiato <span> $3.00</span> </li>
            </div>
            <div className="products-2">
                <li>Mexican <span id="span3"> $3.00</span></li>
                <li>Affogato <span id="span2"> $4.25</span></li>
                <li>Double Overhead <span > $6.00</span></li>
                <li>Cubano <span id="span3"> $3.00</span></li>
                <li>Affogato <span id="span2"> $4.25</span></li>
                <li>Double Overhead <span > $6.00</span></li>
            </div>
        </div>
    )
}

export default Products