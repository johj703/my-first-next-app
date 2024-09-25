import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <a href={"/test"}>a로 Test로 이동하기</a>
      </div>
      <div>
        <Link href={"/test"}>Test로 이동하기</Link>
      </div>
    </div>
  );
}
