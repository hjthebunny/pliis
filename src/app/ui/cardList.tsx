"use client";
import { useKeywordStore } from "../lib/store";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./card";
import axios from "axios";

const CardList = () => {
  const searchParams = useSearchParams();
  const params = searchParams.get("q") + "playlist";
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=12&regionCode=kr&relevanceLanguage=ko&q=${params}&key=${process.env.NEXT_PUBLIC_YOUTUBE_KEY}`
        );
        setData(res.data);
        console.log(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [params]);

  const list = data?.items.map((item: any, index: number) => {
    return <Card key={index} data={item} />;
  });

  return (
    <main className="flex flex-wrap justify-around transform duration-200 ease-out ">
      {list}
    </main>
  );
};

export default CardList;
