export default function Card() {
  return (
    <>
      <div className="bg-[#2C3E49] w-[18rem] flex flex-col justify-center items-center px-6 pb-[18px] pt-[8px] gap-3 rounded-lg text-white">
        <img src={''} alt="image" />
        <h2 className="text-[30px] font-bold">{}</h2>
        <div className="w-full flex justify-between">
          <p>
            height : <span className="font-bold">{}</span>
          </p>
          <p>
            Weight : <span className="font-bold">{}</span>
          </p>
          <p>
            Speed : <span className="font-bold">{}</span>
          </p>
        </div>
      </div>
    </>
  );
}
