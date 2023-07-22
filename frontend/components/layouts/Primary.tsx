import Main from "./Main";
import PreviousCapsule from "./PreviousCapsule";
import TodayFeature from "./TodayFeature";

export default function Primary() {
  return (
    <div className="grid grid-cols-5 text-white">
      <div className="col-span-3">
        <Main />
      </div>
      <div className="col-span-2 relative">
        <TodayFeature />
        <PreviousCapsule />
      </div>
    </div>
  );
}
