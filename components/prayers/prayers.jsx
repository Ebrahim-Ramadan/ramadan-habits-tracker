'use client'
import React from 'react'
import { PrayersGrid } from './PrayersGrid'
import secureLocalStorage from "react-secure-storage";
import { useRouter } from 'next/navigation';
import { Notify } from 'notiflix';
import UploadPrayers from './UploadPrayers';

 const Prayers = () => {
  const router = useRouter()

React.useEffect(() => {
  if (!secureLocalStorage.getItem('loggedIn')) {
    router.push('/login')
    Notify.info('login first', {
      position: 'center-top',
    })
}
}, []);
   return (
     <div>
       {secureLocalStorage.getItem('loggedIn') &&
                <PrayersGrid userEmail={secureLocalStorage.getItem("username")} />

       }
       <UploadPrayers/>
    </div>
  )
}
export default Prayers