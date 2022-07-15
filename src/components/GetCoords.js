import React, {useState} from 'react';

import Marks from './Marks';
import axios from 'axios'
// import Stats from './Stats';



import './Markers.css';



const GetCoords = (props) => {

    const [crimes, setCrimes] = useState([])

   
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
         
          setCrimes((await response).data)
          
          console.log(crimes)
          var offenses = []
          crimes.map((crime) => {
            
            if (!offenses.includes(crime.offense_parent_group)) {
                offenses.push(crime.offense_parent_group)
            }
            return null
 
          })

          
        //   crimes.map(crime => !offenses.includes(crime.offense) && offenses.push([crime.offense]))
            console.log(offenses)

         
          

    }


    
    
    

    return ( <div>
        


        <div className="options">
        # of results (max 5000) <br></br>
        <input id="limit" type="number" defaultValue="1000" onChange={changeValue} max="5000"></input>
        <br></br>
        <button className="scanbutton" onClick={request}> Get Crimes </button>

        </div>
       
     
        
        <Marks crimes={crimes}/>
        

       
        
        
        
        
        </div>
    )

}

export default GetCoords; 