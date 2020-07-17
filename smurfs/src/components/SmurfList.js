import React, { useContext } from 'react';
import { SmurfContext } from '../contexts';



function SmurfList(){
   const {smurfs} = useContext(SmurfContext)
    return(
        <div>
            <h2>Smurfs:</h2>
             {smurfs.map((smurfs) => (
                 <div> 
                 <p>{smurfs.name}</p>
                 <p>{smurfs.age}</p>
                 <p>{smurfs.height}</p>
                 </div>
               ))}
        </div>
    )
}

export default SmurfList;