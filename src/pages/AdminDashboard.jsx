import { useEffect, useState } from "react";
import api from "../api/axios";
import Sidebar from "../components/Sidebar";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get("/admin/stats").then((res) => setStats(res.data));
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <p>Total Students</p>
              <h3 className="text-3xl font-bold">{stats.totalStudents}</h3>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <p>Notes Uploaded</p>
              <h3 className="text-3xl font-bold">{stats.totalNotes}</h3>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
              <p>Assignments</p>
              <h3 className="text-3xl font-bold">{stats.totalAssignments}</h3>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
