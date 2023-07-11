"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import {
  BsFillPersonFill,
  BsFillEnvelopeFill,
  BsFillLockFill,
} from "react-icons/bs";
// symbol

const ShieldExclamation = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
      />
    </svg>
  );
};

const Form = ({ path, redirectTitle, title, notRegister }) => {
  const tools = useForm({ mode: "onChange" });
  const { register, control, formState, handleSubmit, watch, reset } = tools;
  const { errors, dirtyFields, isDirty, isValid, isSubmitting } = formState;
  const registerData = [
    // {
    //   id: 1,
    //   type: "text",
    //   placeholder: "Username",
    //   icon: <BsFillPersonFill />,
    // },
    {
      id: 2,
      type: "email",
      placeholder: "Email address",
      icon: <BsFillEnvelopeFill />,
    },
    {
      id: 3,
      type: "password",
      placeholder: "Password",
      icon: <BsFillLockFill />,
    },
    {
      id: 4,
      type: "password",
      placeholder: "Repeat Password",
      icon: <BsFillLockFill />,
    },
  ];
  const loginData = [
    {
      id: 1,
      type: "email",
      placeholder: "Email address",
      icon: <BsFillEnvelopeFill />,
    },
    {
      id: 2,
      type: "password",
      placeholder: "Password",
      icon: <BsFillLockFill />,
    },
  ];
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex  flex-col items-start justify-center space-y-4">
          {notRegister
            ? registerData.map((item) => (
                <div key={item.id} className="w-full">
                  <label className="flex text-base w-full justify-start gap-x-3 items-center text-gray-700 border-b  border-gray-700 py-1">
                    <span>{item.icon}</span>
                    <input
                      type={item.type}
                      placeholder={item.placeholder}
                      {...register(item.placeholder, {
                        required: `Please Enter ${item.placeholder}`,
                        validate: {
                          checkEmailPattern: (fv) => {
                            if (item.placeholder.includes("Email")) {
                              let pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
                              return !pattern.test(fv)
                                ? "invalid email address"
                                : true;
                            }
                            return true;
                          },
                          checkPasswordPattern: (fv) => {
                            if (item.placeholder === "Password") {
                              let pattern =
                                /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/gm;
                              return !pattern.test(fv)
                                ? "Invalid Password format"
                                : true;
                            }
                            return true;
                          },
                          checkPasswordEquality: (fv) => {
                            if (item.placeholder.includes("Repeat")) {
                              return fv !== watch("Password")
                                ? "Password not match"
                                : true;
                            }
                            return true;
                          },
                        },
                      })}
                      className="outline-none border-none w-full"
                    />
                  </label>
                  {!!errors[item.placeholder] &&
                    !!dirtyFields[item.placeholder] && (
                      <div className="flex justify-start items-center mt-3 gap-4 text-red-400">
                        <div className="relative flex">
                          <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 cursor-pointer"
                            title={
                              item.placeholder === "Password"
                                ? "Minimum eight characters,at least one uppercase letter, one lowercase letter, one number and one special character"
                                : errors[item.placeholder]?.message
                            }
                          ></span>
                          <ShieldExclamation className="h-[45px] w-[45px]" />
                        </div>
                        <span>{errors[item.placeholder]?.message}</span>
                      </div>
                    )}
                </div>
              ))
            : loginData.map((item) => (
                <div key={item.id} className="w-[300px]">
                  <label
                    key={item.id}
                    className="flex text-base justify-start gap-x-3 items-center w-full  text-gray-700 border-b  border-gray-700 py-1"
                  >
                    <span>{item.icon}</span>
                    <input
                      type={item.type}
                      {...register(item.placeholder, {
                        required: `Please Enter ${item.placeholder}`,
                        validate: {
                          checkEmailPattern: (fv) => {
                            if (item.placeholder.includes("Email")) {
                              let pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
                              return !pattern.test(fv)
                                ? "invalid email address"
                                : true;
                            }
                            return true;
                          },
                          checkPasswordPattern: (fv) => {
                            if (item.placeholder === "Password") {
                              let pattern =
                                /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/gm;
                              return !pattern.test(fv)
                                ? "Invalid Password format"
                                : true;
                            }
                            return true;
                          },
                        },
                      })}
                      placeholder={item.placeholder}
                      className="outline-none border-none w-full"
                    />
                  </label>
                  {!!errors[item.placeholder] &&
                    !!dirtyFields[item.placeholder] && (
                      <div className="flex justify-start items-center mt-3 gap-4 text-red-400">
                        <div className="relative flex">
                          <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 cursor-pointer"
                            title={
                              item.placeholder === "Password"
                                ? "Minimum eight characters,at least one uppercase letter, one lowercase letter, one number and one special character"
                                : errors[item.placeholder]?.message
                            }
                          ></span>
                          <ShieldExclamation className="h-[45px] w-[45px]" />
                        </div>
                        <span>{errors[item.placeholder]?.message}</span>
                      </div>
                    )}
                </div>
              ))}
          {/* {notRegister && (
            <label htmlFor="" className="flex  items-center">
              <input type="checkbox" className="mr-3" />
              <span className="text-gray-700 font-sans text-base font-medium">
                I agree all statements in Terms of service
              </span>
            </label>
          )} */}
          {/* for mobile device */}
          <Link
            href={path}
            className="justify-center sm:justify-start flex w-full"
          >
            <span className="text-center sm:hidden font-semibold hover:underline text-gray-700">
              {redirectTitle}
            </span>
          </Link>
        </div>
        <button
          type="submit"
          disabled={!isDirty || !isValid || isSubmitting}
          className="px-4 py-2 sm:w-[50%] disabled:opacity-50 disabled:cursor-not-allowed w-full rounded-[20px]  bg-cyan-400 text-white shadow-sm mt-10"
        >
          {title}
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form;
