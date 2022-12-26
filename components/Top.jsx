/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import { topMovies } from "../pages/api/top";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const Top = () => {
  const { data } = useQuery(["topMovies"], topMovies, {
    staleTime: Infinity,
  });

  const router = useRouter();
  return (
    <div className="bg-black px-5 pb-5">
      <div className="max-w-7xl mx-auto p-5">
        <div className="">
          <h1 className="text-white text-2xl font-bold uppercase tracking-[5px]">
            Top 10 Movies
          </h1>
        </div>
      </div>
      <ScrollContainer className="flex space-x-5">
        {data?.results.map((item) => (
          <Image
            onClick={() => {
              router.push({
                pathname: `/details/[pid]`,
                query: { pid: item.id },
              });
            }}
            key={item.id}
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            alt="banner"
            className="select-none cursor-pointer rounded-xl"
            width={170}
            height={250}
          />
        ))}
      </ScrollContainer>
    </div>
  );
};

export default Top;
