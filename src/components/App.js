
import React from 'react';
import Map from './Map';
import './Markers.css'



class App extends React.Component {
    state =  {viewposition: [47.63474586178129, -122.32926355869654] }
    render() {
          
        return (
            <div style={{backgroundColor: 'white'}}>
           
                <h2 style={{color: 'black', fontFamily: 'monospace'}}>SEATTLE CRIME DATA</h2>
                <Map  viewposition={this.state.viewposition}></Map>
               

                

            </div>

        )
    }
}

export default App;