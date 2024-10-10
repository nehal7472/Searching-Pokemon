import Card from "../Components/Card";
import { useEffect, useState } from "react";

export default function Pokemon() {
  const [apiData, setApiData] = useState([]);

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const getApiData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const detailData = data.results.map(async (value) => {
        const res = await fetch(value.url);
        const data = await res.json();
        return data;
      });

      const detailedResponse = await Promise.all(detailData);
      setApiData(detailedResponse);
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
        <ul className="flex flex-wrap justify-center items-center gap-8">
          {apiData.map((value, index) => (
            <li key={index}>
              <Card name={value.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
