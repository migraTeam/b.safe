import React from 'react';
import cases from './cases.json';
import '../App.css';

function Archive() {
const newData= cases.map((data) => {
return data.id;
}
);
  return (
<div className="MainContainer">
There are at the moment {newData} cases in archive!
</div>
  );
}
export default Archive;