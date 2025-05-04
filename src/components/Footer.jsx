const currentYear = () => {
    let currentYear = new Date();
    return currentYear.getFullYear();
}

const Footer = () => {
    return (
        <footer className="h-[5vh] border-2 border-black flex justify-center items-center">
            <p className="text-md">&copy; {currentYear()} Copyright By Billy English</p>
        </footer>
    );
};

export default Footer;