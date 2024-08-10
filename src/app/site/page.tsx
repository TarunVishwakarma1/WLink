import { FlipWords } from "@/components/ui/flip-words";

import Link from "next/link";
import HeroPage from "@/wdata/data.json"
import AppleCardsCarouselDemo from "@/components/heropage/heropageBottom";
import Footer from "@/components/footer/footer";

export default function Home() {

  return (
    <>
    <div className="h-[20rem] flex justify-center items-center px-4">
    <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 pt-[200px]">
        {HeroPage.heroPage.mainText.text1}
        <br /> 
        <div>{HeroPage.heroPage.mainText.text2}
          <FlipWords words={HeroPage.heroPage.mainText.flipText}/>
        </div>
        <div className="py-4 text-base dark:text-neutral-400 text-neutral-600 text-center">
          {HeroPage.heroPage.mainText.text3} {' '}
          <Link href={HeroPage.heroPage.mainText.link} className="dark:text-neutral-50  text-neutral-950 font-medium"> 
          {HeroPage.heroPage.mainText.text4}
          </Link>
        </div>
      </div>
      </div>
      <div>
      <AppleCardsCarouselDemo/>
      </div>
      <Footer/>
    </>
  );
}