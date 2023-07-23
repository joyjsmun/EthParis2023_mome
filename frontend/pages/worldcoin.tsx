import { IDKitWidget } from "@worldcoin/idkit";
import type { ISuccessResult } from "@worldcoin/idkit";
import { useRouter } from "next/router";

export default function Worldcoin() {
  const router = useRouter();
  const onSuccess = (result: ISuccessResult) => {
    console.log("success", result);
  };

  return (
    <div className="">
      <IDKitWidget
        app_id="app_GBkZ1KlVUdFTjeMXKlVUdFT" // obtained from the Developer Portal
        action="vote_1" // this is your action name from the Developer Portal
        signal="user_value" // any arbitrary value the user is committing to, e.g. a vote
        onSuccess={onSuccess}
        credential_types={["orb", "phone"]} // the credentials you want to accept
        enableTelemetry
      >
        {({ open }) => (
          <button className="text-lg" onClick={open}>
            World ID
          </button>
        )}
      </IDKitWidget>
    </div>
  );
}
