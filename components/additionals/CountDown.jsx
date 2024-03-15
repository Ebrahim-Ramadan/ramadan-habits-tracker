import React, { useState, useEffect } from 'react';

export const ProgressLine = ({ additionalPrayers }) => {
  const LastadditionalPrayers = additionalPrayers.length > 0 ? additionalPrayers[additionalPrayers.length - 1]:{}
  const [progress, setProgress] = useState(0);
  const [remainingTime, setRemainingTime] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!LastadditionalPrayers || Object.keys(LastadditionalPrayers).length === 0) {
      // If LastadditionalPrayers is undefined or an empty object, return early
      return;
    }
    const registeredTime = getRegisteredTime(LastadditionalPrayers);

    if (!registeredTime) {
      console.error('Invalid registeredTime:', LastadditionalPrayers.registeredTime);
      return;
    }

    const durationInSeconds = LastadditionalPrayers.duration * 60;
    const endTime = new Date(registeredTime.getTime() + durationInSeconds * 1000);

    const updateProgress = () => {
      const now = new Date();
      const remainingSeconds = Math.max(0, Math.floor((endTime - now) / 1000));
      const progressPercentage = (remainingSeconds / durationInSeconds) * 100;
      setProgress(progressPercentage);

      const minutes = Math.floor(remainingSeconds / 60);
      const seconds = remainingSeconds % 60;
      setRemainingTime(`${minutes}:${seconds.toString().padStart(2, '0')}`);

      if (remainingSeconds === 0) {
        setIsFinished(true);
      } else {
        setIsFinished(false);
      }
    };

    updateProgress(); // Initial call to update progress immediately

    const timer = setInterval(updateProgress, 1000); // Update progress every second

    return () => clearInterval(timer);
  }, [LastadditionalPrayers]);

  const viewBoxWidth = 100;
  const viewBoxHeight = 2;

  const progressWidth = viewBoxWidth * (progress / 100);
  const progressBarColor = isFinished ? 'red' : '#4CAF50'; // Red if finished, green otherwise

  return (
    <div className='flex flex-col mt-4 gap-2 mb-4'>
      <p className='text-white font-bold '>{LastadditionalPrayers['NewPrayer']}</p>
      <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className='rounded-lg'>
        <rect
          x="0"
          y="0"
          width={viewBoxWidth}
          height={viewBoxHeight}
          fill="#d3d3d3"
        />
        <rect
          x="0"
          y="0"
          width={progressWidth}
          height={viewBoxHeight}
          fill={progressBarColor}
        />
      </svg>
      <div className='flex flex-row justify-between'>
        {LastadditionalPrayers['selectedOption'] ==='Home'? (
          <svg xmlns='http://www.w3.org/2000/svg' height='14' width='15.75' viewBox='0 0 576 512'>
          <path
            fill='#a0aaba'
            d='M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z'
          />
        </svg>
        ) : (
          <svg xmlns='http://www.w3.org/2000/svg' height='14' width='17.5' viewBox='0 0 640 512'>
          <path
            fill='#74777b'
            d='M400 0c5 0 9.8 2.4 12.8 6.4c34.7 46.3 78.1 74.9 133.5 111.5l0 0 0 0c5.2 3.4 10.5 7 16 10.6c28.9 19.2 45.7 51.7 45.7 86.1c0 28.6-11.3 54.5-29.8 73.4H221.8c-18.4-19-29.8-44.9-29.8-73.4c0-34.4 16.7-66.9 45.7-86.1c5.4-3.6 10.8-7.1 16-10.6l0 0 0 0C309.1 81.3 352.5 52.7 387.2 6.4c3-4 7.8-6.4 12.8-6.4zM288 512V440c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H192c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32H608c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H560V440c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H448V454c0-19-8.4-37-23-49.2L400 384l-25 20.8C360.4 417 352 435 352 454v58H288zM70.4 5.2c5.7-4.3 13.5-4.3 19.2 0l16 12C139.8 42.9 160 83.2 160 126v2H0v-2C0 83.2 20.2 42.9 54.4 17.2l16-12zM0 160H160V296.6c-19.1 11.1-32 31.7-32 55.4V480c0 9.6 2.1 18.6 5.8 26.8c-6.6 3.4-14 5.2-21.8 5.2H48c-26.5 0-48-21.5-48-48V176 160z'
          />
        </svg> 
        )}
        <p className='text-white'>{!isFinished ? '-' + remainingTime :
      <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#58dfb2" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>}</p>
      </div>
    </div>
  );
};

const getRegisteredTime = (LastadditionalPrayers) => {
  if (!LastadditionalPrayers || !LastadditionalPrayers.registeredTime) {
    return null;
  }

  const { registeredTime } = LastadditionalPrayers;

  if (registeredTime instanceof Date) {
    return registeredTime;
  } else if (typeof registeredTime === 'object' && registeredTime.seconds && registeredTime.nanoseconds) {
    return new Date(
      registeredTime.seconds * 1000 + registeredTime.nanoseconds / 1000000
    );
  } else {
    return new Date(registeredTime);
  }
};

export default ProgressLine;