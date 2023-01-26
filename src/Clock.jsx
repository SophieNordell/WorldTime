import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Clock({ city, timeZone, cityKey }) {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("sv-SE", { timeZone }));
    }, 1000);
  }, []);

  return (
    <div
      className="flex md:flex-col
    md:items-cente r p-7 bg-slate-200 rounded-md w-auto md:w-auto mb-3 ml-2 
    "
    >
      <div className=" flex items-center text-lg text-gray-600 ">{city}</div>
      <div className="text-3xl text-gray-900 font-semibold font-mono p-2 md:p-0">
        {time}
      </div>
      <div className="flex items-center text-gray-600 underline hover:text-gray-400 ">
        <Link to={`/clock/${cityKey}`}> bigger</Link>
      </div>
    </div>
  );
}
