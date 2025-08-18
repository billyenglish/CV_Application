const Button = ({ className = '', onClick, text = 'Started' }) => {

    return (
        <button
            className={className}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;