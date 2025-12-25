import { useEffect, useState } from "react";
import api from "../api/axios";
import Sidebar from "../components/Sidebar";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
  api.get("/assignments").then((res) => setAssignments(res.data));
}, []);


  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Assignments</h2>

        <div className="space-y-4">
          {assignments.map((a) => (
            <div key={a._id} className="bg-gray-800 p-5 rounded-xl">
              <h3 className="font-semibold">{a.title}</h3>
              <p className="text-sm text-gray-400">
                Due: {new Date(a.deadline).toLocaleDateString()}
              </p>
              <span className="text-xs text-yellow-400">
                Priority: {a.priority}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Assignments;
