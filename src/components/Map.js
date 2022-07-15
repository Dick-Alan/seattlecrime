import React, { useState } from 'react';
import { MapContainer, TileLayer, useMapEvent } from 'react-leaflet';
import SearchBar from './searchbar';
import './Markers.css'
import GetCoords from './GetCoords';
import axios from 'axios';



const Map = (props)=> {
    
    const [message, setMessage ] = useState('...')
    const [view, setView] = useState(props.viewposition)
    const [moving, setMoving] = useState(false)
    
    
    const onSearchSubmit = async (term) => {

        


        setMoving(true)
       

            const callApi  = axios.create({
                baseURL: 'https://api.geoapify.com/v1/geocode/search',
                params: {apiKey: '519a81ae8a974952a09169ad20fc1183', text: term},
                headers: {

                  
                }
                
            
                
              });
              
              

              const response = callApi.get();
              console.log('sent')
              setMessage('Searching...')
              console.log((await response).data.features[0].geometry.coordinates)
              setView({ lat : (await response).data.features[0].geometry.coordinates[1],
                 lng: (await response).data.features[0].geometry.coordinates[0]})
              console.log((await response).error)
              console.log('recieved')
              setMessage('Location Found... Hit [Any Key] to go')
            

        
        

     
       
               
        };
        function GoToPoint() {
            const map = useMapEvent('keydown',() => {
                if (moving === true) {
                   
                    map.setView(view, 15)
                    console.log(props.viewposition)
                    setMoving(!moving)
                    setMessage('...')
                    



                }
               
              })
              
        }
    
        return(
            <div className="master">
            
          
            <MapContainer id="map"
                                    style={{  width: '90vw', height: '90vh'}}
                                    center={props.viewposition} 
                                    zoom={11}
                                    zoomControl={false}
                                    
                                    
                                    >
                        <TileLayer
                     
                            url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
                        />
                        
                        <GetCoords/>
                        <GoToPoint> </GoToPoint>
                        
                            <SearchBar onSubmit={onSearchSubmit}> </SearchBar><div className="loadingmsg">{message}</div>
                            
                        <div className="optionscontainer"></div>
                        
                        
            </MapContainer>
            </div>
    
        )


    
    
    
}

export default Map;