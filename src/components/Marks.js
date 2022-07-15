import React from 'react';
import { Popup, Circle } from 'react-leaflet';
import './Markers.css'


const Marks = (props) => {
    


   
    const crimes = props.crimes.map((crime) => {
         var color = 'red'
         var status = 'not provided'
   
        
        
        return (
            <Circle 
            key={crime.offense_id} 
            center={[crime.latitude, crime.longitude]}
            pathOptions={ {
            fillColor: color,
            color: color,
            backgroundColor: color
        } } radius={25}
        eventHandlers={{
            mouseover: (event) => event.target.openPopup(),
           
            
          }}
        
            >
        
                <Popup className="popup">
                    <div style={{color: 'black', fontSize: '9px', backgroundColor: '#ffffff'}}>
                        <div>Offense Type: {crime.offense_parent_group}</div>
                        <div>Time: {crime.offense_start_datetime} </div>
                        <div> 100 Block Address: {crime._100_block_address}</div>
                    </div>
                       
                        
                </Popup>
            </Circle>
            
        )
    })
    return (
        <div>
            {crimes}
      
        </div>
    )

}


export default Marks;