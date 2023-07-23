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
      const nextCountDownDate = now + 1 * 1 * 7 * 1000;

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
        const countdownString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

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
    <div>
      {showLink ? (
        <div className="w-[100vw]">
          {/* <div className="flex items-center justify-center text-9xl text-center text-white ">
            Wooooooo Hoooo!!
          </div> */}
          <div className=" flex flex-col items-center justify-center text-center gap-4">
            <div className="text-8xl text-white  font-bold bg-[#C26217CC] w-[100vw] p-10 ">
              The New Capsule Is Ready!
            </div>
            <div className="flex flex-col gap-3">
              <Link
                className="text-4xl text-white  text-center "
                href="https://goerli.etherscan.io/address/0xE255e2404f50a2878C6587271698e81fd30e9D13#nfttransfers"
              >
                Today Capusle Link →
              </Link>

              <Link
                className="text-4xl text-white text-center "
                href="https://automation.chain.link/goerli/538007469566721565900532184373459427909814676301138395077664879679194196737"
              >
                Today NFT Automation Chainlink Contract Link →
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center text-9xl text-center text-white bg-[#101B20CC] w-[100vw] p-5">
          {countdown}
        </div>
      )}
    </div>
  );
};

export default PersonalCount;
