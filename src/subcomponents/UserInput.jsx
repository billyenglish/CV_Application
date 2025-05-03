const UserInput = (props) => {

    return (
        <>
            <input
                type={props.text}
                placeholder={props.placeholder}
                className={props.className}
            />
        </>
    );
};

export default UserInput;