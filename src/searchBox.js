import React from "react"

const searchBox = ({searchchange}) => {
    return(
        <div className="pa2">
            <input
            className="pa3 ba b--green bg-lightest-blue"
            placeholder="search robots" 
            onChange={searchchange} 
            />
           
        </div>
    )
}
export default searchBox;