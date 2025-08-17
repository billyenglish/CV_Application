const TextArea = ({ className = '', placeholder = 'placeholder'}) => {

    return (
        <textarea
            className={className}
            placeholder={placeholder}
        >
        </textarea>
    );
};

export default TextArea;