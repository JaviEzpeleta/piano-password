import React, { useRef, useEffect } from "react";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";

const whiteNotes = [65, 83, 68, 70, 71, 72, 74, 75];
const blackNotes = [
  87, 69, 84, 89, 85,
  //, 73
];

function PianoPassword() {
  const allNotesRef = useRef([]);

  const playSound = (key) => {
    // play it here:
    if (allNotesRef.current[key]) {
      allNotesRef.current[key].currentTime = 0;
      allNotesRef.current[key].play();
    }
  };

  const logKeyDown = (e) => {
    console.log(e.keyCode);
    playSound(e.keyCode);
  };

  useEffect(() => {
    window.addEventListener("keydown", logKeyDown);
  }, []);

  return (
    <div className="m-20 relative inline-block p-4 rounded-lg bg-purple-200 select-none">
      {/* <div>Piano component!!</div> */}

      <div className="flex items-center absolute ml-7">
        {blackNotes &&
          blackNotes.map((key, index) => (
            <BlackKey
              key={index}
              dataKey={key}
              className={`${
                index === 1 ? "mr-12" : index === 4 ? "mr-14" : ""
              }`}
              playSound={() => playSound(key)}
            />
          ))}
      </div>
      <div className="flex items-center">
        {whiteNotes &&
          whiteNotes.map((key, index) => (
            <WhiteKey
              key={index}
              dataKey={key}
              playSound={() => playSound(key)}
            />
          ))}
      </div>

      {whiteNotes &&
        whiteNotes.map((key, index) => (
          <audio
            key={index}
            src={`/sounds/${key}.mp3`}
            ref={(el) => (allNotesRef.current[key] = el)}
          ></audio>
        ))}
      {blackNotes &&
        blackNotes.map((key, index) => (
          <audio
            key={index}
            src={`/sounds/${key}.mp3`}
            ref={(el) => (allNotesRef.current[key] = el)}
          ></audio>
        ))}

      {/* <audio src="sounds/40.mp3"></audio> */}
    </div>
  );
}

export default PianoPassword;
