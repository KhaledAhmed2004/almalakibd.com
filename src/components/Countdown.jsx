import React, { useState, useEffect } from 'react';

function Countdown() {
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 4);

  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const timeDifference = targetDate - currentTime;

    if (timeDifference <= 0) {
      return {
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    return { months: 4, days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(newTimeRemaining);

      if (
        newTimeRemaining.months === 0 &&
        newTimeRemaining.days === 0 &&
        newTimeRemaining.hours === 0 &&
        newTimeRemaining.minutes === 0 &&
        newTimeRemaining.seconds === 0
      ) {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div className='bg-black'>
      <h1 className='text-center font-semibold md:text-5xl text-white py-5'>
        {timeRemaining.months === 0 &&
        timeRemaining.days === 0 &&
        timeRemaining.hours === 0 &&
        timeRemaining.minutes === 0 &&
        timeRemaining.seconds === 0
          ? 'Countdown Expired'
          : 'We Will Comming Soon...'}
      </h1>
      {timeRemaining.months === 0 &&
      timeRemaining.days === 0 &&
      timeRemaining.hours === 0 &&
      timeRemaining.minutes === 0 &&
      timeRemaining.seconds === 0 ? null : (
        <div className='flex justify-between items-center bg-black md:rounded-b-lg md:w-2/3 mx-auto'>
          <div className='bg-black py-2 px-3 text-white font-bold text-3xl'>
            <span>Months: {timeRemaining.months}</span>
          </div>
          {/* <div className='py-2 px-3 text-white font-bold md:text-3xl'>
            <span>Days: {timeRemaining.days}</span>
          </div> */}
          <div className='py-2 px-3 text-white font-bold md:text-3xl'>
            <span>Hours: {timeRemaining.hours}</span>
          </div>
          <div className='py-2 px-3 text-white font-bold md:text-3xl'>
            <span>Minutes: {timeRemaining.minutes}</span>
          </div>
          {/* <div className='py-2 px-3 text-white font-bold md:text-3xl'>
            <span>Seconds: {timeRemaining.seconds}</span>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default Countdown;
