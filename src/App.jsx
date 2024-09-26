import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    axios
      .get("/api/api/v1/res") 
      .then((res) => setUserData(res.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-8 pt-5">
      <div className="p-8 bg-white shadow mt-14 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p className="font-bold text-gray-700 text-xl">22</p>
              <p className="text-gray-400">Active Days</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">10</p>
              <p className="text-gray-400">Present Days</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">89</p>
              <p className="text-gray-400">Monthly Attendance</p>
            </div>
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              {/* Add content here if needed */}
            </div>
          </div>
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button className="text-white py-2 px-4 rounded bg-orange-400 hover:bg-orange-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"></button>
            <button className="text-white py-2 px-4 capitalize rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Check Attendance
            </button>
          </div>
        </div>
        <div className="mt-20 text-center pb-12">
          {userData ? (
            <>
              <h1 className="text-4xl font-medium text-gray-700">
                {userData.name},
                <span className="font-light text-gray-500">
                  {userData.id}
                </span>
              </h1>
              <p className="font-light text-gray-600 mt-3">
                {userData.login}
              </p>
              <p className="mt-8 text-gray-500">{userData.followers}</p>
              <p className="mt-2 text-gray-500">I.C.Desai ITI-Pardi</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="mt-12 flex flex-col justify-center"></div>
      </div>
    </div>
  );
};

export default App;
