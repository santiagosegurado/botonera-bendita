import { useState } from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const [isAudioPlay, setIsAudioPlay] = useState(false);

  return (
    <div
      className="button"
      onClick={() => {
        setIsAudioPlay(true);
        onClick();
        setTimeout(() => {
          setIsAudioPlay(false);
        }, 1000);
      }}
    >
      <div className="button__thumbnail">
        <button className="button__button">
          <div className="button__icon">
            {isAudioPlay ? (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                color="currentColor"
              >
                <path d="M17.768 5.36a1 1 0 10-1.536 1.28l.732.879a7 7 0 010 8.962l-.732.879a1 1 0 101.536 1.28l.732-.878a9 9 0 000-11.524l-.732-.878z"></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.418 5.091A1 1 0 0112 6v12a1 1 0 01-1.65.76L7.13 16H4a1 1 0 01-1-1V9a1 1 0 011-1h3.13l3.22-2.76a1 1 0 011.068-.149zM10 8.174L8.15 9.76A1 1 0 017.5 10H5v4h2.5a1 1 0 01.65.24L10 15.827V8.174z"
                ></path>
                <path d="M14.35 7.74a1 1 0 011.41.11l.21.245a6 6 0 010 7.81l-.21.246a1 1 0 01-1.52-1.302l.212-.246a4 4 0 000-5.206l-.211-.246a1 1 0 01.108-1.41z"></path>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="#ffff"
                xmlns="http://www.w3.org/2000/svg"
                color="#ffff"
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
