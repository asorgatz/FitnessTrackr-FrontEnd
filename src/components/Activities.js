import React, {useState} from 'react';


const Activities = (props) => {
    const activities = props.activities

    return(
      <div>
          <h1>
              Activities ({activities.length})
          </h1>
          
      </div>
    )
}

export default Activities