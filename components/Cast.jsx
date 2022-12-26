/* eslint-disable @next/next/no-img-element */
import { data } from "autoprefixer";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { cast } from "../fetching/cast";
import { useQuery } from "@tanstack/react-query";

const Cast = () => {
  const router = useRouter();
  const movieId = router.query.pid;
  const { data } = useQuery(["cast", movieId], cast, {
    staleTime: Infinity,
  });
  const slicedArray = data?.data?.cast.slice(0, 7);
  return (
    <div className="max-w-7xl mx-auto flex space-x-5">
      {slicedArray?.map((item) => (
        <div
          key={item.id}
          className="w-fit bg-[#151F2E] my-5 rounded-lg space-y-3 pb-3"
        >
          <Image
            src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
            alt="profile"
            width={200}
            height={100}
          />
          <div className="text-center">
            <h1 className="text-white">{item.name}</h1>
            <h1 className="text-gray-500">{item.character.split("/").pop()}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
