import { useState, useEffect } from 'react';

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]); // Add targetDate as a dependency

  return (
    <div className="bg-black py-5 font-mono">
      <h1 className="text-center font-semibold md:text-5xl text-xl text-white py-5">
        {timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
          ? 'Countdown Expired'
          : 'We are coming in'}
      </h1>
      {timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0 ? null : (
        <div className="md:flex my-5 justify-center grid grid-cols-2 gap-5 overflow-auto items-center bg-black md:rounded-b-lg  mx-auto px-5">
          <div className="flex flex-col py-5 px-7 bg-neutral rounded-box text-xl font-semibold text-neutral-content">
            <div className="text-center">
              <span>{timeLeft.days}</span>
              <p>Days</p>
            </div>
          </div>

          <div className="flex flex-col py-5 px-7 bg-neutral rounded-box text-xl font-semibold text-neutral-content">
            <div className="text-center">
              <span>{timeLeft.hours}</span>
              <p>Hours</p>
            </div>
          </div>

          <div className="flex flex-col py-5 px-7 bg-neutral rounded-box text-xl font-semibold text-neutral-content">
            <div className="text-center">
              <span>{timeLeft.minutes}</span>
              <p>Minutes</p>
            </div>
          </div>

          <div className="flex flex-col py-5 px-7 bg-neutral rounded-box text-xl font-semibold text-neutral-content">
            <div className="text-center">
              <span>{timeLeft.seconds}</span>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Countdown;
