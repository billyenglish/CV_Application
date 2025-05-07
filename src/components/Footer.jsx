const currentYear = () => {
    let currentYear = new Date();
    return currentYear.getFullYear();
}

const Footer = () => {
    return (
        <footer className="flex justify-center fixed bottom-0 height-5 min-w-full pt-5 pb-5 z-20">
            <p className="text-md font-normal">&copy; {currentYear()} Copyright By Billy English</p>
        </footer>
    );
};

export default Footer;