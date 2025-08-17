const Button = ({ className = '', text = 'Started' }) => {

    return (
        <button className={className}>
            {text}
        </button>
    );
};

export default Button;