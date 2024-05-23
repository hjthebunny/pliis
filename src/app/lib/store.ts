import { create } from "zustand";

interface keywordState{
    keyword: string,
    setKeyword: (newKeyword: string) => void;
}

export const useKeywordStore = create<keywordState>((set) => ({
    keyword: "",
    setKeyword:(newKeyword)=>set({keyword:newKeyword})
}))