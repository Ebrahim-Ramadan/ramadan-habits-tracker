'use client'

import { useState, Suspense, useEffect } from 'react';
import {Reload} from '@/components/globals/Reload';
import { StartNewPrayer } from './StartNewPrayer';
import Loading from '@/app/loading';
import bg from '@/assets/bg.svg'

const activities = [
  "Reading and Reflecting on the Quran",
  "Charity (Sadaqah)",
  "Seeking Forgiveness (Tawbah)",
  "Self-Reflection and Self-Improvement",
  "Gratitude (Shukr)",
  "Kindness and Compassion",
  "Avoiding Gossip and Backbiting",
  "Connecting with Family and Neighbors",
  "Praying for Others (Dua)"
];

const ActivityPicker = () => {
  const [activity, setActivity] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getRandomActivity = () => {
    setIsLoading(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * activities.length);
      setActivity(activities[randomIndex]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className='flex flex-row justify-around md:w-1/2 items-center w-full'>
      <h1 className="text-2xl font-bold mb-4 text-white">Activity Picker</h1>
      <div class="relative flex flex-col items-center group">
  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
  </svg>

  <div class="absolute top-full rounded-lg flex flex-col items-center hidden mt-4 rounded-lg group-hover:flex">
    <div class="w-3 h-3 -mb-2 rotate-45 bg-black"></div>
    <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">randomized activity to practice, keep it up with us</span>
  </div>
</div>

      </div>
      <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col justify-center w-full md:w-1/2 md:h-32">
        <p className="md:text-2xl text-lg font-bold text-center leading-6">
          {isLoading ? (
            <Reload />
          ) : activity || (
            <p className="text-lg font-bold">Click the button to get a random activity</p>
          )}
        </p>
        
        <button
          onClick={getRandomActivity}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl mt-4 flex flex-row gap-2 justify-center items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
            <path
              fill="#ffffff"
              d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"
            />
          </svg>
          Get Random Activity
        </button>
      </div>
      <Suspense fallback={<Loading />}>
        <StartNewPrayer NewPrayer={activity} />
      </Suspense>
    </div>
  );
};

export default ActivityPicker;