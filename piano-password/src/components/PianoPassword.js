import React, { useRef } from "react";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";

function PianoPassword() {
  const myAudio = useRef();

  const playSound = () => {
    // play it here:

    myAudio.current.currentTime = 0;
    myAudio.current.play();
  };

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

      <div
        className="bg-blue-400 rounded px-4 py-2 m-8 inline-block cursor-pointer"
        onClick={playSound}
      >
        PLAY ME
      </div>

      <audio controls src="/sounds/40.mp3" ref={myAudio}></audio>
      {/* <audio src="sounds/40.mp3"></audio> */}
    </div>
  );
}

export default PianoPassword;
