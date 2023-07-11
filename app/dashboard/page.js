"use client";
import ExtractedData from "@/components/ExtractedData";
import FileUpload from "@/components/FileUpload";
import { useStore } from "@/store";
import React from "react";

const Dashboard = () => {
  const { file, isLoading } = useStore();
  return (
    <div>
      <h1 className="capitalize text-center text-xl my-5 mb-10 font-openSans font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-200 text-clip">
        Get Texts extracted from the file through Lexicon Capture in seconds.
      </h1>
      <div className="mb-5 mx-auto flex justify-center flex-wrap items-center gap-7">
        <FileUpload />
        {(isLoading || file) && <ExtractedData />}
      </div>
    </div>
  );
};

export default Dashboard;
