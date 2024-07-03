import dynamic from "next/dynamic";
const KittenScene = dynamic(() => import("@/components/kitten/kitten-scene"), {
  ssr: false,
});
const Kitten = dynamic(() => import("@/components/kitten/kitten"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-full">
      <KittenScene />
    </main>
  );
}
