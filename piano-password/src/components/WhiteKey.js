import React from "react";

function WhiteKey({ dataKey = ".", playSound, name }) {
  return (
    <div
      className="border bg-gray-100 border-black rounded-sm shadow-lg m-0.5 h-60 w-12
    hover:bg-white transition-all cursor-pointer
        active:translate-y-1 flex flex-col-reverse items-center"
      onClick={playSound}
    >
      {name}
    </div>
  );
}

export default WhiteKey;
