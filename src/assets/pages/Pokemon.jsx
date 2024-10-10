import Card from "../Components/Card";
import { useEffect, useState } from "react";

export default function Pokemon() {
  const [apiData, setApiData] = useState(null);

  const API = "https://pokeapi.co/api/vs/pokemon?limit=24";

  const getApiData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log(data);

      setApiData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-4">
      <h1 className="text-[35px] text-white font-bold">
        Lets Find <span className="text-green-500">Pokemon!</span>
      </h1>
      <input
        type="text"
        className="px-4 text-[20px] py-1 outline-none border-b-2 border-gray-500"
      />
      <div className="mt-4">
        <Card />
      </div>
    </div>
  );
}
