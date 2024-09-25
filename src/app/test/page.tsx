"use client";

import { useRouter } from "next/navigation";

export default function Test() {
  const router = useRouter();

  const handleButtonClick = () => {
    setTimeout(() => {
      router.replace("/test");
    }, 1000);
  };
  return <button onClick={handleButtonClick}>클릭!</button>;
}
