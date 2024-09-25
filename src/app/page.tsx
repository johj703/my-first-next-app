"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("어디에서 실행되는 걸까요?");
  }, []);
  return <div className="p-8 m-4">안녕하세요! Next.js 입니다.</div>;
}
