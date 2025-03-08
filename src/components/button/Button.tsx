import "./Button.css";

interface ButtonProps {
  label: string;
  handlePlay: () => void;
  handleStop: () => void;
  isAudioPlay: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, handlePlay, isAudioPlay, handleStop }) => {
  return (
    <div className="button">
      <div className="button__thumbnail">
        <button className="button__button">
          <div className="button__icon">
            {isAudioPlay ? (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
                onClick={handleStop}
              >
                <rect
                  x="7"
                  y="19"
                  width="14"
                  height="2"
                  rx="1"
                  transform="rotate(-90 7 19)"
                ></rect>
                <rect
                  x="15"
                  y="19"
                  width="14"
                  height="2"
                  rx="1"
                  transform="rotate(-90 15 19)"
                ></rect>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="#ffff"
                xmlns="http://www.w3.org/2000/svg"
                color="#ffff"
                onClick={handlePlay}
              >
                <path d="M18.495 10.997L7.49 4.834A1 1 0 006 5.706v12.768a1 1 0 001.514.857l11.007-6.604a1 1 0 00-.026-1.73z"></path>
              </svg>
            )}
          </div>
        </button>
      </div>
      {label}
    </div>
  );
};

export default Button;
