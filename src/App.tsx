import PWABadge from "./PWABadge.tsx";
import "./App.css";
import Button from "./components/button/Button.tsx";
import ButtonContainer from "./components/button-container/ButtonContainer.tsx";

function App() {
  

  const playSound = () => {
    const audio = new Audio("/impacto.mp3");
    audio.play();
  };

  return (
    <>
      <div className="container">
        <ButtonContainer>
          <Button
            label="Baaassta"
            onClick={playSound}
          />
        </ButtonContainer>
      </div>
      <PWABadge />
    </>
  );
}

export default App;
