import './Button.css';

const Button = ({ text, onClick, variant = 'primary' }) => {
  return (
    <button onClick={onClick} className={`custom-button ${variant}`}>
      Request Early Access
    </button>
  );
};

export default Button;