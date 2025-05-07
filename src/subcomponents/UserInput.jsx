const UserInput = ({ type = "text", placeholder = "Full Name", className }) => {

    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                className={className}
            />
        </>
    );
};

export default UserInput;