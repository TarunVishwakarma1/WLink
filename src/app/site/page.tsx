import { ModeToggle } from "@/components/global/mode-toggle";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const words = ["Securly", "Faster","Easier"];

  return (
    <>
    <div className="h-[40rem] flex justify-center items-center px-4">
    <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Link your
        <br/> Wallets<FlipWords words={words}/>
        <br/>
        <div className="py-4 text-base dark:text-neutral-400 text-neutral-600">
          Sign In with<Link href={'/wallet'} className="dark:text-neutral-50  text-neutral-950 font-medium"> Google</Link>
        </div>
      </div>
      </div>
    </>
  );
}