const UserInput = (props) => {

    return (
        <>
            <input
                type={props.text}
                placeholder={props.placeholder}
                className="border-2 border-black h-12 w-72"
            />
        </>
    );
};

export default UserInput;