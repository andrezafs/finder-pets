/* eslint-disable react/display-name */
import { type InputHTMLAttributes } from "react";

interface ButtonSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  image: string;
}

export const ButtonSearch = ({ image }: ButtonSearchProps) => {
  return (
    <form className=" flex items-center w-full gap-3 px-6 py-9 font-inter font-medium text-xl text-black rounded-2xl border border-solid border-white-100 bg-white-100">
      <label htmlFor="search"></label>
      <img src={image} alt="" />
      <input
        id="search"
        className="flex items-center justify-center w-full h-10  outline-none placeholder:text-gray-300"
        placeholder="What are you searching for?"
      ></input>
    </form>
  );
};
