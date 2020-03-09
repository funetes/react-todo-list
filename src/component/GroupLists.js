import React from 'react';
import Search from './Search';
import ListEntry from './ListEntry';
import GroupAdd from './GroupAdd';
import '../css/GroupLists.css';

function GroupLists() {
  return (
    <div className="GroupLists">
      <div className="GroupLists__row">
        <Search />
        <ListEntry />
      </div>
      <div>
        <GroupAdd className="GroupLists__row"/>
      </div>
    </div>
  );
}

export default GroupLists;