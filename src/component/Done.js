import React from 'react';


function Done({getDoneState,done}) {
  return(
    <button onClick={getDoneState}>{done? 'done' : 'not yet'}</button>
  )
}

export default Done;