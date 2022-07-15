import React, {useState} from 'react';

import Marks from './Marks';
import axios from 'axios'
// import Stats from './Stats';



import './Markers.css';



const GetCoords = (props) => {
    const [coords, setCoords] = useState([0, 0])
    const [crimes, setCrimes] = useState([])
    const [scanned, setScanned] = useState(false)
    const [ message, setMessage ] = useState('...')
    const [ limit, setLimit ] = useState('1000')

    
    const changeValue = () => {
        setLimit(document.getElementById("limit").value)
    }
        
        


    const request = async () => {

        

        const callApi  = axios.create({
            baseURL: `https://data.seattle.gov/resource/tazs-3rd5.json/`,
            params: {  $limit: `${limit}` },
            headers: {
   
              
            }
        
            
          });
          
          
          // console.log(this.state.message, this.state.count, ' times')
          const response = callApi.get('');
          setMessage('Scanning.. please wait...')
          setCrimes((await response).data)
          console.log(crimes)
          setScanned(true)
          setMessage(`...`)
         
          

    }

    // const ShowStats = () => {
    //     if (scanned === true) {
    //         return (
    //             <div className="stats">
    //                 <div style={{color: 'white'}}> Total crimes: {crimes.length}</div>
    //                 <Stats showlegend={props.showlegend} crimes={crimes}/>
                    
                

    //             </div>
    //         )
    //     }
    //     else {
    //         return <div></div>
    //     }
    // }


    
    
    

    return ( <div>
        


        <div className="options">
        # of results (max 5000) <br></br>
        <input id="limit" type="number" defaultValue="1000" onChange={changeValue} max="5000"></input>
        <br></br>
        <button className="scanbutton" onClick={request}> GET </button>

        </div>
       
     
        
        <Marks crimes={crimes}/>
        

       
        
        
        
        
        </div>
    )

}

export default GetCoords; 