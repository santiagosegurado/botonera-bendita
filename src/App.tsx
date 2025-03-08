import PWABadge from "./PWABadge.tsx";
import "./App.css";
import Button from "./components/button/Button.tsx";
import ButtonContainer from "./components/button-container/ButtonContainer.tsx";
import { botonera } from "./data/botonera.ts";
import { useState } from "react";

function App() {
  const [audioPlay, setAudioPlay] = useState(0);

  const playSound = async (path: string, id: number) => {
    setAudioPlay(id);
    const audio = new Audio(path);
    document.body.appendChild(audio);
    audio.play();
    audio.onended = () => {
      setAudioPlay(0);
    };
    audio.onended = () => {
      setAudioPlay(0);
    };
  };

  const stopSound = () => {
    setAudioPlay(0);
    const audios = document.getElementsByTagName("audio");

    for (const audio of audios) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <>
      <h1>Botonera Bedita TV</h1>
      <div className="container">
        {botonera.map(({ id, name, path }) => (
          <ButtonContainer key={id}>
            <Button
              label={name}
              handlePlay={() => playSound(path, id)}
              handleStop={stopSound}
              isAudioPlay={audioPlay === id}
            />
          </ButtonContainer>
        ))}
      </div>
      <PWABadge />
    </>
  );
}

export default App;
