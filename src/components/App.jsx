import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //Object for the title and content
  const [notes, setNotes] = useState([]);

  //add note function
  function addNote(newNote) {
    //SetNotes to as values to setNotes array
    setNotes(prevNotes => { 
      //spread operator to pass everything to notes array
      return [...prevNotes, newNote];
    });
  }

  //Delete note function
  function deleteNote(id) {
    //SetNote to filter(remove node)
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, indexofItem) => {
        return indexofItem !== id;
      });
    });
  }

  
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {/* render each component of array! */ }
      {notes.map((noteItem, index) => {
        return (
          <Note  //Note component
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
