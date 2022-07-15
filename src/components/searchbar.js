import React from 'react';
import './Markers.css'


class SearchBar  extends React.Component  {

    state = {term: ''};
    onFormSubmit = event => {
        event.preventDefault();
        

        this.props.onSubmit(this.state.term + ', Seattle');
    }
    render () {
        
        return (
            <div className="search">
                   
                <form onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label style={{backgroundColor: 'white', fontFamily: 'monospace', color: 'black'}} > Find Address or Neighborhood: </label> <br></br>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}>
                        </input>
                        
                    </div>
                </form>
                
            </div>
                
            );
    }

};

export default SearchBar;