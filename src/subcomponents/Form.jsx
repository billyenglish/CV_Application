const Form = ({ input = false }) => {

    return (
        <form>
            <form>
                {input ? (
                    <textarea />
                ) : (
                    <input />
                )}
            </form>
        </form>
    );
};

export default Form;