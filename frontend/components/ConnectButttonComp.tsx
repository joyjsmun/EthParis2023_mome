import {
  ConnectButton,
  useConnectKit,
} from "@particle-network/connect-react-ui";
import "@particle-network/connect-react-ui/dist/index.css";
import { useEffect } from "react";

export const ConnectButtonComp = () => {
  const getUserInfo = async () => {
    try {
      const connectKit = useConnectKit();
      const userInfo = await connectKit.particle.auth.userInfo();
      console.log("userInfo:", userInfo);
    } catch (error) {
      console.error("Error retrieving user information:", error);
    }
  };

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openConnectModal,
        openChainModal,
        accountLoading,
      }) => {
        useEffect(() => {
          if (account) {
            getUserInfo();
          }
        }, [account]);

        return (
          <div className="w-full">
            {account ? (
              <div className="w-full">
                {/* <div>
                  <button onClick={openChainModal}>Switch Network</button>
                </div> */}
                <div className="w-[47%]  border-[#ffffff] font-bold flex flex-col justify-center items-center">
                  <div className="w-full">
                    {/* <div className="flex w-full overflow-hidden font-bold">
                    {account}
                  </div> */}
                    <button
                      onClick={openAccountModal}
                      className="w-52 h-11 border-[0.5px] border-white rounded-3xl bg-transparent"
                    >
                      ACCOUNT INFO
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <button
                    className="w-28 h-11 border-[0.5px] border-white rounded-3xl bg-transparent"
                    onClick={openConnectModal}
                  >
                    LOGIN
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
