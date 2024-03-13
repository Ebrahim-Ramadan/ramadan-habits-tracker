import React from 'react'
import Prayers from '@/components/prayers/prayers'
import Loading from '@/app/loading'

 const Page = () => {
   return (
    <React.Suspense fallback={<Loading />}>
    <Prayers/>
       
    </React.Suspense>
  )
}
export default Page