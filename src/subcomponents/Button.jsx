const Button = ({type, text, className = "text-xl font-light hover:cursor-pointer hover:scale-110 border-2 border-black w-30 rounded-sm"}) => {

    return (
        <>
            <button
                type={type}
                className={className}
            >{text}
            </button>
        </>
    );
};

export default Button;