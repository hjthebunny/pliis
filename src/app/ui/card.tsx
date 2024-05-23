import Image from "next/image";

const Card = ({ data }: any) => {
  const formatDate = (inputDateString: string): string => {
    const date = new Date(inputDateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${year}.${month < 10 ? "0" + month : month}.${
      day < 10 ? "0" + day : day
    }`;

    return formattedDate;
  };
  return (
    <div className="w-[360px] h-[360px] mt-[40px] rounded-xl p-4 flex flex-col hover:scale-110 transform duration-200 ease-out">
      <img
        src={data?.snippet?.thumbnails?.high?.url}
        alt="thumbnail"
        className="object-fill h-[60%] w-auto rounded-xl"
      />
      <section className="mt-[16px] flex flex-col  justify-between flex-1 ">
        <b>{decodeURIComponent(data?.snippet?.title)}</b>
        <div>{data?.snippet?.channelTitle} </div>
        <div>{formatDate(data?.snippet?.publishedAt)}</div>
      </section>
    </div>
  );
};

export default Card;
