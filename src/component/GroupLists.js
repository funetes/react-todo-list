import React from 'react';
import Search from './Search';
import ListEntry from './ListEntry';
import '../css/GroupLists.css';

function filter(groups){
  let arr = [];
  groups.forEach(group => {
    if(!arr.includes(group.group)){
      arr.push(group.group);
    }
  });
  return arr;
}


function GroupLists({groups,getGroupName,showAll,getSearch}) {
  return (
    <div className="GroupLists">
      <div className="GroupLists__row">
        <Search getSearch={getSearch}/>
        <button className="showAll" onClick={showAll}>show All</button>
          {filter(groups).map((el,i) => 
            <ListEntry 
              group={el} 
              key={i} 
              getGroupName={getGroupName} /> 
          )}
      </div>
    </div>
  );
}

export default GroupLists;