import React from "react";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";

function PianoPassword() {
  return (
    <div className="m-20 relative inline-block p-4 rounded-lg bg-gray-200">
      {/* <div>Piano component!!</div> */}

      <div className="flex items-center absolute ml-7">
        <BlackKey />
        <BlackKey className="mr-12" />
        <BlackKey />
        <BlackKey />
        <BlackKey className="mr-14" />
        <BlackKey />
        <BlackKey />
      </div>
      <div className="flex items-center mt-20">
        <WhiteKey />
        <WhiteKey />
        <WhiteKey />
        <WhiteKey />
        <WhiteKey />
        <WhiteKey />
        <WhiteKey />
        <WhiteKey />
        <WhiteKey />
        <WhiteKey />
      </div>
    </div>
  );
}

export default PianoPassword;
