const Button = ({text}) => {

    return (
        <>
            <button
                className="text-xl font-light hover:cursor-pointer hover:scale-110
                 border-2 border-black w-30 rounded-sm"
            >{text}
            </button>
        </>
    );
};

export default Button;