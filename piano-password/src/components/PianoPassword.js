import React from "react";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";

function PianoPassword() {
  return (
    <div className="m-20 relative inline-block p-4 rounded-lg bg-gray-200">
      {/* <div>Piano component!!</div> */}

      <div className="flex items-center absolute ml-7">
        <BlackKey dataKey="C#" />
        <BlackKey dataKey="D#" className="mr-12" />
        <BlackKey dataKey="F#" />
        <BlackKey dataKey="G#" />
        <BlackKey dataKey="A#" className="mr-14" />
        <BlackKey dataKey="C#" />
        <BlackKey dataKey="D#" />
      </div>
      <div className="flex items-center">
        <WhiteKey dataKey="C" />
        <WhiteKey dataKey="D" />
        <WhiteKey dataKey="E" />
        <WhiteKey dataKey="F" />
        <WhiteKey dataKey="G" />
        <WhiteKey dataKey="A" />
        <WhiteKey dataKey="B" />
        <WhiteKey dataKey="C" />
        <WhiteKey dataKey="D" />
        <WhiteKey dataKey="E" />
      </div>
    </div>
  );
}

export default PianoPassword;
