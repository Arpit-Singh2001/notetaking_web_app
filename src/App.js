import React, { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notess, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "23/06/2023",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "24/06/2023",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "25/06/2023",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "26/06/2023",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setdarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toDateString(),
    };
    const newnotes = [...notess, newNote];

    setNotes(newnotes);
  };

  const deleteNote = (id) => {
    const newNotes = notess.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setdarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notess.filter(
            (note) =>
              note.text.includes(searchText) ||
              note.text.toLocaleLowerCase().includes(searchText) ||
              note.text.toLocaleUpperCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
