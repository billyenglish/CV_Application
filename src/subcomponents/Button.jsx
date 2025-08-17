const Button = ({ type = 'button', text = 'Button', className = '', onClick = '' }) => {

    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;