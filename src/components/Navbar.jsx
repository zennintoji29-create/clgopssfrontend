import { useAuth } from "../auth/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-gray-900 border-b border-gray-800">
      <h2 className="font-semibold text-lg">Welcome, {user?.name}</h2>

      <button
        onClick={logout}
        className="text-sm text-red-400 hover:text-red-500 transition"
      >
        Logout
      </button>
    </header>
  );
};

export default Navbar;
