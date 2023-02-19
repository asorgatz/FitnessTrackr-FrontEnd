import React, {useState} from 'react';


const Activities = (props) => {
    const activities = props.activities

    return(
      <div>
          <h1>
              Activities ({activities.length})
          </h1>
          <hr></hr>
          <ul>
            {activities.map( (activity) => {
                return(
                    <div key={activity.id}>
                        <h3>Name: {activity.name}</h3>
                        <p className="indent">Description: {activity.description}</p>
                    </div>
                );
            })}
            </ul>
          
      </div>
    )
}

export default Activities