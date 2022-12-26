/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { similar } from "../fetching/similar";
const Similar = () => {
  const router = useRouter();
  const movieId = router.query.pid;
  const { data } = useQuery(["similar", movieId], similar, {
    staleTime: Infinity,
  });
  console.log(data?.data);
  return (
    <div className="bg-[#020916]px-5 pb-5">
      <div className="max-w-7xl mx-auto p-5">
        <div className="">
          <h1 className="text-white text-2xl font-bold uppercase tracking-[5px]">
            Similar Movies
          </h1>
        </div>
      </div>
      <ScrollContainer className="flex space-x-5">
        {data?.data?.results.map((item) => (
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

export default Similar;
