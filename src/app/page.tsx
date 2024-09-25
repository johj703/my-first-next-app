import ClientExample from "../../components/ClientExample";

export default function Home() {
  console.log("안녕, 난 서버 컴포넌트야!");

  return (
    <div className="p-8 m-4">
      안녕하세요! Next.js 입니다.
      <ClientExample />
    </div>
  );
}
