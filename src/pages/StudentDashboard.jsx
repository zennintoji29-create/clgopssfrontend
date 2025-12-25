import Sidebar from "../components/Sidebar";

const StudentDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Student Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-400">Upcoming Deadlines</p>
            <h3 className="text-3xl font-bold">3</h3>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-400">Notes Available</p>
            <h3 className="text-3xl font-bold">12</h3>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-400">Completion</p>
            <h3 className="text-3xl font-bold">78%</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
