import "./ButtonContainer.css";

interface ButtonContainerProps {
  children: React.ReactNode;
}

const ButtonContainer = ({ children }: ButtonContainerProps) => {
  return <div className="button__container">{children}</div>;
};

export default ButtonContainer;
