import Lanyard from "@/components/Lanyard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-gray-500">
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  );
}
