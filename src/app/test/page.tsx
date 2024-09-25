"use client";

import { useRouter } from "next/navigation";

export default function Test() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/new_location");
  };
  return <button onClick={handleButtonClick}>클릭!</button>;
}
