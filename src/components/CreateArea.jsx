import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from '@material-ui/core/Zoom';

//Creates the area where the user can insert the data
function CreateArea(props) {

const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  //Onchange function to allow typing
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  //Function when add button is pressed
  //Creates a new note and adds it to the array
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });

    //Prevent reloading of the page when is pressed
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      {/*Form for the box of note */}
      <form className="create-note">
        {/*Input title component */}
        
        {isExpanded ?  <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}

        {/*Input of note */}
        <textarea
          name="content"
          onClick = {expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        {/*Button add component */}
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
