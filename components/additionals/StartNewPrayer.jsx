'use client'
import React, { useState , useEffect} from 'react';
import secureLocalStorage from "react-secure-storage";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {AddAdditionals, getAdditionalPrayers} from '@/lib/auth/AddAdditionals'
import { ProgressLine } from './CountDown';
import { Reload } from '@/components/globals/Reload';

const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0;
} // to check if object is empty or not

export const StartNewPrayer = ({ NewPrayer }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const [selectedOption, setSelectedOption] = useState('Home');
  const [duration, setDuration] = useState('15');
  const [Disabled, setDisabled] = useState(false);
  const [LastadditionalPrayers, setLastadditionalPrayers] = useState({});


  useEffect(() => {
    if (NewPrayer!='') {
      setDisabled(true)
    }
  }, [NewPrayer]);
  useEffect(() => {

    fetchData()
  }, []);

  const handleStartActivity = async () => {
    setIsLoading(true);

    if (secureLocalStorage.getItem('loggedIn')) {
      const lastActivityDuration = !isObjectEmpty(LastadditionalPrayers) && LastadditionalPrayers['duration'];
      
      const lastPrayerPoint = new Date(secureLocalStorage.getItem('lastPrayerPoint'));

      const currentTimestamp = new Date();
      const timeDifference = currentTimestamp - lastPrayerPoint;

      if (timeDifference >= lastActivityDuration * 60 * 1000) {
        secureLocalStorage.setItem('lastPrayerPoint', currentTimestamp);
        
        const res = await AddAdditionals(secureLocalStorage.getItem('username'), {
          NewPrayer,
          selectedOption,
          duration, 
          registeredTime : new Date()
        })
        if (res) {
          Notify.success(`added your prayer`, {
            position: 'center-top',
          });
        fetchData()

        }

      } else {
        setDisabled(true)
        Notify.failure(`Please wait for ${lastActivityDuration} minutes before adding again.`, {
          position: 'center-top',
        });
      }

    }

    else {
      Notify.failure('log in first', {
        position: 'center-top',
      });
    }
    setIsLoading(false);
    
  };

  const fetchData = async () => {
    if (secureLocalStorage.getItem('loggedIn')) {
      const additionalPrayersFetched = await getAdditionalPrayers(secureLocalStorage.getItem('username'))

      setLastadditionalPrayers(
        additionalPrayersFetched.length > 0 ? additionalPrayersFetched[additionalPrayersFetched.length - 1]:{}
      )
    }
    else {
      Notify.failure('log in first', {
        position: 'center-top',
      });
    }
  }






  return (
    <div>
          <div className='flex flex-col gap-2 items-center mt-4 justify-center'>
      <div className='flex md:flex-row flex-col gap-2 items-center'>
        <div className='flex md:flex-row gap-4 items-center justify-center'>
          <ul className='grid w-full gap-2 grid-cols-2'>
            <li>
              <input
                type='radio'
                id='Home'
                name='hosting'
                value='Home'
                className='hidden peer'
                required
                onChange={(e)=>setSelectedOption(e.target.value)}
                defaultChecked={selectedOption === 'Home'}
              />
              <label
                htmlFor='Home'
                className='inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-indigo-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'>
                <div className='block'>
                  <div className='w-full text-lg font-semibold'>Home</div>
                </div>
                <svg xmlns='http://www.w3.org/2000/svg' height='14' width='15.75' viewBox='0 0 576 512'>
                  <path
                    fill='#a0aaba'
                    d='M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z'
                  />
                </svg>
              </label>
            </li>
            <li>
              <input
                type='radio'
                id='Mosque'
                name='hosting'
                value='Mosque'
                className='hidden peer'
                onChange={(e)=>setSelectedOption(e.target.value)}
              />
              <label
                htmlFor='Mosque'
                className='inline-flex items-center justify-between gap-2 w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-indigo-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'>
                <div className='block'>
                  <div className='w-full text-lg font-semibold'>Mosque</div>
                </div>
                <svg xmlns='http://www.w3.org/2000/svg' height='14' width='17.5' viewBox='0 0 640 512'>
                  <path
                    fill='#74777b'
                    d='M400 0c5 0 9.8 2.4 12.8 6.4c34.7 46.3 78.1 74.9 133.5 111.5l0 0 0 0c5.2 3.4 10.5 7 16 10.6c28.9 19.2 45.7 51.7 45.7 86.1c0 28.6-11.3 54.5-29.8 73.4H221.8c-18.4-19-29.8-44.9-29.8-73.4c0-34.4 16.7-66.9 45.7-86.1c5.4-3.6 10.8-7.1 16-10.6l0 0 0 0C309.1 81.3 352.5 52.7 387.2 6.4c3-4 7.8-6.4 12.8-6.4zM288 512V440c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H192c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32H608c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H560V440c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H448V454c0-19-8.4-37-23-49.2L400 384l-25 20.8C360.4 417 352 435 352 454v58H288zM70.4 5.2c5.7-4.3 13.5-4.3 19.2 0l16 12C139.8 42.9 160 83.2 160 126v2H0v-2C0 83.2 20.2 42.9 54.4 17.2l16-12zM0 160H160V296.6c-19.1 11.1-32 31.7-32 55.4V480c0 9.6 2.1 18.6 5.8 26.8c-6.6 3.4-14 5.2-21.8 5.2H48c-26.5 0-48-21.5-48-48V176 160z'
                  />
                </svg>
              </label>
            </li>
          </ul>
        </div>
        <div className='flex flex-row items-center font-bold gap-2'>
          <label className='text-white'>For</label>
          <input
            type='number'
            className='w-14 h-8 text-md rounded pr-2 pl-1'
            placeholder='15'
            min='0'
            onChange={(e)=>setDuration(e.target.value)}
          />
          <span className='text-white'>Min</span>
        </div>
      </div>
      <button
        type='button'
        className={`flex flex-row items-center gap-2 justify-center w-full text-white bg-gray-800 font-bold rounded-lg  text-base px-5 py-4
        ${Disabled ?
        'hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800':''}`}
        disabled={!Disabled}
          onClick={handleStartActivity}>
          Start Activity
          {isLoading ?
            <Reload/>:''}
      </button>
      </div>

      <ProgressLine  LastadditionalPrayers={LastadditionalPrayers&&LastadditionalPrayers} />

</div>
  );
};
