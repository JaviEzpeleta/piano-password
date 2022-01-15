import React, { useRef, useEffect, useState } from "react";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";
import { useSelector, useDispatch } from "react-redux";

// const whiteNotes = [65, 83, 68, 70, 71, 72, 74, 75];
const whiteNotes = [
  { keyCode: 65, note: "A" },
  { keyCode: 83, note: "S" },
  { keyCode: 68, note: "D" },
  { keyCode: 70, note: "F" },
  { keyCode: 71, note: "G" },
  { keyCode: 72, note: "H" },
  { keyCode: 74, note: "J" },
  { keyCode: 75, note: "K" },
];
// const blackNotes = [
//   87, 69, 84, 89, 85,
//   //, 73
// ];
const blackNotes = [
  { keyCode: 87, note: "W" },
  { keyCode: 69, note: "E" },
  { keyCode: 84, note: "T" },
  { keyCode: 89, note: "Y" },
  { keyCode: 85, note: "U" },
];

const secretMelody = "A,A,S,A,F,D";

function PianoPassword() {
  // useState hasFoundTheMelody
  const [hasFoundTheMelody, setHasFoundTheMelody] = useState(false);

  const dispatch = useDispatch();
  const melody = useSelector((state) => state.melody);

  const allNotesRef = useRef([]);

  const playSound = (key) => {
    // play it here:
    if (allNotesRef.current[key]) {
      allNotesRef.current[key].currentTime = 0;
      allNotesRef.current[key].play();
    }
  };

  const saveMelody = (note) => {
    dispatch({
      type: "SET_MELODY",
      value: note,
    });
  };

  const logKeyDown = (e) => {
    // console.log(e);
    // console.log(e.keyCode);
    playSound(e.keyCode);
    saveMelody(e.key.toUpperCase());
  };

  useEffect(() => {
    window.addEventListener("keydown", logKeyDown);
  }, []);

  const melodyMatchesSecretPassword = () => {
    return melody.includes(secretMelody);
  };

  useEffect(() => {
    console.log("Melody changed!!!");
    console.log(melody);

    if (melodyMatchesSecretPassword()) {
      setHasFoundTheMelody(true);
    }
  }, [melody]);

  // if (hasFoundTheMelody) {
  //   return (
  //     <div className="flex flex-col items-center justify-center h-screen">
  //       <h1 className="text-4xl text-green-500">
  //         Congratulations! You found the secret password!
  //       </h1>
  //     </div>
  //   );
  // }

  return (
    <div className="m-20 relative inline-block p-4 rounded-lg bg-purple-200 select-none">
      {/* <div>Piano component!!</div> */}

      {hasFoundTheMelody && (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl text-green-500">
            Congratulations! You found the secret password!
          </h1>
        </div>
      )}
      {!hasFoundTheMelody && (
        <>
          <div className="flex items-center absolute ml-7">
            {blackNotes &&
              blackNotes.map(({ keyCode, note }, index) => (
                <BlackKey
                  key={index}
                  dataKey={keyCode}
                  name={note}
                  className={`${
                    index === 1 ? "mr-12" : index === 4 ? "mr-14" : ""
                  }`}
                  playSound={() => {
                    playSound(keyCode);
                    saveMelody(note);
                  }}
                />
              ))}
          </div>
          <div className="flex items-center">
            {whiteNotes &&
              whiteNotes.map(({ keyCode, note }, index) => (
                <WhiteKey
                  key={index}
                  name={note}
                  dataKey={keyCode}
                  playSound={() => {
                    playSound(keyCode);
                    saveMelody(note);
                  }}
                />
              ))}
          </div>
        </>
      )}

      {/* <div className="m-4 p-4 bg-blue-400 text-center">{melody}</div> */}

      {whiteNotes &&
        whiteNotes.map(({ keyCode }, index) => (
          <audio
            key={index}
            src={`/sounds/${keyCode}.mp3`}
            ref={(el) => (allNotesRef.current[keyCode] = el)}
          ></audio>
        ))}
      {blackNotes &&
        blackNotes.map(({ keyCode }, index) => (
          <audio
            key={index}
            src={`/sounds/${keyCode}.mp3`}
            ref={(el) => (allNotesRef.current[keyCode] = el)}
          ></audio>
        ))}

      {/* <audio src="sounds/40.mp3"></audio> */}
    </div>
  );
}

export default PianoPassword;
