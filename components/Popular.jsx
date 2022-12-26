import React from "react";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import { useQuery } from "@tanstack/react-query";
import { popularMovies } from "../fetching/popularMovies";
import { useRouter } from "next/router";
const Popular = () => {
  const { data } = useQuery(["popularMovies"], popularMovies, {
    staleTime: Infinity,
  });
  const router = useRouter();
  return (
    <div className="bg-black px-5 pb-5">
      <div className="max-w-7xl mx-auto p-5">
        <div className="">
          <h1 className="text-white text-2xl font-bold uppercase tracking-[5px]">
            Popular Movies
          </h1>
        </div>
      </div>
      <ScrollContainer>
        <div className="flex space-x-5">
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
              height={250}
              width={170}
            />
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
};

export default Popular;
