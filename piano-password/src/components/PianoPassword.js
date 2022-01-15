import React, { useRef, useEffect } from "react";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";

const whiteNotes = [40, 42, 44];

function PianoPassword() {
  const allNotesRef = useRef([]);

  const playSound = (key) => {
    // play it here:
    allNotesRef.current[key].currentTime = 0;
    allNotesRef.current[key].play();
  };

  useEffect(() => {}, []);

  return (
    <div className="m-20 relative inline-block p-4 rounded-lg bg-purple-200 select-none">
      {/* <div>Piano component!!</div> */}

      <div className="flex items-center absolute ml-7">
        <BlackKey dataKey="C#" playSound={playSound} />
        <BlackKey dataKey="D#" playSound={playSound} className="mr-12" />
        <BlackKey dataKey="F#" playSound={playSound} />
        <BlackKey dataKey="G#" playSound={playSound} />
        <BlackKey dataKey="A#" playSound={playSound} className="mr-14" />
        <BlackKey dataKey="C#" playSound={playSound} />
        <BlackKey dataKey="D#" playSound={playSound} />
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

      <div
        className="bg-blue-400 rounded px-4 py-2 m-8 inline-block cursor-pointer"
        onClick={playSound}
      >
        PLAY ME
      </div>

      {whiteNotes &&
        whiteNotes.map((key, index) => (
          <audio
            controls
            src={`/sounds/${key}.mp3`}
            ref={(el) => (allNotesRef.current[key] = el)}
          ></audio>
        ))}

      {/* <audio src="sounds/40.mp3"></audio> */}
    </div>
  );
}

export default PianoPassword;
