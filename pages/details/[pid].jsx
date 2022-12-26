import { useRouter } from "next/router";
import React from "react";
import Cast from "../../components/Cast";
import DetailsBanner from "../../components/DetailsBanner";
import Header from "../../components/Header";
import Similar from "../../components/Similar";

const pid = () => {
  return (
    <div className="h-full bg-[#020916]">
      <div className="bg-[#182131]">
        <Header />
      </div>
      <DetailsBanner />
      <Cast />
      <Similar />
    </div>
  );
};

export default pid;
