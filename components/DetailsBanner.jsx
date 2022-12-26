/* eslint-disable @next/next/no-img-element */
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { details } from "../fetching/details";
import { cast } from "../fetching/cast";
import { video } from "../fetching/video";
import ModalVideo from "react-modal-video";

const DetailsBanner = () => {
  const [isOpen, setOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");
  const router = useRouter();
  const movieId = router.query.pid;
  const useQueryMultiple = () => {
    const res1 = useQuery(["movieId", movieId], details, {
      staleTime: Infinity,
    });
    const res2 = useQuery(["cast", movieId], cast, {
      staleTime: Infinity,
    });
    const res3 = useQuery(["video", movieId], video, {
      staleTime: Infinity,
    });
    return [res1, res2, res3];
  };
  const [
    { isLoading: loading1, data: data1 },
    { isLoading: loading2, data: data2 },
    { isLoading: loading3, data: data3 },
  ] = useQueryMultiple();
  useEffect(() => {
    setTrailerKey("");
    setOpen(false);
  }, [data3]);
  return (
    <div className="relative">
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original${data1?.data?.backdrop_path}`}
          alt="banner"
          className="filter brightness-50 contrast-75 select-none w-full"
          width={1600}
          height={100}
          priority
        />
      </div>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original${data1?.data?.poster_path}`}
          alt="banner"
          className="select-none absolute top-20 left-20"
          width={250}
          height={300}
          priority
        />
      </div>
      <div className="absolute top-40 left-1/4 space-y-5">
        {/* Movie Name */}
        <h1 className="text-white font-bold text-6xl">
          {data1?.data?.original_title}
        </h1>
        {/* Description */}
        <p className="text-base text-white w-[1000px]">
          {data1?.data?.overview}
        </p>
        {/* Time */}
        <div className="space-y-2">
          <h1 className="text-white font-bold text-4xl"></h1>
          <h4 className="text-white font-light text-2xl">
            {data1?.data?.genres.map((item) => `${item.name} | `)} ‧{" "}
            {Math.floor(data1?.data?.runtime / 60)}h {data1?.data?.runtime % 60}
            m
          </h4>
        </div>
        {/* Cast */}
        <div className="grid grid-cols-3 gap-y-5">
          {data2?.data?.crew.map((item) => {
            if (item.job == "Director") {
              return (
                <div key={item.id}>
                  <h1 className="text-white text-base font-semibold">
                    {item.name}
                  </h1>
                  <h1 className="text-white text-base">Director</h1>
                </div>
              );
            }
          })}
          {data2?.data?.crew.map((item) => {
            if (item.job == "Writer") {
              return (
                <div key={item.id}>
                  <h1 className="text-white text-base font-semibold">
                    {item.name}
                  </h1>
                  <h1 className="text-white text-base">Writer</h1>
                </div>
              );
            }
          })}
        </div>
        {/* Play trailer */}
        <div
          className="flex items-center space-x-2 group w-fit"
          onClick={() => {
            data3?.data?.results.map((item) => {
              if (item.type == "Trailer") {
                return setTrailerKey(item.key);
              } else {
                return;
              }
            });
            setOpen(true);
          }}
        >
          <PlayCircleIcon className="text-white h-6 w-6 group-hover:cursor-pointer group-hover:text-red-500" />
          <h1 className="text-white font-light text-xl group-hover:cursor-pointer group-hover:text-red-500">
            Play Trailer
          </h1>
        </div>
        <div className="w-20 h-20">
          <ModalVideo
            width={200}
            height={200}
            channel="youtube"
            isOpen={isOpen}
            videoId={trailerKey}
            onClose={() => setOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsBanner;
{
  `https://www.themoviedb.org/video/play?key=a8Gx8wiNbs8&width=1145&height=643&_=1672060565714`;
}
