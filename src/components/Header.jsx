import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { navigation } from "../constants";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <nav className="container flex items-center justify-between py-7">
        <Link to="/" className="text-2xl font-bold text-gray-400 hover:text-blue-400 ease-in-out duration-300">
          TaxCut
        </Link>
        <ul
          className={`${
            openNavigation ? "block" : "hidden"
          } lg:flex lg:items-center`}
        >
          {navigation.map((item) => (
            <li key={item.id} className="mr-4 lg:mr-6">
              <Link
                to={item.url}
                className={`text-gray-400 hover:text-blue-400 ease-in-out duration-300 uppercase font-medium ${
                  pathname.hash === item.id ? "text-blue-400" : ""
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
