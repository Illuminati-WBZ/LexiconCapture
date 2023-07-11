"use client";
import "./fileuploadstyle.css";
import { useEffect, useRef, useState } from "react";
import { FileDrop } from "react-file-drop";
import { HiOutlineCheck } from "react-icons/hi2";
import { useStore } from "../store/index";

const FileUpload = () => {
  // state management zustand
  const { setFile, setLoading } = useStore();
  const inputRef = useRef();
  const [progress, setProgress] = useState(false);
  const [width, setWidth] = useState(0);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (progress) {
      // console.log("progress... ");
      let timeout = setInterval(() => {
        setWidth((prev) => {
          if (prev !== 100) return parseInt(prev) + 1;
          return prev;
        });
      }, 50);
      return () => clearInterval(timeout);
    }
  }, [progress]);
  // * base64
  // const getBase = (file, cb) => {
  //   let reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = function () {
  //     cb(reader.result);
  //   };
  //   reader.onerror = function (error) {
  //     console.log("Error: ", error);
  //   };
  // };
  const filePicker = () => {
    inputRef.current.click();
  };
  const sendFile = async (file) => {
    setLoading(true);
    setProgress(true);
    setStatus(false);
    setWidth(0);
    try {
      console.log("progress set");
      const res = await fetch(
        "https://extract-text-api.onrender.com/api/extract",
        {
          method: "POST",
          body: file,
          cache: "no-store",
        }
      );
      const data = await res.json();
      if (data) {
        setFile(data.text);
        // console.log("done");
        setStatus(true);
        setProgress(false);
        setLoading(false);
        setWidth(0);
      }
    } catch (err) {
      toast.error(err.message);
      console.log(err);
      setWidth(0);
      setFile("");
      setProgress(false);
      setStatus(true);
      setLoading(false);
    }
  };
  const fileHandler = (files) => {
    // console.log(files[0]);
    if (files.length > 1) {
      toast.error("Multiple files not supported");
      setWidth(0);
      setProgress(false);
      setLoading(false);
      return;
    }
    // send api post
    let data = new FormData();
    data.append("file", files[0]);

    sendFile(data);
    // setProgress(false);
    // console.log("reset");

    // getBase(files[0], (res) => {
    //   setProgress(res);
    //   setFile(res);
    // });
  };
  return (
    <div className="px-4">
      <div>
        <h1 className="text-center text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-100 to-sky-500 text-clip font-bold mb-5">
          Upload Your File
        </h1>
        <div
          id="frame"
          className="shadow-lg w-[300px] sm:w-[450px] min-h-[300px] py-5  rounded-md flex flex-col justify-center"
        >
          <FileDrop
            frame={document.querySelector("#frame")}
            onTargetClick={filePicker}
            onDrop={(f) => fileHandler(f)}
          >
            <p className="placeholder font-openSans font-medium">
              DRAG FILE HERE <br /> OR <span>BROWSE</span>
            </p>
            <input
              accept=".xls, .png, .psd, .doc, .docx, .ai, .pdf, .jpg, .jpeg"
              value=""
              style={{ visibility: "hidden", opacity: 0 }}
              ref={inputRef}
              type="file"
              onChange={(e) => fileHandler(e.target.files)}
            />
          </FileDrop>

          <div className="flex flex-col justify-center items-start mt-5  px-5">
            {progress && (
              <>
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r text-lg font-semibold from-cyan-400 to-sky-500">
                  Uploading...
                </h1>
                <div className="w-full h-[10px] rounded-full overflow-hidden">
                  <div
                    className="bg-cyan-400 border rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all ease-out duration-150"
                    style={{ width: `${width}%`, height: "100%" }}
                  ></div>
                </div>
              </>
            )}
            {status && (
              <div className="text-center mx-auto bg-green-400 font-semibold text-white flex justify-center items-center gap-x-4 px-4 py-2 rounded-full shadow-lg">
                <span> Uploaded Successfully</span>
                <HiOutlineCheck />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
