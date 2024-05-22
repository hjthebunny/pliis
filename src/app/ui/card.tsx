const Card = () => {
  return (
    <div className="w-[360px] h-[360px] mt-[40px] rounded-xl p-4 flex flex-col hover:scale-110 transform duration-200 ease-out">
      <div className=" h-[60%] border border-red-500 rounded-xl"></div>
      <section className="mt-[16px] flex flex-col  justify-between flex-1 ">
        <div className="self-center bg-gray-200 p-1 text-sm rounded-xl">
          duration
        </div>
        <b>title</b>
        <div>channel </div>
        <div>count • date</div>
      </section>
    </div>
  );
};

export default Card;
