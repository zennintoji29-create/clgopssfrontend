import { useEffect, useState } from "react";
import api from "../api/axios";
import Sidebar from "../components/Sidebar";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

 useEffect(() => {
  api.get("/announcements").then((res) => setAnnouncements(res.data));
}, []);


  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Announcements</h2>

        <div className="space-y-4">
          {announcements.map((a) => (
            <div
              key={a._id}
              className={`p-5 rounded-xl ${
                a.isPinned ? "bg-purple-800" : "bg-gray-800"
              }`}
            >
              <h3 className="font-semibold">{a.title}</h3>
              <p className="text-gray-300">{a.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Announcements;
