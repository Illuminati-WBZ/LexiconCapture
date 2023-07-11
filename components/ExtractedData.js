"use client";
import { useStore } from "@/store";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-toastify";
const ExtractedData = () => {
  const { isLoading, file } = useStore();

  // console.log(file);
  const [extractData, setExtractData] = useState("");
  const [dot, setDot] = useState("Typing");
  useEffect(() => {
    if (!isLoading) {
      const dotAnimation = setInterval(() => {
        setDot((prev) => {
          if (prev.length === 9) return "Typing";
          return (prev += ".");
        });
      }, 250);
      const DotTimeout = setTimeout(() => {
        clearInterval(dotAnimation);
        setDot("");
      }, 3000);
      setExtractData(file);
      return () => {
        clearTimeout(DotTimeout);
      };
    }
  }, [isLoading]);
  const handleCopy = () => {
    navigator.clipboard.writeText(extractData);
    toast.success("Copied Successfully ✔");
  };
  return (
    <div>
      {isLoading ? (
        <Skeleton height={25} />
      ) : (
        <h1 className="text-center mb-5 bg-clip-text text-transparent bg-gradient-to-l from-yellow-100 to-orange-500 text-clip text-2xl font-bold ">
          {dot ? "Extracting Data..." : "Date Extracted ✔"}
        </h1>
      )}
      {isLoading ? (
        <Skeleton height={250} width={300} />
      ) : (
        <div
          className="w-[300px] sm:w-[450px] shadow-sm bg-slate-100
      h-[250px] overflow-y-auto overflow-x-hidden rounded-md
      px-2 py-3
      "
        >
          <h1 className="break-words text-gray-800 font-openSans font-medium">
            {dot ? dot : extractData}
          </h1>
        </div>
      )}
      {isLoading ? (
        <Skeleton height={40} width={"50%"} />
      ) : (
        <button
          onClick={handleCopy}
          disabled={dot ? true : false}
          className="px-4 py-2 shadow-lg bg-orange-300 transform hover:scale-95 text-white font-semibold rounded-md mt-4 w-full sm:w-[50%] disabled:opacity-50 disabled:cursor-not-allowed "
        >
          Copy
        </button>
      )}
    </div>
  );
};

export default ExtractedData;
