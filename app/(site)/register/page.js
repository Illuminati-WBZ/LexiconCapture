import Form from "@/components/Form";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="mx-auto mt-10 w-full p-3 font-openSans flex flex-col h-[70vh] items-center justify-center">
      <div className="flex justify-center items-center gap-x-[90px]">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-orange-400">Sign up</h1>
          <div className="mt-[30px] w-[300px] md:w-[300px]">
            <Form
              path="/login"
              title="Register"
              redirectTitle="I am already a member"
              notRegister={true}
            />
          </div>
        </div>
        <div className="sm:flex flex-col items-center hidden ">
          <Image
            className="object-fill"
            width={350}
            src={"/assets/register-brand.svg"}
            height={350}
            alt="image"
          />
          <Link href={"/login"}>
            <span className="text-center font-semibold hover:underline text-gray-700">
              I am already member
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
