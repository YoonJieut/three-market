import dynamic from "next/dynamic";

const CubeScene = dynamic(() => import("@/components/explosion/cube-scene"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="h-full">
      <CubeScene />
    </main>
  );
}
