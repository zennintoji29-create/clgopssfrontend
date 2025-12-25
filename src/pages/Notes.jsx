import { useEffect, useState } from "react";
import api from "../api/axios";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    api.get("/notes").then((res) => setNotes(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Notes</h1>

      {notes.map((note) => (
        <div key={note._id} className="bg-gray-800 p-4 rounded mb-3">
          <h3>{note.title}</h3>
          <a href={note.pdfUrl} target="_blank">View PDF</a>
        </div>
      ))}
    </div>
  );
};

export default Notes;
