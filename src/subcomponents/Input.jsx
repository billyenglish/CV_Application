const Input = ({ type = 'text', className = '', placeholder = "" }) => {

    return (
        <input
            type={type}
            className={className}
            placeholder={placeholder}
        />
    );
};

export default Input;