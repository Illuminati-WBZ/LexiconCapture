import Form from "@/components/Form";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="mx-auto mt-10 w-full p-3 font-openSans flex flex-col h-[70vh] items-center justify-center">
      <div className="flex justify-center items-center gap-x-[120px]">
        <div className="sm:flex flex-col items-center hidden ">
          <Image
            className="object-fill"
            width={350}
            src={"/assets/login-brand.svg"}
            height={350}
            alt="image"
          />
          <Link href={"/register"}>
            <span className="text-center font-semibold hover:underline text-gray-700">
              Create an account
            </span>
          </Link>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4 text-orange-400">Sign In</h1>
          <div className="mt-[30px]">
            <Form
              path="/register"
              title="Login"
              redirectTitle="Create an account"
              register={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
