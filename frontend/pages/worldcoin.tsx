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
        app_id="app_staging_eb4fd40737c8b378b1579903675d3085"
        action="proposal1"
        // signal="user_value"
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
