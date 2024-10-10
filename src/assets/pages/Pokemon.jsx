import Card from "../Components/Card";
import { useEffect, useState } from "react";

export default function Pokemon() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pokemon API
  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  // Get data form API
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
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setError(error);
    }
  };
  // handle useEffect for fetch data in first render
  useEffect(() => {
    getApiData();
  }, []);

  // handle loading
  if (loading)
    return (
      <div className="flex justify-center items-center text-[50px] mt-[5rem]">
        <h1 className="text-green-500 font-bold">Loading</h1>
      </div>
    );

  if (error) {
    return (
      <div className="flex justify-center items-center text-[50px] mt-[5rem]">
        <h1 className="text-white font-bold">{error.message}</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-4">
      <h1 className="text-[35px] text-white font-bold">
        Lets Find <span className="text-green-500">Pokemon!</span>
      </h1>
      <input
        type="text"
        className="px-4 text-[20px] py-1 outline-none border-b-2 border-green-500"
      />
      <div className="mt-4">
        <ul className="flex flex-wrap justify-center items-center gap-8">
          {apiData.map((value) => (
            <li key={value.id}>
              <Card
                data={value}
                name={value.name}
                weight={value.weight}
                height={value.height}
                image={value.sprites.other.dream_world.front_default}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
