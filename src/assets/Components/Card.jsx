/* eslint-disable react/prop-types */
export default function Card({ data, name, weight, height, image }) {
  return (
    <>
      <div className="bg-[#2C3E49] w-[19rem] h-[22rem] flex flex-col justify-center items-center px-6 pb-[18px] pt-[8px] gap-3 text-white rounded-lg">
        <img src={image} alt="image" className="max-h-[190px]" />
        <h2 className="text-[30px] text-green-500 font-bold">{name}</h2>
        <div className="flex gap-2 font-bold bg-green-500 px-2 py-1 rounded-sm">
          <p>{data.types.map((curElem) => curElem.type.name).join(", ")}</p>
        </div>
        <div className="w-full flex justify-between">
          <p>
            height : <span className="font-bold">{height}</span>
          </p>
          <p>
            Weight : <span className="font-bold">{weight}</span>
          </p>
          <p>
            Speed :<span className="font-bold">{data.stats[5].base_stat}</span>
          </p>
        </div>
      </div>
    </>
  );
}
