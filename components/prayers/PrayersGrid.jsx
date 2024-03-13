import React, { useState, useEffect } from 'react';
import { batchCheckboxes } from '@/lib/auth/batchCheckboxes';
import { getPrayersForUser } from '@/lib/auth/batchCheckboxes';
import { Notify } from 'notiflix';
import { PrayerLoading } from './PrayerLoading';

export const PrayersGrid = ({userEmail}) => {
  const [prayers, setPrayers] = useState([]);
  const [changes, setChanges] = useState([]);
  const [loading, setloading] = useState(false);
  const [reqState, setreqState] = useState('');

  useEffect(() => {
    const fetchPrayers = async () => {
      setloading(true)
      const userPrayers = await getPrayersForUser(userEmail);
      const initialPrayers = [
        { name: 'Fajr', checked: Array(30).fill(false) },
        { name: 'Dhuhr', checked: Array(30).fill(false) },
        { name: 'Asr', checked: Array(30).fill(false) },
        { name: 'Maghrib', checked: Array(30).fill(false) },
        { name: 'Isha', checked: Array(30).fill(false) },
      ];

      // Update initialPrayers with userPrayers
      for (let i = 0; i < initialPrayers.length; i++) {
        const prayerName = initialPrayers[i].name.toLowerCase();
        if (userPrayers.hasOwnProperty(prayerName)) {
          for (let j = 0; j < userPrayers[prayerName].length; j++) {
            initialPrayers[i].checked[userPrayers[prayerName][j] - 1] = true;
          }
        }
      }

      setPrayers(initialPrayers);
      setloading(false)
    };

    fetchPrayers();
  }, [userEmail]);

  const handleCheckboxChange = async (prayerIndex, dayIndex) => {
    const updatedPrayers = [...prayers];
    updatedPrayers[prayerIndex].checked[dayIndex] = !updatedPrayers[prayerIndex].checked[dayIndex];
    setPrayers(updatedPrayers);

    const change = { prayerIndex, dayIndex, checked: updatedPrayers[prayerIndex].checked[dayIndex] };
    setChanges([...changes, change]);

    console.log(`Checkbox changed for ${prayers[prayerIndex].name} on day ${dayIndex + 1}`);
    setreqState('loading')
    const res = await batchCheckboxes(userEmail, updatedPrayers);
    if (res) {
      setreqState('well')
      Notify.success('successful batch', {
        position: 'center-top',
      })
    }
  };

  return (
    <div className='mt-12 space-y-2'>
  
          <div style={{ overflowX: 'auto' }} className='md:flex md:justify-center'>
      {loading &&
      <PrayerLoading/>}
      <table className='text-white'>
        <thead>
          <tr>
            <th> </th>
            {prayers.length > 0 && prayers[0].checked.map((_, index) => (
              <th key={index}>{index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {prayers.map((prayer, prayerIndex) => (
            <tr key={prayerIndex}>
              <td className='sticky left-0 font-medium px-2 bg-indigo-700'>{prayer.name}</td>
              {prayer.checked.map((checked, dayIndex) => (
                <td key={dayIndex} className='p-2'>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleCheckboxChange(prayerIndex, dayIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      </div>
      <div className='flex justify-center '>
        {!loading &&
                <p className='text-white flex-row flex items-center text-lg space-x-2'>
                <span className='underline'>{reqState === 'loading' ? 'loading' : reqState === 'well' ? 'saved' : ''}</span>

                
                {reqState === 'loading' ? 
              <span class="loader"></span> :
              reqState === 'well' ?
                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                 <g fill="#ffffff" fill-rule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: 'normal'}}><g transform="scale(10.66667,10.66667)"><path d="M20.29297,5.29297l-11.29297,11.29297l-4.29297,-4.29297l-1.41406,1.41406l5.70703,5.70703l12.70703,-12.70703z"></path></g></g>
                </svg>
                :''
                }
      
                
              </p>
        }

      </div>

</div>
  );
};

export default PrayersGrid;
