const Button = ({ text, onClick }) => {
  return (
    <form>
      <button onClick={onClick} className='outline'>{text}
    </button>
    </form>
    
  );
};

export default Button;
