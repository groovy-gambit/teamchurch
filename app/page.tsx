import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="align-center flex min-h-screen flex-col items-center 
                  justify-between bg-red-300 align-top"
    >
      <div className="mx-auto h-96 bg-blue-500 px-0 lg:container">
        <div className="bg-green-300">NAVE</div>
      </div>
    </main>
  );
}
