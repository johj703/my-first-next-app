import Link from "next/link";

export default function Home() {
  const os = require("os");
  console.log(os.hostname);
  return <div>안녕하세요! Next.js 입니다.</div>;
}
