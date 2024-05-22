"use client";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

interface SearchBarProps {
  includeBtn?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ includeBtn }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`block border  p-3 md:w-1/3 w-2/3 rounded-full bg-[#F2EFFF] flex jusitify-center items-center gap-2 ${
        isFocused ? "border-[#B77FFF]" : "border-[#dcd5fb]"
      }`}
    >
      <IoSearch color="#B77FFF" />
      <input
        type="text"
        className=" w-full  bg-transparent focus:outline-none md:text-base text-sm"
        placeholder="summer"
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      ></input>
      {includeBtn ? (
        <div className="bg-[#B77FFF] p-2.5 rounded-full cursor-pointer hover:bg-[#9039FE]">
          <IoSearch color="#FFFFFF" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
