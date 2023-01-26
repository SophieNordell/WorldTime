import { Outlet, Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="flex flex-col md:flex-row justify-between p-8 bg-indigo-200 mb-10">
        <h1 className="text-black text-4xl font-semibold pb-3 ">World Time</h1>
        <ul className="flex space-x-5 md:items-center ">
          <li className=" hover:text-gray-400">
            <Link to={"/"}>Home</Link>
          </li>
          <li className=" hover:text-gray-400">
            <Link to={"/about"}>About</Link>
          </li>
          <li className=" hover:text-gray-400">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
