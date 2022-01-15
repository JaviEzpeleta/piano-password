import React from "react";

function BlackKey({ className = "" }) {
  return (
    <div
      className={`z-10 border border-black rounded-sm shadow-lg m-0.5 h-40 w-12
        bg-gray-700 ${className}
        hover:bg-gray-900 transition-all cursor-pointer
        active:translate-y-1`}
    ></div>
  );
}

export default BlackKey;
