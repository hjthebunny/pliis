"use client";
import { IoSearch } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState, useRef, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import { useKeywordStore } from "../lib/store";
import { useSearchParams } from "next/navigation";

interface SearchBarProps {
  includeBtn?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ includeBtn }) => {
  const [isFocused, setIsFocused] = useState(false);
  const { keyword, setKeyword } = useKeywordStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams?.get("q");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query && query?.length !== 0) {
      setKeyword(query);
    } else {
      setKeyword("");
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    if (keyword.trim()) {
      router.push(`/search?q=${encodeURIComponent(keyword)}`);
    }
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleReset = () => {
    setKeyword("");
  };

  return (
    <div
      className={`block border  p-3 lg:w-1/3 md:w-1/2 w-3/4 rounded-full bg-[#F2EFFF] flex jusitify-center items-center gap-2 ${
        isFocused ? "border-[#B77FFF]" : "border-[#dcd5fb] "
      } tarnsform duration-200 ease-out`}
    >
      <IoSearch color="#B77FFF" size="30" />
      <input
        ref={inputRef}
        type="text"
        value={keyword}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        className=" w-full  bg-transparent focus:outline-none md:text-base text-sm"
        placeholder="summer"
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={(e) => {
          setIsFocused(false);
        }}
      ></input>
      {isFocused ? (
        <button
          className="hover:bg-[#E2CBFF] p-0.8 rounded-full "
          onMouseDown={handleReset}
        >
          <IoCloseOutline size="30" color="#ADADAD" />
        </button>
      ) : (
        ""
      )}
      {includeBtn ? (
        <button
          className="bg-[#B77FFF] p-2.5 rounded-full  hover:bg-[#9039FE]"
          onClick={handleSearch}
        >
          <IoSearch color="#FFFFFF" />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
