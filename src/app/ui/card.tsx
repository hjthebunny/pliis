import { decode } from "html-entities";
import Image from "next/image";
const Card = ({ data }: any) => {
  const elapsedTime = (date: string): string => {
    const start = new Date(date);
    const end = new Date();
    const diff = (end.getTime() - start.getTime()) / 1000;
    const times = [
      { name: "년", milliSeconds: 60 * 60 * 24 * 365 },
      { name: "개월", milliSeconds: 60 * 60 * 24 * 30 },
      { name: "일", milliSeconds: 60 * 60 * 24 },
      { name: "시간", milliSeconds: 60 * 60 },
      { name: "분", milliSeconds: 60 },
    ];
    for (const value of times) {
      const betweenTime = Math.floor(diff / value.milliSeconds);

      if (betweenTime > 0) {
        return `${betweenTime}${value.name} 전`;
      }
    }
    return "방금 전";
  };

  return (
    <div className="w-[360px] h-[360px] mt-[40px] rounded-xl p-4 flex flex-col hover:scale-110 transform duration-200 ease-out">
      <div className=" h-[55%]">
        <Image
          src={data?.snippet?.thumbnails?.high?.url}
          alt="thumbnail"
          className="object-cover rounded-xl  h-[100%]"
          width={500}
          height={500}
          priority={true}
        />
      </div>
      <section className="mt-[16px] flex flex-col justify-between gap-[10px]">
        <div className="truncate font-semibold mb-[5px]">
          {decode(data?.snippet?.title)}
        </div>
        <div className="text-gray-600">{data?.snippet?.channelTitle} </div>
        <div className="text-gray-400">
          {elapsedTime(data?.snippet?.publishedAt)}
        </div>
      </section>
    </div>
  );
};

export default Card;
