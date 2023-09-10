import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <nav Class=" bg-gray-900  w-full shadow-md">
        <div Class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span Class="self-center text-3xl font-semibold whitespace-nowrap text-white">
            Qazi Saboor Ali
            <p Class="text-sm font-normal">
              Bachelors of Science, Software Engineering
            </p>
          </span>

          <div Class=" w-full md:block md:w-auto" id="navbar-default">
            <ul Class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <Link
                  to="/"
                  Class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  Class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  Class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Experience
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/certificates"
                  Class="block py-2 pl-3 pr-4rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Certificates
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  Class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default navbar;
