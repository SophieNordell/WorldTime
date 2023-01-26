import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { timeZones } from "./timeZones";

export default function SingleClock() {
  const [time, setTime] = useState();
  const { cityKey } = useParams();
  const { city, timeZone } = timeZones[cityKey];

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("sv-SE", { timeZone }));
    }, 1000);
  }, []);

  return (
    <div
      className="flex flex-col md:flex-col
    p-5 bg-slate-200 rounded-md w-64 md:w-48 mb-3 ml-2 
    "
    >
      <div className=" flex items-center text-lg text-gray-600">{city}</div>
      <div className="text-3xl text-gray-900 font-semibold font-mono p-2 md:p-0">
        {time}
      </div>
    </div>
  );
}
