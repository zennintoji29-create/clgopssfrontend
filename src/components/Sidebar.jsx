import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Sidebar = () => {
  const { user, logout } = useAuth();

  const links =
    user.role === "admin"
      ? [
          { name: "Dashboard", to: "/admin" },
          { name: "Notes", to: "/notes" },
          { name: "Assignments", to: "/assignments" },
          { name: "Announcements", to: "/announcements" },
        ]
      : [
          { name: "Dashboard", to: "/student" },
          { name: "Notes", to: "/notes" },
          { name: "Assignments", to: "/assignments" },
          { name: "Announcements", to: "/announcements" },
        ];

  return (
    <aside className="h-screen w-64 bg-gray-900 p-6 flex flex-col">
      <h1 className="text-xl font-bold mb-8">CollegeOps</h1>

      <nav className="flex-1 space-y-4">
        {links.map((l) => (
          <Link
            key={l.name}
            to={l.to}
            className="block text-gray-300 hover:text-white transition"
          >
            {l.name}
          </Link>
        ))}
      </nav>

      <button
        onClick={logout}
        className="mt-auto text-red-400 hover:text-red-500"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
