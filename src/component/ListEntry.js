import React from 'react';
import '../css/ListEntry.css';
function ListEntry({group,getGroupName}) {
  return (
    <div className="ListEntry" onClick={()=>{getGroupName(group)}}>
      {group}
    </div>
  );
}

export default ListEntry;