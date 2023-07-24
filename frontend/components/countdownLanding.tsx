// const Countdown = () => {
//   return (
//     <div className="flex items-center justify-center text-9xl text-center text-white">
//       00h:11m:22s
//     </div>
//   );
// };

// export default Countdown;
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// const moveTopMoments = (e) => {
//   e.preventDefault();
//   router.push("/topMoments");
// };

const PersonalCount = () => {
  const [countdown, setCountdown] = useState("");
  const [showLink, setShowLink] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (countdown === "00:00:00") {
      setShowLink(true);
    }
  }, [countdown]);

  useEffect(() => {
    const updateCountdown = () => {
      // Set the current date and time
      const now = new Date().getTime();

      // Calculate the next countdown date as 24 hours from the current time
      const nextCountDownDate = now + 15 * 43 * 10 * 1000;

      // Update the count down every 1 second
      const interval = setInterval(() => {
        // Get the current date and time
        const currentTime = new Date().getTime();

        // Find the distance between the current time and the next countdown date
        const distance = nextCountDownDate - currentTime;

        // Time calculations for hours, minutes, and seconds
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Format the countdown string
        const formattedHours = String(hours).padStart(2, "0");
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(seconds).padStart(2, "0");
        const countdownString = `${formattedHours}h ${formattedMinutes}m ${formattedSeconds}s`;

        // Update the state with the countdown string
        setCountdown(countdownString);

        // If the count down is finished, clear the interval
        if (distance < 0) {
          clearInterval(interval);
        }
      }, 1000);

      // Clean up the interval on component unmount
      return () => clearInterval(interval);
    };

    // Initial countdown update
    updateCountdown();
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div>
        {" "}
        <div className=" text-9xl text-center text-black w-[50vw]">
          {countdown}
        </div>
        <div className="pl-20 text-black font-bold  text-2xl">
          Before the day ends
        </div>
      </div>
    </div>
  );
};

export default PersonalCount;
