'use client'
import { Vortex } from '@/components/ui/vortex'
import Link from 'next/link'
type Props = {}

const NotFoundAll = (props: Props) => {
  return (
    <div className="w-screen h-screen mx-auto rounded-md overflow-hidden flex items-center justify-center">
  <Vortex
    backgroundColor="black"
    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
  >
    <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
      The hell is this?
    </h2>
    <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
      This page doesn&apos;t exist. However, the code of this project is open source.<br />
      If you feel the need to add more pages, visit the GitHub repo in the link below.
    </p>
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
      <Link href={'/site'}>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
          Home Page
        </button>
      </Link>
      <Link href={'/'}>
        <button className="px-4 py-2 text-white">GitHub Repo</button>
      </Link>
    </div>
  </Vortex>
</div>
  )
}

export default NotFoundAll