import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="flex justify-between items-center px-4 py-3 border-b border-gray-300 dark:border-gray-700">
      <div className="text-xl font-bold">MySite</div>
      <div className="space-x-4">
        <Link
          to="/"
          className={`hover:underline ${
            pathname === "/" ? "font-semibold underline" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={`hover:underline ${
            pathname === "/projects" ? "font-semibold underline" : ""
          }`}
        >
          Projects
        </Link>
      </div>
      {/* Theme toggle removed: dark mode forced globally */}
    </nav>
  );
}
