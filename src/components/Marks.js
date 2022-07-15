import React from 'react';
import { Popup, Circle } from 'react-leaflet';
import './Markers.css'


const Marks = (props) => {
    var narcotics = []
         var theft = []
         var robbery = []
         var destruction = []
         var dui = []
         var fraud = []
         var kidnapping = []
         var forgery = []
         var porn = []
         var extortion = []
         var vehicletheft = []
         var sexoffenses = []
         var stolenproperty = []
         var embezzlement = []
         var weapons = []
         var arson = []
         var humantrafficking = []
         var liquor = []
         var badchecks = []
         var prostitution = []
         var family = []
         var curfew = []
         var animalcruelty = []


   
    const crimes = props.crimes.map((crime) => {
         var color = '#ffffffff'
         

         
         

         if (crime.offense_parent_group === 'DRUG/NARCOTIC OFFENSES') {
            color = 'green'
            narcotics.push(crime)
         }
         if (crime.offense_parent_group === 'LARCENY-THEFT') {
            color = 'blue'
            theft.push(crime)
         }
         if (crime.offense_parent_group === 'ROBBERY') {
            color = 'purple'
            robbery.push(crime)
         }
         if (crime.offense_parent_group === 'DESTRUCTION/DAMAGE/VANDALISM OF PROPERTY') {
            color = 'red'
            destruction.push(crime)
         }
         if (crime.offense_parent_group === 'DRIVING UNDER THE INFLUENCE') {
            color = 'brown'
            dui.push(crime)
         }
         if (crime.offense_parent_group === 'FRAUD OFFENSES') {
            color = 'grey'
            fraud.push(crime)
         }
         if (crime.offense_parent_group === 'KIDNAPPING/ABDUCTION') {
            color = 'indigo'
            kidnapping.push(crime)
         }
         if (crime.offense_parent_group === 'COUNTERFEITING/FORGERY') {
            color = 'yellow'
            forgery.push(crime)
         }
         if (crime.offense_parent_group === 'PORNOGRAPHY/OBSCENE MATERIAL') {
            color = 'pink'
            porn.push(crime)
         }
         if (crime.offense_parent_group === 'EXTORTION/BLACKMAIL') {
            color = 'black'
            extortion.push(crime)
         }
         if (crime.offense_parent_group === 'MOTOR VEHICLE THEFT') {
            color = 'cyan'
            vehicletheft.push(crime)
         }
         if (crime.offense_parent_group === 'SEX OFFENSES') {
            color = 'orange'
            sexoffenses.push(crime)
         }
         if (crime.offense_parent_group === 'STOLEN PROPERTY OFFENSES') {
            color = 'greenyellow'
            stolenproperty.push(crime)
         }
         if (crime.offense_parent_group === 'EMBEZZLEMENT') {
            color = 'grey'
            embezzlement.push(crime)
         }
         if (crime.offense_parent_group === 'WEAPON LAW VIOLATIONS') {
            color = '#ff5488'
            weapons.push(crime)
         }
         if (crime.offense_parent_group === 'ARSON') {
            color = 'red'
            arson.push(crime)
         }
         if (crime.offense_parent_group === 'HUMAN TRAFFICKING') {
            color = 'magenta'
            humantrafficking.push(crime)
         }
         if (crime.offense_parent_group === 'LIQUOR LAW VIOLATIONS') {
            color = 'white'
            liquor.push(crime)
         }
         if (crime.offense_parent_group === 'BAD CHECKS') {
            color = 'grey'
            badchecks.push(crime)
         }
         if (crime.offense_parent_group === 'PROSTITUTION OFFENSES') {
            color = 'pink'
            prostitution.push(crime)
         }
         if (crime.offense_parent_group === 'FAMILY OFFENSES, NONVIOLENT') {
            color = 'white'
            family.push(crime)
         }
         if (crime.offense_parent_group === 'CURFEW/LOITERING/VAGRANCY VIOLATIONS') {
            color = 'grey'
            curfew.push(crime)
         }
         if (crime.offense_parent_group === 'ANIMAL CRUELTY') {
            color = 'pink'
            animalcruelty.push(crime)
         }
         
         





        
         
       
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
            click: (event) => event.target.openPopup(),
           
            
          }}
        
            >
        
                <Popup className="popup">
                    <div style={{color: 'black', fontSize: '9px', backgroundColor: '#ffffff'}}>
                        <div>Offense Type: {crime.offense}</div>
                        <div>Time: {crime.offense_start_datetime} </div>
                        <div> 100 Block Address: {crime._100_block_address}</div>
                    </div>
                       
                        
                </Popup>
            </Circle>
            
        )
    })
    var stats = [
        narcotics.length, theft.length, robbery.length, destruction.length, dui.length, fraud.length, kidnapping.length, 
        forgery.length, porn.length, extortion.length, vehicletheft.length, sexoffenses.length, stolenproperty.length, embezzlement.length,
        weapons.length, arson.length, humantrafficking.length, liquor.length, badchecks.length, prostitution.length, family.length, curfew.length, 
        animalcruelty.length
     ]
    return (
        <div>
            {crimes}
            
            <div className='stats' > 
                Totals: <br></br>
                <textarea rows="10" value={

               `
Narcotics:  ${narcotics.length}
Theft:  ${theft.length}
Robbery:  ${robbery.length}
Vandalism:  ${destruction.length}
DUI:  ${dui.length}
Fraud:  ${fraud.length}
Kidnapping:  ${kidnapping.length}
Forgery:  ${forgery.length}
Porn:  ${porn.length}
Extortion:  ${extortion.length}
Vehicle Theft:  ${vehicletheft.length}
Sex Offenses:  ${sexoffenses.length}
Stolen Property:  ${stolenproperty.length}
Embezzlement:  ${embezzlement.length}
Weapons:  ${weapons.length}
Arson:  ${arson.length}
Human Trafficking:  ${humantrafficking.length}
Liquor Law:  ${liquor.length}
Bad Checks:  ${badchecks.length}
Prostitution:  ${prostitution.length}
Non-violent, Family:  ${family.length}
Curfew:  ${curfew.length}
Animal Cruelty:  ${animalcruelty.length}
               
               
               `
                
                
                }
                
                
                
                
                
                 readOnly>
                   
                    </textarea>
              
                
                 </div>
        </div>
        
    )

}


export default Marks;