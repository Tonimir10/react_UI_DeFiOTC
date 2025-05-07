import './Button.css';

const Button = ({ text, onClick, variant = 'primary' }) => {
  return (
    <>
      <button onClick={onClick} className={`custom-button ${variant}`}>
        {text}
      </button>
    </>
  );
};

export default Button;
