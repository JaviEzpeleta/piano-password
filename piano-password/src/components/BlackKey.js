import React from "react";

function BlackKey({ className = "" }) {
  return (
    <div
      className={`border border-black rounded-sm shadow-lg m-0.5 h-40 w-12
        bg-gray-700 ${className}`}
    ></div>
  );
}

export default BlackKey;
