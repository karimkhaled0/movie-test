/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { useQuery } from "@tanstack/react-query";
import { popularMovies } from "../fetching/popularMovies";
import { useRouter } from "next/router";
SwiperCore.use([Autoplay]);
const Banner = () => {
  const router = useRouter();
  const { data } = useQuery(["popularMovies"], popularMovies, {
    staleTime: Infinity,
  });
  const slicedArray = data?.results?.slice(0, 3);
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        className="flex bg-black h-[500px]"
      >
        {slicedArray?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative">
              <div>
                <Image
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  alt="banner"
                  className="opacity-90 pt-1 filter brightness-50 select-none"
                  width={1600}
                  height={100}
                  priority
                />
              </div>
              <div className="absolute top-20 left-36 space-y-5">
                <h1
                  className="text-white font-bold text-6xl cursor-pointer hover:underline"
                  onClick={() => {
                    router.push({
                      pathname: `/details/[pid]`,
                      query: { pid: item.id },
                    });
                  }}
                >
                  {item.original_title}
                </h1>
                <p className="text-base text-white w-[800px]">
                  {item.overview} ‧ {item.release_date}
                </p>
                <div className="flex items-center space-x-2 w-fit">
                  <h1 className="font-light tracking-[5px] uppercase text-red-300 text-2xl group-hover:cursor-pointer">
                    Rate ‧ {item.vote_average} / 10
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
