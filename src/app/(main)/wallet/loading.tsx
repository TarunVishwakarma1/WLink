import Loading from '@/components/loading/loading'
import React from 'react'

type Props = {}

const LoadingWallets = (props: Props) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
    <Loading></Loading>
  </div>
  )
}

export default LoadingWallets