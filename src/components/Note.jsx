import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

//Function for Node box
//Is called when add is pressed
function Note(props) {

  //delete node from array
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><DeleteIcon/></button>
    </div>
  );
  
}

export default Note;
