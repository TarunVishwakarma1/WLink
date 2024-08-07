'use client'
import { Vortex } from '@/components/ui/vortex'
import Link from 'next/link'
import NotFound from '@/wdata/data.json'
type Props = {}

const NotFoundAll = (props: Props) => {
  return (
    <div className="w-screen h-screen mx-auto rounded-md overflow-hidden flex items-center justify-center">
  <Vortex
    backgroundColor="black"
    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
  >
    <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
    {NotFound.notFoundPage.mainText.header}
    </h2>
    <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
      {NotFound.notFoundPage.mainText.text}
    </p>
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
      <Link href={NotFound.notFoundPage.homePage.link}>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
          {NotFound.notFoundPage.homePage.name}
        </button>
      </Link>
      <Link href={NotFound.notFoundPage.gitHubLink.link} target='_blank'>
        <button className="px-4 py-2 text-white">{NotFound.notFoundPage.gitHubLink.name}</button>
      </Link>
    </div>
  </Vortex>
</div>
  )
}

export default NotFoundAll