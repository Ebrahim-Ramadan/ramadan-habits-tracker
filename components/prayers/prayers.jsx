'use client'
import React from 'react'
import { PrayersGrid } from './PrayersGrid'
import secureLocalStorage from "react-secure-storage";
import { useRouter } from 'next/navigation';
import { Notify } from 'notiflix';

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
    </div>
  )
}
export default Prayers